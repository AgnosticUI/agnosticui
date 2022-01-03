<template>
  <section>
    <Divider>
      <template #dividerContent>
        Centered by default
      </template>
    </Divider>
    <Divider justify="start">
      <template #dividerContent>
        Justify start
      </template>
    </Divider>
    <Divider justify="end">
      <template #dividerContent>
        Justify end
      </template>
    </Divider>
    <Divider size="small">
      <template #dividerContent>
        Small
      </template>
    </Divider>
    <Divider size="large">
      <template #dividerContent>
        Large
      </template>
    </Divider>
    <Divider size="xlarge">
      <template #dividerContent>
        XLarge
      </template>
    </Divider>
    <Divider type="success">
      <template #dividerContent>
        Success
      </template>
    </Divider>
    <Divider type="info">
      <template #dividerContent>
        Info
      </template>
    </Divider>
    <Divider type="warning">
      <template #dividerContent>
        Warning
      </template>
    </Divider>
    <Divider type="error">
      <template #dividerContent>
        Error
      </template>
    </Divider>
    <Divider
      type="info"
      size="small"
    >
      <template #dividerContent>
        <Button
          mode="primary"
          is-bordered
          is-rounded
        >
          Go
        </Button>
      </template>
    </Divider>
    <div class="flex mbs40 mbe48">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <Divider is-vertical="true">
        <template #dividerContent>
          yes
        </template>
      </Divider>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
      <Divider is-vertical="true">
        <template #dividerContent>
          sir!
        </template>
      </Divider>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <p class="mbs16 mbe16">With no <code>dividerContent</code> slot:</p>
    <div class="flex mbs40 mbe48">
      <p>Vertical</p>
      <Divider is-vertical="true" />
      <p>Bars</p>
      <Divider is-vertical="true" />
      <p>Are Cool!</p>
    </div>
    <Divider />
    <div class="mbs16 mbe16">
      <Divider type="success"></Divider>
    </div>
    <div class="mbe16">
      <Divider type="info"></Divider>
    </div>
    <div class="mbe16">
      <Divider type="warning"></Divider>
    </div>
    <div class="mbe16">
      <Divider type="error"></Divider>
    </div>
    <div class="mbe16">
      <Divider size="small"></Divider>
    </div>
    <div class="mbe16">
      <Divider size="large"></Divider>
    </div>
    <div class="mbe16">
      <Divider size="xlarge"></Divider>
    </div>
  </section>
</template>
<script>
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Button, Divider } from "agnostic-vue";
export default {
  name: "DividerExamples",
  components: {
    Divider,
    Button,
  },
};
</script>
