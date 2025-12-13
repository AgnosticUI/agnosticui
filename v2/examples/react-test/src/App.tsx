import './App.css'
import { ReactButton } from './components/ag/Button/react/ReactButton';
import { ReactBreadcrumb, type BreadcrumbItem } from './components/ag/Breadcrumb/react/ReactBreadcrumb';
import { ReactBadge } from './components/ag/Badge/react/ReactBadge';
import { ReactIcon } from './components/ag/Icon/react/ReactIcon';
import { Mail, Heart, Download, Bell, Trash2, Settings, Save } from 'lucide-react';
import { ReactTag } from './components/ag/Tag/react/ReactTag';
import { ReactAlert } from './components/ag/Alert/react/ReactAlert';
import { ReactAccordion, AccordionItem, ItemHeader, ItemContent } from './components/ag/Accordion/react/ReactAccordion';
import { ReactFieldset } from './components/ag/Fieldset/react/ReactFieldset';
import { ReactProgressRing } from './components/ag/ProgressRing/react/ReactProgressRing';
import { ReactFlexRow } from './components/ag/Flex/react/ReactFlexRow';
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

function App() {
  const items: BreadcrumbItem[] = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Products', href: '#products' },
  ];

  const handleBreadcrumbClick = (event: CustomEvent) => {
    console.log(
      `ReactBreadcrumb -> handleClick -- label: ${event.detail.item.label}, href: ${event.detail.item.href}`
    );
  };
  return (
    <>
      <h1>hello</h1>
      <section className="mbe4">
        <ReactButton variant='primary'>Let's Go1</ReactButton>
      </section>
      <section className="mbe4">
        <ReactBreadcrumb items={items} onBreadcrumbClick={handleBreadcrumbClick} />
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
        <ReactProgressRing value={75} />
        <ReactProgressRing value={50} variant="success" />
        <ReactProgressRing value={25} size="large" />
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
            name="plan"
            value="free"
            labelText="Free Plan"
          />
          <ReactRadio
            name="plan"
            value="pro"
            labelText="Pro Plan"
            checked
          />
          <ReactRadio
            name="plan"
            value="enterprise"
            labelText="Enterprise Plan"
          />
        </ReactFieldset>
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
        <ReactAvatar text="AB" />
        <ReactAvatar
          imgSrc="https://testingbot.com/free-online-tools/random-avatar/100"
          imgAlt="User name"
        />
        <ReactAvatar size="lg" variant="info" text="CD" />
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
          style={{ maxWidth: '400px', width: '100%' }}
        />
      </section>
    </>
  )
}

export default App
