// Register all web components
import './FlexContainer.js';
import '../FlexRow.js';
import '../FlexCol.js';
import '../FlexInline.js';

export { FlexContainer, type FlexContainerProps } from './_FlexContainer.js';
export { FlexRow } from '../FlexRow.js';
export { FlexCol } from '../FlexCol.js';
export { FlexInline } from '../FlexInline.js';

// Import type for use in type aliases
import type { FlexContainerProps } from './_FlexContainer.js';

// Type aliases for convenience
export type FlexRowProps = FlexContainerProps;
export type FlexColProps = FlexContainerProps;
export type FlexInlineProps = FlexContainerProps;

// Aliases for familiarity with other libraries
export { FlexCol as Stack } from '../FlexCol.js';
export { FlexRow as Group } from '../FlexRow.js';
export type StackProps = FlexContainerProps;
export type GroupProps = FlexContainerProps;
