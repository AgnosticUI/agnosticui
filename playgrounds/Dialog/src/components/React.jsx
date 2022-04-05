import { useRef } from 'react';
import "agnostic-react/dist/esm/index.css";
import { Button, Dialog, Input } from "agnostic-react";

// See A11yDialogProps
// https://github.com/KittyGiraudel/react-a11y-dialog/blob/main/index.d.ts#L11
const props = ['react-dialog', 'react-dialog2'].map((item, i) => {
  return {
    id: `${item}`,
    dialogRoot: "#portal-root",
    title: `Test ${item}`,
    classNames: {
      // Note we don't have to pass in ALL classNames props and those
      // not included will fallback to react-a11y-dialog's defaults
      // See https://github.com/KittyGiraudel/react-a11y-dialog#api
      title: 'h3 mbe18 h4 mbe18 flex justify-center',
    }
  }
})

const dialogPropsDefault = props[0];

export default function React() {
  const dialog = useRef();
  const dialog2 = useRef();
  return (
    <section className="mbe40">
      <div className="h4 mbe32 flex items-center">
        <img width="24" height="24" src="/assets/React-icon.svg" alt="React logo" className="mie12" />React Dialog
      </div>
      <div className="mbs16 mbe24">
        <Button onClick={() => dialog.current.show()} type="button" mode="primary" isBordered isRounded isBlock>Open the dialog</Button>
        <Dialog
          {...dialogPropsDefault}
          dialogRef={dialogInstance => (dialog.current = dialogInstance)}
          isAnimationSlideUp={true}
        >
          <p className="mbs16 mbe16" id="dialog-example-description">
            Fill in the form below to receive our newsletter!
          </p>
          <form className="dialog-form-demo">
            <Input isRounded label="Email (required)" type="email" name="EMAIL" id="email" placeholder="email@example.com" required />
            <div className="mbe16" />
            <Button type="submit" mode="primary" isRounded isBlock>Sign Up</Button>
          </form>
        </Dialog>
      </div>
      <div className="mbs16 mbe24">
        <Button onClick={() => dialog2.current.show()} type="button" mode="primary" isBordered isRounded isBlock>Open dialog 2</Button>
        <Dialog
          {...dialogPropsDefault}
          dialogRef={instance => (dialog2.current = instance)}
          classNames={{ title: 'h4 mbe18', closeButton: 'close-button-demo' }}
          isAnimationFadeIn
          isAnimationSlideUp
          closeButtonPosition="last"
          closeButtonContent={<Button type="faux" isRounded isBordered isBlock>Cancel</Button>}
        >
          <p className="mbs16 mbe16" id="dialog-example-description">
            The <code>close-button-demo</code> class is in App.css (for the Cancel button at bottom).
            Otherwise, we use an AgnosticUI button of <code>type="faux</code> which generates a div that
            looks like a button. As <code>react-a11y-dialog</code> generates its own button
            around <code>closeButtonContent</code>, this prevents an unwanted nested buttons situation.
          </p>
          <p className="mbe16">You'll also notice that this dialog did not &ldquo;slide up&rdquo; as we have not
          passed in true to <code>isAnimationSlideUp</code> and this animation defaults to false. The other animation
          is <code>isAnimationFadeIn</code> which defaults to true. You can set it <code>false</code> if you wish to
          remove it.
          </p>
          <form className="dialog-form-demo">
            <Input isRounded label="Email (required)" type="email" name="EMAIL" id="email" placeholder="email@example.com" required />
            <div className="mbe16" />
            <Button type="submit" mode="primary" isRounded isBlock>Sign Up</Button>
          </form>
        </Dialog>
      </div>
    </section>
  );
}
