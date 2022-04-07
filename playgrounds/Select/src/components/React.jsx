import 'agnostic-react/dist/common.min.css';
import 'agnostic-react/dist/esm/index.css';
import { Select } from 'agnostic-react';

export default function React() {
  return (
    <section className="mbe40">
      <div className="h4 mbe32 flex items-center">
        <img width="24" height="24" src="/assets/React-icon.svg" alt="React logo" className="mie12" />React Select
      </div>
      <div class="mbs12 mbe16">
        <Select
          options={[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]}
          uniqueId="sel1"
          name="select1"
          labelCopy="Select the best tennis player of all time"
        />
      </div>
      <div className="h4 mbs24 mbe24">Customize the first option's text copy</div>
      <div class="mbe16">
        <p className="mbe24">
          Pass <code>defaultOptionLabel</code> to specify the text copy to use for the first option
        </p>
        <Select
          defaultOptionLabel="Select your favorite tennis player"
          options={[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]}
          uniqueId="sel1b"
          name="select1b"
          labelCopy="Select the best tennis player of all time"
        />
      </div>
      <div className="h4 mbs24 mbe24">Disabled select</div>
      <div class="mbs12 mbe16">
        <Select
          isDisabled
          options={[{ value: 'andre', label: 'Andre Agassi' }]}
          uniqueId="sel2"
          name="select2"
          labelCopy="Select -- example disabled"
        />
      </div>
      <div className="h4 mbs24 mbe24">Small select</div>
      <div class="mbs12 mbe16">
        <Select
          size="small"
          options={[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]}
          uniqueId="sel3"
          name="select3"
          labelCopy="Select the best tennis player of all time"
        />
      </div>
      <div className="h4 mbs24 mbe24">Large select</div>
      <div class="mbs12 mbe16">
        <Select
          size="large"
          options={[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]}
          uniqueId="sel4"
          name="select4"
          labelCopy="Select the best tennis player of all time"
        />
      </div>
      <div className="h4 mbs24 mbe24">Multiple select size 4</div>
      <div class="mbs12 mbe16">
        <Select
          isMultiple={true}
          multipleSize="4"
          options={[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]}
          uniqueId="sel4"
          name="select4"
          labelCopy="Select the best tennis player of all time"
        />
      </div>
    </section>
  );
}
