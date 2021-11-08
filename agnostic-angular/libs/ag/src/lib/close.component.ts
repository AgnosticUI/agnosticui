import { Input, ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ag-close',
  template: `<button
    class="close-button"
    aria-label="Close"
    [class.close-button-small]="size === 'small'"
    [class.close-button-large]="size === 'large'"
  >
    <svg class="close" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M.439 21.44a1.5 1.5 0 0 0 2.122 2.121l9.262-9.261a.25.25 0 0 1 .354 0l9.262 9.263a1.5 1.5 0 1 0 2.122-2.121L14.3 12.177a.25.25 0 0 1 0-.354l9.263-9.262A1.5 1.5 0 0 0 21.439.44L12.177 9.7a.25.25 0 0 1-.354 0L2.561.44A1.5 1.5 0 0 0 .439 2.561L9.7 11.823a.25.25 0 0 1 0 .354Z"
      />
    </svg>
  </button>`,
  styleUrls: ['./close.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CloseComponent {
  @Input() size: 'small' | 'large' | 'xlarge' | '' = '';
}
