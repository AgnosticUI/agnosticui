<script setup lang="ts">
import { ref } from "vue";
import VueImage from "agnosticui-core/image/vue";

// Basic Image
const basicImageUrl = 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=650&h=487&fit=crop&q=80';
const basicImageSrc = ref(basicImageUrl);
const reloadBasicImage = () => {
  basicImageSrc.value = `${basicImageUrl}&t=${new Date().getTime()}`;
};

// Responsive Image
const responsiveImageUrl = 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=800&fit=crop&q=80';
const responsiveImageSrc = ref(responsiveImageUrl);
const reloadResponsiveImage = () => {
  responsiveImageSrc.value = `${responsiveImageUrl}&t=${new Date().getTime()}`;
};

// Object Fit Image
const objectFitImageUrl = 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=650&h=487&fit=crop&q=80';
const objectFitImageSrc = ref(objectFitImageUrl);
const reloadObjectFitImage = () => {
  objectFitImageSrc.value = `${objectFitImageUrl}&t=${new Date().getTime()}`;
};

// Responsive Sources Image
const responsiveSourcesImageUrl = 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=650&h=487&fit=crop&q=80';
const responsiveSourcesImageSrc = ref(responsiveSourcesImageUrl);
const reloadResponsiveSourcesImage = () => {
  responsiveSourcesImageSrc.value = `${responsiveSourcesImageUrl}&t=${new Date().getTime()}`;
};
const responsiveSources = [
  {
    srcset: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1400&h=787&fit=crop&q=80',
    media: '(min-width: 1024px)',
  },
  {
    srcset: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1000&h=562&fit=crop&q=80',
    media: '(min-width: 768px)',
  },
];

// Fallback Image
const fallbackImageUrl = 'https://thissourcedoesnotexist.com/image.jpg';
const fallbackImageSrc = ref(fallbackImageUrl);
const reloadFallbackImage = () => {
  fallbackImageSrc.value = `${fallbackImageUrl}?t=${new Date().getTime()}`;
};

// Placeholder Image
const placeholderImageUrl = 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=650&h=487&fit=crop&q=80&auto=format&ps=50';
const placeholderImageSrc = ref(placeholderImageUrl);
const reloadPlaceholderImage = () => {
  placeholderImageSrc.value = `${placeholderImageUrl}&t=${new Date().getTime()}`;
};

// Error Image
const errorImageUrl = 'https://thissourcedoesnotexist.com/another-broken-image.jpg';
const errorImageSrc = ref(errorImageUrl);
const reloadErrorImage = () => {
  errorImageSrc.value = `${errorImageUrl}?t=${new Date().getTime()}`;
};

// Styled Image
const styledImageUrl = 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=650&h=487&fit=crop&q=80';
const styledImageSrc = ref(styledImageUrl);
const reloadStyledImage = () => {
  styledImageSrc.value = `${styledImageUrl}&t=${new Date().getTime()}`;
};
</script>

<template>
  <div class="image-examples-container">
    <h2>Basic Image</h2>
    <p>A standard image with a `src` and `alt` tag. This example also has the <code>fade</code> prop enabled. Click the button to reload the image and see the effect.</p>
    <VueImage
      :src="basicImageSrc"
      alt="A beautiful landscape with a river and mountains."
      :width="650"
      :height="487"
      :fade="true"
    />
    <button @click="reloadBasicImage" class="reload-button">Reload Image</button>
    <hr />

    <h2>Responsive Image (No Layout Shift)</h2>
    <p>
      By omitting `width` and `height` props and providing `aspectRatio`, the image becomes responsive while preventing content layout shift. Fade is also enabled here.
    </p>
    <div class="responsive-image-container">
      <VueImage
        :src="responsiveImageSrc"
        alt="A forest path leading to a mountain."
        aspectRatio="16/9"
        :fade="true"
      ></VueImage>
    </div>
    <button @click="reloadResponsiveImage" class="reload-button">Reload Image</button>
    <hr />

    <h2>Object Fit: Contain</h2>
    <p>Use `fit="contain"` to ensure the entire image is visible within its container without being cropped.</p>
    <div class="contain-fit-container">
      <VueImage
        :src="objectFitImageSrc"
        alt="A dense forest with sunlight filtering through."
        aspectRatio="4/3"
        fit="contain"
        :fade="true"
      ></VueImage>
    </div>
    <button @click="reloadObjectFitImage" class="reload-button">Reload Image</button>
    <hr />

    <h2>Responsive Sources with &lt;picture&gt;</h2>
    <p>Provide different images for different screen sizes using the `sources` prop. Resize your browser to see the image change.</p>
    <div class="responsive-image-container">
      <VueImage
        :src="responsiveSourcesImageSrc"
        alt="A responsive landscape that changes with screen size."
        aspectRatio="16/9"
        :sources="responsiveSources"
        :fade="true"
      ></VueImage>
    </div>
    <button @click="reloadResponsiveSourcesImage" class="reload-button">Reload Image</button>
    <hr />

    <h2>Fallback Source</h2>
    <p>If the primary `src` is broken, the `fallbackSrc` will be loaded instead. The fallback will also fade in.</p>
    <VueImage
      :src="fallbackImageSrc"
      fallbackSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=650&h=487&fit=crop&q=80"
      alt="An image with a fallback source."
      :width="650"
      :height="487"
      :fade="true"
    />
    <button @click="reloadFallbackImage" class="reload-button">Reload Image</button>
    <hr />

    <h2>Custom Placeholder Slot</h2>
    <p>Provide custom content to be displayed while the image is loading.</p>
    <VueImage
      :src="placeholderImageSrc"
      alt="A nature scene with a custom placeholder."
      :width="650"
      :height="487"
    >
      <div
        slot="placeholder"
        class="custom-placeholder"
      >
        <div class="placeholder-icon">📷</div>
        <div>Loading beautiful scenery...</div>
      </div>
    </VueImage>
    <button @click="reloadPlaceholderImage" class="reload-button">Reload Image</button>
    <hr />

    <h2>Custom Error Slot</h2>
    <p>Display a custom message or UI when an image fails to load.</p>
    <div class="responsive-image-container">
      <VueImage
        :src="errorImageSrc"
        alt="An image with a custom error message."
        aspectRatio="4/3"
        style="width: 100%;"
      >
        <div
          slot="error"
          class="custom-error"
        >
          <div class="error-icon">⚠️</div>
          <div>Oops! The image could not be loaded.</div>
        </div>
      </VueImage>
    </div>
    <button @click="reloadErrorImage" class="reload-button">Reload Image</button>
    <hr />

    <h2>Styled with CSS Class and Parts</h2>
    <p>Use a CSS class to apply custom styles to the component, including its internal parts like `::part(ag-img)`.</p>
    <div class="responsive-image-container">
      <VueImage
        class="custom-styled-image"
        :src="styledImageSrc"
        alt="A landscape with a custom border style."
        aspectRatio="4/3"
        :fade="true"
      />
    </div>
    <button @click="reloadStyledImage" class="reload-button">Reload Image</button>
  </div>
</template>

<style>
.image-examples-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.image-examples-container hr {
  border: 0;
  height: 1px;
  background-color: var(--ag-border-color);
  margin-top: 1rem;
}

.reload-button {
  display: block;
  margin-top: 1rem;
  border: 1px solid var(--ag-border-color);
  background-color: var(--ag-background);
  color: var(--ag-text-color);
  padding: 0.5rem 1rem;
  border-radius: var(--ag-radius);
  cursor: pointer;
  width: fit-content;
}
.reload-button:hover {
  background-color: var(--ag-background-secondary);
}

.responsive-image-container {
  width: 100%;
  max-width: 800px;
}

.contain-fit-container {
  width: 100%;
  max-width: 800px;
  background-color: var(--ag-background-secondary);
  padding: 1rem;
  border-radius: var(--ag-radius);
}

.custom-placeholder,
.custom-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 0.5rem;
  font-family: var(--ag-font-family-body);
}

.placeholder-icon,
.error-icon {
  font-size: 2.5rem;
  line-height: 1;
}

.custom-error {
  background: var(--ag-danger-background);
  color: var(--ag-danger-text);
}

.custom-styled-image::part(ag-img) {
  border: 4px solid var(--ag-primary-light);
  border-radius: 16px;
  box-shadow: var(--ag-shadow-3);
}
</style>
