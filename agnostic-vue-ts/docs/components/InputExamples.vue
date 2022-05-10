<script setup lang="ts">
import Icon from "../../src/components/Icon.vue";
import Input from "../../src/components/Input.vue";
import InputAddonItem from "../../src/components/InputAddonItem.vue";
</script>
<template>
  <section class="mbe24">
    <Input
      id="1"
      size="small"
      placeholder="Enter name…"
      label="Small input"
      type="text"
    />
  </section>
  <section class="mbe24">
    <Input
      id="2"
      placeholder="Enter name…"
      label="Default input"
      type="text"
    />
  </section>
  <section class="mbe24">
    <Input
      id="3"
      size="large"
      placeholder="Enter name…"
      label="Large input"
      type="text"
    />
  </section>
  <section class="mbe24">
    <Input
      id="4"
      is-inline
      placeholder="Enter name…"
      label="Inline input"
      type="text"
    />
  </section>
  <section class="mbe24">
    <Input
      id="4b"
      is-rounded
      placeholder="Enter name…"
      label="Rounded input"
      type="text"
    />
  </section>
  <section class="mbe24">
    <Input
      id="6"
      is-underlined
      placeholder="Enter name…"
      label="Underlined input"
      type="text"
    />
  </section>
  <section class="mbe24">
    <Input
      id="7"
      is-underlined
      is-underlined-with-background
      placeholder="Enter name…"
      label="Underlined with background"
      type="text"
    />
  </section>
  <section class="mbe24">
    <Input
      id="10"
      help-text="Some useful help text can go here"
      placeholder="Enter something…"
      label="Help text"
      type="text"
    />
  </section>
  <section class="mbe24">
    <Input
      id="9"
      is-invalid
      invalid-text="It's impossible to have a string that is cool enough for this field."
      placeholder="Enter a very cool string…"
      label="Cool factor"
      type="text"
    />
  </section>
  <section class="mbe24">
    <Input
      id="8"
      has-left-addon
      has-right-addon
      label="Input with addons"
    >
    <template #addonLeft>
      <InputAddonItem addon-left>
        <Icon
          :size="18"
          type="success"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M21.03 5.72a.75.75 0 010 1.06l-11.5 11.5a.75.75 0 01-1.072-.012l-5.5-5.75a.75.75 0 111.084-1.036l4.97 5.195L19.97 5.72a.75.75 0 011.06 0z"
            />
          </svg>
        </Icon>
      </InputAddonItem>
    </template>
    <template #addonRight>
      <InputAddonItem addon-right>
        <Icon
          :size="18"
          type="info"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M13 7.5a1 1 0 11-2 0 1 1 0 012 0zm-3 3.75a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v4.25h.75a.75.75 0 010 1.5h-3a.75.75 0 010-1.5h.75V12h-.75a.75.75 0 01-.75-.75z" />
            <path
              fill-rule="evenodd"
              d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"
            />
          </svg>
        </Icon>
      </InputAddonItem>
    </template>
    </Input>
  </section>
  <section class="mbe24">
    <Input
      id="11"
      label="Textarea"
      type="textarea"
    />
  </section>
  <section class="mbe24">
    <Input
      id="12"
      label="Textarea small"
      type="textarea"
      size="small"
      :rows="10"
      :cols="5"
    />
  </section>
  <section class="mbe24">
    <Input
      id="13"
      label="Textarea large"
      type="textarea"
      size="large"
      :rows="10"
      cols="5"
    />
  </section>
</template>
