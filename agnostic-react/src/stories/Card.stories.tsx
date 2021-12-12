import { Card } from '../Card';

export default {
  title: 'AG—React (Beta)/Card',
  component: Card,
};

export const All = () => (
  <>
    <Card>
      <>
        <div style={{ padding: 24 }}>Default</div>
        <div style={{ padding: 24 }}>Card</div>
      </>
    </Card>
    <div className="mbe24" />
    <Card isBorder>
      <>
        <div style={{ padding: 24 }}>Border</div>
        <div style={{ padding: 24 }}>Card</div>
      </>
    </Card>
    <div className="mbe24" />
    <Card isBorder isRounded>
      <>
        <div style={{ padding: 24 }}>Rounded with border</div>
        <div style={{ padding: 24 }}>Card</div>
      </>
    </Card>
    <div className="mbe24" />
    <Card isStacked isBorder>
      <>
        <div style={{ padding: 24 }}>Stacked (direction column)</div>
        <div style={{ padding: 24 }}>Card</div>
      </>
    </Card>
    <div className="mbe24" />
    <Card isStacked isShadow>
      <>
        <div style={{ padding: 24 }}>Stacked with shadow</div>
        <div style={{ padding: 24 }}>Card</div>
      </>
    </Card>
    <div className="mbe24" />
    <Card isAnimated isShadow isStacked>
      <>
        <div style={{ padding: 24 }}>Animated, stacked, with shadow</div>
        <div style={{ padding: 24 }}>Card</div>
      </>
    </Card>
    <div className="mbe24" />
    <Card type="success" isStacked>
      <>
        <div style={{ padding: 24 }}>Success</div>
        <div style={{ padding: 24 }}>Card</div>
      </>
    </Card>
    <div className="mbe24" />
    <Card type="success" isRounded isStacked>
      <>
        <div style={{ padding: 24 }}>Success rounded</div>
        <div style={{ padding: 24 }}>Card</div>
      </>
    </Card>
    <div className="mbe24" />
    <Card type="info" isStacked>
      <>
        <div style={{ padding: 24 }}>Info</div>
        <div style={{ padding: 24 }}>Card</div>
      </>
    </Card>
    <div className="mbe24" />
    <Card type="warning" isStacked>
      <>
        <div style={{ padding: 24 }}>Warning</div>
        <div style={{ padding: 24 }}>Card</div>
      </>
    </Card>
    <div className="mbe24" />
    <Card type="error" isStacked>
      <>
        <div style={{ padding: 24 }}>Error</div>
        <div style={{ padding: 24 }}>Card</div>
      </>
    </Card>
    <div className="mbe24" />
    <Card isSkinned={false}>
      <>
        <div style={{ padding: 24 }}>Base Card</div>
        <div style={{ padding: 24 }}>No Skin</div>
      </>
    </Card>
    <div className="mbe24" />
    <Card css="foo-bar">
      <>
        <div style={{ padding: 24 }}>Custom CSS Class</div>
        <div style={{ padding: 24 }}>Inspect to see the class: foo-bar</div>
      </>
    </Card>
  </>
);
