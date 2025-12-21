Popover

https://component.gallery/components/popover/ provides:

Description
A popover is a wrapper for content that floats above other elements on the page. It is shown or hidden by interacting (usually clicking, but can also be on focus or hover) with a trigger element such as a button. The popover appears above, below, or to one side of this trigger element, often with a small triangle linking the two elements.

An example of a popover from the Twilio Paste Design System. A button with the label &#x27;Open Popover&#x27; is shown with a bubble below containing text and a close icon. A small arrow is pointing from the bubble to the button.
An example of a popover from the Twilio Paste Design System
Note: In some cases, such as in Headless UI, the popover can be used as a primitive component for building other components like navigation menus. This article does not cover that use case.

Example markup
Here is some example markup for a popover trigger and popover in its closed state:

<!-- Popover trigger -->
<button
  type="button"
  aria-expanded="false"
  aria-controls="popover"
  aria-haspopup="dialog"
>
  Expand Popover
</button>
<!-- Popover -->
<div id="popover" role="dialog" hidden>
  <button type="button">Close popover</button>
  <header>This is the popover title</header>
  <p>This is the popover body</p>
</div>
In the open state, set the aria-expanded attribute on the popover trigger to false and remove the hidden attribute from the popover.

Interactivity
Opening the popover can be triggered using the click event on the button. This event will be triggered on mouse click, touch, and key press (Enter ↵ or Space).

The popover should be closed whenever the user does any of the following actions:

Presses the Esc key
Presses a close button in the popover
Clicks outside of the popover
Accessibility
Ensure that users can open, navigate, and close the popover using only a keyboard:

When focused on the trigger button, Enter ↵ or Space should toggle display of the popover
When the popover is expanded, Esc should close the popover and return focus to the trigger button
Ensure the popover trigger has an accessible label and communicates the popover’s state to assistive technologies:

Use the aria-expanded attribute on the trigger to indicate visibility of the popover
If your trigger does not have a visible text label, provide an aria-label or visually hidden label
Use the aria-haspopup attribute on the trigger to indicate the type of interactive popup that this element triggers, usually dialog or menu; this should match the role of the popover. You can see all possible values here.
Use aria-controls with the value set to the id of the popover element
Ensure the popover content is hidden from assistive technologies when the popover is closed. Some possible ways of doing this include:

Adding the hidden attribute
Adding the CSS property display: none or visibility: hidden
Adding the inert attribute
Adding the aria-hidden="true" attribute (you may also need to set any interactive elements inside the popover as non-focusable using tabindex="-1")
Ensure the popover content has the correct attributes:

The id should match the aria-controls attribute of the popover trigger.
The role should match the aria-haspopup attribute on the popover trigger.
A note on the dialog role
If you’re using the dialog role on the popover, you need to decide whether the dialog is modal (only the content within the dialog can be interacted with) or non-modal (users can interact with content outside of the dialog).

For modal dialogs you will need to implement a focus trap to ensure that keyboard users can navigate through interactive elements in a logical and predictable order without inadvertently moving focus outside of the intended area.

Usage guidelines
Because a popover is hidden by default, it should only contain non-critical information. If you have space to show this information outside a popover without cluttering your interface, you should do so. One possible use for a popover is to hide information that’s irrelevant once the user is familiar with an interface.

Keep the content inside your popovers short to prevent it being cut off on smaller screens (or needing an internal scrollbar).

The trigger for your popover should trigger your popover and nothing else. If you add popover functionality to an element which is already interactive (e.g. a link), the two actions will be triggered at the same time on touch devices. This might work for desktop users – those with a mouse or touchpad – but on touch devices, the focus, hover, and active states happen simultaneously.

Future developments
Since version 114, Chromium (the browser engine for Chrome and Edge amongst others) has included a Popover API designed to simplify the process of implementing popover components. This introduces new popovertarget and popover attributes.

<!-- Popover trigger -->
<button popovertarget="popover">Open Popover</button>
<!-- Popover -->
<div popover id="popover">Popover content</div>
The popover element is given the popover attribute and an id. The popover trigger is given the popovertarget attribute with its value matching the id of the popover element. Clicking on the popover trigger will now toggle the visibility of the popover element without any custom JavaScript.

# Using floating-ui

AgnosticUI already uses floating-ui for Tooltips. We should also use that for popovers (which are similar in a way to tooltips just typically activated differently and have more content and possible form inputs and button components within them etc.). Shoelace documents this well and might provide some interesting additional context:
https://shoelace.style/components/popup

More UI inspiration:

https://blueprintjs.com/docs/#core/components/popover
https://chakra-ui.com/docs/components/popover
https://ui.shadcn.com/docs/components/popover
