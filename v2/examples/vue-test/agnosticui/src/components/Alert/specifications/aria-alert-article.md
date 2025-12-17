# How to Use ARIA Alert Effectively

## Code & Development
Boost web accessibility with ARIA alerts. Learn best practices, avoid pitfalls, and ensure compatibility across browsers and assistive tech.

**27 January 2025**

**Written by Florian Schroiff**  
Florian Schroiff has been building for the web for almost 20 years. He has worked on countless accessible websites as a freelancer and for various agencies. As a front-end expert, he is always searching for ways to improve accessibility and user experience and to share them with his team — and now with you!

---

## Table of Contents
1. [What are ARIA alerts?](#what-are-aria-alerts)
2. [Best practices for implementing ARIA alerts](#best-practices-for-implementing-aria-alerts)
3. [Common ARIA alert pitfalls and how to avoid them](#common-aria-alert-pitfalls-and-how-to-avoid-them)
4. [Master ARIA implementation with The A11Y Collective](#master-aria-implementation-with-the-a11y-collective)

---

## What are ARIA alerts?

Do you know how to make sure users of assistive technology don’t miss important updates on your website? The best strategy here is to use ARIA alerts – they’re like a gentle tap on the shoulder for users, making sure they receive urgent information at the right time.

ARIA alerts (using `role="alert"`) help you communicate time-sensitive information to people using screen readers and other assistive technologies. When content marked with this role updates, it triggers a notification that screen readers announce straight away.

But getting ARIA alerts right can be tricky. Use them too much, and you might overwhelm your users. Use them incorrectly, and your important messages might not reach everyone. It’s a bit like finding the right volume for an announcement – too quiet and people miss it, too loud and it becomes annoying.

In this guide, we’ll show you exactly how to implement ARIA alerts effectively, along with plenty of practical tips to help you avoid common mistakes.

### How ARIA Alerts Work
Let’s start with something you might see every day – imagine you’re filling out an online form and accidentally skip a required field. The form lets you know right away that you’ve missed something. For users of screen readers, ARIA alerts make sure this kind of important information gets announced immediately.

ARIA alerts work as assertive live regions on your webpage. In simpler terms, when you mark an element with `role="alert"`, you’re telling assistive technologies: “This is important – please announce this information right away!” It’s equivalent to setting both `aria-live="assertive"` and `aria-atomic="true"` on an element.

ARIA alerts are just one of five live region roles you can use. While alerts are for urgent messages, you’ve got other options too:

- `role="status"` for general updates.
- `role="marquee"` for moving text (like stock tickers).
- `role="timer"` for countdowns.
- `role="log"` for adding new information to a list (think chat messages).

There’s also `role="alertdialog"`, which is similar but different. While both roles announce content, `alertdialog` moves the user’s focus to the alert and expects them to close it – perfect for those “Your session is about to expire” warnings.

### Key Takeaway
Here’s something important to remember: alerts only work when content changes. Simply having `role="alert"` on a static element won’t do anything – the content inside needs to update dynamically.

#### Some common and useful ways to use ARIA alerts include:
- Telling users about form errors (“Please enter your email address”).
- Warning about session timeouts (“Your session will expire in 2 minutes”).
- Notifying about connection issues (“Unable to save changes – check your internet connection”).

#### When implementing alerts, keep these basics in mind:
- Only use them for text content, not for buttons or links.
- Add the alert role to the message container, not to the trigger element.
- Don’t worry about making the alert focusable – screen readers will announce it automatically.

---

## Best Practices for Implementing ARIA Alerts

Let’s talk about how to make your ARIA alerts work brilliantly for everyone. Think of alerts like text messages – you want them to be clear, timely, and not so frequent that people start ignoring them.

### Technical Setup

- Place your `role="alert"` on the element that contains your message, not on buttons or other controls that trigger the alert.
- Use JavaScript to update the alert content dynamically – this ensures screen readers catch the change.
- Don’t add `aria-live="assertive"` when you’re already using `role="alert"` – some screen readers might announce your message twice.

Here’s a basic example of a form with an alert to warn users if they submit an incomplete or incorrect field:

```html
<form id="contactForm">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  <button type="submit" onclick="submitForm(event)">Submit</button>
</form>

<!-- Alert message after form submission -->
<div role="alert">
  <span id="error-message" style="display:none;color:red;">Please provide a valid email address.</span>
</div>
````

### Code Breakdown:

* The `<div role="alert">` element is the container for the error message.
* The alert container needs to be empty initially. You can either inject text with JS when the alert is triggered or, like we do here, hide the content with CSS.
* The `role="alert"` tells screen readers that this is an important, live region and that the content should be read out loud immediately.
* The `<span id="error-message">` contains the message text (“Please provide a valid email address”) that will be read when the alert is triggered.
* The `style="display:none"` initially hides the content of the error message, so it’s only visible when triggered by the JavaScript function.
* The `color: red` inline style makes the error message text appear in red, helping it stand out visually.

Next, we’ll need JavaScript for form validation and handling:

```javascript
function submitForm(event) {
  event.preventDefault();
 
  const emailField = document.getElementById('email');
  const errorMessage = document.getElementById('error-message');
 
  if (!emailField.value || !emailField.value.includes('@')) {
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
    alert('Form submitted successfully');
  }
}
```

### Code Breakdown:

* `event.preventDefault();` prevents the form from submitting in the usual way (i.e., refreshing the page). Instead, the JavaScript function `submitForm(event)` is executed, allowing us to control what happens after the form submission.
* `const emailField = document.getElementById('email');` gets the reference to the email input field in the form.
* `const errorMessage = document.getElementById('error-message');` gets the reference to the error message div that will be shown if the user enters an invalid email address.
* `if (!emailField.value || !emailField.value.includes('@'))`: This checks two things:

  * If the email field is empty (`!emailField.value`).
  * If the email does not contain the "@" symbol, which is a basic check for a valid email format (`!emailField.value.includes('@')`).

---

## Common ARIA Alert Pitfalls and How to Avoid Them

Let’s look at some common mistakes that can make ARIA alerts less helpful – and how to fix them.

### Pitfalls:

1. **Using too many alerts**: This is probably the biggest issue. It’s like having a friend who sends you constant message notifications – eventually, you might start ignoring them. Instead, save `role="alert"` for truly urgent messages. For regular updates, use `role="status"` or `aria-live="polite"`.
2. **Alerts that vanish too quickly**: Some users might need extra time to process the information, especially if they’re using screen readers at a slower speed (for more info, check out the [WCAG SC 2.2.3 No Timing (AAA)](https://www.w3.org/WAI/WCAG21/Understanding/no-timing.html)). For important messages that need action, use `role="alertdialog"` instead – this keeps the message present until the user responds.
3. **Empty alert containers**: The `role="alert"` container must be empty when the page loads. Alerts only trigger when content changes dynamically. You can trigger a change by inserting text into the alert container or by revealing text that was previously hidden with CSS.
4. **Avoid doubling up with `aria-live="assertive"`**: This can cause screen readers to announce the same message multiple times, which gets annoying quickly. The alert role already includes this behaviour – no need to add it manually.
