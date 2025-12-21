// Register all web components
import './FlexContainer';
import './FlexRow';
import './FlexCol';
import './FlexInline';

export { FlexContainer, type FlexContainerProps } from './_FlexContainer';
export { FlexRow } from './FlexRow';
export { FlexCol } from './FlexCol';
export { FlexInline } from './FlexInline';

// Import type for use in type aliases
import type { FlexContainerProps } from './_FlexContainer';

// Type aliases for convenience
export type FlexRowProps = FlexContainerProps;
export type FlexColProps = FlexContainerProps;
export type FlexInlineProps = FlexContainerProps;

// Aliases for familiarity with other libraries
export { FlexCol as Stack } from './FlexCol';
export { FlexRow as Group } from './FlexRow';
export type StackProps = FlexContainerProps;
export type GroupProps = FlexContainerProps;
