import CardExample from './CardExample.svelte';

export default {
  title: 'Cards',
};

export const Card = () => ({
  Component: CardExample,
});


// const Template = ({ ...args }) => (
//   <Card {...args}>
//     <p>Some test content for our &ldquo;slot&rdquo;</p>
//   </Card>
// );

// export const CardTest = Template.bind({});
// CardTest.args = {
// };

// export const CardStacked = Template.bind({});
// CardStacked.args = {
//   isStacked: true,
// };

// export const CardNoSkin = Template.bind({});
// CardNoSkin.args = {
//   isSkinned: false,
// };