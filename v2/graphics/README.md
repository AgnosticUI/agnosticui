# Graphics

We've elected to save a few of the non-web assets here (e.g. 300x300 logos, etc.) since they're generally still quite small. No full blown PSDs etc. will be stored here though since that'd bog down the repo.

We have the more complete design assets in AgnosticUWe's [Figma project](https://www.figma.com/file/1q9U5vgNcusoz308UZqL4a/Agnostic-UWe?node-id=0%3A1) which currently only (Rob L) has access to.

# Figma Cheat Sheet

Perfect! Let's build your first button step-by-step in Figma. I'll also help you organize your limited 3 pages efficiently.

## Page Organization Strategy (3 Pages Max)

Since you only have 3 pages on the free plan, organize like this:

**Page 1: "📚 Components"**
- All component masters organized in sections

**Page 2: "🎨 Examples & Templates"**
- Demo compositions
- Page templates (later)

**Page 3: "📖 Documentation"**
- Token reference
- Usage guidelines
- Design-to-code mapping

Let's start with **Page 1: Components**.

---

## Create "Stage" Frames

Rather then creating the components directly on the Figma canvas, we can create a showcase frame, then place our components (like button variants) on that frame.

1. Create a frame using Frame tool [F] or Rectangle [R]. Rename frame and enable auto-layout `Shift + A` (or right-click → "Add auto-layout")
_Probably set Flow to Horizontal_.
2. Name it: [Component] Showcase
3. Give it a background: {background/primary} from Semantic - Light
4. Add padding: {space/8} all around
5. Your [COMPONENTS] e.g. buttons sit on this colored stage

## Step-by-Step: Building the Default Button

### Step 1: Create the Button Frame

1. **Select Frame tool** (F) or Rectangle (R)
2. Click on canvas
3. **Rename** the frame: `Button`
4. **Enable auto-layout**: Press `Shift + A` (or right-click → "Add auto-layout")

### Step 2: Add Text Layer

1. **Select Text tool** (T)
2. Click inside the Button frame
3. Type: `Default`
4. **Set font size**:
   - Click the font size value
   - Click the **variable icon** (◉)
   - Select `{font-size/sm}` from Primitives collection
   - (This maps to your `var(--ag-font-size-sm)` = 0.875rem = 14px)

### Step 3: Set Auto-Layout Properties

With the Button frame selected, look at the **right sidebar → Auto-layout section**:

**Direction:**
- Set to **Horizontal** (→)

**Padding:**
1. Click the padding value (it might show individual values or linked)
2. **Unlink** the padding if linked (click the link icon)
3. **Vertical padding** (top/bottom):
   - Click the value
   - Click **variable icon** (◉)
   - Select `{space/3}` (12px)
4. **Horizontal padding** (left/right):
   - Click the value
   - Click **variable icon** (◉)
   - Select `{space/4}` (16px)

**Gap (for icon + text):**
1. Click the gap value
2. Click **variable icon** (◉)
3. Select `{space/1}` (4px)
   - (Maps to `gap: var(--ag-space-1)`)

**Alignment:**
- Horizontal: **Center** (justifyContent: center)
- Vertical: **Center** (alignItems: center)

### Step 4: Set Background Color

1. With Button frame selected, look at **Fill** section
2. Click the color swatch
3. Go to **"Libraries"** tab (like you figured out earlier!)
4. Navigate to **"Semantic - Light"** collection
5. Select `{background/tertiary}`
   - (Maps to `background: var(--ag-background-tertiary)`)

### Step 5: Set Text Color

1. Select the **text layer** inside the button
2. Look at **Fill** section
3. Click color swatch → **"Libraries"** tab
4. Navigate to **"Semantic - Light"** collection
5. Select `{text/primary}`
   - (Maps to `color: inherit` which inherits from parent)

### Step 6: Set Border Radius

1. Select the **Button frame**
2. Look at **Corner radius** section
3. Click the radius value
4. Click **variable icon** (◉)
5. Select `{radius/md}` from Primitives
   - (For the "rounded" variant you'll change this, but default has no explicit radius in your CSS)
   - Actually, leave this at **0** for default, or use `{radius/none}`

### Step 7: Set Sizing Behavior

1. With Button frame selected, look at **Resizing** section
2. Set **Horizontal resizing**: **Hug contents**
3. Set **Vertical resizing**: **Hug contents**

This makes the button automatically size to fit the text (like your CSS does).

### Step 8: Create the Component

1. Select the Button frame
2. Right-click → **"Create component"** (or `Ctrl/Cmd + Alt + K`)
3. Rename it: `Button / Default / Medium`
4. A purple diamond icon appears (this is now a reusable component)

---

## Step 9: Create Variants (Size, Variant, Shape)

Now let's create the variants to match your component props.

### Create Component Set

1. Select your Button component
2. Right-click → **"Create component set"**
3. This creates a component set with variants

### Add Properties

In the **right sidebar → Properties section**:

**Property 1: Size**
1. Click **"+"** to add property
2. Name: `Size`
3. Type: **Variant**
4. Default value: `Medium`
5. Add values: `Small`, `Medium`, `Large`

**Property 2: Variant**
1. Click **"+"** again
2. Name: `Variant`
3. Type: **Variant**
4. Default value: `Default`
5. Add values: `Default`, `Primary`, `Secondary`, `Danger`

**Property 3: Shape**
1. Click **"+"**
2. Name: `Shape`
3. Type: **Variant**
4. Default value: `Default`
5. Add values: `Default`, `Rounded`, `Pill`, `Circle`

### Duplicate for Each Variant

Figma will create a grid. You'll have combinations like:
- Small / Default / Default
- Small / Primary / Default
- Medium / Default / Rounded
- Etc.

For each variant combination:

**Small size:**
- Padding: `{space/2}` × `{space/3}` (8px × 12px)
- Font size: `{font-size/xs}` (12px)

**Medium size (default):**
- Padding: `{space/3}` × `{space/4}` (12px × 16px)
- Font size: `{font-size/sm}` (14px)

**Large size:**
- Padding: `{space/4}` × `{space/5}` (16px × 20px)
- Font size: `{font-size/base}` (16px)

**Primary variant:**
- Background: `{primary}` from Semantic - Light
- Text color: `{text/primary-inverted}` (white)

**Secondary variant:**
- Background: `{secondary}` from Semantic - Light
- Text color: `{text/primary-inverted}`

**Danger variant:**
- Background: `{danger}` from Semantic - Light
- Text color: `{text/primary-inverted}`

**Rounded shape:**
- Border radius: `{radius/md}` (6px)

**Pill shape:**
- Border radius: `{radius/full}` (9999px)

**Circle shape:**
- Border radius: `{radius/full}`
- Make width = height (fixed size)

---

## Step 10: Add Annotations

Create a text frame next to your button component:

```
Button Component

Token Mapping:
• Padding: space-3 (vertical) × space-4 (horizontal)
• Gap: space-1
• Font: font-size-sm
• Background: background-tertiary (default)
• Text: text-primary
• Radius: radius-md (rounded variant)

CSS:
padding: var(--ag-space-3) var(--ag-space-4);
gap: var(--ag-space-1);
font-size: var(--ag-font-size-sm);
background: var(--ag-background-tertiary);
border-radius: var(--ag-radius-md);
```

---

## Page 1 Organization

Organize your Components page like this:

```
📚 Components Page

┌─────────────────────────────────────┐
│ AgnosticUI Design System            │
│ Design Tokens → Code Mapping        │
│ Last updated: Jan 11, 2025          │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Buttons                              │
├─────────────────────────────────────┤
│ [Button component variants grid]    │
│ [Token mapping annotations]         │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Inputs                               │
├─────────────────────────────────────┤
│ [Input component variants]          │
└─────────────────────────────────────┘

... etc for each component
```

Use **Sections** (Shift + S) to organize different component groups on the same page.

## Tips

- **Use Sections** (Shift + S) to organize components on one page instead of using multiple pages
- **Name components clearly**: `Button / Primary / Large / Rounded`
- **Add token annotations** so developers know the mapping
- **Test the component**: Drag an instance, change the text, verify it resizes correctly

Perfect! Let me help you set up the Button Group in Figma. I can see from your code that the buttons connect together with modified border radius on the inner edges.

## Button Group in Figma

### Option 1: Create as a Separate Component (Recommended)

**Step 1: Create the Button Group Frame**
1. Create a new frame: `Button Group`
2. Enable **auto-layout** (Shift + A)
3. Set direction: **Horizontal** (→)
4. Set **gap**: `0` (buttons touch each other)
5. Set **padding**: `0`

**Step 2: Add Button Instances**
1. Drag 3-4 instances of your Button component into the group
2. Set them all to: `variant="secondary"`, `bordered`, `size="md"`
3. Change text: "React", "Vue", "Svelte", "Lit"

**Step 3: Override Border Radius for Each Button**

Select **first button** in the group:
- Top-right corner radius: `0`
- Bottom-right corner radius: `0`
- Leave left corners as `{radius/md}`

Select **middle buttons** (2nd, 3rd):
- All corner radius: `0`

Select **last button**:
- Top-left corner radius: `0`
- Bottom-left corner radius: `0`
- Leave right corners as `{radius/md}`

**Step 4: Fix Border Overlap**
To simulate the `-1px` margin overlap:
1. Select the auto-layout frame
2. Set horizontal gap: `-1px`

This makes the borders overlap slightly, so they don't look doubled.

**Step 5: Make it a Component**
1. Select the entire Button Group frame
2. Right-click → **Create component**
3. Name it: `Button Group / Secondary / Bordered`

___

# Step-by-Step: Building the Input Component in Figma

Based on your Input web component code, here's how to build it with all the variants and proper token mapping.

## Overview of What We're Building

**Input has these variants:**
- **Size**: Small, Default, Large
- **Style**: Default, Rounded, Capsule, Underlined, Underlined with Background
- **State**: Default, Focus, Disabled, Invalid/Error
- **Type**: Text input, Textarea
- **Addons**: Left addon, Right addon, Both

Your Input component in Figma needs to be a **vertical auto-layout frame** containing:

1. **Label** (text layer)
2. **Input field** (frame with text inside)
---

## Step 1: Create the Wrapper Frame

1. **Create a frame**: `Input`
2. **Enable auto-layout**: `Shift + A`
3. **Set direction**: **Vertical** (↓)
4. **Gap between label and input**: `{space/2}` (8px)
   - This matches `margin-block-end: var(--ag-space-2)` on the label
5. **Padding**: `0` (wrapper has no padding)
6. **Horizontal resizing**: Hug contents
7. **Vertical resizing**: Hug contents

---

## Step 2: Add the Label

1. **Select Text tool** (T)
2. Click inside the Input wrapper frame
3. **Type**: `Email` (or "Label")
4. **Set text properties**:
   - Font size: `{font-size/base}` (16px)
   - Font weight: **600** (Semibold)
   - Color: Libraries → "Semantic - Light" → `{text/primary}`
   - Line height: `{line-height/base}` (24px)

**The label layer should:**
- Be the **first child** in the auto-layout (above the input)
- Have **Hug contents** for both width and height
- Use **Fill container** for width if you want it to stretch

---

## Step 3: Add the Input Field Frame

1. **Create a new frame** (nested inside the wrapper, below the label)
2. **Rename**: `Input Field`
3. **Enable auto-layout**: Horizontal (→)
4. **Set padding**:
   - Vertical: `{space/2}` (8px)
   - Horizontal: `{space/3}` (12px)
5. **Gap**: `0` (no gap needed for single text element)
6. **Horizontal resizing**: Fill container
7. **Vertical resizing**: Hug contents

---

## Step 4: Add the Input Text (Placeholder)

1. **Select Text tool** (T)
2. Click inside the Input Field frame
3. **Type**: `you@example.com` (placeholder text)
4. **Set text properties**:
   - Font size: `{font-size/base}` (16px)
   - Color: Libraries → "Semantic - Light" → `{text/muted}` (placeholder color!)
   - Line height: `{line-height/base}` (24px)
5. **Text resizing**: Fill container (width)

---

## Step 5: Style the Input Field Frame

**Background:**
- Fill color: Libraries → "Semantic - Light" → `{background/primary}`

**Border:**
- Stroke: 1px
- Color: Libraries → "Semantic - Light" → `{border/subtle}`
- Position: **Inside**

**Border radius:**
- `0` (default has no radius)

---

## Step 6: Final Structure Check

Your component hierarchy should look like:

```
Input (wrapper frame - vertical auto-layout)
├─ Label (text layer: "Email")
│  └─ Font: font-size-base, weight 600, color text/primary
└─ Input Field (frame - horizontal auto-layout)
   ├─ Background: background/primary
   ├─ Border: 1px border/subtle
   ├─ Padding: space-2 × space-3
   └─ Placeholder Text (text layer: "you@example.com")
      └─ Font: font-size-base, color text/muted
```

**Gap between label and input field:** `{space/2}` (8px)

---

## Step 7: Create the Component

1. Select the **entire Input wrapper frame**
2. Right-click → **Create component**
3. Rename: `Input / Default / Default`


## Step 8: Create Variants

Now proceed with creating the component set and variants as previously described:

### Size Variants

**Small:**
- Label: Same (font-size-base, weight 600)
- Input padding: `{space/1}` × `{space/2}` (4px × 8px)
- Input font: `{font-size/sm}` (14px)

**Default:**
- Label: font-size-base, weight 600
- Input padding: `{space/2}` × `{space/3}` (8px × 12px)
- Input font: `{font-size/base}` (16px)

**Large:**
- Label: Same (font-size-base, weight 600)
- Input padding: `{space/3}` × `{space/4}` (12px × 16px)
- Input font: `{font-size/lg}` (20px)


---

### Add Style Property

**Add second property:**
1. Name: `Style`
2. Type: Variant
3. Values: `Default`, `Rounded`, `Capsule`, `Underlined`, `Underlined BG`

**Configure each style:**

**Default:** (no changes needed)
- Border radius: `0`

**Rounded:**
- Border radius: `{radius/md}` (6px)

**Capsule:**
- Border radius: `{radius/full}` (9999px)

**Underlined:**
- Remove top, left, right borders (only keep bottom)
- Border bottom: 1px, color `{border/subtle}`
- Border radius: `0`

**Underlined BG:**
- Same as Underlined
- Background: `{background/secondary}` instead of `{background/primary}`

---

### Add State Property

**Add third property:**
1. Name: `State`
2. Type: Variant
3. Values: `Default`, `Focus`, `Disabled`, `Error`

**Configure each state:**

**Default:** (no changes)

**Focus:**
- Border color: Use a color with opacity → manually set `rgba(var(--ag-focus), 0.6)` approximation
  - Or use `{primary}` as close approximation
- Add **outline/stroke effect**:
  - Add second stroke: 2px
  - Color: `{primary}` with 50% opacity
  - Position: Outside
  - This simulates the focus outline

**Disabled:**
- Background: `{background/disabled}`
- Text color: `{text/muted}`
- Reduce opacity to 60% (optional, or just use the disabled background)

**Error:**
- Border color: `{danger-text}` or `{danger}`
- You might want to add a small error icon or red accent

---

## Step 7: Create Textarea Variant (Separate Component)

**Since textarea is quite different, create it as a separate component:**

1. **Duplicate** your Input component
2. **Rename**: `Textarea / Default / Default`
3. **Change the text layer**:
   - Make it multi-line (add line breaks in text)
   - Set height: 80-100px (multiple lines)
4. **Set vertical resizing**: Hug contents (but with min-height)
5. Create component set with same properties (Size, Style, State)

**Key differences from Input:**
- Taller default height
- Multi-line text placeholder
- Same tokens/styling otherwise

---

## Step 8: Create Input with Addons

**This is more complex - create as a separate component or variants:**

### Left Addon Variant

1. **Create new frame**: `Input with Addon`
2. **Enable auto-layout**: Horizontal
3. **Add two elements**:
   - **Addon frame** (left side)
   - **Input component instance** (right side)

**Style the addon:**
- Padding: `{space/2}` × `{space/3}`
- Background: `{background/primary}` (or transparent)
- Border: 1px solid `{border/subtle}`
- Border right: Remove (0px) - so it connects to input
- Text: Use icon or text like "$" or "@"
- Font size: `{font-size/base}`
- Color: `{text/primary}`

**Adjust input border:**
- Remove left border radius (set to 0)
- For rounded variant: Only right side has radius

### Right Addon Variant

Same as left but mirrored:
- Addon on right side
- Remove addon's left border
- Input removes right border radius

### Both Addons Variant

- Left addon + Input + Right addon
- Input has no border radius on either side
- Addons have outer radius only

---

## Step 9: Add Token Mapping Annotations

Create a text frame next to your component:

```
Input Component

Token Mapping:
• Padding (default): space-2 (vert) × space-3 (horiz)
• Padding (small): space-1 × space-2
• Padding (large): space-3 × space-4
• Font size (default): font-size-base (16px)
• Font size (small): font-size-sm (14px)
• Font size (large): font-size-lg (20px)
• Background: background-primary
• Border: 1px solid border-subtle
• Text: text-primary (actual text)
• Placeholder: text-muted
• Focus border: primary (with opacity)
• Error border: danger-text
• Disabled bg: background-disabled

CSS Mapping:
padding: var(--ag-space-2) var(--ag-space-3);
font-size: var(--ag-font-size-base);
background: var(--ag-background-primary);
border: 1px solid var(--ag-border-subtle);
color: var(--ag-text-primary);
```

