
import AgSelect from '../components/Select.vue';

export default {
  title: 'AG—Vue (Beta)/Select',
  components: [AgSelect],
};

export const Default = () => ({
  components: { AgSelect },
  template: `<div class="mbe16">
    <ag-select :options="[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]"
    unique-id="sel1"
    name="select1"
    label-copy="Select the best tennis player of all time"
  />
</div>`
});

export const Disabled = () => ({
  components: { AgSelect },
  template: `<div class="mbe16">
    <ag-select is-disabled :options="[{ value: 'roger', label: 'Roger Federer'}]"
    unique-id="sel1"
    name="select1"
    label-copy="Select the best tennis player of all time"
  />
</div>`
});

export const Small = () => ({
  components: { AgSelect },
  template: `<div class="mbe16">
    <ag-select size="small" :options="[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]"
    unique-id="sel1"
    name="select1"
    label-copy="Select the best tennis player of all time"
  />
</div>`
});

export const Large = () => ({
  components: { AgSelect },
  template: `<div class="mbe16">
    <ag-select size="large" :options="[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]"
    unique-id="sel1"
    name="select1"
    label-copy="Select the best tennis player of all time"
  />
</div>`
});

export const Multiple = () => ({
  components: { AgSelect },
  template: `<div class="mbe16">
    <ag-select :is-multiple="true" multiple-size="4" :options="[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]"
    unique-id="sel1"
    name="select1"
    label-copy="Select the best tennis player of all time"
  />
</div>`
});
