# Retro Neon Inspired Accordion Vibe

This vibe provides CSS variables inspired by 80s retro neon aesthetics and synthwave design for maximum visual impact and dramatic contrast in AgnosticUI Accordion components.

## Design Features

### Visual Design Inspired by 80s Synthwave
- **Electric color palette**: Neon blues, purples, pinks, and greens
- **Dramatic glow effects**: Multi-layer box shadows and text glows
- **Bold gradients**: Complex color transitions and backgrounds
- **High contrast**: Dark backgrounds with bright neon accents
- **Retro-futuristic aesthetic**: 80s sci-fi inspired visual language

### Interaction Patterns with Maximum Drama
- **Theatrical animations**: Longer durations with dramatic easing
- **Transform effects**: Scale, rotate, and translate on interactions  
- **Glow transitions**: Multi-layer shadow animations
- **Gradient shifts**: Background changes on hover and focus
- **Text effects**: Glowing text shadows and letter spacing

### Typography Inspired by Cyberpunk Culture
- **Futuristic fonts**: Orbitron, Exo, Rajdhani font stacks
- **Bold typography**: Heavy font weights and uppercase text
- **Letter spacing**: Wide tracking for retro computer feel
- **Text glow effects**: Neon-style text shadows
- **Dramatic sizing**: Larger than typical font sizes

### Accessibility Despite Visual Drama
- **Reduced motion support**: Tones down effects for sensitive users
- **High contrast modes**: Enhanced visibility when needed
- **Focus indicators**: Clear navigation despite visual complexity
- **Transparency preferences**: Reduces glow effects if requested

## Usage

### 1. Apply to Your Accordion
```html
<div class="neon-inspired-accordion">
  <ag-accordion-item>
    <span slot="header">Section Title</span>
    <div slot="content">Section content</div>
  </ag-accordion-item>
</div>
```

### 3. Apply Theme Variants
```html
<!-- Cyberpunk variant -->
<div class="neon-inspired-accordion neon-accordion-cyberpunk">
  <ag-accordion-item>...</ag-accordion-item>
</div>

<!-- Synthwave variant -->
<div class="neon-inspired-accordion neon-accordion-synthwave">
  <ag-accordion-item>...</ag-accordion-item>
</div>

<!-- Matrix variant -->
<div class="neon-inspired-accordion neon-accordion-matrix">
  <ag-accordion-item>...</ag-accordion-item>
</div>
```

## Key CSS Variables

### Electric Colors
- `--neon-accordion-electric-blue`: Primary neon blue (#00d4ff)
- `--neon-accordion-electric-pink`: Vibrant pink (#ff006e) 
- `--neon-accordion-electric-purple`: Electric purple (#8338ec)
- `--neon-accordion-electric-green`: Neon green (#39ff14)

### Dark Base Colors
- `--neon-accordion-dark-bg`: Deep black background
- `--neon-accordion-dark-surface`: Dark surface color
- `--neon-accordion-dark-text`: White text for contrast

### Glow Effects
- `--neon-accordion-glow-blue`: Multi-layer blue glow
- `--neon-accordion-glow-pink`: Multi-layer pink glow
- `--neon-accordion-glow-purple`: Multi-layer purple glow

### Dramatic Animation
- `--neon-accordion-duration-dramatic`: Extended 1200ms duration
- `--neon-accordion-ease-bounce`: Bounce easing curve
- `--neon-accordion-ease-electric`: Smooth electric transition

## Theme Variants

### Cyberpunk Theme
```css
.neon-accordion-cyberpunk {
  --neon-accordion-electric-blue: #00ffff;
  --neon-accordion-electric-pink: #ff0080;
  --neon-accordion-dark-bg: #000000;
}
```

### Synthwave Theme
```css
.neon-accordion-synthwave {
  --neon-accordion-electric-blue: #ff6b9d;
  --neon-accordion-electric-pink: #ffa726;
  --neon-accordion-dark-bg: #1a0033;
}
```

### Matrix Theme
```css
.neon-accordion-matrix {
  --neon-accordion-electric-blue: #00ff00;
  --neon-accordion-electric-pink: #00ff41;
  --neon-accordion-dark-bg: #001100;
}
```

## Customization Examples

### Tone Down the Drama
```css
:root {
  /* Reduce glow intensity */
  --neon-accordion-glow-blue: 0 2px 8px rgba(0, 212, 255, 0.3);
  
  /* Shorter animations */
  --neon-accordion-duration-dramatic: 400ms;
  
  /* Remove transforms */
  --neon-accordion-hover-transform: none;
}
```

### Create Custom Color Scheme
```css
:root {
  --neon-accordion-electric-blue: #ff4081;
  --neon-accordion-electric-pink: #00e676;
  --neon-accordion-electric-purple: #ffab00;
}
```

### Accessibility-First Variant
```css
@media (prefers-reduced-motion: reduce) {
  .neon-inspired-accordion {
    /* All dramatic effects are automatically reduced */
  }
}

@media (prefers-reduced-transparency) {
  .neon-inspired-accordion {
    /* Glow effects are automatically toned down */
  }
}
```

## Performance Considerations

The neon vibe uses intensive visual effects:

- **Multiple box shadows**: Can impact rendering performance
- **Text shadows**: Additional GPU work for text rendering  
- **Gradients**: Complex background calculations
- **Transforms**: Hardware acceleration recommended
- **Animations**: Longer durations increase resource usage

For production use, consider:
- Testing on lower-end devices
- Providing a "reduce effects" toggle
- Using `will-change` property for animated elements
- Monitoring performance with DevTools

## Attribution

Inspiration Source: 80s Retro/Synthwave Design Aesthetic  
Cultural Reference: Cyberpunk visual culture, Tron, Blade Runner  
Usage: Original implementation inspired by retro-futuristic design patterns