import AgAvatar from './Avatar.vue';
import AvatarIconExample from './AvatarIconExample.vue';
const wrapper = () => {
  return {
    template: '<div style="margin-inline-end: 0.5rem;"><story /></div>',
  }
}

export default {
  title: 'AG—Vue (Beta)/Avatar',
  components: [AgAvatar, AvatarIconExample],
  decorators: [wrapper],
};

export const Default = () => ({
  components: { AgAvatar },
  template: `<ag-avatar text="AB"></ag-avatar>`
});

export const Small = () => ({
  components: { AgAvatar },
  template: `<ag-avatar text="RL" size="small"></ag-avatar>`
});

export const Large = () => ({
  components: { AgAvatar },
  template: `<ag-avatar text="RL" size="large"></ag-avatar>`
});

export const XLarge = () => ({
  components: { AgAvatar },
  template: `<ag-avatar text="RL" size="xlarge"></ag-avatar>`
});

{/* <Avatar imgUrl="https://joeschmoe.io/api/v1/random" /> */}
export const Image = () => ({
  components: { AgAvatar },
  template: `<ag-avatar imgUrl="https://joeschmoe.io/api/v1/random"></ag-avatar>`
})

export const ImageWithTransparentBackground = () => ({
  components: { AgAvatar },
  template: `<ag-avatar isTransparent imgUrl="https://joeschmoe.io/api/v1/random"></ag-avatar>`
})

export const WithPersonIcon = () => ({
  components: { AgAvatar, AvatarIconExample },
  template: `<ag-avatar>
    <AvatarIconExample />
  </ag-avatar>`
});

export const SvgTransparentBackground = () => ({
  components: { AgAvatar, AvatarIconExample },
  template: `<ag-avatar isTransparent>
    <AvatarIconExample />
  </ag-avatar>`
});

export const SvgSquare = () => ({
  components: { AgAvatar, AvatarIconExample },
  template: `<ag-avatar isSquare text="RL"></ag-avatar>`
});

export const SvgRounded = () => ({
  components: { AgAvatar, AvatarIconExample },
  template: `<ag-avatar isRounded>
    <AvatarIconExample />
  </ag-avatar>`
});

export const SvgSuccess = () => ({
  components: { AgAvatar, AvatarIconExample },
  template: `<ag-avatar type="success">
    <AvatarIconExample />
  </ag-avatar>`
});

export const SvgInfo = () => ({
  components: { AgAvatar, AvatarIconExample },
  template: `<ag-avatar type="info">
    <AvatarIconExample />
  </ag-avatar>`
});

export const SvgWarning = () => ({
  components: { AgAvatar, AvatarIconExample },
  template: `<ag-avatar type="warning">
    <AvatarIconExample />
  </ag-avatar>`
});

export const SvgError = () => ({
  components: { AgAvatar, AvatarIconExample },
  template: `<ag-avatar type="error">
    <AvatarIconExample />
  </ag-avatar>`
});

