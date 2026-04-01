# Design System Specification: The Kinetic Nourishment Framework

## 1. Overview & Creative North Star

### Creative North Star: "The Editorial Athlete"
This design system rejects the "fast food" digital template in favor of a high-end, editorial fitness experience. We are moving away from the cluttered, utility-first look of delivery apps and toward the sophisticated, breathing space of a premium nutrition journal. 

The aesthetic is driven by **intentional asymmetry** and **tonal layering**. We treat the screen as a canvas where high-protein ingredients are the heroes. By utilizing massive scale contrasts in typography and overlapping elements (e.g., a high-res chicken breast PNG breaking the container of a card), we create a sense of kinetic energy and forward motion—mimicking the lifestyle of the target audience.

---

## 2. Colors: Vitality & Depth

Our palette is rooted in biological vitality. We use `primary` (Fresh Green) to denote plant-based health and `secondary` (Vibrant Light Orange) to signal high-energy protein and primary actions.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Layout boundaries must be established solely through background color shifts. For example, a `surface-container-low` section should sit directly against a `surface` background to create a "zone" without the visual friction of a line.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of fine paper. 
- **Base Layer:** `surface` (#f6f6f6) for the overall page.
- **Sectioning:** Use `surface-container` (#e7e8e8) for large content blocks.
- **Nesting:** Place a `surface-container-lowest` (#ffffff) card inside a `surface-container-low` section to create a soft, natural lift.

### The Glass & Gradient Rule
To prevent a "flat" feel, use Glassmorphism for floating navigation and top-level modals.
- **Glass Effect:** Use `surface` at 70% opacity with a `backdrop-blur` of 20px.
- **Signature Gradients:** Apply a subtle linear gradient (Top-Left to Bottom-Right) from `primary` (#006b1b) to `primary-container` (#91f78e) for high-impact CTAs to give them a "pulsing" organic feel.

---

## 3. Typography: Authority Through Scale

We utilize two typefaces to balance professional nutrition science with modern fitness energy.

- **Display & Headlines:** **Plus Jakarta Sans**. A typeface with a wider stance and modern terminals. It conveys authority and high-end positioning.
- **Body & Labels:** **Inter**. Chosen for its mathematical precision and extreme legibility at small sizes.

### Hierarchy Highlights
- **Display-LG (3.5rem):** Reserved for hero titles. Use tight letter-spacing (-0.02em) to create a "block" of text that feels solid and impactful.
- **Headline-MD (1.75rem):** Used for protein category titles (e.g., "The Poultry Series").
- **Label-MD (0.75rem):** All-caps with 0.05em tracking for nutritional callouts (e.g., "30G PROTEIN").

---

## 4. Elevation & Depth: Tonal Layering

We do not use structural lines. We use light.

- **The Layering Principle:** Use the `Roundedness Scale` to reinforce depth. Smaller items (chips) use `sm` (0.5rem), while primary content cards must use `lg` (2rem) or `xl` (3rem) to feel approachable and "soft."
- **Ambient Shadows:** When a card must "float" (like a floating action button or a selected meal card), use a shadow with a 40px blur, 0px spread, and 6% opacity. The shadow color must be a tinted version of `on-surface` (#2d2f2f), never pure black.
- **The "Ghost Border" Fallback:** If a container sits on a background of the same color, use a "Ghost Border": `outline-variant` (#acadad) at 15% opacity.

---

## 5. Components: The Building Blocks

### Cards (The Core Component)
- **Style:** No borders. Large `lg` (2rem) corner radius. 
- **Content:** Use `spacing-6` (2rem) for internal padding. 
- **Interaction:** On hover, a card should scale to 102% and transition from `surface-container-low` to `surface-container-lowest`.

### Buttons (Kinetic Actions)
- **Primary:** Gradient fill (`primary` to `primary-container`). `full` (pill) roundedness. `title-sm` typography.
- **Secondary:** `surface-container-highest` background with `on-surface` text. No border.
- **Tertiary:** Text-only in `secondary` (#874e00) with a subtle underline on hover.

### Chips (Macro Tags)
- **Visuals:** Small `sm` (0.5rem) radius. 
- **Veg/Non-Veg:** Use `primary-container` for Veg and `secondary-container` for Non-Veg. These act as instant visual cues for dietary preferences.

### Input Fields
- **Style:** `surface-container-high` background. No border. 
- **Focus State:** Background transitions to `surface-container-lowest` with a 2px "Ghost Border" of `primary`.

### Navigation (The Floating Bar)
Avoid a top-pinned header. Use a floating dock style with a `backdrop-blur` (Glassmorphism) and `xl` (3rem) rounded corners, centered at the bottom of the viewport for mobile-first ergonomics.

---

## 6. Do’s and Don’ts

### Do
- **Do** use high-protein imagery that "breaks" the bounds of its container. A bowl of lentils should slightly overlap the heading next to it.
- **Do** use `spacing-20` (7rem) between major vertical sections to allow the design to breathe.
- **Do** use `secondary` (Orange) sparingly—only for conversion points (Add to Cart) and "Energy" callouts.

### Don’t
- **Don't** use 1px dividers between list items. Use `spacing-4` (1.4rem) of vertical gap and subtle `surface-container` background shifts instead.
- **Don't** use standard "Drop Shadows." If it looks like a 2010 web element, it’s too heavy. It should feel like "ambient occlusion" in a bright room.
- **Don't** use pure black (#000000) for text. Always use `on-surface` (#2d2f2f) to maintain a premium, editorial softness.