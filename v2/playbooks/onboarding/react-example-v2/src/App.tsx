import { useState } from 'react';
import { ArrowRight, User, Users, Building2, Sun, Moon, Info } from 'lucide-react';
import { ReactButton } from './components/ag/Button/react';
import { ReactProgress } from './components/ag/Progress/react';
import { ReactAlert } from './components/ag/Alert/react';
import { ReactSelectionCardGroup } from './components/ag/SelectionCardGroup/react';
import { ReactSelectionCard } from './components/ag/SelectionCard/react';
import { SkinSwitcher } from './SkinSwitcher';
import './App.css';

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

const progressRightLabel: Record<number, string> = {
  1: 'Choose Your Path',
  2: 'Front-end Frameworks',
  3: '',
  4: 'Design & Styling',
  5: 'Engineering & Quality',
  6: 'Review & Start',
};

// ---------------------------------------------------------------------------
// App Component
// ---------------------------------------------------------------------------
export default function App() {
  const [currentPosition, setCurrentPosition] = useState<number>(1);
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [selectedByCategory, setSelectedByCategory] = useState<Record<string, string[]>>({});
  const [isDark, setIsDark] = useState(() => localStorage.getItem('ag-theme') === 'dark');

  // Derived state
  const progressValue = Math.round((currentPosition / TOTAL_POSITIONS) * 100);
  const questionStepNum = getQuestionStepNumber(currentPosition);
  const progressLeftLabel = questionStepNum !== null
    ? `Step ${questionStepNum} of ${TOTAL_QUESTION_STEPS}`
    : 'Halfway there!';
  const currentCategory = INTEREST_CATEGORIES.find(c => c.position === currentPosition) ?? null;
  const canProceed = (() => {
    if (currentPosition === 1) return selectedPath !== null;
    if (currentPosition === INTERSTITIAL_POSITION) return true;
    // Interest steps (2, 4, 5): require at least 1 selection in this category
    if (currentCategory) {
      return (selectedByCategory[currentCategory.id] ?? []).length > 0;
    }
    return true; // review step
  })();
  const showStandardNav = currentPosition !== INTERSTITIAL_POSITION;
  const showBottomBack = currentPosition > 1 && currentPosition !== INTERSTITIAL_POSITION;

  // Handlers
  const toggleDark = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : '');
    localStorage.setItem('ag-theme', next ? 'dark' : '');
  };

  const handleNext = () => {
    if (currentPosition < TOTAL_POSITIONS) setCurrentPosition(p => p + 1);
  };

  const handleBack = () => {
    if (currentPosition > 1) setCurrentPosition(p => p - 1);
  };

  const handlePathChange = (e: { detail?: { selectedValues?: string[] } }) => {
    const selectedValues = e.detail?.selectedValues ?? [];
    setSelectedPath(selectedValues[0] || null);
  };

  const handleInterestChange = (e: Event, categoryId: string) => {
    const detail = (e as CustomEvent).detail;
    const selectedValues: string[] = detail?.selectedValues ?? [];
    setSelectedByCategory(prev => ({ ...prev, [categoryId]: selectedValues }));
  };

  const viewType = getViewType(currentPosition);

  return (
    <div className="page">
      <header className="wizard-header">
        <span className="wizard-logo">AgnosticUI</span>
        <button className="theme-toggle" onClick={toggleDark} aria-label="Toggle dark mode">
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </header>

      <main className="wizard-main">
      <div className="wizard-container">
        {/* Progress indicator */}
        <div className="wizard-progress">
          <div className="wizard-progress-label">
            <span>{progressLeftLabel}</span>
            {progressRightLabel[currentPosition] && (
              <span>{progressRightLabel[currentPosition]}</span>
            )}
          </div>
          <ReactProgress value={progressValue} />
        </div>

        {/* Step 1: Choose Your Path */}
        {viewType === 'path' && (
          <div>
            <h2 className="step-title">What brings you here today?</h2>
            <p className="step-subtitle">Choose the option that best describes how you'll use AgnosticUI</p>
            <div className="path-cards-wrapper">
              <ReactSelectionCardGroup
                type="radio"
                name="path"
                legend="Choose your path"
                legendHidden
                onSelectionChange={handlePathChange}
              >
                <ReactSelectionCard value="personal" label="Personal Projects">
                  <div className="path-card-content">
                    <div className="path-icon"><User size={48} /></div>
                    <h3>Personal Projects</h3>
                    <p>Building side projects, portfolios, or learning</p>
                  </div>
                </ReactSelectionCard>
                <ReactSelectionCard value="team" label="Team Development">
                  <div className="path-card-content">
                    <div className="path-icon"><Users size={48} /></div>
                    <h3>Team Development</h3>
                    <p>Collaborating with a small team on shared projects</p>
                  </div>
                </ReactSelectionCard>
                <ReactSelectionCard value="enterprise" label="Enterprise">
                  <div className="path-card-content">
                    <div className="path-icon"><Building2 size={48} /></div>
                    <h3>Enterprise</h3>
                    <p>Large-scale applications with multiple teams</p>
                  </div>
                </ReactSelectionCard>
              </ReactSelectionCardGroup>
            </div>
          </div>
        )}

        {/* Positions 2, 4, 5: Interest Category Slides */}
        {viewType === 'interests' && currentCategory && (
          <div>
            <h2 className="step-title">{currentCategory.question}</h2>
            <p className="step-subtitle">{currentCategory.subtitle}</p>
            <div className="interests-wrapper">
              <ReactSelectionCardGroup
                type="checkbox"
                name={`interests-${currentCategory.id}`}
                legend={currentCategory.title}
                legendHidden
                values={selectedByCategory[currentCategory.id] ?? []}
                onSelectionChange={(e) => handleInterestChange(e as unknown as Event, currentCategory.id)}
              >
                {currentCategory.items.map(item => (
                  <ReactSelectionCard key={item.value} value={item.value} label={item.label}>
                    {item.label}
                  </ReactSelectionCard>
                ))}
              </ReactSelectionCardGroup>
            </div>
          </div>
        )}

        {/* Position 3: Mini Confirmation Interstitial */}
        {viewType === 'interstitial' && (
          <div className="interstitial">
            <div className="interstitial-back">
              <ReactButton bordered shape="rounded" onClick={handleBack}>← Back</ReactButton>
            </div>
            <h2 className="step-title">Those are some great interests!</h2>
            <p className="step-subtitle">Just a few more questions left...</p>
            <div className="interstitial-illustration">
              <div className="interstitial-avatar">
                <User size={48} />
              </div>
            </div>
            <p className="interstitial-body">
              These interests will help us set up the app in a way that's customized
              specifically to you. You can change them at any time in your Settings.{' '}
              <Info size={14} style={{ verticalAlign: 'middle', marginLeft: '4px' }} />
            </p>
            <ReactButton variant="primary" shape="rounded" fullWidth onClick={handleNext}>Next</ReactButton>
          </div>
        )}

        {/* Position 6: Review & Start */}
        {viewType === 'review' && (
          <div>
            <h2 className="step-title">You're all set!</h2>
            <div className="review-section">
              <div className="review-block">
                <p className="review-label">Your Path</p>
                <p className="review-value">
                  {selectedPath === 'personal' && 'Personal Projects'}
                  {selectedPath === 'team' && 'Team Development'}
                  {selectedPath === 'enterprise' && 'Enterprise'}
                  {!selectedPath && '—'}
                </p>
              </div>
              <div className="review-block">
                <p className="review-label">Your Interests</p>
                <p className="review-value">
                  {(() => {
                    const all = Object.values(selectedByCategory).flat();
                    return all.length > 0 ? all.join(', ') : 'None selected';
                  })()}
                </p>
              </div>
            </div>
            <ReactAlert variant="info">
              <strong>What's next?</strong>
              <p>
                Based on your selections, we've customized your dashboard with relevant
                documentation, examples, and starter templates. You can always update
                your preferences later in settings.
              </p>
            </ReactAlert>
          </div>
        )}

        {/* Standard Navigation Row (not shown on interstitial) */}
        {showStandardNav && (
          <div className={`nav-buttons${showBottomBack ? '' : ' nav-buttons--end'}`}>
            {showBottomBack && (
              <ReactButton bordered shape="rounded" onClick={handleBack}>Back</ReactButton>
            )}
            <ReactButton
              variant="primary"
              shape="rounded"
              disabled={!canProceed}
              onClick={handleNext}
            >
              {currentPosition === TOTAL_POSITIONS ? (
                <span className="inline-icon-btn">Start Building <ArrowRight size={16} /></span>
              ) : (
                'Next'
              )}
            </ReactButton>
          </div>
        )}
      </div>
      </main>

      <SkinSwitcher />
    </div>
  );
}
