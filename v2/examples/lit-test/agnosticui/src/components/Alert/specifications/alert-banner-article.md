# Alert Banner

The Alert Banner displays a message from the system to the user, with a strong visual emphasis on the message to increase the chances the user will read it. They generally fall into four categories of severity.

## Categories of Alerts

### Errors
The most severe type of alert, indicating that the user is blocked – they cannot move forward with their task. Examples include:
- User-driven events such as when a form or field didn’t validate.
- System-driven events such as when the user’s session times out or the server becomes unavailable.

### Warnings
A serious alert indicating that if the user continues to move forward, something irreversible or unintended may occur. Examples include:
- Warning a user that they’ve entered an insecure URL in a field where the system expects something secure.
- Trying to manipulate something that’s configured incorrectly.
- Asking if they are sure they want to delete or choose not to save their work.

### Success
A positive alert indicating that whatever the user requested has successfully completed. These generally follow the submission of forms, saving components or processes, and similar user-driven tasks. *(If the event was unsuccessful, an error would display instead.)*

### Information
An alert to provide the user with important information about what they’re doing. Examples range from:
- Messages we want to emphasize in instructional text — such as notifying a user that we’re deprecating a specific field.
- Letting them know that a piece of data is out of sync (which they may intend at the time).
- Providing important messages in the web application’s help site.

## When to Use

### Information
Messaging patterns, especially around errors and warnings in forms, are being drafted, and will be available in the Patterns section when complete.

### Error Alerts:
- When a form hasn’t properly validated: Place a banner at the top of the page with a list of the errors in the form.
- When a form didn’t submit properly due to something out of the user’s control: Use a message dialog with an error banner in it to communicate the situation and how the user should proceed.
- When a server issue occurred (e.g., system timeout) and the user can’t move forward: Use a message dialog with an error banner in it to communicate the situation and how the user should proceed.

### Warning Alerts:
- When the user may be making an irreversible error: “Do you want to delete that?” or “Do you want to leave the page without saving?”
- When the user should be notified that something in a configuration is not ideal, but the poor state isn’t necessarily blocking their progress.
- Timeliness is an aspect of this alert: The user should know, for example, that a feature is being deprecated and they need to adjust settings or take action. 
  - If it’s being deprecated in six months, that’s an Information Alert.
  - If it’s being deprecated in six hours, that’s a Warning Alert.

### Success Alerts:
- When the user’s requested transaction (i.e., “thing they submitted to the server”) processed successfully.

### Information Alerts:
- The default alert for when something will potentially or eventually require the user’s action, but it’s not a pressing issue and does not take them off the success path for their current task.

## When Not to Use

### General
- When the message is extremely lengthy: Alerts are intentionally designed to grab the user’s attention, but if too large, they may be so distracting that the user has trouble getting back on their task. If the message is that emphatic, consider adding an interstitial page to the process.
- When the message is unimportant or will not change the user’s task: Instructions will already be followed; they don’t need to be put in an Information alert, for example. Overusing alerts for unimportant messages can cause users to start ignoring them — a phenomenon known as “banner blindness.”

### Error States:
- When the user can still move forward without taking any further action: Error states are only for “hard stop” scenarios.

### Warning States:
- When the issue you are communicating causes a “hard stop” — the user can’t continue because the system will not allow it: Use an Error Alert instead.
- When the issue is neither pressing nor damaging in the immediate future: Use an Information alert instead.

### Success States:
- Do not use for any messaging except to tell the user their transaction or task was successfully completed.

### Information States:
- When the issue you are communicating causes a “hard stop” — the user can’t continue because the system will not allow it: Use an Error Alert instead.
- When the issue requires timely resolution or could cause irreversible damage if not addressed, but doesn’t “hard stop” the user: Use a Warning Alert instead.

## Components Contained Within It
Banners contain heading content and phrasing content. In most implementations, they contain:
- An icon
- A heading
- A paragraph or list
- A close button (optional)

## How to Use

### Anatomy
- **Typography**: Links (when used in an alert) are underlined at all times. This passes WCAG Guideline 1.4.1 Use of Color.

- **Close Component**: 
  - The close component button should implement a color contrast change on hover and a border on focus to indicate its interactivity. Contrast is maintained at a minimum of 3:1. This passes WCAG Guideline 1.4.3 Contrast (Minimum).
  - The focus state should be highly visible to pass WCAG Guideline 2.4.7 Focus Visible.

### Do's and Don'ts
- **Do**:
  - Never blame the user when there is an error or a warning, even if they did something wrong.
  - Use basic tenses, such as general past or present tense. Do not use past perfect or future perfect tense.
  - For confirmation messages, use “Do you want….” Do not use “Are you sure….”
  - Keep the messaging as short and succinct as possible.
  - Consult with your Writer for guidelines specific to your scenario.

### Interactions
- Use caution when injecting alerts into the page without reloading the page or moving the user’s focus to the alert. Users don’t expect new content to be injected above or to the left of their current position on the page. If you are adding content after the initial page load, this component should be in an `aria-live` region so that it will be announced to the screen reader user when it appears.

- For more information on accessibility when updating the DOM due to messaging, see:
  - WCAG 3.3.1 Error Identification
  - WCAG Guideline 4.1.3 Status Messages

- The messages should also have an `aria-role` of status or error to indicate that they are errors according to WCAG Guideline 4.1.3 Status Messages.

- The close button, when it appears, must be a button to align with WCAG Guideline 1.3.1 Info and Relationships.

### Interactivity
- The link to close the component should be a button. This fails WCAG Guideline 1.3.1 Info and Relationships because it looks and behaves like a button, but is announced through a screen reader as a link.

### Iconography
- Ensure that SVGs have the proper `aria-role` of `image` so they identify themselves as images instead of groups and align with WCAG Guideline 1.3.1 Info and Relationships.
- If you provide a close button in the banner, and it’s an icon button, ensure the button identifies itself with an `aria-label` of “close” or similar so that it aligns with WCAG Guideline 1.1.1 Non-Text Content.

## Accessibility Guidelines
- Meet all requirements for WCAG Guideline 2.1.1 Keyboard by ensuring any message links you add also meet that requirement. See **Links** for more accessibility information about links.
