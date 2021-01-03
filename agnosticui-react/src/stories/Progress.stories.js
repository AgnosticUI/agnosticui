import React from 'react';
import Progress from './Progress.js';

export default {
  title: 'Progress',
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
