<script setup>
import Select from "../../src/components/Select.vue";
const log = (msg, extra) => {
  console.log(msg, extra);
};
</script>
<template>
  <h2>Select</h2>
  <div class="mbs12 mbe16">
    <Select
      :options="[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]"
      unique-id="sel1"
      name="select1"
      label-copy="Select the best tennis player of all time"
      @selected="selected => log('selected: ', selected)"
    />
  </div>
  <h2>Customize the first option's text copy</h2>
  <div class="mbe16">
    <p className="mbe24">
      Pass <code>defaultOptionLabel</code> to specify the text copy to use for the first option
    </p>
    <Select
      defaultOptionLabel="Select your favorite tennis player"
      :options="[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]"
      unique-id="sel1b"
      name="select1b"
      label-copy="Select the best tennis player of all time"
      @selected="selected => log('selected: ', selected)"
    />
  </div>
  <h2>Disabled select</h2>
  <div class="mbs12 mbe16">
    <Select
      is-disabled
      :options="[{ value: 'andre', label: 'Andre Agassi' }]"
      unique-id="sel2"
      name="select2"
      label-copy="Select -- example disabled"
      @selected="selected => log('selected: ', selected)"
    />
  </div>
  <h2>Small select</h2>
  <div class="mbs12 mbe16">
    <Select
      size="small"
      :options="[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]"
      unique-id="sel3"
      name="select3"
      label-copy="Select the best tennis player of all time"
      @selected="selected => log('selected: ', selected)"
    />
  </div>
  <h2>Large select</h2>
  <div class="mbs12 mbe16">
    <Select
      size="large"
      :options="[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]"
      unique-id="sel4"
      name="select4"
      label-copy="Select the best tennis player of all time"
      @selected="selected => log('selected: ', selected)"
    />
  </div>
  <h2>Multiple select size 4</h2>
  <div class="mbs12 mbe16">
    <Select
      :is-multiple="true"
      :multiple-size="4"
      :options="[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]"
      unique-id="sel4"
      name="select4"
      label-copy="Select the best tennis player of all time"
      @selected="selected => log('selected: ', selected)"
    />
  </div>
</template>
