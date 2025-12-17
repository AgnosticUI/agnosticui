import './App.css'
import { useState } from 'react';
import { ReactButton } from './components/ag/Button/react/ReactButton';
import { ReactButtonFx } from './components/ag/ButtonFx/react/ReactButtonFx';
import { ReactBreadcrumb, type BreadcrumbItem } from './components/ag/Breadcrumb/react/ReactBreadcrumb';
import { ReactBadge } from './components/ag/Badge/react/ReactBadge';
import { ReactIcon } from './components/ag/Icon/react/ReactIcon';
import { Mail, Heart, Download, Bell, Trash2, Settings, Save, Home, Folder, ChevronRight, Users, FileText, BarChart3, PanelLeftClose } from 'lucide-react';
import { ReactTag } from './components/ag/Tag/react/ReactTag';
import { ReactAlert } from './components/ag/Alert/react/ReactAlert';
import { ReactAccordion, AccordionItem, ItemHeader, ItemContent } from './components/ag/Accordion/react/ReactAccordion';
import { ReactFieldset } from './components/ag/Fieldset/react/ReactFieldset';
import { ReactProgressRing } from './components/ag/ProgressRing/react/ReactProgressRing';
import { ReactFlexRow } from './components/ag/Flex/react/ReactFlexRow';
import { ReactFlexCol } from './components/ag/Flex/react/ReactFlexCol';
import { ReactRadio } from './components/ag/Radio/react/ReactRadio';
import { ReactAspectRatio } from './components/ag/AspectRatio/react/ReactAspectRatio';
import { ReactHeader } from './components/ag/Header/react/ReactHeader';
import { ReactRating } from './components/ag/Rating/react/ReactRating';
import { ReactAvatar } from './components/ag/Avatar/react/ReactAvatar';
import { ReactScrollProgress } from './components/ag/ScrollProgress/react/ReactScrollProgress';
import { ReactBadgeFx } from './components/ag/BadgeFx/react/ReactBadgeFx';
import { ReactIconButtonFx } from './components/ag/IconButtonFx/react/ReactIconButtonFx';
import { ReactIconButton } from './components/ag/IconButton/react/ReactIconButton';
import { ReactScrollToButton } from './components/ag/ScrollToButton/react/ReactScrollToButton';
import { ReactSelect } from './components/ag/Select/react/ReactSelect';
import { ReactImage } from './components/ag/Image/react/ReactImage';
import { ReactSidebar } from './components/ag/Sidebar/react/ReactSidebar';
import { ReactSidebarNav, ReactSidebarNavItem, ReactSidebarNavSubmenu, ReactSidebarNavPopoverSubmenu } from './components/ag/SidebarNav/react/ReactSidebarNav';
import { ReactPopover } from './components/ag/Popover/react/ReactPopover';
import { ReactInput } from './components/ag/Input/react/ReactInput';
import { ReactIntlFormatter } from './components/ag/IntlFormatter/react/ReactIntlFormatter';
import { ReactSkeletonLoader } from './components/ag/SkeletonLoader/react/ReactSkeletonLoader';
import { ReactKbd } from './components/ag/Kbd/react/ReactKbd';
import { ReactCard } from './components/ag/Card/react/ReactCard';
import { ReactSlider } from './components/ag/Slider/react/ReactSlider';
import { ReactCheckbox } from './components/ag/Checkbox/react/ReactCheckbox';
import { ReactLink } from './components/ag/Link/react/ReactLink';
import { ReactSpinner } from './components/ag/Spinner/react/ReactSpinner';
import { ReactCollapsible } from './components/ag/Collapsible/react/ReactCollapsible';
import { ReactLoader } from './components/ag/Loader/react/ReactLoader';
import { ReactTabs, ReactTab, ReactTabPanel } from './components/ag/Tabs/react/ReactTabs';
import { ReactCombobox } from './components/ag/Combobox/react/ReactCombobox';
import type { ComboboxOption } from './components/ag/Combobox/react/ReactCombobox';
import { ReactMark } from './components/ag/Mark/react/ReactMark';
import { ReactCopyButton } from './components/ag/CopyButton/react/ReactCopyButton';
import { ReactMenuButton, ReactMenu, ReactMenuItem, ReactMenuSeparator } from './components/ag/Menu/react/ReactMenu';
import { ReactTimeline, ReactTimelineItem } from './components/ag/Timeline/react/ReactTimeline';
import { ReactDialog } from './components/ag/Dialog/react/ReactDialog';
import { ReactMessageBubble } from './components/ag/MessageBubble/react/ReactMessageBubble';
import { ReactToast } from './components/ag/Toast/react/ReactToast';
import { ReactDivider } from './components/ag/Divider/react/ReactDivider';
import { ReactPagination } from './components/ag/Pagination/react/ReactPagination';
import { ReactToggle } from './components/ag/Toggle/react/ReactToggle';
import { ReactDrawer } from './components/ag/Drawer/react/ReactDrawer';
import { ReactTooltip } from './components/ag/Tooltip/react/ReactTooltip';
import { ReactEmptyState } from './components/ag/EmptyState/react/ReactEmptyState';
import { ReactProgress } from './components/ag/Progress/react/ReactProgress';
import { ReactVisuallyHidden } from './components/ag/VisuallyHidden/react/ReactVisuallyHidden';

function App() {
  const items: BreadcrumbItem[] = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Products', href: '#products' },
  ];

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);
  const [value, setValue] = useState(50);
  const [range1, setRange1] = useState<number | [number, number] | undefined>([200, 800]);
  const [range2, setRange2] = useState<number | [number, number] | undefined>([200, 800]);
  const [brightness1, setBrightness1] = useState(50);
  const [brightness2, setBrightness2] = useState(50);
  const [filled1, setFilled1] = useState(60);
  const [filled2, setFilled2] = useState(60);
  const [mono1, setMono1] = useState(70);
  const [mono2, setMono2] = useState(70);
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(true);
  const [checkbox3, setCheckbox3] = useState(false);
  const [collapsible1Open, setCollapsible1Open] = useState(false);
  const [collapsible2Open, setCollapsible2Open] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedState, setSelectedState] = useState('');
  const [searchTerm, setSearchTerm] = useState('fox');
  const [markMatchAll, setMarkMatchAll] = useState(true);
  const [markCaseSensitive, setMarkCaseSensitive] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [toggleChecked, setToggleChecked] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const stateOptions: ComboboxOption[] = [
    { value: 'ca', label: 'California' },
    { value: 'co', label: 'Colorado' },
    { value: 'ct', label: 'Connecticut' },
    { value: 'fl', label: 'Florida' },
    { value: 'ny', label: 'New York' },
  ];

  const handleBreadcrumbClick = (event: CustomEvent) => {
    console.log(
      `ReactBreadcrumb -> handleClick -- label: ${event.detail.item.label}, href: ${event.detail.item.href}`
    );
  };

  const handleProjectsToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const navItem = button.closest("ag-sidebar-nav-item");
    const submenu = navItem?.querySelector("ag-sidebar-nav-submenu");

    if (!submenu) return;

    const newState = !projectsOpen;
    setProjectsOpen(newState);

    // Manually sync the DOM for the web component
    if (newState) {
      submenu.setAttribute("open", "");
    } else {
      submenu.removeAttribute("open");
    }

    console.log('Projects submenu toggled:', newState);
  };

  const handleTeamToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const navItem = button.closest("ag-sidebar-nav-item");
    const submenu = navItem?.querySelector("ag-sidebar-nav-submenu");

    if (!submenu) return;

    const newState = !teamOpen;
    setTeamOpen(newState);

    // Manually sync the DOM for the web component
    if (newState) {
      submenu.setAttribute("open", "");
    } else {
      submenu.removeAttribute("open");
    }

    console.log('Team submenu toggled:', newState);
  };
  
  const handleFormattingError = (e: Event) => {
    const customEvent = e as CustomEvent;
    console.error('Formatting error:', customEvent.detail);
  };

  return (
    <>
      <h1>Kitchen Sink (React)</h1>
      <section className="mbe4">
        {/* Basic slider */}
        <ReactSlider
          label="Volume"
          min={0}
          max={100}
          value={value}
          onInput={(e) => setValue(e.detail.value as number)}
        />

        {/* Dual range slider */}
        <ReactSlider
          key="price-range-1"
          label="Price Range"
          dual
          min={0}
          max={1000}
          value={range1}
          onInput={(e) => setRange1(e.detail.value as [number, number])}
        />

        {/* With ticks and tooltip */}
        <ReactSlider
          key="brightness-1"
          label="Brightness"
          min={0}
          max={100}
          step={25}
          value={brightness1}
          onInput={(e) => setBrightness1(e.detail.value as number)}
          showTicks
          showTooltip
          tickStep={25}
        />

        {/* Filled and monochrome variants */}
        <ReactSlider
          key="filled-1"
          label="Filled Variant"
          filled
          value={filled1}
          onInput={(e) => setFilled1(e.detail.value as number)}
        />
        <ReactSlider
          key="mono-1"
          label="Monochrome"
          monochrome
          value={mono1}
          onInput={(e) => setMono1(e.detail.value as number)}
        />

        {/* Dual range slider */}
        <ReactSlider
          key="price-range-2"
          label="Price Range 2"
          dual
          min={0}
          max={1000}
          value={range2}
          onInput={(e) => setRange2(e.detail.value as [number, number])}
        />

        {/* With ticks and tooltip */}



        {/* TODO FIX OPEN SHADOW ROOT CORE ISSUES */}
        <ReactSlider
          key="brightness-2"
          label="Brightness 2"
          min={0}
          max={100}
          step={25}
          value={brightness2}
          onInput={(e) => setBrightness2(e.detail.value as number)}
          showTicks
          showTooltip
          tickStep={25}
        />

        {/* Filled and monochrome variants */}
        <ReactSlider
          key="filled-2"
          label="Filled Variant 2"
          filled
          value={filled2}
          onInput={(e) => setFilled2(e.detail.value as number)}
        />
        <ReactSlider
          key="mono-2"
          label="Monochrome 2"
          monochrome
          value={mono2}
          onInput={(e) => setMono2(e.detail.value as number)}
        />
      </section>
      <section className="mbe4">
        <ReactCard>
          <h3>Card Title</h3>
          <p>Basic card content with default styling.</p>
        </ReactCard>
      </section>
      <section className="mbe4">
        <ReactCard shadow animated>
          <h3>Animated Card</h3>
          <p>Hover to see the animation effect.</p>
        </ReactCard>
      </section>
      <section className="mbe4">      
        <ReactCard variant="success">
          <h3>Success</h3>
          <p>Operation completed successfully!</p>
        </ReactCard>
      </section>
      <section className="mbe4">                    
        <ReactCard shadow animated>
          <h3 slot="header" style={{ margin: 0 }}>
            Header Slot
          </h3>
          <div>
            <p>Main content goes here.</p>
          </div>
          <ReactButton variant="primary" shape="rounded" slot="footer">Action</ReactButton>
        </ReactCard>
      </section>
      <section className="mbe4">
        <ReactSkeletonLoader className='mbe2' effect='pulse' variant="text" />
        <ReactSkeletonLoader className='mbe2' effect='pulse' variant="circular" width="60px" height="60px" />
        <ReactFlexRow>
          <ReactSkeletonLoader className='mie2' effect='sheen' variant="rounded" width="300px" height="200px" />
          <ReactSkeletonLoader className='mie2' effect='sheen' variant="rounded" width="300px" height="200px" />
        </ReactFlexRow>
      </section>
      <section className="mbe4">
        <h2>Tabs</h2>
        <ReactTabs
          activeTab={activeTab}
          ariaLabel="Basic tabs example"
          onTabChange={(e) => setActiveTab(e.detail.activeTab)}
        >
          <ReactTab slot="tab" panel="panel-1">Tab 1</ReactTab>
          <ReactTab slot="tab" panel="panel-2">Tab 2</ReactTab>
          <ReactTab slot="tab" panel="panel-3">Tab 3</ReactTab>
          <ReactTabPanel slot="panel" id="panel-1">
            <p>This is the content for Tab 1.</p>
            <p>You can put any content here.</p>
          </ReactTabPanel>
          <ReactTabPanel slot="panel" id="panel-2">
            <p>This is the content for Tab 2.</p>
          </ReactTabPanel>
          <ReactTabPanel slot="panel" id="panel-3">
            <p>This is the content for Tab 3.</p>
          </ReactTabPanel>
        </ReactTabs>
      </section>
      <section className="mbe4">
        <h2>Spinner</h2>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <ReactSpinner className='mie2' size="small" />
          <ReactSpinner className='mie2' size="default" />
          <ReactSpinner className='mie2' size="large" />
          <ReactSpinner className='mie2' size="xlarge" />
          <ReactSpinner className='mie2' size="xlarge" style={{ '--spinner-color': 'var(--ag-primary)' } as React.CSSProperties} />
          <ReactSpinner className='mie2' size="xlarge" style={{ '--spinner-color': 'var(--ag-success)' } as React.CSSProperties} />
          <ReactSpinner className='mie2' size="xlarge" style={{ '--spinner-color': 'var(--ag-danger)' } as React.CSSProperties} />
        </div>
      </section>
      <section className="mbe4">
        <h2>Loader</h2>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <ReactLoader />
          <ReactLoader ariaLabel="Loading content..." />
        </div>
      </section>
      <section className="mbe4">
        <ReactKbd className='mis2' variant="monochrome" size="lg" bordered background>⌘</ReactKbd>
        <ReactKbd className='mis2' variant="monochrome" size="lg" bordered background>⌥</ReactKbd>
        <ReactKbd className='mis2' variant="monochrome" size="lg" bordered background>⇧</ReactKbd>
        <ReactKbd className='mis2' variant="monochrome" size="lg" bordered background>⇧</ReactKbd>
      </section>
      <section className="mbe4">
        <ReactIntlFormatter
          type="date"
          date="2024-01-15"
          dateStyle="full"
          timeStyle="short"
        />

        <ReactIntlFormatter
          className='mis4'
          type="currency"
          value={1234.56}
          currency="EUR"
          lang="de-DE"
          onFormatError={handleFormattingError}
        />

        <ReactIntlFormatter
          className='mis4'
          type="number"
          value={1234567.89}
          minimumFractionDigits={2}
          maximumFractionDigits={2}
          noGrouping={false}
        />
        <ReactIntlFormatter
          className='mis4'
          type="percent"
          value={0.8532}
          minimumFractionDigits={2}
        />
      </section>
      <section className="mbe4">
        <ReactButton variant='primary' shape='rounded'>Button</ReactButton>
        <ReactButtonFx className='mis4' fx='bounce' fxEase='spring-md' fxSpeed='xl' variant='primary' shape='rounded'>Bounce Button</ReactButtonFx>
        <ReactButtonFx className='mis4' fx='pulse' fxEase='ease-in-out' fxSpeed='lg' variant='primary' shape='rounded'>Pulse Button</ReactButtonFx>
      </section>
      <section className="mbe4">
        <ReactInput
          className='mbe8'
          value={email}
          onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
          label="Email"
          type="email"
          placeholder="you@example.com"
        />
        <ReactFlexRow
          style={{ "--flex-gap": "var(--ag-space-2)", textAlign: "left" } as React.CSSProperties}
          justify="flex-start"
          align="flex-end"
        >
          <ReactInput
            value={username}
            onChange={(e) => setUsername((e.target as HTMLInputElement).value)}
            label="Username"
            rounded
            required
            invalid={isInvalid}
            errorMessage="Username is required"
            helpText="Choose a unique username"
          />
          <ReactButton size='xl' shape='rounded' variant='monochrome' onClick={() => setIsInvalid(!isInvalid)}>Toggle Invalid</ReactButton>
        </ReactFlexRow>
        <ReactFlexCol
          style={{ "--flex-gap": "1rem" } as React.CSSProperties}
          justify="center"
          align="center"
        >
          <h2>Centered Items</h2>
          <ReactButton>Centered Item 1</ReactButton>
          <ReactButton>Centered Item 2</ReactButton>
        </ReactFlexCol>
      </section>

      <section className="mbe4">
        <ReactBreadcrumb items={items} onBreadcrumbClick={handleBreadcrumbClick} />
      </section>
      <section className="mbe4">
        <h2>Link</h2>
        <ReactLink className='mie4' href="#default">Default Link</ReactLink>
        {' '}
        <ReactLink className='mie4' href="#primary" variant="primary">Primary Link</ReactLink>
        {' '}
        <ReactLink className='mie4' href="#danger" variant="danger">Danger Link</ReactLink>
        {' '}
        <ReactLink href="#external" external>External Link</ReactLink>
        {' '}
        <ReactLink href="#disabled" disabled>Disabled Link</ReactLink>
      </section>
      <section className="mbe4">
        <ReactBadge className="mie4" variant="default">Default</ReactBadge>
        <ReactBadge className="mie4" variant="success">Success</ReactBadge>
        <ReactBadge className="mie4" variant="info">Info</ReactBadge>
        <ReactBadge className="mie4" variant="warning">Warning</ReactBadge>
        <ReactBadge className="mie4" variant="danger">Danger</ReactBadge>
        <ReactBadge className="mie4" variant="neutral">Neutral</ReactBadge>
      </section>
      <section className="mbe4">
        <ReactBadge className="mie4" size="xs">XS</ReactBadge>
        <ReactBadge className="mie4" size="sm">Small</ReactBadge>
        <ReactBadge className="mie4" size="md">Medium</ReactBadge>
        <ReactBadge className="mie4" variant="danger">99+</ReactBadge>
        <ReactBadge className="mie4" variant="success">5</ReactBadge>
        <ReactBadge className="mie4" dot variant="success" />
        <ReactBadge className="mie4" dot variant="warning" />
        <ReactBadge className="mie4" dot variant="danger" />
      </section>
      <section className="mbe4">
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <ReactBadge className="mie4" dot variant="success" /> Online
        </div>
        <div style={{ position: "relative", display: "inline-block" }}>
          <ReactIcon size="24" noFill>
            <Mail />
          </ReactIcon>
          <ReactBadge
            variant="danger"
            size="xs"
            style={{ position: "absolute", top: "-6px", right: "-7px" }}
          >
            3
          </ReactBadge>
        </div>
        <ReactButton className="mis4" variant="primary" shape='rounded'>Notifications
          <ReactBadge className="mis2" variant="danger" size="sm">99+</ReactBadge>
        </ReactButton>
      </section>
      <section className="mbe4">
        <ReactTag variant="success" shape="pill" uppercase>
      Active Task
      <button slot="close" onClick={() => console.log('Close')}>
        ✕
      </button>
    </ReactTag>
      </section>
      <section className="mbe4">
        <ReactAlert>Default alert</ReactAlert>
      </section>
      <section className="mbe4">
        <ReactAlert type="success">
          Success alert
        </ReactAlert>
      </section>
      <section className="mbe4">
        <ReactAlert type="info">
          Info alert
        </ReactAlert>
      </section>
      <section className="mbe4">
        <ReactAlert type="primary">
          Primary alert
        </ReactAlert>
      </section>
      <section className="mbe4">
        <ReactAlert type="warning">
          Warning alert
        </ReactAlert>
      </section>
      <section className="mbe4">
        <ReactAlert type="danger">
          Danger alert
        </ReactAlert>
      </section>
      <section className="mbe4">
        <ReactAlert type="error">
          Error alert
        </ReactAlert>
      </section>
      <section className="mbe4">
        <h2>Accordion</h2>
        <ReactAccordion>
          <AccordionItem>
            <ItemHeader>Accordion Item 1</ItemHeader>
            <ItemContent>
              <p>This is the content of the first accordion item.</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem>
            <ItemHeader>Accordion Item 2</ItemHeader>
            <ItemContent>
              <p>This is the content of the second accordion item.</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem>
            <ItemHeader>Accordion Item 3</ItemHeader>
            <ItemContent>
              <p>This is the content of the third accordion item.</p>
            </ItemContent>
          </AccordionItem>
        </ReactAccordion>
      </section>
      <section className="mbe4">
        <h2>Collapsible</h2>
        <ReactCollapsible
          open={collapsible1Open}
          onToggle={(e) => setCollapsible1Open(e.detail.open)}
        >
          <span slot="summary">First Collapsible</span>
          <p>This is the content of the first collapsible section.</p>
          <p>You can put any content here.</p>
        </ReactCollapsible>
        <ReactCollapsible
          open={collapsible2Open}
          onToggle={(e) => setCollapsible2Open(e.detail.open)}
        >
          <span slot="summary">Second Collapsible (Initially Open)</span>
          <p>This collapsible starts in the open state.</p>
        </ReactCollapsible>
      </section>
      <section className="mbe4">
        <h2>Fieldset</h2>
        <ReactFieldset legend="Personal Information">
          <div className="mbe4">First Name: John</div>
          <div className="mbe4">Last Name: Doe</div>
        </ReactFieldset>
        <ReactFieldset legend="Shipping Address" bordered>
          <div className="mbe4">Street: 123 Main St</div>
          <div className="mbe4">City: San Francisco</div>
        </ReactFieldset>
      </section>
      <section className="mbe4">
        <h2>ProgressRing</h2>
        <ReactProgressRing className='mie2' value={75} />
        <ReactProgressRing className='mie2' value={50} variant="success" />
        <ReactProgressRing className='mie2' value={25} size="large" />
      </section>
      <section className="mbe4">
        <h2>Flex</h2>
        <ReactFlexRow style={{ "--flex-gap": "1rem" } as React.CSSProperties}>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
        </ReactFlexRow>
      </section>
      <section className="mbe4">
        <h2>Radio</h2>
        <ReactFieldset legend="Choose your plan">
          <ReactRadio
            className='mie2'
            name="plan"
            value="free"
            labelText="Free Plan"
          />
          <ReactRadio
            className='mie2'
            name="plan"
            value="pro"
            labelText="Pro Plan"
            checked
          />
          <ReactRadio
            className='mie2'
            name="plan"
            value="enterprise"
            labelText="Enterprise Plan"
          />
        </ReactFieldset>
      </section>
      <section className="mbe4">
        <h2>Checkbox</h2>
        <ReactFieldset legend="Select your preferences">
          <ReactCheckbox
            className="mie4"
            labelText="Receive newsletter"
            checked={checkbox1}
            onChange={(e) => setCheckbox1((e.target as HTMLInputElement).checked)}
          />
          <ReactCheckbox
            className="mie4"
            labelText="Enable notifications"
            checked={checkbox2}
            onChange={(e) => setCheckbox2((e.target as HTMLInputElement).checked)}
          />
          <ReactCheckbox
            className="mie4"
            labelText="Agree to terms"
            checked={checkbox3}
            onChange={(e) => setCheckbox3((e.target as HTMLInputElement).checked)}
          />
        </ReactFieldset>
      </section>
      <section className="mbe4">
        <h2>Combobox</h2>
        <ReactCombobox
          value={selectedState}
          options={stateOptions}
          label="Select State"
          placeholder="Choose a state..."
          onChange={(e) => setSelectedState(e.detail.value)}
        />
      </section>
      <section className="mbe4">
        <h2>Mark</h2>
        <div className="mbe4">
          <p>
            This is some text with a <ReactMark variant="success">statically highlighted part</ReactMark> inside it.
          </p>
        </div>
        <div className="mbe4">
          <ReactInput
            value={searchTerm}
            onInput={(e) => setSearchTerm((e.target as HTMLInputElement).value)}
            label="Enter text to highlight"
            type="text"
          />
        </div>
        <div className="mbe4">
          <ReactCheckbox
            className="mie4"
            labelText="Match all occurrences"
            checked={markMatchAll}
            onChange={(e) => setMarkMatchAll((e.target as HTMLInputElement).checked)}
          />
          <ReactCheckbox
            className="mie4"
            labelText="Case sensitive"
            checked={markCaseSensitive}
            onChange={(e) => setMarkCaseSensitive((e.target as HTMLInputElement).checked)}
          />
        </div>
        <p>
          <ReactMark
            search={searchTerm}
            matchAll={markMatchAll}
            caseSensitive={markCaseSensitive}
            variant="warning"
          >
            The quick brown fox jumps over the lazy dog. The lazy fox was not the same as the other fox. FOX appears in different cases.
          </ReactMark>
        </p>
      </section>
      <section className="mbe4">
        <h2>CopyButton</h2>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <ReactCopyButton
            text="npm install agnosticui-core"
            label="Copy install command"
          />
          <ReactCopyButton
            text="console.log('Hello, AgnosticUI!');"
            label="Copy code snippet"
            successLabel="Code copied!"
            onCopy={(e) => console.log('Copied:', e.detail?.text)}
          />
          <ReactCopyButton
            text="https://agnosticui.com"
            label="Copy URL"
            variant="primary"
          />
        </div>
      </section>
      <section className="mbe4">
        <h2>Menu</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <ReactMenuButton
            menuVariant="chevron"
            size="md"
            onMenuSelect={(e) => console.log('Selected:', e.detail.value)}
          >
            Menu
            <ReactMenu slot="menu" ariaLabel="Menu options">
              <ReactMenuItem value="edit" onMenuSelect={(e) => console.log('Edit selected')}>
                Edit
              </ReactMenuItem>
              <ReactMenuItem value="copy" onMenuSelect={(e) => console.log('Copy selected')}>
                Copy
              </ReactMenuItem>
              <ReactMenuItem value="paste" onMenuSelect={(e) => console.log('Paste selected')}>
                Paste
              </ReactMenuItem>
              <ReactMenuSeparator />
              <ReactMenuItem value="delete" onMenuSelect={(e) => console.log('Delete selected')}>
                Delete
              </ReactMenuItem>
            </ReactMenu>
          </ReactMenuButton>

          <ReactMenuButton
            menuVariant="button"
            size="md"
            buttonVariant="primary"
          >
            Actions
            <ReactMenu slot="menu" ariaLabel="Action menu">
              <ReactMenuItem value="new">New File</ReactMenuItem>
              <ReactMenuItem value="open">Open File</ReactMenuItem>
              <ReactMenuItem value="save">Save</ReactMenuItem>
            </ReactMenu>
          </ReactMenuButton>

          <ReactMenuButton
            menuVariant="icon"
            size="md"
            ghost
            unicode="⋮"
            ariaLabel="More options"
          >
            <ReactMenu slot="menu" ariaLabel="More options menu">
              <ReactMenuItem value="settings">Settings</ReactMenuItem>
              <ReactMenuItem value="profile">Profile</ReactMenuItem>
              <ReactMenuSeparator />
              <ReactMenuItem value="logout">Logout</ReactMenuItem>
            </ReactMenu>
          </ReactMenuButton>
        </div>
      </section>
      <section className="mbe4">
        <h2>Timeline</h2>
        <h3>Horizontal Timeline</h3>
        <ReactTimeline orientation="horizontal">
          <ReactTimelineItem>
            <div slot="ag-start">2023-01-01</div>
            <div slot="ag-marker">
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--ag-primary)' }}></div>
            </div>
            <div slot="ag-end">Step 1 Completed</div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">2023-02-01</div>
            <div slot="ag-marker">
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--ag-primary)' }}></div>
            </div>
            <div slot="ag-end">Step 2 In Progress</div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">2023-03-01</div>
            <div slot="ag-marker">
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--ag-border)' }}></div>
            </div>
            <div slot="ag-end">Step 3 Planned</div>
          </ReactTimelineItem>
        </ReactTimeline>

        <h3 className="mbs4">Vertical Timeline</h3>
        <ReactTimeline orientation="vertical" variant="primary">
          <ReactTimelineItem>
            <div slot="ag-start">09:00 AM</div>
            <div slot="ag-marker">
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--ag-primary)' }}></div>
            </div>
            <div slot="ag-end">
              <strong>Breakfast</strong>
              <p style={{ margin: 0 }}>Oatmeal and coffee</p>
            </div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">10:00 AM</div>
            <div slot="ag-marker">
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--ag-primary)' }}></div>
            </div>
            <div slot="ag-end">
              <strong>Meeting</strong>
              <p style={{ margin: 0 }}>Daily standup</p>
            </div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">02:00 PM</div>
            <div slot="ag-marker">
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--ag-primary)' }}></div>
            </div>
            <div slot="ag-end">
              <strong>Code Review</strong>
              <p style={{ margin: 0 }}>Review pending PRs</p>
            </div>
          </ReactTimelineItem>
        </ReactTimeline>
      </section>
      <section className="mbe4">
        <h2>Dialog</h2>
        <ReactButton onClick={() => setDialogOpen(true)}>Open Dialog</ReactButton>
        <ReactDialog
          open={dialogOpen}
          heading="Dialog Example"
          description="This is a dialog with a heading and description"
          showCloseButton
          onDialogClose={() => setDialogOpen(false)}
        >
          <p>This is the dialog content. You can put any content here.</p>
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end', marginTop: '1rem' }}>
            <ReactButton onClick={() => setDialogOpen(false)}>Cancel</ReactButton>
            <ReactButton variant="primary" onClick={() => setDialogOpen(false)}>Confirm</ReactButton>
          </div>
        </ReactDialog>
      </section>
      <section className="mbe4">
        <h2>Toast</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <ReactButton onClick={() => setToastOpen(true)}>Show Toast</ReactButton>
          <ReactToast
            open={toastOpen}
            type="success"
            duration={3000}
            onToastClose={() => setToastOpen(false)}
          >
            Operation completed successfully!
          </ReactToast>
        </div>
      </section>
      <section className="mbe4">
        <h2>MessageBubble</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px' }}>
          <ReactMessageBubble
            from="me"
            message="Hello! This is a message from the user."
            author="Me"
            time="10:30 AM"
          />
          <ReactMessageBubble
            from="them"
            message="Hi there! This is a response message."
            author="John Doe"
            time="10:31 AM"
          />
          <ReactMessageBubble
            from="me"
            message="This is a longer message to demonstrate how the message bubble handles multiple lines of text. It should wrap nicely."
            author="Me"
            time="10:32 AM"
          />
        </div>
      </section>
      <section className="mbe4">
        <h2>Divider</h2>
        <div>
          <p>Content above divider</p>
          <ReactDivider />
          <p>Content below divider</p>
        </div>
        <div className="mbs4">
          <p>Divider with text</p>
          <ReactDivider>OR</ReactDivider>
          <p>More content</p>
        </div>
      </section>
      <section className="mbe4">
        <h2>Pagination</h2>
        <ReactPagination
          current={currentPage}
          totalPages={10}
          onPageChange={(e) => {
            setCurrentPage(e.detail.page);
            console.log('Page changed to:', e.detail.page);
          }}
        />
        <div className="mbs4">
          <ReactPagination
            current={1}
            totalPages={5}
            bordered
            firstLastNavigation
          />
        </div>
      </section>
      <section className="mbe4">
        <h2>Toggle</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <ReactToggle
            label="Enable notifications"
            checked={toggleChecked}
            onToggleChange={(e) => {
              setToggleChecked(e.detail.checked);
              console.log('Toggle changed:', e.detail.checked);
            }}
          />
          <ReactToggle label="Success variant" variant="success" checked />
          <ReactToggle label="Danger variant" variant="danger" checked />
          <ReactToggle label="Small size" size="sm" />
          <ReactToggle label="Large size" size="lg" />
          <ReactToggle label="Disabled toggle" disabled />
        </div>
      </section>
      <section className="mbe4">
        <h2>Drawer</h2>
        <ReactButton onClick={() => setDrawerOpen(true)}>Open Drawer</ReactButton>
        <ReactDrawer
          open={drawerOpen}
          position="end"
          heading="Settings Drawer"
          showCloseButton
          onDrawerClose={() => setDrawerOpen(false)}
        >
          <div>
            <h4>Preferences</h4>
            <p>This is drawer content. You can put any content here.</p>
            <div style={{ marginTop: '1rem' }}>
              <ReactToggle label="Enable dark mode" />
              <ReactToggle label="Enable notifications" />
            </div>
          </div>
        </ReactDrawer>
      </section>
      <section className="mbe4">
        <h2>Tooltip</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <ReactTooltip content="This is helpful information">
            <ReactButton>Hover me</ReactButton>
          </ReactTooltip>
          <ReactTooltip content="Appears on the right" placement="right">
            <ReactButton>Right tooltip</ReactButton>
          </ReactTooltip>
          <ReactTooltip content="Click to toggle" trigger="click">
            <ReactButton>Click trigger</ReactButton>
          </ReactTooltip>
          <ReactTooltip content="Edit item">
            <ReactIconButton label="Edit">
              <Settings size={18} />
            </ReactIconButton>
          </ReactTooltip>
        </div>
      </section>
      <section className="mbe4">
        <h2>EmptyState</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <ReactEmptyState
            title="No items found"
            subtitle="Get started by creating your first item"
          />
          <ReactEmptyState
            title="No projects yet"
            subtitle="Create your first project to get started"
            buttonText="New Project"
          />
          <ReactEmptyState
            title="No notifications"
            subtitle="You're all caught up!"
            size="sm"
          />
        </div>
      </section>
      <section className="mbe4">
        <h2>Progress</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <ReactProgress value={50} max={100} label="Loading..." />
          <ReactProgress value={75} max={100} label="Uploading..." />
          <ReactProgress label="Processing..." />
          <ReactProgress value={30} max={100} label="Download progress" size="large" />
        </div>
      </section>
      <section className="mbe4">
        <h2>VisuallyHidden</h2>
        <div>
          <p>VisuallyHidden is used for accessibility - content is hidden visually but available to screen readers.</p>
          <ReactButton>
            <Settings size={18} />
            <ReactVisuallyHidden>Settings</ReactVisuallyHidden>
          </ReactButton>
        </div>
      </section>
      <section className="mbe4">
        <h2>AspectRatio</h2>
        <ReactAspectRatio width={16} height={9}>
          <div style={{ background: '#ccc', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            16:9 Aspect Ratio
          </div>
        </ReactAspectRatio>
      </section>
      <section className="mbe4">
        <h2>Header</h2>
        <ReactHeader>
          <a
            href="/"
            slot="logo"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: 700,
              fontSize: "1.25rem",
            }}
          >
            MyBrand
          </a>
          <nav>
            <ul
              style={{
                display: "flex",
                gap: "2rem",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </ReactHeader>
      </section>
      <section className="mbe4">
        <h2>Rating</h2>
        <ReactRating value={3} />
        <ReactRating value={2.5} precision="half" />
        <ReactRating value={4} variant="success" />
      </section>
      <section className="mbe4" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <h2>Avatar</h2>
        <ReactAvatar className='mie2' text="AB" />
        <ReactAvatar className='mie2'
          imgSrc="https://testingbot.com/free-online-tools/random-avatar/100"
          imgAlt="User name"
        />
        <ReactAvatar className='mie2' size="lg" variant="info" text="CD" />
      </section>
      <section className="mbe4">
        <h2>ScrollProgress</h2>
        <ReactScrollProgress mode="bar" orientation="top" />
      </section>
      <section className="mbe4">
        <h2>BadgeFx</h2>
        <ReactBadgeFx fx="bounce" fxSpeed="md" className="mie4">Bounce</ReactBadgeFx>
        <ReactBadgeFx fx="pulse" fxSpeed="md" className="mie4" variant="success">Pulse</ReactBadgeFx>
        <ReactBadgeFx fx="shimmer" fxSpeed="md" className="mie4" variant="info">Shimmer</ReactBadgeFx>
        <ReactBadgeFx fx="glow" fxSpeed="md" className="mie4" variant="warning">Glow</ReactBadgeFx>
      </section>
      <section className="mbe4">
        <h2>IconButtonFx</h2>
        <ReactIconButtonFx fx="pulse" fxEase="spring-md" variant="primary" label="Like" className="mie4">
          <Heart />
        </ReactIconButtonFx>
        <ReactIconButtonFx fx="bounce" variant="success" label="Download" className="mie4">
          <Download />
        </ReactIconButtonFx>
        <ReactIconButtonFx fx="wobble" variant="warning" label="Notifications" className="mie4">
          <Bell />
        </ReactIconButtonFx>
        <ReactIconButtonFx fx="shake" variant="danger" label="Delete" className="mie4">
          <Trash2 />
        </ReactIconButtonFx>
      </section>
      <section className="mbe4">
        <h2>IconButton</h2>
        <ReactIconButton label="Settings" className="mie4">
          <Settings size={18} />
        </ReactIconButton>
        <ReactIconButton label="Delete" variant="danger" className="mie4">
          <Trash2 size={18} />
        </ReactIconButton>
        <ReactIconButton label="Save" variant="primary" className="mie4">
          <Save size={18} />
        </ReactIconButton>
        <ReactIconButton label="Small" size="sm" className="mie4">
          <Heart size={16} />
        </ReactIconButton>
        <ReactIconButton label="Large" size="lg" className="mie4">
          <Heart size={20} />
        </ReactIconButton>
      </section>
      <section className="mbe4">
        <h2>ScrollToButton</h2>
        <ReactScrollToButton
          label="Back to Top"
          showLabel={true}
          scrollThreshold={400}
        />
      </section>
      <section className="mbe4">
        <h2>Select</h2>
        <div className="mbe4">
          <label htmlFor="tennis">Greatest Tennis Player</label>
          <ReactSelect id="tennis" name="tennis">
            <option value="">Select a player</option>
            <option value="serena">Serena Williams</option>
            <option value="roger">Roger Federer</option>
            <option value="rafa">Rafael Nadal</option>
          </ReactSelect>
        </div>
        <div className="mbe4">
          <label htmlFor="small-select">Small Select</label>
          <ReactSelect id="small-select" size="small">
            <option value="">Choose size</option>
            <option value="xs">Extra Small</option>
            <option value="s">Small</option>
            <option value="m">Medium</option>
          </ReactSelect>
        </div>
        <div className="mbe4">
          <label htmlFor="large-select">Large Select</label>
          <ReactSelect id="large-select" size="large">
            <option value="">Choose size</option>
            <option value="l">Large</option>
            <option value="xl">Extra Large</option>
          </ReactSelect>
        </div>
      </section>
      <section className="mbe4">
        <h2>Image</h2>
        <ReactImage
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600"
          alt="A beautiful landscape"
          aspectRatio="4/3"
          style={{ maxWidth: '800px', width: '100%' }}
        />
      </section>
      <section className="mbe4">
        <h2>Sidebar - Comprehensive Example</h2>
        <p style={{ marginBottom: '1rem', color: 'var(--ag-text-secondary)' }}>
          Features: Expanded/Collapsed modes, Submenus, Rotated chevron, Header slots, Popover for collapsed mode
        </p>
        <div className="sidebar-demo-container">
          <ReactSidebar
            open={sidebarOpen}
            collapsed={sidebarCollapsed}
            showMobileToggle={true}
            onToggle={(open) => setSidebarOpen(open)}
            onCollapse={(collapsed) => setSidebarCollapsed(collapsed)}
          >
            {/* Header with logo/title */}
            <h2 slot="ag-header-start" className="sidebar-demo-header">
              Dashboard
            </h2>

            {/* Custom collapse toggle button */}
            <button
              type="button"
              slot="ag-header-toggle"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="sidebar-toggle-btn"
              aria-label="Toggle sidebar"
            >
              <PanelLeftClose size={20} />
            </button>

            {/* Navigation items */}
            <ReactSidebarNav>
              {/* Simple navigation item - Active */}
              <ReactSidebarNavItem>
                <button type="button" className="nav-button active" aria-current="page">
                  <Home size={20} />
                  <span className="nav-label">Dashboard</span>
                </button>
              </ReactSidebarNavItem>

              {/* Navigation item with submenu */}
              <ReactSidebarNavItem>
                {/* Button for expanded mode with rotating chevron */}
                <button
                  type="button"
                  className="nav-button nav-button-expanded"
                  aria-expanded={projectsOpen ? "true" : "false"}
                  onClick={handleProjectsToggle}
                >
                  <Folder size={20} />
                  <span className="nav-label">Projects</span>
                  <span className="chevron"><ChevronRight size={16} /></span>
                </button>

                {/* Popover for collapsed mode - shows when sidebar is collapsed */}
                <ReactPopover
                  className="nav-button-collapsed"
                  placement="right-start"
                  triggerType="click"
                  distance={8}
                  arrow={true}
                >
                  <button slot="trigger" type="button" className="nav-button">
                    <Folder size={20} />
                    <span className="nav-label">Projects</span>
                  </button>
                  <ReactSidebarNavPopoverSubmenu slot="content" className="nav-popover-submenu">
                    <a href="#project-alpha" className="nav-sublink">Project Alpha</a>
                    <a href="#project-beta" className="nav-sublink">Project Beta</a>
                    <a href="#project-gamma" className="nav-sublink">Project Gamma</a>
                  </ReactSidebarNavPopoverSubmenu>
                </ReactPopover>

                {/* Inline submenu for expanded mode */}
                <ReactSidebarNavSubmenu>
                  <a className="nav-sublink" href="#project-alpha">Project Alpha</a>
                  <a className="nav-sublink" href="#project-beta">Project Beta</a>
                  <a className="nav-sublink" href="#project-gamma">Project Gamma</a>
                </ReactSidebarNavSubmenu>
              </ReactSidebarNavItem>

              {/* Another navigation item with submenu */}
              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button nav-button-expanded"
                  aria-expanded={teamOpen ? "true" : "false"}
                  onClick={handleTeamToggle}
                >
                  <Users size={20} />
                  <span className="nav-label">Team</span>
                  <span className="chevron"><ChevronRight size={16} /></span>
                </button>

                <ReactPopover
                  className="nav-button-collapsed"
                  placement="right-start"
                  triggerType="click"
                  distance={8}
                  arrow={true}
                >
                  <button slot="trigger" type="button" className="nav-button">
                    <Users size={20} />
                    <span className="nav-label">Team</span>
                  </button>
                  <ReactSidebarNavPopoverSubmenu slot="content" className="nav-popover-submenu">
                    <a href="#team-members" className="nav-sublink">Members</a>
                    <a href="#team-roles" className="nav-sublink">Roles</a>
                    <a href="#team-settings" className="nav-sublink">Settings</a>
                  </ReactSidebarNavPopoverSubmenu>
                </ReactPopover>

                <ReactSidebarNavSubmenu>
                  <a className="nav-sublink" href="#team-members">Members</a>
                  <a className="nav-sublink" href="#team-roles">Roles</a>
                  <a className="nav-sublink" href="#team-settings">Settings</a>
                </ReactSidebarNavSubmenu>
              </ReactSidebarNavItem>

              {/* Simple navigation items */}
              <ReactSidebarNavItem>
                <button type="button" className="nav-button">
                  <FileText size={20} />
                  <span className="nav-label">Documents</span>
                </button>
              </ReactSidebarNavItem>

              <ReactSidebarNavItem>
                <button type="button" className="nav-button">
                  <BarChart3 size={20} />
                  <span className="nav-label">Analytics</span>
                </button>
              </ReactSidebarNavItem>

              <ReactSidebarNavItem>
                <button type="button" className="nav-button">
                  <Settings size={20} />
                  <span className="nav-label">Settings</span>
                </button>
              </ReactSidebarNavItem>
            </ReactSidebarNav>

            {/* Footer */}
            <div slot="ag-footer" className="sidebar-demo-footer">
              © 2024 AgnosticUI
            </div>
          </ReactSidebar>

          {/* Main content area */}
          <main className="sidebar-demo-main">
            <h1>Main Content Area</h1>
            <p>
              Click the toggle button in the sidebar header to switch between expanded and collapsed modes.
            </p>
            <p>
              <strong>Expanded mode:</strong> Shows labels and inline submenus with rotating chevrons.<br />
              <strong>Collapsed mode:</strong> Icon-only rail with popover submenus on hover/click.
            </p>
          </main>
        </div>
      </section>
    </>
  )
}

export default App
