<script setup lang="ts">
import { ref, computed } from 'vue';
import { Sun, Moon, User, Users, Building2, ArrowRight, Info } from 'lucide-vue-next';
import SkinSwitcher from './SkinSwitcher.vue';
import VueButton from './components/ag/Button/vue/VueButton.vue';
import VueProgress from './components/ag/Progress/vue/VueProgress.vue';
import VueAlert from './components/ag/Alert/vue/VueAlert.vue';
import VueSelectionCardGroup from './components/ag/SelectionCardGroup/vue/VueSelectionCardGroup.vue';
import VueSelectionCard from './components/ag/SelectionCard/vue/VueSelectionCard.vue';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------
const TOTAL_POSITIONS = 6;
const TOTAL_QUESTION_STEPS = 5;
const INTERSTITIAL_POSITION = 3;

const QUESTION_POSITIONS = [1, 2, 4, 5, 6];
const getQuestionStepNumber = (position: number): number | null => {
  const idx = QUESTION_POSITIONS.indexOf(position);
  return idx >= 0 ? idx + 1 : null;
};

type ViewType = 'path' | 'interests' | 'interstitial' | 'review';
const getViewType = (position: number): ViewType => {
  if (position === 1) return 'path';
  if (position === INTERSTITIAL_POSITION) return 'interstitial';
  if (position === TOTAL_POSITIONS) return 'review';
  return 'interests';
};

const INTEREST_CATEGORIES = [
  {
    id: 'frontend',
    position: 2,
    title: 'Front-end Frameworks',
    question: 'Which front-end technologies interest you?',
    subtitle: 'Select all that apply.',
    items: [
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue' },
      { value: 'svelte', label: 'Svelte' },
      { value: 'web-components', label: 'Web Components' },
      { value: 'mobile-development', label: 'Mobile Development' },
      { value: 'javascript', label: 'JavaScript' },
    ],
  },
  {
    id: 'design',
    position: 4,
    title: 'Design & Styling',
    question: 'What design topics appeal to you?',
    subtitle: 'Select all that apply.',
    items: [
      { value: 'design', label: 'Design' },
      { value: 'figma', label: 'Figma' },
      { value: 'css-architecture', label: 'CSS Architecture' },
      { value: 'responsive-design', label: 'Responsive Design' },
      { value: 'theming', label: 'Theming' },
      { value: 'design-systems', label: 'Design Systems' },
    ],
  },
  {
    id: 'engineering',
    position: 5,
    title: 'Engineering & Quality',
    question: 'Which engineering practices do you care about?',
    subtitle: 'Select all that apply.',
    items: [
      { value: 'testing', label: 'Testing' },
      { value: 'performance', label: 'Performance' },
      { value: 'dev-tools', label: 'Dev Tools' },
      { value: 'web-standards', label: 'Web Standards' },
      { value: 'accessibility', label: 'Accessibility' },
      { value: 'component-libraries', label: 'Component Libraries' },
    ],
  },
];

const PROGRESS_RIGHT_LABEL: Record<number, string> = {
  1: 'Choose Your Path',
  2: 'Front-end Frameworks',
  3: '',
  4: 'Design & Styling',
  5: 'Engineering & Quality',
  6: 'Review & Start',
};

const getCategoryValues = (categoryId: string): string[] => {
  const cat = INTEREST_CATEGORIES.find(c => c.id === categoryId);
  return cat ? cat.items.map(item => item.value) : [];
};

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------
const currentPosition = ref<number>(1);
const selectedPath = ref<string | null>(null);
const selectedInterests = ref<string[]>([]);
const isDark = ref(localStorage.getItem('ag-theme') === 'dark');

// ---------------------------------------------------------------------------
// Computed
// ---------------------------------------------------------------------------
const progressValue = computed(() => Math.round((currentPosition.value / TOTAL_POSITIONS) * 100));

const questionStepNum = computed(() => getQuestionStepNumber(currentPosition.value));

const progressLeftLabel = computed(() =>
  questionStepNum.value !== null
    ? `Step ${questionStepNum.value} of ${TOTAL_QUESTION_STEPS}`
    : 'Halfway there!'
);

const progressRightLabel = computed(() => PROGRESS_RIGHT_LABEL[currentPosition.value] || '');

const currentCategory = computed(() =>
  INTEREST_CATEGORIES.find(c => c.position === currentPosition.value) ?? null
);

const viewType = computed(() => getViewType(currentPosition.value));

const canProceed = computed(() => {
  if (currentPosition.value === 1) return selectedPath.value !== null;
  if (currentPosition.value === INTERSTITIAL_POSITION) return true;
  // Interest steps (2, 4, 5): require at least 1 selection in this category
  const cat = currentCategory.value;
  if (cat) {
    const catValues = getCategoryValues(cat.id);
    return selectedInterests.value.some(v => catValues.includes(v));
  }
  return true; // review step
});

const showStandardNav = computed(() => currentPosition.value !== INTERSTITIAL_POSITION);
const showBottomBack = computed(() => currentPosition.value > 1 && currentPosition.value !== INTERSTITIAL_POSITION);

const selectedPathLabel = computed(() => {
  if (selectedPath.value === 'personal') return 'Personal Projects';
  if (selectedPath.value === 'team') return 'Team Development';
  if (selectedPath.value === 'enterprise') return 'Enterprise';
  return '—';
});

// ---------------------------------------------------------------------------
// Handlers
// ---------------------------------------------------------------------------
const toggleDark = () => {
  const next = !isDark.value;
  isDark.value = next;
  document.documentElement.setAttribute('data-theme', next ? 'dark' : '');
  localStorage.setItem('ag-theme', next ? 'dark' : '');
};

const handleNext = () => {
  if (currentPosition.value < TOTAL_POSITIONS) currentPosition.value++;
};

const handleBack = () => {
  if (currentPosition.value > 1) currentPosition.value--;
};

// Vue wrappers emit the detail object directly (not the full CustomEvent)
const handlePathChange = (detail: { selectedValues: string[] }) => {
  selectedPath.value = detail?.selectedValues?.[0] || null;
};

const handleInterestChange = (detail: { selectedValues: string[] }, categoryId: string) => {
  const newValues: string[] = detail?.selectedValues ?? [];
  const categoryValues = getCategoryValues(categoryId);
  const otherInterests = selectedInterests.value.filter(v => !categoryValues.includes(v));
  selectedInterests.value = [...otherInterests, ...newValues];
};
</script>

<template>
  <div class="page">
    <!-- Dark mode header toggle -->
    <header class="wizard-header">
      <button class="theme-toggle" @click="toggleDark" aria-label="Toggle dark mode">
        <Sun v-if="isDark" :size="18" />
        <Moon v-else :size="18" />
      </button>
    </header>

    <div class="wizard-container">
      <!-- Progress indicator -->
      <div class="wizard-progress">
        <div class="wizard-progress-label">
          <span>{{ progressLeftLabel }}</span>
          <span v-if="progressRightLabel">{{ progressRightLabel }}</span>
        </div>
        <VueProgress :value="progressValue" />
      </div>

      <!-- Step 1: Choose Your Path -->
      <div v-if="viewType === 'path'">
        <h2 class="step-title">What brings you here today?</h2>
        <p class="step-subtitle">Choose the option that best describes how you'll use AgnosticUI</p>
        <div class="path-cards-wrapper">
          <VueSelectionCardGroup
            type="radio"
            name="path"
            legend="Choose your path"
            :legend-hidden="true"
            @selection-change="handlePathChange"
          >
            <VueSelectionCard value="personal" label="Personal Projects">
              <div class="path-card-content">
                <div class="path-icon"><User :size="48" /></div>
                <h3>Personal Projects</h3>
                <p>Building side projects, portfolios, or learning</p>
              </div>
            </VueSelectionCard>
            <VueSelectionCard value="team" label="Team Development">
              <div class="path-card-content">
                <div class="path-icon"><Users :size="48" /></div>
                <h3>Team Development</h3>
                <p>Collaborating with a small team on shared projects</p>
              </div>
            </VueSelectionCard>
            <VueSelectionCard value="enterprise" label="Enterprise">
              <div class="path-card-content">
                <div class="path-icon"><Building2 :size="48" /></div>
                <h3>Enterprise</h3>
                <p>Large-scale applications with multiple teams</p>
              </div>
            </VueSelectionCard>
          </VueSelectionCardGroup>
        </div>
      </div>

      <!-- Positions 2, 4, 5: Interest Category Slides -->
      <div v-else-if="viewType === 'interests' && currentCategory">
        <h2 class="step-title">{{ currentCategory.question }}</h2>
        <p class="step-subtitle">{{ currentCategory.subtitle }}</p>
        <div class="interests-wrapper">
          <VueSelectionCardGroup
            type="checkbox"
            :name="`interests-${currentCategory.id}`"
            :legend="currentCategory.title"
            :legend-hidden="true"
            @selection-change="(detail) => handleInterestChange(detail, currentCategory!.id)"
          >
            <VueSelectionCard
              v-for="item in currentCategory.items"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            >
              {{ item.label }}
            </VueSelectionCard>
          </VueSelectionCardGroup>
        </div>
      </div>

      <!-- Position 3: Mini Confirmation Interstitial -->
      <div v-else-if="viewType === 'interstitial'" class="interstitial">
        <div class="interstitial-back">
          <VueButton :bordered="true" shape="rounded" @click="handleBack">← Back</VueButton>
        </div>
        <h2 class="step-title">Those are some great interests!</h2>
        <p class="step-subtitle">Just a few more questions left...</p>
        <div class="interstitial-illustration">
          <div class="interstitial-avatar">
            <User :size="48" />
          </div>
        </div>
        <p class="interstitial-body">
          These interests will help us set up the app in a way that's customized
          specifically to you. You can change them at any time in your Settings.
          <Info :size="14" style="vertical-align: middle; margin-left: 4px" />
        </p>
        <VueButton variant="primary" shape="rounded" :full-width="true" @click="handleNext">Next</VueButton>
      </div>

      <!-- Position 6: Review & Start -->
      <div v-else-if="viewType === 'review'">
        <h2 class="step-title">You're all set!</h2>
        <div class="review-section">
          <div class="review-block">
            <p class="review-label">Your Path</p>
            <p class="review-value">{{ selectedPathLabel }}</p>
          </div>
          <div class="review-block">
            <p class="review-label">Your Interests</p>
            <p class="review-value">
              {{ selectedInterests.length > 0 ? selectedInterests.join(', ') : 'None selected' }}
            </p>
          </div>
        </div>
        <VueAlert variant="info">
          <strong>What's next?</strong>
          <p>
            Based on your selections, we've customized your dashboard with relevant
            documentation, examples, and starter templates. You can always update
            your preferences later in settings.
          </p>
        </VueAlert>
      </div>

      <!-- Standard Navigation Row (hidden on interstitial) -->
      <div
        v-if="showStandardNav"
        :class="['nav-buttons', { 'nav-buttons--end': !showBottomBack }]"
      >
        <VueButton v-if="showBottomBack" :bordered="true" shape="rounded" @click="handleBack">Back</VueButton>
        <VueButton
          variant="primary"
          shape="rounded"
          :disabled="!canProceed"
          @click="handleNext"
        >
          <span v-if="currentPosition === TOTAL_POSITIONS" class="inline-icon-btn">
            Start Building <ArrowRight :size="16" />
          </span>
          <span v-else>Next</span>
        </VueButton>
      </div>
    </div>

    <SkinSwitcher />
  </div>
</template>
