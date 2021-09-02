<template>
  <section :class="$style.component">
    <FlexGrid tagName="section">
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <h2 id="inputcomponent">Inputs</h2>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <h3>
            HTML5 provides a plethora of field input types. AgnosticUI generally takes a
            minimalistic and backseat approach to these various types.
          </h3>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <p>
            Generally, field input types that somehow seem similar to a text input like email,
            password, search, etc., will at least share the text input's general appearance in terms
            of height, spacing, font size, etc., if you've added AgnosticUI classes to it. But, we
            attempt to be as unobtrusive as possible towards the underlying native functionality.
            For example, we do not remove or replace the native 'X' or clear button for type search.
            If you're application needs such mangling, we hope that AgnosticUI at least provides
            some helpful scaffolding to build on top of.
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <h4>Core Inputs</h4>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <p class="flex">
            <AgInput
              uniqueId="myUniqueId"
              label="Default input"
              value="This is a generic input with a predefined value :)"
            />
            <AgInput
              isRounded
              uniqueId="myUniqueId2"
              label="Rounded"
            />
            <AgInput
              size="small"
              uniqueId="myUniqueId5"
              label="Small"
            />
            <AgInput
              size="large"
              uniqueId="myUniqueId6"
              label="Large"
            />
            <AgInput
              isDisabled
              uniqueId="myUniqueId7"
              label="Disabled"
            />
          </p>
        </FlexCol>
      </FlexRow>

      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="basic"><code class="html"></code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <h4>Underlined</h4>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <p class="flex">
            <AgInput
              isUnderlined
              uniqueId="myUniqueId3"
              label="Underlined input"
            />
            <AgInput
              isUnderlined
              isUnderlinedWithBackground
              uniqueId="myUniqueId4"
              label="Underlined with background"
            />
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="underlined"><code class="html"></code></pre>
        </FlexCol>
      </FlexRow>

      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <h4>Help Text</h4>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <p class="flex">
            <AgInput
              helpText="Some useful help text."
              uniqueId="myUniqueId8"
              label="Help text"
            />
            <AgInput
              isInvalid
              invalidText="This field has errors."
              uniqueId="myUniqueId9"
              label="Invalid text"
            />
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="helpText"><code class="html"></code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <h4>Other HTML5 Types</h4>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <p class="flex">
            <AgInput
              uniqueId="myUniqueId10"
              type="search"
              placeholder="Search"
              label="Search"
            />
            <AgInput
              uniqueId="myUniqueId11"
              type="tel"
              placeholder="Tel"
              label="Telephone"
            />
            <AgInput
              uniqueId="myUniqueId12"
              type="url"
              placeholder="URL"
              label="URL"
            />
            <AgInput
              uniqueId="myUniqueId13"
              type="number"
              placeholder="Number"
              label="Number"
            />
            <AgInput
              uniqueId="myUniqueId14"
              type="email"
              placeholder="Email"
              label="Email"
            />
            <AgInput
              uniqueId="myUniqueId15"
              type="password"
              placeholder="Password"
              label="Password"
            />
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="otherHtml5Types"><code class="html"></code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <h4>Input Addons</h4>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <p>
            Input addons use named slots as you'll see in the example below. So, you'll want to name
            the default imported <i>Input</i> to something
            <a href="https://vuejs.org/v2/style-guide/#Multi-word-component-names-essential">multi-word</a>
            to prevent conflicts with the native HTML <i>input</i> element. Here we've used
            <i>AgInput</i> for example.
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <p class="flex">
            <AgInput
              hasLeftAddon
              hasRightAddon
              uniqueId="inputWithAddons"
              label="Input with addons"
            >
              <template v-slot:addonLeft>
                <InputAddonItem addonLeft>
                  <svg
                    role="img"
                    class="input-addon-left demo-icon-check"
                    viewBox="0 0 16 16"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <desc>Cross icon</desc>
                    <path d="M14 2.5l-8.5 8.5-3.5-3.5-1.5 1.5 5 5 10-10z"></path>
                  </svg>
                </InputAddonItem>
              </template>
              <template v-slot:addonRight>
                <InputAddonItem addonRight>
                  <svg
                    role="img"
                    class="input-addon-left demo-icon-cross"
                    viewBox="0 0 16 16"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <desc>Checkmark icon</desc>
                    <path d="M13.957 3.457l-1.414-1.414-4.543 4.543-4.543-4.543-1.414 1.414 4.543 4.543-4.543 4.543 1.414 1.414 4.543-4.543 4.543 4.543 1.414-1.414-4.543-4.543z"></path>
                  </svg>
                </InputAddonItem>
              </template>
            </AgInput>
          </p>
        </FlexCol>
      </FlexRow>

      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="addons"><code class="html"></code></pre>
        </FlexCol>
      </FlexRow>
    </FlexGrid>
    <FlexGrid tagName="section">
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <h2 id="textarea">Textarea</h2>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <p>
            The textarea element uses the same <i>input</i> classes to keep the
            <i>line-height</i> and spacing consistent with other form inputs.
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <p class="flex">
            <AgInput
              type="textarea"
              rows="3"
              cols="4"
              uniqueId="myUniqueIdTextarea"
              label="Textarea label"
              helpText="Some useful help text."
            />
            <AgInput
              type="textarea"
              rows="3"
              cols="4"
              uniqueId="myUniqueIdTextarea2"
              label="Textarea label"
              isInvalid
              invalidText="The textarea has errors."
            />
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="textareas"><code class="html"></code></pre>
        </FlexCol>
      </FlexRow>
    </FlexGrid>
  </section>
</template>
<script>
// If we call this Input it works until we start using named slots for the input addons, so
// we just name it AgInput
import AgInput from 'agnosticui/Input.vue'
import InputAddonItem from 'agnosticui/InputAddonItem.vue'
import FlexGrid from 'agnosticui/FlexGrid/FlexGrid'
import FlexRow from 'agnosticui/FlexGrid/FlexRow'
import FlexCol from 'agnosticui/FlexGrid/FlexCol'

export default {
  name: 'Inputs',
  components: {
    AgInput,
    InputAddonItem,
    FlexCol,
    FlexGrid,
    FlexRow
  },
  data() {
    return {
      basic: `<div>
  <label for="myUniqueId" class="label">Default input</label>
  <input id="myUniqueId" type="text" class="input">
</div>
<div>
  <label for="myUniqueId2" class="label">Rounded</label>
  <input id="myUniqueId2" type="text" class="input input-rounded">
</div>
<div>
  <label for="myUniqueId5" class="label label-small">Small</label>
  <input id="myUniqueId5" type="text" class="input input-small">
</div>
<div>
  <label for="myUniqueId6" class="label label-large">Large</label>
  <input id="myUniqueId6" type="text" class="input input-large">
</div>
<div>
  <label for="myUniqueId7" class="label">Disabled</label>
  <input id="myUniqueId7" type="text" disabled="disabled" class="input">
</div>`,
      underlined: `<div>
  <label for="myUniqueId3" class="label">Underlined input</label>
  <input id="myUniqueId3" type="text" class="input input-underlined">
</div>
<div>
  <label for="myUniqueId4" class="label">Underlined with background</label>
  <input id="myUniqueId4" type="text" class="input input-underlined input-underlined-bg">
</div>`,
      helpText: `<div>
  <label for="myUniqueId8" class="label">Help text</label>
  <input id="myUniqueId8" type="text" class="input">
  <span class="field-help">Some useful help text.</span>
</div>
<div>
  <label for="myUniqueId9" class="label label-error">Invalid text</label>
  <input id="myUniqueId9" type="text" class="input input-error">
  <span class="field-error">This field has errors.</span>
</div>`,
      otherHtml5Types: `<div>
  <label for="myUniqueId10" class="label">Search</label>
  <input id="myUniqueId10" type="search" placeholder="Search" class="input">
</div>
<div>
  <label for="myUniqueId11" class="label">Telephone</label>
  <input id="myUniqueId11" type="tel" placeholder="Tel" class="input">
</div>
<div>
  <label for="myUniqueId12" class="label">URL</label>
  <input id="myUniqueId12" type="url" placeholder="URL" class="input">
</div>
<div>
  <label for="myUniqueId13" class="label">Number</label>
  <input id="myUniqueId13" type="number" placeholder="Number" class="input">
</div>
<div>
  <label for="myUniqueId14" class="label">Email</label>
  <input id="myUniqueId14" type="email" placeholder="Email" class="input">
</div>
<div>
  <label for="myUniqueId15" class="label">Password</label>
  <input id="myUniqueId15" type="password" placeholder="Password" class="input">
</div>`,
      addons: `<div>
  <label for="inputWithAddons" class="label">Input with addons</label>
  <div class="input-addon-container">
    <div class="input-addon-left">
      <span>L</span>
    </div>
    <input id="inputWithAddons" type="text" class="input input-has-left-addon input-has-right-addon">
    <div class="input-addon-right">
      <span>R</span>
    </div>
  </div>
</div>`,
      textareas: `<div>
  <label for="myUniqueIdTextarea" class="label">Textarea label</label>
  <textarea id="myUniqueIdTextarea" rows="3" cols="4" class="input"></textarea>
  <span class="field-help">Some useful help text.</span>
</div>
<div>
  <label for="myUniqueIdTextarea2" class="label">Textarea with errors</label>
  <textarea id="myUniqueIdTextarea2" rows="3" cols="4" class="input input-error></textarea>
  <span class="field-error">The textarea has errors.</span>
</div>`
    }
  }
}
</script>

<style module>
.component {
  composes: component from './partials.module.css';
}
.hotips {
  composes: hotips from './partials.module.css';
}
.tipcontent {
  composes: tipcontent from './partials.module.css';
}
.tip {
  composes: tip from './partials.module.css';
}
</style>

<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
}
.flex > div {
  margin-block-end: var(--fluid-16);
}

.demo-icon-cross,
.demo-icon-check {
  width: 14px;
  height: 14px;
}

.demo-icon-cross {
  fill: tomato;
}

.demo-icon-check {
  fill: lightseagreen;
}
</style>
