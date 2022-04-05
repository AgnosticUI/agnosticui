<script>
  import { Button, Divider } from "agnostic-svelte";
</script>
<section>
  <div class="h4 mbe32 flex items-center">
    <img width="24" height="24" src="/assets/Svelte-icon.svg" alt="Svelte logo" class="mie12" />Svelte Disclose
  </div>
  <Divider />
  <div class="mbs16 mbe16">
    <Divider>
      <div slot="dividerContent">
        Content
      </div>
    </Divider>
  </div>
  <div class="mbs16 mbe16">
    <Divider justify="start">
      <div slot="dividerContent">
        Start
      </div>
    </Divider>
  </div>
  <div class="mbs16 mbe16">
    <Divider justify="end">
      <div slot="dividerContent">
        End
      </div>
    </Divider>
  </div>
  <div class="mbs16 mbe16">
    <Divider type="success">
      <div slot="dividerContent">
        Success
      </div>
    </Divider>
  </div>
  <div class="mbs16 mbe16">
    <Divider type="info">
      <div slot="dividerContent">
        Info
      </div>
    </Divider>
  </div>
  <div class="mbs16 mbe16">
    <Divider type="warning">
      <div slot="dividerContent">
        Warning
      </div>
    </Divider>
  </div>
  <div class="mbs16 mbe16">
    <Divider type="error">
      <div slot="dividerContent">
        Error
      </div>
    </Divider>
  </div>
  <div class="mbs16 mbe16">
    <Divider size="small">
      <div slot="dividerContent">
        Small
      </div>
    </Divider>
  </div>
  <div class="mbs16 mbe16">
    <Divider size="large">
      <div slot="dividerContent">
        Large
      </div>
    </Divider>
  </div>
  <div class="mbs16 mbe16">
    <Divider size="xlarge">
      <div slot="dividerContent">
        XLarge
      </div>
    </Divider>
  </div>
  <div class="mbs16 mbe16">
    <Divider type="info" size="small">
      <div slot="dividerContent">
        <Button mode="primary" isBordered isRounded>Go</Button>
      </div>
    </Divider>
  </div>
  <div class="flex mbe48">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <Divider isVertical="{true}">
      <div slot="dividerContent">
        yes
      </div>
    </Divider>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
    <Divider isVertical="{true}">
      <div slot="dividerContent">
        sir!
      </div>
    </Divider>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  <p class="mbs16 mbe16">With no <code>dividerContent</code> slot:</p>
  <div class="flex mbe48">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <Divider isVertical="{true}"></Divider>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
    <Divider isVertical="{true}"></Divider>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  <p class="mbs16 mbe16">With no <code>dividerContent</code> slot:</p>
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
