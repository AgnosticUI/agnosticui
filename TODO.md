
## TODO LIST

### Completed
- [x] Svelte script that copies over the <style>...</style> from top-level button.css
- [x] Vue script that copies over the <style>...</style> from top-level button.css
- [x] Adds storybook for svelte
- [x] Get @storybook/addon-storyshots working in Vue
- [x] Adds storybook for vue
- [x] See if we can pull it into Pelotrack
- [x] Add a btn-blank invisible button to agnosticui
- [x] Use for the social button on Pelotrack
- [x] Add secondary button to Pelotrack for Filters (red ones)
- [x] Adds storybook for react
- [x] React CSS Modules that `composes` from top-level button.css
- [x] Design the Agnostic portal site 
- [x] React, Svelte, Vue should all have a simple jest unit test to confirm `onClick` handler gets called
- [x] Consider teasing apart `.btn` into `.btn-base` and `.btn-skin` or something
- [x] POC pointing to button.css from a portal showcase page and switching between themes by dynamically updating the CSS Custom Properties
- [x] React, Svelte, Vue should allow you to pass in `isSkinned: false` which defaults to true. If false we use `.btn-base` instead of `.btn`
- [x] Run all tests via GitHub Actions
- [x] Block buttons
- [x] Buttons Groups

### Next on deck
- [ ] Refactor Vue to use CSS Modules or Scoped Components. Probably css modules so we can be consistent with the way we're already doing it in React.
- [ ] Remove all global css and need for regex's in the copystyles.js scripts -- it's gonna have maintainance scaling issues if we don't!

- [ ] Buttons Gradients

## Post MVP POC Buttons
- [ ] Implement some of the portal to showcase the idea
- [ ] Write a rationale doc and start recruiting
- [ ] Setup Storybook Composition against react, svelte, and vue instances
- [ ] Transition into more of a tech lead role in the project (goal: have a couple core contributors that understand the project goals by this point)
