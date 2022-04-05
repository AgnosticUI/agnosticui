import 'agnostic-react/dist/common.min.css';
import 'agnostic-react/dist/esm/index.css';
import {
  Divider,
  Button
} from "agnostic-react";

export default function React() {
  return (
    <section className="mbe40">
      <div className="h4 mbe32 flex items-center">
        <img width="24" height="24" src="/assets/React-icon.svg" alt="React logo" className="mie12" />React Disclose
      </div>
      <Divider />
      <div class="mbs16 mbe16">
        <Divider>Content</Divider>
      </div>
      <div class="mbs16 mbe16">
        <Divider justify="start">Start</Divider>
      </div>
      <div class="mbs16 mbe16">
        <Divider justify="end">End</Divider>
      </div>
      <div class="mbs16 mbe16">
        <Divider type="success">Success</Divider>
      </div>
      <div class="mbs16 mbe16">
        <Divider type="info">Info</Divider>
      </div>
      <div class="mbs16 mbe16">
        <Divider type="warning">Warning</Divider>
      </div>
      <div class="mbs16 mbe16">
        <Divider type="error">Error</Divider>
      </div>
      <div class="mbs16 mbe16">
        <Divider size="small">Small</Divider>
      </div>
      <div class="mbs16 mbe16">
        <Divider size="large">Large</Divider>
      </div>
      <div class="mbs16 mbe16">
        <Divider size="xlarge">XLarge</Divider>
      </div>
      <div class="mbs16 mbe16">
        <Divider type="info" size="small"><Button mode="primary" isBordered isRounded>Go</Button></Divider>
      </div>
      <div className="flex mbs40 mbe48">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Divider isVertical>Yes</Divider>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        <Divider isVertical>Sir!</Divider>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>
  );
}
