<template>
  <section :class="$style.component">
    <FlexGrid tagName="section">
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h2 id="inputcomponent">Inputs</h2>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h3>
            HTML5 provides a plethora of input types. AgnosticUI generally takes
            a minimalistic and backseat approach to these various types.
          </h3>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <p>
            Generally, input types that somehow seem similar to a text input
            like email, password, search, etc., will at least share the text
            input's general appearance in terms of height, spacing, font size,
            etc., if you've added AgnosticUI classes to it. But, we attempt to
            be as unobtrusive as possible towards the underlying native
            functionality. For example, we do not remove or replace the native
            'X' or clear button for type search. If you're application needs
            such mangling, we hope that AgnosticUI at least provides some
            helpful scaffolding to build on top of.
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h4>Core Inputs</h4>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <p class="flex">
            <AgInput
              uniqueId="myUniqueId"
              label="Default input"
              value="This is a generic input with a predefined value :)"
            />
            <AgInput isRounded uniqueId="myUniqueId2" label="Rounded" />
            <AgInput size="small" uniqueId="myUniqueId5" label="Small" />
            <AgInput size="large" uniqueId="myUniqueId6" label="Large" />
            <AgInput disabled uniqueId="myUniqueId7" label="Disabled" />
          </p>
        </FlexCol>
      </FlexRow>

      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs><code class="html">
&lt;div&gt;
  &lt;label for=&quot;myUniqueId&quot; class=&quot;label&quot;&gt;Default input&lt;/label&gt;
  &lt;input id=&quot;myUniqueId&quot; type=&quot;text&quot; class=&quot;input&quot;&gt;
&lt;/div&gt;
&lt;div&gt;
  &lt;label for=&quot;myUniqueId2&quot; class=&quot;label&quot;&gt;Rounded&lt;/label&gt;
  &lt;input id=&quot;myUniqueId2&quot; type=&quot;text&quot; class=&quot;input input-rounded&quot;&gt;
&lt;/div&gt;
&lt;div&gt;
  &lt;label for=&quot;myUniqueId5&quot; class=&quot;label label-small&quot;&gt;Small&lt;/label&gt;
  &lt;input id=&quot;myUniqueId5&quot; type=&quot;text&quot; class=&quot;input input-small&quot;&gt;
&lt;/div&gt;
&lt;div&gt;
  &lt;label for=&quot;myUniqueId6&quot; class=&quot;label label-large&quot;&gt;Large&lt;/label&gt;
  &lt;input id=&quot;myUniqueId6&quot; type=&quot;text&quot; class=&quot;input input-large&quot;&gt;
&lt;/div&gt;
&lt;div&gt;
  &lt;label for=&quot;myUniqueId7&quot; class=&quot;label&quot;&gt;Disabled&lt;/label&gt;
  &lt;input id=&quot;myUniqueId7&quot; type=&quot;text&quot; disabled=&quot;disabled&quot; class=&quot;input&quot;&gt;
&lt;/div&gt;
</code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h4>Underlined</h4>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
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
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs><code class="html">
&lt;div&gt;
  &lt;label for=&quot;myUniqueId3&quot; class=&quot;label&quot;&gt;Underlined input&lt;/label&gt;
  &lt;input id=&quot;myUniqueId3&quot; type=&quot;text&quot; class=&quot;input input-underlined&quot;&gt;
&lt;/div&gt;
&lt;div&gt;
  &lt;label for=&quot;myUniqueId4&quot; class=&quot;label&quot;&gt;Underlined with background&lt;/label&gt;
  &lt;input id=&quot;myUniqueId4&quot; type=&quot;text&quot; class=&quot;input input-underlined input-underlined-bg&quot;&gt;
&lt;/div&gt;
</code></pre>
        </FlexCol>
      </FlexRow>

      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h4>Help Text</h4>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
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
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs><code class="html">
&lt;div&gt;
  &lt;label for=&quot;myUniqueId8&quot; class=&quot;label&quot;&gt;Help text&lt;/label&gt;
  &lt;input id=&quot;myUniqueId8&quot; type=&quot;text&quot; class=&quot;input&quot;&gt;
  &lt;span class=&quot;field-help&quot;&gt;Some useful help text.&lt;/span&gt;
&lt;/div&gt;
&lt;div&gt;
  &lt;label for=&quot;myUniqueId9&quot; class=&quot;label label-error&quot;&gt;Invalid text&lt;/label&gt;
  &lt;input id=&quot;myUniqueId9&quot; type=&quot;text&quot; class=&quot;input input-error&quot;&gt;
  &lt;span class=&quot;field-error&quot;&gt;This field has errors.&lt;/span&gt;
&lt;/div&gt;
</code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h4>Other HTML5 Types</h4>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
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
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs><code class="html">
&lt;div&gt;
  &lt;label for=&quot;myUniqueId10&quot; class=&quot;label&quot;&gt;Search&lt;/label&gt;
  &lt;input id=&quot;myUniqueId10&quot; type=&quot;search&quot; placeholder=&quot;Search&quot; class=&quot;input&quot;&gt;
&lt;/div&gt;
&lt;div&gt;
  &lt;label for=&quot;myUniqueId11&quot; class=&quot;label&quot;&gt;Telephone&lt;/label&gt;
  &lt;input id=&quot;myUniqueId11&quot; type=&quot;tel&quot; placeholder=&quot;Tel&quot; class=&quot;input&quot;&gt;
&lt;/div&gt;
&lt;div&gt;
  &lt;label for=&quot;myUniqueId12&quot; class=&quot;label&quot;&gt;URL&lt;/label&gt;
  &lt;input id=&quot;myUniqueId12&quot; type=&quot;url&quot; placeholder=&quot;URL&quot; class=&quot;input&quot;&gt;
&lt;/div&gt;
&lt;div&gt;
  &lt;label for=&quot;myUniqueId13&quot; class=&quot;label&quot;&gt;Number&lt;/label&gt;
  &lt;input id=&quot;myUniqueId13&quot; type=&quot;number&quot; placeholder=&quot;Number&quot; class=&quot;input&quot;&gt;
&lt;/div&gt;
&lt;div&gt;
  &lt;label for=&quot;myUniqueId14&quot; class=&quot;label&quot;&gt;Email&lt;/label&gt;
  &lt;input id=&quot;myUniqueId14&quot; type=&quot;email&quot; placeholder=&quot;Email&quot; class=&quot;input&quot;&gt;
&lt;/div&gt;
&lt;div&gt;
  &lt;label for=&quot;myUniqueId15&quot; class=&quot;label&quot;&gt;Password&lt;/label&gt;
  &lt;input id=&quot;myUniqueId15&quot; type=&quot;password&quot; placeholder=&quot;Password&quot; class=&quot;input&quot;&gt;
&lt;/div&gt;
</code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h4>Input Addons</h4>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <p>
            Input addons use named slots as you'll see in the example below. So,
            you'll want to name the default imported <i>Input</i> to something
            <a
              href="https://vuejs.org/v2/style-guide/#Multi-word-component-names-essential"
              >multi-word</a
            >
            to prevent conflicts with the native HTML <i>input</i> element. Here
            we've used <i>AgInput</i> for example.
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
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
                    <path
                      d="M14 2.5l-8.5 8.5-3.5-3.5-1.5 1.5 5 5 10-10z"
                    ></path>
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
                    <path
                      d="M13.957 3.457l-1.414-1.414-4.543 4.543-4.543-4.543-1.414 1.414 4.543 4.543-4.543 4.543 1.414 1.414 4.543-4.543 4.543 4.543 1.414-1.414-4.543-4.543z"
                    ></path>
                  </svg>
                </InputAddonItem>
              </template>
            </AgInput>
          </p>
        </FlexCol>
      </FlexRow>

      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs><code class="html">
&lt;div&gt;
  &lt;label for=&quot;inputWithAddons&quot; class=&quot;label&quot;&gt;Input with addons&lt;/label&gt;
  &lt;div class=&quot;input-addon-container&quot;&gt;
    &lt;div class=&quot;input-addon-left&quot;&gt;
      &lt;span&gt;L&lt;/span&gt;
    &lt;/div&gt;
    &lt;input id=&quot;inputWithAddons&quot; type=&quot;text&quot; class=&quot;input input-has-left-addon input-has-right-addon&quot;&gt;
    &lt;div class=&quot;input-addon-right&quot;&gt;
      &lt;span&gt;R&lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
        </FlexCol>
      </FlexRow>
    </FlexGrid>
    <FlexGrid tagName="section">
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h2 id="textarea">Textarea</h2>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h3>Textarea</h3>
          <p>
            The textarea element uses the same <i>input</i> classes to keep the
            <i>line-height</i> and spacing consistent with other form inputs.
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
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
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs><code class="html">
&lt;div&gt;
  &lt;label for=&quot;myUniqueIdTextarea&quot; class=&quot;label&quot;&gt;Textarea label&lt;/label&gt;
  &lt;textarea id=&quot;myUniqueIdTextarea&quot; rows=&quot;3&quot; cols=&quot;4&quot; class=&quot;input&quot;&gt;&lt;/textarea&gt;
  &lt;span class=&quot;field-help&quot;&gt;Some useful help text.&lt;/span&gt;
&lt;/div&gt;
&lt;div&gt;
  &lt;label for=&quot;myUniqueIdTextarea2&quot; class=&quot;label&quot;&gt;Textarea with errors&lt;/label&gt;
  &lt;textarea id=&quot;myUniqueIdTextarea2&quot; rows=&quot;3&quot; cols=&quot;4&quot; class=&quot;input input-error&gt;&lt;/textarea&gt;
  &lt;span class=&quot;field-error&quot;&gt;The textarea has errors.&lt;/span&gt;
&lt;/div
</code></pre>
        </FlexCol>
      </FlexRow>
    </FlexGrid>
  </section>
</template>
<script>
// If we call this Input it works until we start using named slots for the input addons, so
// we just name it AgInput
import AgInput from "agnosticui/Input.vue";
import InputAddonItem from "agnosticui/InputAddonItem.vue";
import FlexGrid from "agnosticui/FlexGrid/FlexGrid";
import FlexRow from "agnosticui/FlexGrid/FlexRow";
import FlexCol from "agnosticui/FlexGrid/FlexCol";

export default {
  name: "Inputs",
  components: {
    AgInput,
    InputAddonItem,
    FlexCol,
    FlexGrid,
    FlexRow,
  },
};
</script>

<style module>
.component {
  composes: component from "./partials.module.css";
}
.hotips {
  composes: hotips from "./partials.module.css";
}
.tipcontent {
  composes: tipcontent from "./partials.module.css";
}
.tip {
  composes: tip from "./partials.module.css";
}
</style>

<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
}
.flex > div {
  margin-bottom: var(--Space-16);
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