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
      <VueAvatar
        img-src="https://i.pravatar.cc/150?img=1"
        img-alt="User 1"
      />
      <VueAvatar
        img-src="https://i.pravatar.cc/150?img=2"
        img-alt="User 2"
      />
      <VueAvatar
        img-src="https://i.pravatar.cc/150?img=3"
        img-alt="User 3"
      />
      <VueAvatar
        img-src="https://i.pravatar.cc/150?img=4"
        img-alt="User 4"
      />
    </div>

    <div class="mbe4">
      <h3>Sizes</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueAvatar
        text="XS"
        size="xs"
      />
      <VueAvatar
        text="SM"
        size="sm"
      />
      <VueAvatar
        text="MD"
        size="md"
      />
      <VueAvatar
        text="LG"
        size="lg"
      />
      <VueAvatar
        text="XL"
        size="xl"
      />
    </div>

    <div class="mbe4">
      <h3>Shapes</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueAvatar
        text="AB"
        shape="circle"
      />
      <VueAvatar
        text="CD"
        shape="square"
      />
      <VueAvatar
        text="EF"
        shape="rounded"
      />
    </div>

    <div class="mbe4">
      <h3>Variants</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueAvatar
        text="DF"
        variant="default"
      />
      <VueAvatar
        text="IN"
        variant="info"
      />
      <VueAvatar
        text="WN"
        variant="warning"
      />
      <VueAvatar
        text="SC"
        variant="success"
      />
      <VueAvatar
        text="ER"
        variant="error"
      />
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
      <h3>Avatar Groups</h3>
      <p class="mbs2 mbe3">
        Group multiple avatars together to represent teams, collaborators, or participants.
      </p>
    </div>

    <div class="mbe4">
      <h4 class="mbe2">Text Avatars</h4>
      <VueAvatarGroup class="avatar-group-bordered">
        <VueAvatar
          text="AB"
          variant="info"
          size="lg"
        />
        <VueAvatar
          text="CD"
          variant="info"
          size="lg"
        />
        <VueAvatar
          text="EF"
          variant="info"
          size="lg"
        />
        <VueAvatar
          text="GH"
          variant="info"
          size="lg"
        />
      </VueAvatarGroup>
    </div>

    <div class="mbe4">
      <h4 class="mbe2">Image Avatars</h4>
      <VueAvatarGroup class="avatar-group-bordered">
        <VueAvatar
          img-src="https://i.pravatar.cc/150?img=1"
          img-alt="User 1"
          size="lg"
        />
        <VueAvatar
          img-src="https://i.pravatar.cc/150?img=2"
          img-alt="User 2"
          size="lg"
        />
        <VueAvatar
          img-src="https://i.pravatar.cc/150?img=3"
          img-alt="User 3"
          size="lg"
        />
        <VueAvatar
          img-src="https://i.pravatar.cc/150?img=4"
          img-alt="User 4"
          size="lg"
        />
        <VueAvatar
          img-src="https://i.pravatar.cc/150?img=5"
          img-alt="User 5"
          size="lg"
        />
      </VueAvatarGroup>
    </div>

    <div class="mbe4">
      <h4 class="mbe2">Mixed Content</h4>
      <VueAvatarGroup class="avatar-group-bordered">
        <VueAvatar
          text="AB"
          variant="info"
          size="lg"
        />
        <VueAvatar
          text="RL"
          variant="info"
          size="lg"
        />
        <VueAvatar size="lg">
          <User :size="24" />
        </VueAvatar>
        <VueAvatar
          img-src="https://i.pravatar.cc/150?img=10"
          img-alt="User 1"
          size="lg"
        />
        <VueAvatar
          img-src="https://i.pravatar.cc/150?img=11"
          img-alt="User 2"
          size="lg"
        />
      </VueAvatarGroup>
    </div>

    <div class="mbe4">
      <h4 class="mbe2">Different Sizes</h4>
      <div class="stacked-mobile mbe3">
        <VueAvatarGroup class="avatar-group-bordered">
          <VueAvatar
            text="SM"
            size="sm"
          />
          <VueAvatar
            text="SM"
            size="sm"
          />
          <VueAvatar
            text="SM"
            size="sm"
          />
        </VueAvatarGroup>
      </div>
      <div class="stacked-mobile mbe3">
        <VueAvatarGroup class="avatar-group-bordered">
          <VueAvatar
            text="MD"
            size="md"
          />
          <VueAvatar
            text="MD"
            size="md"
          />
          <VueAvatar
            text="MD"
            size="md"
          />
        </VueAvatarGroup>
      </div>
      <div class="stacked-mobile">
        <VueAvatarGroup class="avatar-group-bordered">
          <VueAvatar
            text="XL"
            size="xl"
          />
          <VueAvatar
            text="XL"
            size="xl"
          />
          <VueAvatar
            text="XL"
            size="xl"
          />
        </VueAvatarGroup>
      </div>
    </div>

    <div class="mbe4">
      <h4 class="mbe2">With Variants</h4>
      <VueAvatarGroup class="avatar-group-bordered">
        <VueAvatar
          text="DF"
          variant="default"
          size="lg"
        />
        <VueAvatar
          text="IN"
          variant="info"
          size="lg"
        />
        <VueAvatar
          text="WN"
          variant="warning"
          size="lg"
        />
        <VueAvatar
          text="SC"
          variant="success"
          size="lg"
        />
        <VueAvatar
          text="ER"
          variant="error"
          size="lg"
        />
      </VueAvatarGroup>
    </div>

    <div class="mbe4">
      <h3>Avatar Group Custom Styling</h3>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize avatar group layouts and effects.
      </p>
    </div>

    <div class="mbe4">
      <h4 class="mbe2">Custom Spacing (No Overlap)</h4>
      <VueAvatarGroup class="custom-avatar-group">
        <VueAvatar
          img-src="https://i.pravatar.cc/150?img=20"
          img-alt="User 1"
          size="lg"
        />
        <VueAvatar
          img-src="https://i.pravatar.cc/150?img=21"
          img-alt="User 2"
          size="lg"
        />
        <VueAvatar
          img-src="https://i.pravatar.cc/150?img=22"
          img-alt="User 3"
          size="lg"
        />
        <VueAvatar
          img-src="https://i.pravatar.cc/150?img=23"
          img-alt="User 4"
          size="lg"
        />
      </VueAvatarGroup>
    </div>

    <div class="mbe4">
      <h4 class="mbe2">Enhanced Hover Effects</h4>
      <VueAvatarGroup class="stacked-group">
        <VueAvatar
          text="AB"
          variant="info"
          size="lg"
        />
        <VueAvatar
          text="CD"
          variant="success"
          size="lg"
        />
        <VueAvatar
          text="EF"
          variant="warning"
          size="lg"
        />
        <VueAvatar
          text="GH"
          variant="error"
          size="lg"
        />
      </VueAvatarGroup>
    </div>

    <div class="mbe4">
      <h3>CSS Shadow Parts Customization</h3>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize the avatar's appearance without
        affecting the component's internal styling. The following are meant
        solely to show how to utilize CSS shadow parts to create custom avatar
        styles. They are NOT meant to represent best practices or good taste in
        avatar design!
      </p>
    </div>
    <div class="stacked-mobile mbe4">
      <VueAvatar
        class="custom-avatar-gradient"
        text="GR"
      />
      <VueAvatar
        class="custom-avatar-border"
        img-src="https://i.pravatar.cc/150?img=8"
        img-alt="Custom border"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueAvatar, VueAvatarGroup } from "agnosticui-core/avatar/vue";
import { User, UserCircle, Mail, Check } from "lucide-vue-next";

export default defineComponent({
  name: "AvatarExamples",
  components: {
    VueAvatar,
    VueAvatarGroup,
    User,
    UserCircle,
    Mail,
    Check,
  },
});
</script>

<style>
/* Avatar Group base styling */
.avatar-group-bordered ag-avatar::part(ag-avatar) {
  border: 2px solid white;
}

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

/* Avatar Group custom styling examples */
.custom-avatar-group::part(ag-avatar-group) {
  gap: 0.5rem;
}

.custom-avatar-group ag-avatar::part(ag-avatar) {
  border: 3px solid #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.custom-avatar-group ag-avatar:not(:first-child) {
  margin-inline-start: 0;
}

.stacked-group ag-avatar::part(ag-avatar) {
  border: 3px solid #10b981;
}

.stacked-group ag-avatar {
  transition: all 0.3s ease;
}

.stacked-group ag-avatar:hover {
  transform: translateY(-8px) scale(1.1);
  z-index: 100 !important;
}
</style>
