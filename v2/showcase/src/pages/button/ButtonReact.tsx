import { ReactButton } from "agnosticui-core/react";
import "agnosticui-core";

const ButtonReact = () => {
  return (
    <section className="mbe-24">
      <h2 className="mbe-24">React Button</h2>
      <div className="flex-inline gap-16">
        <ReactButton>Button</ReactButton>
        <ReactButton>Primary</ReactButton>
        <ReactButton>Secondary</ReactButton>
        <ReactButton disabled>Disabled</ReactButton>
      </div>
    </section>
  );
};

export default ButtonReact;
