// v2/lib/src/components/Image/vue/index.ts
export { default } from './VueImage.vue';
export { default as VueImage } from './VueImage.vue';

// Define props interface
export interface VueImageProps {
  src?: string;
  alt?: string;
  sources?: Array<{
    srcset: string;
    type?: string;
    media?: string;
    sizes?: string;
  }>;
  width?: number;
  height?: number;
  aspectRatio?: string;
  fit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  position?: string;
  loading?: 'lazy' | 'eager';
  fade?: boolean;
  duration?: number;
  fallbackSrc?: string;
}
