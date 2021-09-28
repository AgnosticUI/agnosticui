import { Card } from '../Card';

export default {
  title: 'AG—React/Card',
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
    <Card isStacked>
      <>
        <div style={{ padding: 24 }}>Stacked</div>
        <div style={{ padding: 24 }}>Card</div>
      </>
    </Card>
    <Card isAnimated isStacked>
      <>
        <div style={{ padding: 24 }}>Animated & Stacked</div>
        <div style={{ padding: 24 }}>Card</div>
      </>
    </Card>
    <Card isSkinned={false}>
      <>
        <div style={{ padding: 24 }}>Base Card</div>
        <div style={{ padding: 24 }}>No Skin</div>
      </>
    </Card>
    <Card css="foo-bar">
      <>
        <div style={{ padding: 24 }}>Custom CSS Class</div>
        <div style={{ padding: 24 }}>Inspect to see foo-bar</div>
      </>
    </Card>
  </>
);
