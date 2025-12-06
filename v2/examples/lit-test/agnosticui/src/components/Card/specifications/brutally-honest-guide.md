# How to Build a Card Component That Doesn’t Suck

I get it. You’re a budding web developer, and you’re building your first card component. You slap together a `<div>`, throw in an image, maybe toss a link inside and—voilà—you’ve got something vaguely resembling a card. And it works, technically. But it's trash.

Because deep down, you know you’re just winging it, and the accessibility? Non-existent. Responsiveness? Barely.

Time to fix that.

Here’s the deal: cards should be **interactive**, **responsive**, and **accessible**. This isn't optional. We’re going to build a card that doesn’t just look good on your machine but works for people who don’t even see the screen the way you do.

Ready? Here’s how to make a card that doesn’t suck.

---

## The Crappy Beginner Card (And Why It’s Bad)

Here’s what you probably did:

```html
<div class="card">
  <img src="image.jpg" alt="Image" />
  <a href="#">Card Title</a>
  <p>Some description goes here.</p>
</div>
```

It’s fine, right? The image shows up. The link works. The paragraph’s sitting there, doing its thing. But here’s why this card sucks:

* **The whole thing isn’t clickable**: You have a link in there, but it only works on the title. Why not make the whole damn card interactive?
* **Accessibility? Non-existent**: Screen readers and keyboard users will struggle. You didn’t even think about them, did you?
* **Layout is weak**: Your card’s likely going to collapse or blow up in size, depending on the viewport. You didn’t plan for responsiveness.

But I’m not here just to dunk on your crappy card. I built them like this for years actually. I’m here to help you fix it.

---

## Step 1: Structure Like You Give a Damn

First up, let’s get the structure right. Your card needs to be a **list item**. If it’s part of a group, it should announce itself as part of that group to screen readers.

Here’s how we start:

```html
<ul class="list">
  <li class="card">
    <img src="image.jpg" alt="Descriptive alt text" />
    <div class="card_content">
      <a href="#" class="card_title">Card Title</a>
      <p>Some description goes here.</p>
    </div>
  </li>
</ul>
```

### Why’s this better?

* It’s a list item, which matters for screen readers. They can announce it as “Item 1 of X” when users are scrolling through. **Structure matters, dude!**
* The content is cleanly wrapped up in a `.card_content` div, which will make styling easier later.

> 💡 **Note**: If you're building this out in Webflow from CMS, you'll be OK because Webflow adds a `role="listitem"` attribute to the element — so no worries there.

---

## Step 2: Grid Layout Like a Pro

Let’s put these cards in a **responsive grid**.

If you’re still using floats or inline-blocks to lay out your cards, close this tab right now. CSS Grid is what you should be using, and it’s not optional.

```css
.list {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  list-style: none;
}
```

* `auto-fit` ensures your cards resize automatically and fit the container, no matter the screen size.
* `minmax(20rem, 1fr)` guarantees each card is at least 20rem wide but can stretch to fill the available space.

This makes your card layout **bulletproof**. Small screen? No problem. Massive monitor? You’re covered.

> Flexbox? I’m sure it has its uses somewhere else, but for grids, **CSS Grid is the boss**.

---

## Step 3: Expand the Hitbox, Dummy

You want your **whole card to be interactive**, right?

Here’s where you probably wrapped your entire card in an `<a>` tag like some amateur hour nonsense.

**DON’T DO THAT.**
It’s horrible for accessibility and makes it impossible to have other interactive elements inside the card, like a button or secondary link.

Instead, we use **CSS** to make the main action of the card—whether it’s a link or a button—expand to fill the whole card.

### HTML

```html
<a href="#" class="card_title">Card Title</a>
```

### CSS

```css
.card {
  position: relative;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.5rem;
}

.card_title::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 0.5rem;
  transition: border-color 200ms;
}

.card_title:hover::before,
.card_title:focus-visible::before {
  border-color: hotpink;
}
```

This pseudo-element sits over the title link but **spans the entire card**, making the whole thing clickable while still only wrapping the title in a semantic `<a>` tag.

* Screen readers announce only what’s relevant:
  `"Card Title, link"`
  Not the entire card content.
* The hover effect is slick.
* The `:focus-visible` style ensures **keyboard users aren’t left in the dark**.

> Want to remove the default focus outline? Fine. But you’d better replace it with **something visible and accessible**, like this hotpink border.

---

## Step 4: Give Your Secondary Actions Some Love

Now that the whole card is clickable, you’re probably wondering:

> *“What if I want other buttons or links inside the card?”*

Yeah, we thought of that. Enter **secondary actions**.

You might want a little button or tag for additional interactivity—something that sits alongside the main content but doesn’t interfere with it.

### HTML

```html
<a href="#" class="card_secondary_action">Tag</a>
```

### CSS

```css
.card_secondary_action {
  position: relative;
  font-size: 0.8rem;
  background-color: #f0f0f0;
  border-radius: 0.5rem;
  padding: 0.125rem 0.5rem;
  z-index: 2;
  border: 2px solid transparent;
}

.card_secondary_action:hover,
.card_secondary_action:focus-visible {
  border-color: hotpink;
}
```

See that `z-index: 2`? That’s because our title link’s hitbox is floating above everything else with a `::before` pseudo-element. So, we **bump the secondary action’s z-index** to make sure it’s clickable, too.

---

## Step 5: It’s Not Just About Looks — Accessibility Matters

Now you might be thinking:

> *“Does any of this actually matter for screen reader users or keyboard navigation?”*

**Damn right it does.**

Let’s take a moment to realize that **accessibility isn’t optional**. Without proper keyboard focus states and semantic HTML, you’re just building pretty junk that excludes people.

### Why Your New Card Component Is Better:

* ✅ **Keyboard-friendly**: Every interactive element has clear focus states.
* ✅ **Screen readers know what’s up**: List items and clear link text make everything more usable.
* ✅ **Responsiveness done right**: It's a grid. It's scalable. It works on all screen sizes.

---

## ⚠️ Downside of This CSS-Only Solution

There’s one caveat: **Text inside the card isn’t selectable**.

Why? Because our pseudo-element covers the whole card.

> What if you had a post summary inside?

You could use `z-index` to raise the text above the pseudo-element, but then you reduce the hitbox size and the whole card isn’t clickable anymore.

For a **tidier solution** (that does **not use `::before`** but **does use JavaScript**), check out the final example in the [CSS-Tricks writeup](https://css-tricks.com/making-a-whole-card-clickable-a-block-link-solution/).

> ⚠️ Note: There’s a top comment mentioning that this final solution causes two tabs to open up in Firefox — so test carefully.

---

## Wrapping It Up

Your card component isn’t just a random hodgepodge of tags anymore. It’s **structured**, **accessible**, and actually makes sense to the people using it.

This is the card component you **should** be building, not some slapped-together mess you’ll regret a month from now.

So, **stop writing garbage code** and start making something that works for everyone — not just for you on your shiny laptop.

> And no, wrapping the whole card in an `<a>` tag is **never** the answer. Ever.

