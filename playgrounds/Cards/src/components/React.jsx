import "agnostic-react/dist/esm/index.css";
import { Card } from "agnostic-react";

export default function React() {
  return (
    <section className="mbe40">
      <div className="h4 mbe32 flex items-center">
        <img width="24" height="24" src="/assets/React-icon.svg" alt="React logo" className="mie12" />React Cards
      </div>
      <Card isBorder>
        <>
          <div className="p16">Border Card</div>
          <div className="p16 flex-grow-1 flex-shrink-1" style={{flexBasis: "50ch"}}>
            The card comes with minimal
            <span className="quoted">skinning css</span>
            and no padding (the padding you see here is from the demo styles).
            By default Cards have a flex direction of <i>row</i>, so each child
            with a <i>flex</i> rule will get placed as a sort of column
            in the row (until the viewport is shrunk below a size that can support
            the content's flex-basis; under that it will wrap and thus stack).
          </div>
        </>
      </Card>
      <div className="mbe24" />
      <Card isBorder isRounded>
        <>
          <div className="p16">Border & Rounded</div>
          <div className="p16 flex-grow-1 flex-shrink-1" style={{flexBasis: "50ch"}}>
            The card comes with minimal
            <span className="quoted">skinning css</span>
            and no padding (the padding you see here is from the demo styles).
            By default Cards have a flex direction of <i>row</i>, so each child
            with a <i>flex</i> rule will get placed as a sort of column
            in the row (until the viewport is shrunk below a size that can support
            the content's flex-basis; under that it will wrap and thus stack).
          </div>
        </>
      </Card>
      <div className="mbe24" />
      <Card isBorder isRounded>
        <>
          <div className="p16">Rounded with border</div>
          <div className="p16">Card</div>
        </>
      </Card>
      <div className="mbe24" />
      <Card isStacked isBorder>
        <>
          <div className="p16">Stacked (direction column)</div>
          <div className="p16">Card</div>
        </>
      </Card>
      <div className="mbe24" />
      <Card isStacked isShadow>
        <>
          <div className="p16">Stacked with shadow</div>
          <div className="p16">Card</div>
        </>
      </Card>
      <div className="mbe24" />
      <Card isAnimated isShadow isStacked>
        <>
          <div className="p16">Animated, stacked, with shadow</div>
          <div className="p16">Card</div>
        </>
      </Card>
      <div className="mbe24" />
      <Card type="success" isStacked>
        <>
          <div className="p16">Success</div>
          <div className="p16">Card</div>
        </>
      </Card>
      <div className="mbe24" />
      <Card type="success" isRounded isStacked>
        <>
          <div className="p16">Success rounded</div>
          <div className="p16">Card</div>
        </>
      </Card>
      <div className="mbe24" />
      <Card type="info" isStacked>
        <>
          <div className="p16">Info</div>
          <div className="p16">Card</div>
        </>
      </Card>
      <div className="mbe24" />
      <Card type="warning" isStacked>
        <>
          <div className="p16">Warning</div>
          <div className="p16">Card</div>
        </>
      </Card>
      <div className="mbe24" />
      <Card type="error" isStacked>
        <>
          <div className="p16">Error</div>
          <div className="p16">Card</div>
        </>
      </Card>
      <div className="mbe24" />
      <Card isSkinned={false}>
        <>
          <div className="p16">Base Card</div>
          <div className="p16">No Skin</div>
        </>
      </Card>
      <div className="mbe24" />
      <Card css="foo-bar">
        <>
          <div className="p16">Custom CSS Class</div>
          <div className="p16">Inspect to see the class: foo-bar</div>
        </>
      </Card>      
    </section>
  );
}
