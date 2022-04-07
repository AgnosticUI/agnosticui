<template>
  <section class="mbe40">
    <div class="h4 mbe32 flex items-center">
      <img
        width="24"
        height="24"
        src="/assets/Vue-icon.svg"
        alt="Vue logo"
        class="mie12"
      />Vue 3 Select
    </div>
  </section>
  <div class="mbe16">
    <Select
      :options="[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]"
      unique-id="sel1"
      name="select1"
      label-copy="Select the best tennis player of all time"
    />
  </div>
  <div class="h4 mbs24 mbe24">Customize the first option's text copy</div>
  <div class="mbe16">
    <p className="mbe24">
      Pass <code>default-option-label</code> to specify the text copy to use for the first option
    </p>
    <Select
      default-option-label="Select your favorite tennis player"
      :options="[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]"
      unique-id="sel1b"
      name="select1b"
      label-copy="Select the best tennis player of all time"
    />
  </div>
  <div class="h4 mbs24 mbe24">Disabled select</div>
  <div class="mbs12 mbe16">
    <Select
      is-disabled
      :options="[{ value: 'andre', label: 'Andre Agassi' }]"
      unique-id="sel2"
      name="select2"
      label-copy="Select -- example disabled"
    />
  </div>
  <div class="h4 mbs24 mbe24">Small select</div>
  <div class="mbs12 mbe16">
    <Select
      size="small"
      :options="[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]"
      unique-id="sel3"
      name="select3"
      label-copy="Select the best tennis player of all time"
    />
  </div>
  <div class="h4 mbs24 mbe24">Large select</div>
  <div class="mbs12 mbe16">
    <Select
      size="large"
      :options="[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]"
      unique-id="sel4"
      name="select4"
      label-copy="Select the best tennis player of all time"
    />
  </div>
  <div class="h4 mbs24 mbe24">Multiple select size 4</div>
  <div class="mbs12 mbe16">
    <Select
      :is-multiple="true"
      :multiple-size="4"
      :options="[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]"
      unique-id="sel4"
      name="select4"
      label-copy="Select the best tennis player of all time"
    />
  </div>
</template>
<script setup>
// Import AgnosticUI global common & component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Select } from "agnostic-vue";
</script>
