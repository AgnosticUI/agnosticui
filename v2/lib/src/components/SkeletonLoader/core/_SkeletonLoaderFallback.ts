import { escapeHtml } from "../../../utils/escape.js";
import type { SkeletonVariant, SkeletonEffect, SkeletonIntensity } from "./_SkeletonLoader.js";

export interface SkeletonLoaderFallbackProps {
  variant?: SkeletonVariant;
  effect?: SkeletonEffect;
  intensity?: SkeletonIntensity;
  width?: string;
  height?: string;
  ariaHidden?: string | boolean;
}

export function _SkeletonLoaderFallback(props: SkeletonLoaderFallbackProps = {}): string {
  // Normalize Framework Property/Attribute inputs
  const variant: SkeletonVariant = props.variant || 'text';
  const effect: SkeletonEffect = props.effect || 'pulse';
  const intensity: SkeletonIntensity = props.intensity || 'light';
  const width = props.width;
  const height = props.height;
  
  const ariaHidden = props.ariaHidden !== undefined 
    ? (props.ariaHidden === true || props.ariaHidden === 'true' || props.ariaHidden === '') 
    : true;

  // Calculate matching structural styles
  let inlineStyles = "";
  if (variant === 'circular') {
    if (width && !height) {
      inlineStyles = `width: ${escapeHtml(width)}; height: ${escapeHtml(width)};`;
    } else if (height && !width) {
      inlineStyles = `width: ${escapeHtml(height)}; height: ${escapeHtml(height)};`;
    } else if (width && height) {
      inlineStyles = `width: ${escapeHtml(width)}; height: ${escapeHtml(height)};`;
    }
  } else {
    const pieces: string[] = [];
    if (width) pieces.push(`width: ${escapeHtml(width)}`);
    if (height) pieces.push(`height: ${escapeHtml(height)}`);
    if (pieces.length > 0) inlineStyles = pieces.join('; ') + ';';
  }

  const styleAttr = inlineStyles ? ` style="${inlineStyles}"` : "";
  const ariaAttr = ariaHidden ? ' aria-hidden="true"' : "";

  return `<div class="ag-skeleton-loader-wrapper" data-variant="${escapeHtml(variant)}" data-effect="${escapeHtml(effect)}" data-intensity="${escapeHtml(intensity)}"${styleAttr}${ariaAttr}><div class="ag-skeleton-loader-inner"></div></div>`;
}
