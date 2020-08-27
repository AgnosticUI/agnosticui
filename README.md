# AgnosticUI

- Are you tired of having incompatible components because yours are tied to a particular JavaScript framework?
- Are you tired of excluding your more technical Designers and UX experts that happen to be better then your JavaScript devs at CSS and skinning UI but, now have no idea how the hell to make any sorts of code contributions at all?

AgnosticUI takes an HTML/CSS first approach to UI component primitives, but attempts to also deliver framework specific implementations of these primitives. All with as little divergence from the top level HTML/CSS primitives as possible.

## Axioms

1. Use traditional CSS as much as possible -- preferably with no preprocessing
1. Use semantic and accessible HTML. Let's be part of the solution not the problem
1. A11y friendly keyboard focus and screen reader compatibility should be considered as much is reasonably possible. Some trade offs may need to be made for things like data grids / tables, but, generally let's not break A11y
1. Leverage CSS custom properties inherent theming capabilities and allow for overriding all defaults
1. Each component has a top level component.html and component.css. Framework-based subdirectories should
attempt to synchronize with the component.css as much as possible. For example, `Button.svelte` component literally copies the top-level `button.css` into its `<style>...</style>` via a node `copystyles.js` script
1. Each component directory is, in a way, it's own dev playground. Eventually, a portal site of some sort
may sweep through and glob all these so as to present them in a typical fashion customary to popular design systems like Material, Lighting, Bootstrap, etc., but the priority will be on keeping each component as its own orthogonal ecosystem as much as possible
1. Keep code lean and as generic as possible so we can leverage the platform and eventual standards. Within a component's framework example sub-directory, it's fine to use the idioms of that framework to a certain degree. But, let's avoid super exotic code that's overly specific
1. Keep UI Components as presentational and primitive as possible while exposing obvious things like `onClick` so users can choose how to customize and interact with these primitives from container JavaScript

## TODO LIST

### Completed
- [x] Svelte script that copies over the <style>...</style> from top-level button.css
- [x] Vue script that copies over the <style>...</style> from top-level button.css
- [x] Adds storybook for svelte

### On Deck
- [ ] Adds storybook for react
- [ ] Adds storybook for vue
- [ ] React CSS Modules that `composes` from top-level button.css
- [ ] See if we can pull it into Pelotrack
- [ ] Block and shape buttons

## After we have POC buttons
- [ ] Setup Storybook Composition against react, svelte, and vue instances
- [ ] Design the Agnostic portal site 
- [ ] Write a rationale doc and start recruiting
- [ ] Implement some of the portal to showcase the idea
- [ ] Transition into more of a tech lead role in the project (goal: have a couple core contributors that understand the project goals by this point)
