import 'agnostic-react/dist/common.min.css';
import 'agnostic-react/dist/esm/index.css';
import { Switch } from 'agnostic-react';

export default function React() {
  return (
    <section className="mbe40">
      <div className="h4 mbe32 flex items-center">
        <img width="24" height="24" src="/assets/React-icon.svg" alt="React logo" className="mie12" />React Switch
      </div>
      <div class="mbs12 mbe16">
        <Switch
          id={1}
          label="Switch small"
          size="small"
        />
        <Switch
          id={2}
          label="Switch default (medium)"
        />
        <Switch
          id={3}
          label="Switch large"
          size="large"
        />
        <Switch
          id={4}
          isChecked
          label="Switch large prechecked"
          size="large"
        />
        <Switch
          id={5}
          isDisabled
          label="Switch disabled"
          size="large"
        />
        <Switch
          id={6}
          isBordered
          label="Switch bordered"
        />
        <Switch
          id={7}
          isAction
          isChecked
          label="Switch action prechecked"
          size="large"
        />
        <Switch
          id={8}
          isAction
          isBordered
          label="Switch action bordered"
        />
      </div>
      <div className="h4 mbs24 mbe24">Switch label on right</div>
      <div>
        <Switch
          id={9}
          labelPosition="right"
          label="Switch label on right"
        />
      </div> 
    </section>
  );
}
