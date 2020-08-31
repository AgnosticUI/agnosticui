import ButtonIconLeft from './ButtonIconLeft';
import ButtonIconRight from './ButtonIconRight';

export default {
  title: 'Button Icons',
};

export const ButtonIconLeftTest = () => ({
  components: { ButtonIconLeft },
  template: '<ButtonIconLeft />',
});

export const ButtonIconRightTest = () => ({
  components: { ButtonIconRight },
  template: '<ButtonIconRight />',
});
