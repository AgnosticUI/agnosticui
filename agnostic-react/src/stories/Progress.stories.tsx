import { Progress } from '../Progress';

export default {
  title: 'AG—React (Beta)/Progress',
  component: Progress,
};

export const All = () => (
  <>
    <Progress value={30} max={100} />
    <Progress value={30} max={100} css="foo-bar" />
    <Progress value={0} max={100} css="foo-bar" />
    <Progress value={100} max={100} css="foo-bar" />
  </>
);
