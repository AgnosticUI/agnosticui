import { useState } from 'react';
import { User, Users, Building2, ArrowRight, Check } from 'lucide-react';

// AgnosticUI Components
import { ReactButton } from './components/ag/Button/react/ReactButton';
import { ReactAlert } from './components/ag/Alert/react/ReactAlert';
import { ReactTimeline, ReactTimelineItem } from './components/ag/Timeline/react/ReactTimeline';
import { ReactSelectionCardGroup } from './components/ag/SelectionCardGroup/react/ReactSelectionCardGroup';
import { ReactSelectionCard } from './components/ag/SelectionCard/react/ReactSelectionCard';
import { ReactSelectionButtonGroup } from './components/ag/SelectionButtonGroup/react/ReactSelectionButtonGroup';
import { ReactSelectionButton } from './components/ag/SelectionButton/react/ReactSelectionButton';

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
    Icon: User,
  },
  {
    value: 'team',
    label: 'Team Development',
    description: 'Collaborating with a small team on shared projects',
    Icon: Users,
  },
  {
    value: 'enterprise',
    label: 'Enterprise',
    description: 'Large-scale applications with multiple teams',
    Icon: Building2,
  },
];

type Step = 1 | 2 | 3;
type PathValue = 'personal' | 'team' | 'enterprise';

function App() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [selectedPath, setSelectedPath] = useState<PathValue | null>(null);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  // Get marker class based on step state
  const getMarkerClass = (step: number) => {
    if (step < currentStep) return 'step-marker step-marker-completed';
    if (step === currentStep) return 'step-marker step-marker-current';
    return 'step-marker step-marker-pending';
  };

  // Get marker content
  const getMarkerContent = (step: number) => {
    if (step < currentStep) return <Check size={20} />;
    return step;
  };

  // Handle path selection
  const handlePathChange = (e: CustomEvent) => {
    const { selectedValues } = e.detail;
    setSelectedPath(selectedValues[0] || null);
  };

  // Handle interest selection
  const handleInterestChange = (e: CustomEvent) => {
    const { selectedValues } = e.detail;
    setSelectedInterests(selectedValues);
  };

  // Navigation handlers
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as Step);
    }
  };

  const handleContinue = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => (prev + 1) as Step);
    }
  };

  // Can continue logic
  const canContinue = currentStep === 1
    ? selectedPath !== null
    : currentStep === 2
      ? selectedInterests.length >= 3
      : true;

  // Get path label
  const getPathLabel = () => {
    const path = PATHS.find(p => p.value === selectedPath);
    return path?.label || '';
  };

  return (
    <div className="onboarding-container">
      {/* Timeline */}
      <div className="timeline-wrapper">
        <ReactTimeline orientation="horizontal">
          <ReactTimelineItem
            start={<span>Step 1</span>}
            marker={<div className={getMarkerClass(1)}>{getMarkerContent(1)}</div>}
            end={<span>Choose your path</span>}
          />
          <ReactTimelineItem
            start={<span>Step 2</span>}
            marker={<div className={getMarkerClass(2)}>{getMarkerContent(2)}</div>}
            end={<span>Pick your interests</span>}
          />
          <ReactTimelineItem
            start={<span>Step 3</span>}
            marker={<div className={getMarkerClass(3)}>{getMarkerContent(3)}</div>}
            end={<span>Review & Start</span>}
          />
        </ReactTimeline>
      </div>

      {/* Step 1: Choose Your Path */}
      {currentStep === 1 && (
        <>
          <h1 className="step-title">What brings you here today?</h1>
          <p className="step-subtitle">
            Choose the option that best describes how you'll use AgnosticUI
          </p>

          <div className="path-cards-wrapper">
            <ReactSelectionCardGroup
              type="radio"
              name="path"
              legend="Choose your path"
              legendHidden
              value={selectedPath || undefined}
              onSelectionChange={handlePathChange}
            >
              {PATHS.map(({ value, label, description, Icon }) => (
                <ReactSelectionCard key={value} value={value} label={label}>
                  <div className="path-card-content">
                    <div className="path-icon">
                      <Icon size={48} />
                    </div>
                    <h3>{label}</h3>
                    <p>{description}</p>
                  </div>
                </ReactSelectionCard>
              ))}
            </ReactSelectionCardGroup>
          </div>
        </>
      )}

      {/* Step 2: Pick Your Interests */}
      {currentStep === 2 && (
        <>
          <h1 className="step-title">What are you most interested in?</h1>
          <p className="step-subtitle">
            Select all the topics that interest you (choose at least 3)
          </p>

          <div className="interests-wrapper">
            <ReactSelectionButtonGroup
              type="checkbox"
              name="interests"
              shape="capsule"
              size="md"
              legend="Select your interests"
              legendHidden
              values={selectedInterests}
              onSelectionChange={handleInterestChange}
            >
              {INTERESTS.map((interest) => (
                <ReactSelectionButton
                  key={interest}
                  value={interest.toLowerCase().replace(/\s+/g, '-')}
                  label={interest}
                >
                  {interest}
                </ReactSelectionButton>
              ))}
            </ReactSelectionButtonGroup>
          </div>
        </>
      )}

      {/* Step 3: Review & Start */}
      {currentStep === 3 && (
        <>
          <h1 className="step-title">You're all set!</h1>

          <div className="summary-grid">
            <div className="summary-section">
              <h4>Your Path</h4>
              <p>{getPathLabel()}</p>
            </div>
            <div className="summary-section">
              <h4>Your Interests</h4>
              <p>
                {selectedInterests
                  .map((id) => {
                    const interest = INTERESTS.find(
                      (i) => i.toLowerCase().replace(/\s+/g, '-') === id
                    );
                    return interest || id;
                  })
                  .join(', ')}
              </p>
            </div>
          </div>

          <div className="alert-wrapper">
            <ReactAlert variant="info">
              <strong>What's next?</strong>
              <p>
                Based on your selections, we've customized your dashboard with
                relevant documentation, examples, and starter templates. You can
                always update your preferences later in settings.
              </p>
            </ReactAlert>
          </div>
        </>
      )}

      {/* Navigation Buttons */}
      <div className="nav-buttons">
        {currentStep > 1 ? (
          <ReactButton bordered shape="rounded" onClick={handleBack}>
            Back
          </ReactButton>
        ) : (
          <div />
        )}

        {currentStep < 3 ? (
          <ReactButton
            variant="primary"
            shape="rounded"
            disabled={!canContinue}
            onClick={handleContinue}
          >
            Continue
          </ReactButton>
        ) : (
          <ReactButton variant="primary" shape="rounded">
            <span className="button-with-icon">
              Start Building
              <ArrowRight size={16} />
            </span>
          </ReactButton>
        )}
      </div>
    </div>
  );
}

export default App;
