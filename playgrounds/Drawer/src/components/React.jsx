import { useRef } from 'react';
import "agnostic-react/dist/esm/index.css";
import { Button, Drawer } from "agnostic-react";

const props = ['drawer1', 'drawer2', 'drawer3', 'drawer4'].map((item) => {
  return {
    id: `test-${item}-react`,
    dialogRoot: "#portal-root",
    title: 'Test Drawer',
    classNames: {
      // Note we don't have to pass in ALL classNames props and those
      // not included will fallback to react-a11y-dialog's defaults
      // See https://github.com/KittyGiraudel/react-a11y-dialog#api
      title: 'h3 mbe18 h4 mbe18 flex justify-center',
    }
  }
})

const drawer1PropsDefault = props[0];
const drawer2PropsDefault = props[1];
const drawer3PropsDefault = props[2];
const drawer4PropsDefault = props[3];

export default function React() {
  // Handles to low-level drawer instances. Allows calling `show` & `hide`
  const drawer1Ref = useRef();
  const drawer2Ref = useRef();
  const drawer3Ref = useRef();
  const drawer4Ref = useRef();

  return (
    <section className="mbe40">
      <div className="h4 mbe32 flex items-center">
        <img width="24" height="24" src="/assets/React-icon.svg" alt="React logo" className="mie12" />React Drawer
      </div>
      <Button onClick={() => drawer1Ref.current.show()} type="button" mode="primary" isBordered isRounded isBlock>Open Drawer Top</Button>
      <Drawer
        {...drawer1PropsDefault}
        drawerRef={drawerInstance => (drawer1Ref.current = drawerInstance)}
        placement="top"
      >
        <p className="mbs16 mbe16">
          default slot
        </p>
      </Drawer>
      <div className="mbs16 mbe24" />
      <Button onClick={() => drawer2Ref.current.show()} type="button" mode="primary" isBordered isRounded isBlock>Open Drawer Bottom</Button>
      <Drawer
        {...drawer2PropsDefault}
        drawerRef={drawerInstance => (drawer2Ref.current = drawerInstance)}
        placement="bottom"
      >
          <div className="flex-fill">
          <p>This is main drawer slot. To test positioning, update the placement property to one of: start | end | top | bottom.</p>
          <button
            style={{position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem'}}
            onClick={() => drawer2Ref.current.hide()}
          >
            Close from within slot using instance
          </button>
        </div>
      </Drawer>
      <div className="mbs16 mbe24" />
      <Button onClick={() => drawer3Ref.current.show()} type="button" mode="primary" isBordered isRounded isBlock>Open Drawer Start</Button>
      <Drawer
        {...drawer3PropsDefault}
        drawerRef={drawerInstance => (drawer3Ref.current = drawerInstance)}
        placement="start"
      >
        <p className="mbs16 mbe16">
          default slot
        </p>
      </Drawer>
      <div className="mbs16 mbe24" />
      <Button onClick={() => drawer4Ref.current.show()} type="button" mode="primary" isBordered isRounded isBlock>Open Drawer End</Button>
      <Drawer
        {...drawer4PropsDefault}
        drawerRef={drawerInstance => (drawer4Ref.current = drawerInstance)}
        placement="end"
      >
        <p className="mbs16 mbe16">
          default slot
        </p>
      </Drawer>
    </section>
  );
}
