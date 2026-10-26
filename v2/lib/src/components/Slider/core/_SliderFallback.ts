import styles from './slider-structure.module.css';
import { escapeHtml } from '../../../utils/escape.js';
import type { SliderProps } from './_Slider.js';

export function _SliderFallback(props: SliderProps = {}): string {
  const isDual = props.dual === true || (props.dual as unknown as string) === 'true' || (props.dual as unknown as string) === '';
  const isVertical = props.vertical === true || (props.vertical as unknown as string) === 'true' || (props.vertical as unknown as string) === '';
  const isDisabled = props.disabled === true || (props.disabled as unknown as string) === 'true' || (props.disabled as unknown as string) === '';
  const isReadonly = props.readonly === true || (props.readonly as unknown as string) === 'true' || (props.readonly as unknown as string) === '';
  const isRequired = props.required === true || (props.required as unknown as string) === 'true' || (props.required as unknown as string) === '';
  const isInvalid = props.invalid === true || (props.invalid as unknown as string) === 'true' || (props.invalid as unknown as string) === '';
  const showTicks = props.showTicks === true || (props.showTicks as unknown as string) === 'true' || (props.showTicks as unknown as string) === '';
  const showTooltip = props.showTooltip === true || (props.showTooltip as unknown as string) === 'true' || (props.showTooltip as unknown as string) === '';

  const min = props.min !== undefined ? Number(props.min) : 0;
  const max = props.max !== undefined ? Number(props.max) : 100;
  const step = props.step !== undefined ? Number(props.step) : 1;
  const size = props.size || 'default';
  const name = props.name || '';
  const label = props.label || '';
  const helpText = props.helpText || '';
  const errorMessage = props.errorMessage || '';
  const labelPosition = props.labelPosition || 'top';
  const noLabel = props.noLabel || false;
  const labelHidden = props.labelHidden || false;
  const ariaLabel = props.ariaLabel || '';

  // Determine underlying baseline array configurations
  let valMin = min;
  let valMax = typeof props.value === 'number' ? props.value : max;
  if (isDual && Array.isArray(props.value)) {
    valMin = props.value[0];
    valMax = props.value[1];
  }

  const randomId = Math.random().toString(36).substring(2, 9);
  const sliderId = `ag-slider-input-${randomId}`;
  const minInputId = `ag-slider-min-${randomId}`;
  const maxInputId = `ag-slider-max-${randomId}`;
  const labelId = `ag-slider-label-${randomId}`;
  const helperId = `ag-slider-helper-${randomId}`;
  const errorId = `ag-slider-error-${randomId}`;

  let sizeClass = styles.sizeDefault;
  if (size === 'small') sizeClass = styles.sizeSmall;
  if (size === 'large') sizeClass = styles.sizeLarge;

  const wrapperClasses = [
    styles.sliderWrapper,
    'ag-slider',
    `ag-slider--${size}`,
    sizeClass
  ];
  if (isVertical) wrapperClasses.push(styles.vertical, 'ag-slider--vertical');

  const containerClasses = [
    styles.sliderContainer,
    'ag-slider__container'
  ];
  if (isVertical) containerClasses.push(styles.vertical);

  const pctStart = ((valMin - min) / (max - min)) * 100;
  const pctEnd = ((valMax - min) / (max - min)) * 100;

  const progressStyle = isVertical
    ? `bottom: ${isDual ? pctStart : 0}%; height: ${isDual ? pctEnd - pctStart : pctEnd}%`
    : `left: ${isDual ? pctStart : 0}%; width: ${isDual ? pctEnd - pctStart : pctEnd}%`;

  const thumbMinStyle = isVertical ? `bottom: ${pctStart}%` : `inset-inline-start: ${pctStart}%`;
  const thumbMaxStyle = isVertical ? `bottom: ${pctEnd}%` : `inset-inline-start: ${pctEnd}%`;

  const nameAttr = name ? ` name="${escapeHtml(name)}"` : '';
  const disabledAttr = isDisabled ? ' disabled' : '';
  const readonlyAttr = isReadonly ? ' readonly' : '';

  let ariaDescribedBy = '';
  const descriptions: string[] = [];
  if (helpText && !isInvalid) descriptions.push(helperId);
  if (isInvalid && errorMessage) descriptions.push(errorId);
  if (descriptions.length > 0) ariaDescribedBy = ` aria-describedby="${descriptions.join(' ')}"`;

  const labelHtml = (label && !noLabel && !isDual) ? `
    <label id="${labelId}" for="${sliderId}" class="ag-form-control__label${labelHidden ? ' ag-form-control__label--hidden' : ''}${isRequired ? ' ag-form-control__label--required' : ''}">
      ${escapeHtml(label)}
    </label>
  ` : '';

  const minLabel = label ? `${label} - Minimum value` : 'Minimum value';
  const maxLabel = label ? `${label} - Maximum value` : 'Maximum value';

  let inputsHtml = '';
  if (isDual) {
    inputsHtml = `
      <input id="${minInputId}" class="${styles.sliderInput || ''} ag-slider__input" type="range" min="${min}" max="${max}" step="${step}" value="${valMin}" ${disabledAttr} ${readonlyAttr} aria-valuemin="${min}" aria-valuemax="${valMax}" aria-valuenow="${valMin}" aria-label="${minLabel}" ${ariaDescribedBy} />
      <input id="${maxInputId}" class="${styles.sliderInput || ''} ag-slider__input" type="range" min="${min}" max="${max}" step="${step}" value="${valMax}" ${disabledAttr} ${readonlyAttr} aria-valuemin="${valMin}" aria-valuemax="${max}" aria-valuenow="${valMax}" aria-label="${maxLabel}" ${ariaDescribedBy} />
    `;
  } else {
    const ariaLabelAttr = ariaLabel ? ` aria-label="${escapeHtml(ariaLabel)}"` : '';
    inputsHtml = `
      <input id="${sliderId}" class="${styles.sliderInput || ''} ag-slider__input" type="range" min="${min}" max="${max}" step="${step}" value="${valMax}" ${disabledAttr} ${readonlyAttr} aria-valuemin="${min}" aria-valuemax="${max}" aria-valuenow="${valMax}" ${ariaLabelAttr} ${ariaDescribedBy} ${nameAttr} />
    `;
  }

  let ticksHtml = '';
  if (showTicks && props.tickStep && props.tickStep > 0) {
    const ticks = [];
    const tickCount = Math.floor((max - min) / props.tickStep);
    for (let i = 0; i <= tickCount; i++) {
      const v = min + (i * props.tickStep);
      const pct = ((v - min) / (max - min)) * 100;
      const tStyle = isVertical ? `bottom: ${pct}%` : `inset-inline-start: ${pct}%`;
      ticks.push(`
        <div class="${styles.sliderTick || ''} ag-slider__tick" style="${tStyle}">
          <div class="${styles.sliderTickLabel || ''} ag-slider__tick-label">${v}</div>
        </div>
      `);
    }
    ticksHtml = `<div class="${styles.sliderTicks || ''} ag-slider__ticks">${ticks.join('')}</div>`;
  }

  const thumbMinHtml = isDual ? `
    <div class="${styles.sliderThumb || ''} ag-slider__thumb" style="${thumbMinStyle}" aria-hidden="true">
      ${showTooltip ? `<div class="${styles.sliderTooltip || ''} ag-slider__tooltip">${valMin}</div>` : ''}
    </div>
  ` : '';

  const thumbMaxHtml = `
    <div class="${styles.sliderThumb || ''} ag-slider__thumb" style="${thumbMaxStyle}" aria-hidden="true">
      ${showTooltip ? `<div class="${styles.sliderTooltip || ''} ag-slider__tooltip">${valMax}</div>` : ''}
    </div>
  `;

  const controlHtml = `
    <div class="${containerClasses.join(' ')}" ${isDual ? 'role="group"' : ''}>
      ${inputsHtml}
      <div class="${styles.sliderTrack || ''} ag-slider__track">
        <div class="${styles.sliderProgress || ''} ag-slider__progress" style="${progressStyle}"></div>
        ${ticksHtml}
        ${thumbMinHtml}
        ${thumbMaxHtml}
      </div>
    </div>
  `;

  const helperHtml = (helpText && !isInvalid) ? `<div id="${helperId}" class="ag-form-control__helper">${escapeHtml(helpText)}</div>` : '';
  const errorHtml = (isInvalid && errorMessage) ? `<div id="${errorId}" class="ag-form-control__error">${escapeHtml(errorMessage)}</div>` : '';

  let bodyHtml = '';
  if (labelPosition === 'start' || labelPosition === 'end') {
    bodyHtml = `
      <div class="ag-form-control--horizontal">
        ${labelHtml}
        ${controlHtml}
      </div>
      ${helperHtml} ${errorHtml}
    `;
  } else if (labelPosition === 'bottom') {
    bodyHtml = `
      ${controlHtml}
      ${helperHtml} ${errorHtml}
      ${labelHtml}
    `;
  } else {
    bodyHtml = `
      ${labelHtml}
      ${controlHtml}
      ${helperHtml} ${errorHtml}
    `;
  }

  return `
    <div class="${wrapperClasses.join(' ').trim()}">
      <div class="${styles.sliderLiveRegion || ''} ag-slider__live-region" aria-live="polite" aria-atomic="true"></div>
      ${bodyHtml}
    </div>
  `.trim();
}