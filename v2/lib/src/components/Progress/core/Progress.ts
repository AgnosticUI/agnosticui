import { Progress, type ProgressProps } from './_Progress';



declare global {
  interface HTMLElementTagNameMap {
    'ag-progress': Progress;
  }
}

export { Progress, type ProgressProps };
