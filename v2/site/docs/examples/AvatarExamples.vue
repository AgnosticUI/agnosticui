<template>
  <section>
    <div class="mbe4">
      <h3>Text Initials</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueAvatar text="AB" />
      <VueAvatar text="CD" />
      <VueAvatar text="EF" />
      <VueAvatar text="GH" />
    </div>

    <div class="mbe4">
      <h3>With Images</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueAvatar img-src="https://i.pravatar.cc/150?img=1" img-alt="User 1" />
      <VueAvatar img-src="https://i.pravatar.cc/150?img=2" img-alt="User 2" />
      <VueAvatar img-src="https://i.pravatar.cc/150?img=3" img-alt="User 3" />
      <VueAvatar img-src="https://i.pravatar.cc/150?img=4" img-alt="User 4" />
    </div>

    <div class="mbe4">
      <h3>Sizes</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueAvatar text="XS" size="xs" />
      <VueAvatar text="SM" size="sm" />
      <VueAvatar text="MD" size="md" />
      <VueAvatar text="LG" size="lg" />
      <VueAvatar text="XL" size="xl" />
    </div>

    <div class="mbe4">
      <h3>Shapes</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueAvatar text="AB" shape="circle" />
      <VueAvatar text="CD" shape="square" />
      <VueAvatar text="EF" shape="rounded" />
    </div>

    <div class="mbe4">
      <h3>Variants</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueAvatar text="DF" variant="default" />
      <VueAvatar text="IN" variant="info" />
      <VueAvatar text="WN" variant="warning" />
      <VueAvatar text="SC" variant="success" />
      <VueAvatar text="ER" variant="error" />
    </div>

    <div class="mbe4">
      <h3>With Icons</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueAvatar>
        <User :size="24" />
      </VueAvatar>
      <VueAvatar size="lg">
        <UserCircle :size="32" />
      </VueAvatar>
      <VueAvatar variant="info">
        <Mail :size="24" />
      </VueAvatar>
      <VueAvatar variant="success">
        <Check :size="24" />
      </VueAvatar>
    </div>

    <div class="mbe4">
      <h3>CSS Shadow Parts Customization</h3>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize the avatar's appearance without affecting the component's internal styling.
      </p>
    </div>
    <div class="stacked-mobile mbe4">
      <VueAvatar class="custom-avatar-gradient" text="GR" />
      <VueAvatar
        class="custom-avatar-border"
        img-src="https://i.pravatar.cc/150?img=8"
        img-alt="Custom border"
      />
      <VueAvatar class="custom-avatar-shadow" text="SH" size="lg" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VueAvatar } from 'agnosticui-core/avatar/vue';
import { User, UserCircle, Mail, Check } from 'lucide-vue-next';

export default defineComponent({
  name: 'AvatarExamples',
  components: {
    VueAvatar,
    User,
    UserCircle,
    Mail,
    Check,
  },
});
</script>

<style>
/* CSS Shadow Parts customization examples */
.custom-avatar-gradient::part(ag-avatar) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: 3px solid #fff;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  font-weight: 700;
}

.custom-avatar-border::part(ag-avatar) {
  border: 4px solid #10b981;
  box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.2);
}

.custom-avatar-shadow::part(ag-avatar) {
  background: var(--ag-error);
  color: white;
  box-shadow: 0 8px 24px rgba(239, 68, 68, 0.4);
  border: 2px solid var(--ag-error-dark);
}

.custom-avatar-shadow::part(ag-avatar-text) {
  font-family: 'Courier New', monospace;
  letter-spacing: 3px;
}
</style>
