Sure! Here is the **entire post you provided, converted into well-structured and properly formatted Markdown** – ready for a blog post, README, or markdown-based CMS:

---

# Accessible Card Component with the Pseudo-Content Trick

I was recently helping my partner and their team with implementing an accessible card component. I’ve iterated a few times on the demo I created until I realized that it might be worth a blog post to walk through it since there are quite a few things going on.

From the discussion we had, here are the requirements I understood:

* A card is typically interactive. Interacting with it (regardless of the device input) either follows a link or performs an action.
* A card can be sitting in a list with other cards and should be announced as such. This is important as screen readers enumerate items in lists (e.g. “list, four items”).
* A card can contain actions (links or buttons).

---

## Table of Contents

* [Markup](#markup)
* [CSS](#css)
* [Nested Actions](#nested-actions)
* [Heading or No Heading?](#heading-or-no-heading)
* [Wrapping Up](#wrapping-up)

> If you just want the code, you can play with my original React implementation on **[CodeSandbox](#)**, or the plain HTML/CSS version on **[CodePen](#)**. The CSS code should be fully commented either way.

---

## Markup

Cats. Let’s imagine we want to display a list of cats. Every cat card can be interacted with to open a page dedicated to that cat. Let’s see what the markup looks like:

```html
<ul>
  <li class="Card">
    <img
      class="Card-Image"
      src="https://placekitten.com/200/200"
      alt="Picture of Lilith"
    />
    <div class="Card-Content">
      <p class="Card-Title">
        <a class="Card-Primary-Action" href="/cat/lilith">Lilith</a>
      </p>
      <p class="Card-Meta">10 year old British Shorthair</p>
    </div>
  </li>
  <!-- More cards -->
</ul>
```

Allow me to point out that the link (it could also be a button if it performed an action instead of going somewhere) is placed on the **primary piece of information only**. It does not wrap the whole card.

The reason for this is that **links can be listed by assistive technologies** (such as VoiceOver’s rotor or a11y-outline), so we want to provide just enough information so that they’re understandable and identifiable on their own.

We don’t want the entire card’s content to be read out when listing the links — that’s too much.

> We want the link to be listed as:
>
> `Lilith, link`
> not
> `Lilith, 10 year old British Shorthair, link`

While the latter would still be acceptable, it quickly becomes problematic when cards hold more and more content (think product cards with a lot of metadata).

---

## CSS

Now, we want the whole card to be interactive, not just the main content. So we need to expand the hitbox with CSS. We can do that by using a **pseudo-element which sits on top of the whole card**.

Skipping unrelated properties, it might look like this:

```css
/**
 * 1. Position context for the link’s pseudo-element.
 */
.Card {
  position: relative; /* 1 */
}

/**
 * 1. Use a pseudo-element to expand the hitbox of the link over
 *    the whole card.
 * 2. Expand the hitbox over the whole card.
 * 3. Place the pseudo-element on top of the whole card.
 */
.Card-Primary-Action::before {
  content: ''; /* 1 */
  position: absolute; /* 2 */
  inset: 0; /* 2 */
  z-index: 1; /* 3 */
}
```

This does the job — now the **whole card is clickable**.

To make it *look* interactive, we need to adjust the **focus styles**:

```css
/**
 * 1. Show that the card is interactive.
 */
.Card-Primary-Action::before {
  cursor: pointer; /* 1 */
  border: 2px solid transparent; /* 1 */
  transition: border-color 200ms;
}

/**
 * 1. Display interactivity on hover/focus by highlighting the border.
 */
.Card-Primary-Action:hover::before,
.Card-Primary-Action:focus::before {
  border-color: hotpink; /* 1 */
}

/**
 * 1. Hide the default focus outline as it’s recreated with a border.
 */
.Card-Primary-Action:focus {
  outline: none; /* 1 */
}
```

---

## Nested Actions

Now what if the card contains **other links or buttons**?

This is where we’re happy **not to have wrapped it all with an anchor or a button**, since that would prevent us from adding interactive elements within it.

Ultimately, we can add other links and buttons at will.

For instance, let’s say we want a button on the right side of the card to get some more details about the cat:

```html
<li class="Card">
  <img class="Card-Image" />
  <div class="Card-Content">…</div>
  <button class="Card-Secondary-Action">Details</button>
</li>
```

The only thing we need to do is **bump its `z-index`** so it sits above the pseudo-element that covers the card:

```css
/**
 * 1. Place the secondary action on top of the card.
 */
.Card-Secondary-Action {
  position: relative; /* 1 */
  z-index: 2; /* 1 */
}
```

> 🧠 [Adrian Roselli](https://adrianroselli.com/) reached out to share his experience having tested this pattern with users.
> He found that having **dead space around the button** is important to avoid mis-taps.
>
> If possible, consider carving out some space for the additional control instead of placing it directly on top of the card link.
>
> Read more in his article about [interactive cards](https://adrianroselli.com/2020/11/under-engineered-clickable-cards.html).

---

## Heading or No Heading?

Let me take this post as an opportunity to discuss whether a card should contain a heading.

I don’t think there is a **right or wrong answer** per se. There might be cases where making the primary content of a card a link is worth it, and cases where it’s not.

I guess it depends on whether the heading:

* Introduces a significant amount of content
* Benefits from being listed among all the headings of the page

For what it’s worth, [Heydon Pickering](https://heydonworks.com/) does use links in his article about cards.

Looking back at the list of transactions we built for N26 back in the days, we certainly **wouldn’t want dozens or hundreds of transactions to have their own heading** — that would make the headings listing unusable.

---

## Wrapping Up

Using the **pseudo-element overlay technique**, we can:

* Make the entire card clickable
* Preserve accessibility for screen readers
* Allow additional actions like buttons inside the card
* Keep text selectable
* Avoid wrapping everything in a `<a>` or `<button>`, which is bad for semantics and accessibility

It’s a **balanced, accessible, and scalable** solution for interactive cards in modern web apps.
