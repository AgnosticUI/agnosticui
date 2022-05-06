
## FAQ

AgnosticUI is:

> a set of UI primitives that start their lives in clean HTML and CSS

So for questions like &ldquo;why don't you have component X?&rdquo; The general answer is that maintaining the level of complexity required by said component in core would greatly increase scope and size of the project and increase the bug count thus making the project infeasible for the maintainers.

For folks in the community that are really motivated to create such components, we can certainly house those in the [addons repo](https://github.com/AgnosticUI/agnosticui-addons) with the disclaimer that the component is _community supported_.

### Why no Tooltip?

Yes, one would think a tooltip is a simple component to include but there are some considerations:

**Viewport calculations** must be done such that when the user has scrolled that point to the top of the screen, a tooltip initially set to show on top will now show on the bottom. [popper.js](https://popper.js.org/) calls this feature _flipping_

**Overflow prevention** as also discuss on the [popper.js site](https://popper.js.org/)

#### What's the recommendation then?

Use the aforementioned [popper.js](https://popper.js.org/) or one of its ports:
- [Vue 3](https://valgeirb.github.io/vue3-popper/), [React](https://popper.js.org/react-popper/), [Svelte](https://svelte.dev/repl/6ef53f4882324d21a14f49ec68cf60f7?version=3.47.0) (svelte repl with example _use:popper_ action to use popper core)

### Core contributor incentives

The AgnosticUI project is certainly hoping to be a very contribution-friendly community. We are thinking of ways to feature contributors more prominently at some point—although the [GitHub Insights Contributions](https://github.com/agnosticui/agnosticui/graphs/contributors) listing does seems to provide this to a certain degree. Suggestions are welcome.

### Where's darkmode?

It is planned for [v2](https://github.com/AgnosticUI/agnosticui/issues/14)

### I want to add an entire new framework (like Preact, Lit, Solid, etc.)

Awesome! AgnosticUI was partially inspired by the [TodoMVC project](https://todomvc.com/) which eventually had a crazy amount of framework implementations! Likely, popularity of said framework, how much community contribution is being offered, and feasibility will all be considered.

In terms of broadly determining popularity in the frontend ecosystem the following are worth a look:

- [astro.new](https://astro.new/) (the _Frameworks_ section) and [npmtrends](https://www.npmtrends.com/@angular/core-vs-alpinejs-vs-lit-element-vs-preact-vs-react-vs-solid-js-vs-svelte-vs-vue-vs-petite-vue) makes it convenient to list some frameworks side-by-side

If you'd like to contribute to adding a framework, please create a GitHub [new issue](https://github.com/AgnosticUI/agnosticui/issues/new/choose) and pitch the idea.

### The Angular package seems less supported

This is partially true and we are looking for core Angular contributor(s) and/or an Angular package maintainer.

However, we've got the initial component set pretty far and there are already community members contributing :raised_hands:. But yes, most maintainance activity will be done by the community at this point.

### Where's the icon system?

AgnosticUI does not provide an icon system per se. We do have an `.icon` set of classes to wrap SVG icons and each of the framework implementations offer this componentized. But, icons sets themselves are not provided.
