# Alert Banner Specifications

This document outlines the specifications for an Alert Banner component, summarizing key criteria from various sources to guide its design and testing.

## Categories of Alerts

Alerts are categorized by severity:

- **Errors**: Indicate the user is blocked from a task (e.g., form validation failure, server error).
- **Warnings**: Caution the user about potentially irreversible or unintended consequences (e.g., deleting data, insecure URL).
- **Success**: Confirm the successful completion of a user's requested action (e.g., form submission).
- **Information**: Provide important, but not critical, information to the user (e.g., feature deprecation notice).

## When to Use

- **Errors**: For "hard stop" scenarios where the user cannot proceed.
- **Warnings**: For issues that are not "hard stops" but could have significant consequences.
- **Success**: To confirm a user's action was completed successfully.
- **Information**: For non-critical messages that are still important for the user to know.

## When Not to Use

- For lengthy messages that would be better suited for an interstitial page.
- For unimportant messages that could lead to "banner blindness."
- Do not use an Error alert if the user can still proceed.
- Do not use a Warning alert for "hard stop" issues (use Error instead).

## Anatomy and Content

An alert banner typically contains:

- **Icon**: A visual indicator of the alert's category.
- **Heading**: A clear and concise title for the alert.
- **Paragraph or List**: The main message of the alert.
- **Close Button (Optional)**: Allows the user to dismiss the alert.

**Content Guidelines**:

- Use clear, concise language.
- Avoid blaming the user.
- Use simple tenses.
- For confirmation messages, use "Do you want..." instead of "Are you sure..."

## ARIA and Accessibility

- The alert container should have `role="alert"`. This implies `aria-live="assertive"` and `aria-atomic="true"`.
- Do not add `aria-live="assertive"` when `role="alert"` is already present to avoid double announcements by screen readers.
- The alert container should be empty on page load and content should be injected dynamically.
- SVGs used as icons should have `role="img"`.
- If a close button is present and uses an icon, it must have an `aria-label` (e.g., "close").
- The close button must be a `<button>` element.

## Interaction and Behavior

- Alerts should be used for text content, not for buttons or links.
- For alerts that appear without a page reload, the component should be in an `aria-live` region to be announced by screen readers.
- Avoid alerts that disappear too quickly. For critical information requiring user action, consider `role="alertdialog"`.

## Accessibility Testing Checklist

### General Tests
- **Color**: Color alone should not be used to convey meaning.
- **Contrast**: Text and background should have a contrast ratio of at least 4.5:1.
- **Headings**: Headings should be clear and descriptive.
- **Consistency**: Alert icons and layouts should be consistent across the application.

### Zoom Magnification Tests
- The alert must be visible and functional when the screen is magnified to 400%.

### Screen Reader Tests
- The screen reader should announce the alert in a logical order.
- The screen reader should announce the alert region (e.g., "alert").
- The screen reader should announce the role of the alert (e.g., "alert").
- Status alerts should be announced by the screen reader when they appear.