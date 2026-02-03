<script setup lang="ts">
import { ref, computed } from 'vue';
import { User, Users, Building2, ArrowRight, Check } from 'lucide-vue-next';

// AgnosticUI Components
import VueButton from './components/ag/Button/vue/VueButton.vue';
import VueAlert from './components/ag/Alert/vue/VueAlert.vue';
import Timeline from './components/ag/Timeline/vue/Timeline.vue';
import TimelineItem from './components/ag/Timeline/vue/TimelineItem.vue';
import VueSelectionCardGroup from './components/ag/SelectionCardGroup/vue/VueSelectionCardGroup.vue';
import VueSelectionCard from './components/ag/SelectionCard/vue/VueSelectionCard.vue';
import VueSelectionButtonGroup from './components/ag/SelectionButtonGroup/vue/VueSelectionButtonGroup.vue';
import VueSelectionButton from './components/ag/SelectionButton/vue/VueSelectionButton.vue';

// Interest tags data
const INTERESTS = [
  'Accessibility',
  'Component Libraries',
  'Design Systems',
  'React',
  'Vue',
  'Web Components',
  'Mobile Development',
  'Svelte',
  'CSS Architecture',
  'Responsive Design',
  'Web Standards',
  'Performance',
  'Dev Tools',
  'JavaScript',
  'Testing',
  'Theming',
  'Design',
  'Figma',
];

// Path options data
const PATHS = [
  {
    value: 'personal',
    label: 'Personal Projects',
    description: 'Building side projects, portfolios, or learning',
    icon: User,
  },
  {
    value: 'team',
    label: 'Team Development',
    description: 'Collaborating with a small team on shared projects',
    icon: Users,
  },
  {
    value: 'enterprise',
    label: 'Enterprise',
    description: 'Large-scale applications with multiple teams',
    icon: Building2,
  },
];

type Step = 1 | 2 | 3;
type PathValue = 'personal' | 'team' | 'enterprise';

// State
const currentStep = ref<Step>(1);
const selectedPath = ref<PathValue | null>(null);
const selectedInterests = ref<string[]>([]);

// Get marker class based on step state
const getMarkerClass = (step: number) => {
  if (step < currentStep.value) return 'step-marker step-marker-completed';
  if (step === currentStep.value) return 'step-marker step-marker-current';
  return 'step-marker step-marker-pending';
};

// Handle path selection
const handlePathChange = (detail: { selectedValues: string[] }) => {
  selectedPath.value = (detail.selectedValues[0] as PathValue) || null;
};

// Handle interest selection
const handleInterestChange = (detail: { selectedValues: string[] }) => {
  selectedInterests.value = detail.selectedValues;
};

// Navigation handlers
const handleBack = () => {
  if (currentStep.value > 1) {
    currentStep.value = (currentStep.value - 1) as Step;
  }
};

const handleContinue = () => {
  if (currentStep.value < 3) {
    currentStep.value = (currentStep.value + 1) as Step;
  }
};

// Can continue logic
const canContinue = computed(() => {
  if (currentStep.value === 1) return selectedPath.value !== null;
  if (currentStep.value === 2) return selectedInterests.value.length >= 3;
  return true;
});

// Get path label
const pathLabel = computed(() => {
  const path = PATHS.find(p => p.value === selectedPath.value);
  return path?.label || '';
});

// Get formatted interests
const formattedInterests = computed(() => {
  return selectedInterests.value
    .map((id) => {
      const interest = INTERESTS.find(
        (i) => i.toLowerCase().replace(/\s+/g, '-') === id
      );
      return interest || id;
    })
    .join(', ');
});

// Convert interest to value
const toInterestValue = (interest: string) => {
  return interest.toLowerCase().replace(/\s+/g, '-');
};
</script>

<template>
  <div class="onboarding-container">
    <!-- Timeline -->
    <div class="timeline-wrapper">
      <Timeline orientation="horizontal">
        <TimelineItem>
          <template #ag-start>Step 1</template>
          <template #ag-marker>
            <div :class="getMarkerClass(1)">
              <Check v-if="currentStep > 1" :size="20" />
              <span v-else>1</span>
            </div>
          </template>
          <template #ag-end>Choose your path</template>
        </TimelineItem>
        <TimelineItem>
          <template #ag-start>Step 2</template>
          <template #ag-marker>
            <div :class="getMarkerClass(2)">
              <Check v-if="currentStep > 2" :size="20" />
              <span v-else>2</span>
            </div>
          </template>
          <template #ag-end>Pick your interests</template>
        </TimelineItem>
        <TimelineItem>
          <template #ag-start>Step 3</template>
          <template #ag-marker>
            <div :class="getMarkerClass(3)">3</div>
          </template>
          <template #ag-end>Review & Start</template>
        </TimelineItem>
      </Timeline>
    </div>

    <!-- Step 1: Choose Your Path -->
    <template v-if="currentStep === 1">
      <h1 class="step-title">What brings you here today?</h1>
      <p class="step-subtitle">
        Choose the option that best describes how you'll use AgnosticUI
      </p>

      <div class="path-cards-wrapper">
        <VueSelectionCardGroup
          type="radio"
          name="path"
          legend="Choose your path"
          :legend-hidden="true"
          :value="selectedPath || ''"
          @selection-change="handlePathChange"
        >
          <VueSelectionCard
            v-for="path in PATHS"
            :key="path.value"
            :value="path.value"
            :label="path.label"
          >
            <div class="path-card-content">
              <div class="path-icon">
                <component :is="path.icon" :size="48" />
              </div>
              <h3>{{ path.label }}</h3>
              <p>{{ path.description }}</p>
            </div>
          </VueSelectionCard>
        </VueSelectionCardGroup>
      </div>
    </template>

    <!-- Step 2: Pick Your Interests -->
    <template v-if="currentStep === 2">
      <h1 class="step-title">What are you most interested in?</h1>
      <p class="step-subtitle">
        Select all the topics that interest you (choose at least 3)
      </p>

      <div class="interests-wrapper">
        <VueSelectionButtonGroup
          type="checkbox"
          name="interests"
          shape="capsule"
          size="md"
          legend="Select your interests"
          :legend-hidden="true"
          :values="selectedInterests"
          @selection-change="handleInterestChange"
        >
          <VueSelectionButton
            v-for="interest in INTERESTS"
            :key="interest"
            :value="toInterestValue(interest)"
            :label="interest"
          >
            {{ interest }}
          </VueSelectionButton>
        </VueSelectionButtonGroup>
      </div>
    </template>

    <!-- Step 3: Review & Start -->
    <template v-if="currentStep === 3">
      <h1 class="step-title">You're all set!</h1>

      <div class="summary-grid">
        <div class="summary-section">
          <h4>Your Path</h4>
          <p>{{ pathLabel }}</p>
        </div>
        <div class="summary-section">
          <h4>Your Interests</h4>
          <p>{{ formattedInterests }}</p>
        </div>
      </div>

      <div class="alert-wrapper">
        <VueAlert variant="info">
          <strong>What's next?</strong>
          <p>
            Based on your selections, we've customized your dashboard with
            relevant documentation, examples, and starter templates. You can
            always update your preferences later in settings.
          </p>
        </VueAlert>
      </div>
    </template>

    <!-- Navigation Buttons -->
    <div class="nav-buttons">
      <VueButton
        v-if="currentStep > 1"
        bordered
        shape="rounded"
        @click="handleBack"
      >
        Back
      </VueButton>
      <div v-else />

      <VueButton
        v-if="currentStep < 3"
        variant="primary"
        shape="rounded"
        :disabled="!canContinue"
        @click="handleContinue"
      >
        Continue
      </VueButton>
      <VueButton
        v-else
        variant="primary"
        shape="rounded"
      >
        <span class="button-with-icon">
          Start Building
          <ArrowRight :size="16" />
        </span>
      </VueButton>
    </div>
  </div>
</template>
