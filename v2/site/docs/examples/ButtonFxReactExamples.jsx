import { ReactButtonFx } from "agnosticui-core/button-fx/react";
import { ReactIcon } from "agnosticui-core/icon/react";
import { ReactAlert } from "agnosticui-core/alert/react";
import { ReactVisuallyHidden } from "agnosticui-core/visually-hidden/react";
import { Mail, Trash2, ShoppingCart, Database, Bomb } from "lucide-react";

export default function ButtonFxReactExamples() {
  return (
    <section>
      {/* Hover Effects */}
      <div className="mbe4">
        <h2>Hover Effects</h2>
        <p className="mbe2">These effects trigger on hover</p>
      </div>
      <div className="stacked-mobile mbe6">
        <ReactButtonFx
          fx="bounce"
          fxEase="spring-md"
          title="Bounce"
          variant="primary"
          shape="rounded"
        >
          Bounce
        </ReactButtonFx>
        <ReactButtonFx
          fx="pulse"
          fxEase="spring-md"
          title="Pulse"
          variant="success"
          shape="rounded"
        >
          Pulse
        </ReactButtonFx>
        <ReactButtonFx
          fx="jelly"
          fxEase="spring-lg"
          fxSpeed="lg"
          title="Jelly button"
          variant="warning"
          shape="rounded"
        >
          Jelly
        </ReactButtonFx>
        <ReactButtonFx
          fx="grow"
          fxEase="spring-md"
          title="Grow button"
          variant="primary"
          shape="rounded"
        >
          Grow
        </ReactButtonFx>
        <ReactButtonFx
          fx="shrink"
          fxEase="spring-md"
          title="Shrink button"
          variant="secondary"
          shape="rounded"
        >
          Shrink
        </ReactButtonFx>
      </div>

      {/* Click Effects */}
      <div className="mbe4">
        <h2>Click Effects</h2>
        <p className="mbe2">These effects trigger on click/active state</p>
      </div>
      <div className="stacked-mobile mbe6">
        <ReactButtonFx
          fx="press-pop"
          fxEase="spring-sm"
          title="Press Pop"
          variant="primary"
          shape="rounded"
        >
          Press Pop
        </ReactButtonFx>
        <ReactButtonFx
          fx="press-pop"
          variant="monochrome"
          title="Send the email"
          shape="rounded-square"
          size="lg"
        >
          <ReactIcon noFill>
            <Mail size={24} />
          </ReactIcon>
          <ReactVisuallyHidden>Send the email</ReactVisuallyHidden>
        </ReactButtonFx>
        <ReactButtonFx
          fx="press-shadow"
          variant="warning"
          title="Press Shadow"
          shape="rounded"
        >
          Press Shadow
        </ReactButtonFx>
        <ReactButtonFx
          fx="press-shadow"
          variant="success"
          title="Press Shadow"
          shape="rounded"
        >
          Press Shadow
        </ReactButtonFx>
        <ReactButtonFx
          fx="press-shadow"
          variant="primary"
          title="Shopping cart button"
          shape="rounded-square"
          size="lg"
        >
          <ReactIcon noFill>
            <ShoppingCart size={24} />
          </ReactIcon>
          <ReactVisuallyHidden>Proceed to your cart.</ReactVisuallyHidden>
        </ReactButtonFx>
        <ReactButtonFx
          fx="press-shadow"
          variant="danger"
          title="Dangerous action button"
          shape="rounded-square"
          size="lg"
        >
          <ReactIcon noFill>
            <Bomb size={24} />
          </ReactIcon>
          <ReactVisuallyHidden>Do the dangerous thing</ReactVisuallyHidden>
        </ReactButtonFx>
      </div>

      {/* Background Effects */}
      <div className="mbe4">
        <h2>Background Effects</h2>
        <p className="mbe2">Effects that animate the button background</p>
      </div>
      <div className="stacked-mobile mbe6">
        <ReactButtonFx
          fx="bg-slide"
          fxSpeed="md"
          fxEase="ease-out"
          title="BG Slide"
          variant="primary"
          shape="rounded"
        >
          BG Slide
        </ReactButtonFx>
        <ReactButtonFx
          fx="side-slide"
          fxSpeed="md"
          fxEase="ease-out"
          variant="success"
          shape="rounded"
        >
          Side Slide
        </ReactButtonFx>
      </div>

      {/* Motion Effects */}
      <div className="mbe4">
        <h2>Motion Effects</h2>
        <p className="mbe2">Dynamic movement effects</p>
      </div>
      <div className="stacked-mobile mbe6">
        <ReactButtonFx
          fx="wobble"
          fxEase="spring-md"
          title="Wobble"
          variant="warning"
          shape="rounded"
        >
          Wobble
        </ReactButtonFx>
        <ReactButtonFx
          fx="shake"
          fxSpeed="sm"
          title="Shake"
          variant="danger"
          shape="rounded"
        >
          Shake
        </ReactButtonFx>
        <ReactButtonFx
          fx="push"
          fxEase="spring-sm"
          title="Push"
          variant="primary"
          shape="rounded"
        >
          Push
        </ReactButtonFx>
      </div>

      {/* Bordered Buttons */}
      <div className="mbe4">
        <h2>Bordered Buttons</h2>
        <p className="mbe2">Effects work with bordered button styles</p>
      </div>
      <div className="stacked-mobile mbe6">
        <ReactButtonFx
          fx="jelly"
          fxEase="spring-lg"
          fxSpeed="lg"
          title="Primary Bordered"
          variant="primary"
          bordered
          shape="rounded"
        >
          Primary
        </ReactButtonFx>
        <ReactButtonFx
          fx="jelly"
          fxSpeed="lg"
          fxEase="spring-lg"
          title="Success Bordered"
          variant="success"
          bordered
          shape="capsule"
        >
          Capsule
        </ReactButtonFx>
        <ReactButtonFx
          fx="jelly"
          fxEase="spring-lg"
          fxSpeed="lg"
          title="Monochrome Bordered"
          variant="monochrome"
          bordered
          shape="rounded-square"
        >
          <ReactIcon noFill>
            <Trash2 size={24} />
          </ReactIcon>
          <ReactVisuallyHidden>Toss it in the trash</ReactVisuallyHidden>
        </ReactButtonFx>
        <ReactButtonFx
          fx="jelly"
          fxSpeed="lg"
          fxEase="spring-lg"
          title="Danger Bordered"
          variant="danger"
          bordered
          shape="rounded-square"
        >
          <ReactIcon noFill>
            <Database size={24} />
          </ReactIcon>
          <ReactVisuallyHidden>Write the SQL to the Database</ReactVisuallyHidden>
        </ReactButtonFx>
        <ReactButtonFx
          fx="jelly"
          fxEase="spring-lg"
          fxSpeed="lg"
          title="Warning Bordered"
          variant="warning"
          bordered
          shape="rounded-square"
        >
          <ReactIcon noFill>
            <Bomb size={24} />
          </ReactIcon>
          <ReactVisuallyHidden>Warning - you better be careful.</ReactVisuallyHidden>
        </ReactButtonFx>
      </div>

      {/* Composite Effect */}
      <div className="mbe4">
        <h2>Composite Effect</h2>
        <p className="mbe2">Special multi-stage animation</p>
      </div>
      <div className="stacked-mobile mbe6">
        <ReactButtonFx
          fx="pulse-wobble"
          fxSpeed="xl"
          title="Pulse → Wobble"
          variant="primary"
          shape="rounded"
        >
          Pulse → Wobble
        </ReactButtonFx>
        <ReactButtonFx
          fx="pulse-wobble"
          fxSpeed="xl"
          title="Pulse → Wobble"
          variant="success"
          shape="rounded"
        >
          Pulse → Wobble
        </ReactButtonFx>
        <ReactButtonFx
          fx="pulse-wobble"
          fxSpeed="xl"
          title="Pulse → Wobble"
          variant="monochrome"
          shape="rounded"
        >
          Pulse → Wobble
        </ReactButtonFx>
        <ReactButtonFx
          fx="pulse-wobble"
          fxSpeed="xl"
          title="Pulse → Wobble"
          variant="danger"
          shape="rounded"
        >
          Pulse → Wobble
        </ReactButtonFx>
      </div>

      {/* Speed Variations */}
      <div className="mbe4">
        <h2>Speed Variations</h2>
        <p className="mbe2">Control animation speed with the fxSpeed prop</p>
      </div>
      <div className="stacked-mobile mbe6">
        <ReactButtonFx fx="pulse" fxSpeed="xs" title="XS" variant="primary">
          XS
        </ReactButtonFx>
        <ReactButtonFx fx="pulse" fxSpeed="sm" title="SM" variant="primary">
          SM
        </ReactButtonFx>
        <ReactButtonFx fx="pulse" fxSpeed="md" title="MD" variant="primary">
          MD
        </ReactButtonFx>
        <ReactButtonFx fx="pulse" fxSpeed="lg" title="LG" variant="primary">
          LG
        </ReactButtonFx>
        <ReactButtonFx fx="pulse" fxSpeed="xl" title="XL" variant="primary">
          XL
        </ReactButtonFx>
      </div>

      {/* Easing Functions */}
      <div className="mbe4">
        <h2>Easing Functions</h2>
        <p className="mbe2">Different easing functions create different animation feels</p>
        <ReactAlert borderedLeft>
          Examples use <code>fxSpeed="xl"</code> to make easing differences more visible.
          For production, prefer <code>"sm"</code> or <code>"md"</code> speeds.
        </ReactAlert>
      </div>
      <div className="stacked-mobile mbe6">
        <ReactButtonFx
          fx="bounce"
          fxEase="ease"
          fxSpeed="xl"
          title="Ease"
          size="sm"
          variant="primary"
        >
          Ease
        </ReactButtonFx>
        <ReactButtonFx
          fx="bounce"
          fxEase="ease-in"
          fxSpeed="xl"
          title="Ease-In"
          size="sm"
          variant="primary"
        >
          Ease-In
        </ReactButtonFx>
        <ReactButtonFx
          fx="bounce"
          fxEase="ease-out"
          fxSpeed="xl"
          title="Ease-Out"
          size="sm"
          variant="primary"
        >
          Ease-Out
        </ReactButtonFx>
        <ReactButtonFx
          fx="bounce"
          fxEase="bounce"
          fxSpeed="xl"
          title="Bounce"
          size="sm"
          variant="primary"
        >
          Bounce
        </ReactButtonFx>
        <ReactButtonFx
          fx="bounce"
          fxEase="spring-sm"
          fxSpeed="xl"
          title="Spring SM"
          size="sm"
          variant="primary"
        >
          Spring SM
        </ReactButtonFx>
        <ReactButtonFx
          fx="bounce"
          fxEase="spring-md"
          fxSpeed="xl"
          title="Spring MD"
          size="sm"
          variant="primary"
        >
          Spring MD
        </ReactButtonFx>
        <ReactButtonFx
          fx="bounce"
          fxEase="spring-lg"
          fxSpeed="xl"
          title="Spring SM"
          size="sm"
          variant="primary"
        >
          Spring LG
        </ReactButtonFx>
      </div>

      {/* Disabled State */}
      <div className="mbe4">
        <h2>Disabling Effects</h2>
        <p className="example-description">
          These buttons have <code>fx="bounce"</code> but <code>fxDisabled={"{true}"}</code>
          prevents the animation from playing while keeping the buttons clickable
        </p>
      </div>
      <div className="stacked-mobile mbe6">
        <ReactButtonFx
          fx="bounce"
          fxDisabled
          title="FX Disabled"
          variant="primary"
        >
          FX Disabled
        </ReactButtonFx>
        <ReactButtonFx
          fx="bounce"
          fxDisabled
          title="FX Disabled"
          variant="secondary"
        >
          FX Disabled
        </ReactButtonFx>
      </div>
    </section>
  );
}
