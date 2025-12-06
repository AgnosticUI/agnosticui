# Alert Accessibility Tests

Any USWDS alert component should pass these manual accessibility tests.

### Passed WCAG 2.1 AA

---

## Alert Accessibility Status

The USWDS team did 9 tests based on WCAG 2.1 AA success criteria.

### Overview of Recent Accessibility Test Results:

| Total Tests | Passed | Passed with Exceptions | Conditional | Failed |
|-------------|--------|------------------------|-------------|--------|
| 9           | 3      | 0                      | 6           | 0      |

---

## Test the Alert in Your Project

USWDS tests components in isolation. You need to test the alert component in the context of your own site to ensure compliance with Section 508 accessibility standards.

Use the checklist below.

Follow the "how to test" instructions for each type of assistive technology.

Anyone can test for accessibility.

These quick manual tests don't require special equipment.

---

## Alert Accessibility Checklist

### General Tests
- **Zoom Magnification Tests**
- **Screen Reader Tests**

### General Tests

#### Color alone is not used to convey meaning.
When viewing an alert, you never have to rely on color alone to determine part of its meaning.

**WCAG A**  
1.4.1 Use of Color  
**USWDS Test Status:** Passed  
**Last Test:** v3.8.2

#### Alert content meets color contrast requirements.
When you use ANDI color contrast analyzer on the alert, the contrast between the text and background color is at least 4.5:1.

**WCAG AA**  
1.4.3 Contrast (Minimum)  
**USWDS Test Status:** Passed  
**Last Test:** v3.8.2

#### All headings are clear and descriptive.
When you view the alert, the heading is clear and concise.

This can only be tested in your implementation of the component. Be sure to test this in your project.

**WCAG AA**  
2.4.6 Headings and Labels  
**USWDS Test Status:** Conditional  
**Last Test:** v3.8.2

#### Each alert and alert icon has a consistent meaning across pages.
When you use a screen reader or view the page, the alert icon and layout mean the same thing across all pages where an alert is used. No other alert or element uses the same icon or layout. For example, when you see a “warning” alert, the exclamation point icon and yellow design, supporting ARIA labels, headings, and alt text are solely used to show a warning on the page.

This can only be tested in your implementation of the component. Be sure to test this in your project.

**WCAG AA**  
3.2.4 Consistent Identification  
**USWDS Test Status:** Conditional  
**Last Test:** v3.8.2

---

### Zoom Magnification Tests

USWDS performed these tests to check alert accessibility and usability for zoom magnification. For help performing your own zoom magnification tests, check out the resources in the expandable section below.

#### How to Test with Zoom Magnification

**Alert remains visible and functional when screen is magnified.**  
When you zoom to 400%, you can still read content in the alert and surrounding area easily.

**WCAG AA**  
1.4.10 Reflow  
**USWDS Test Status:** Passed  
**Last Test:** v3.8.2

---

### Screen Reader Tests

USWDS performed these tests to check alert accessibility and usability for screen readers. For help performing your own screen reader tests, check out the resources in the expandable section below.

#### How to Test with Screen Readers

**Screen reader announces the alert in logical order.**  
When you use a screen reader and navigate to the alert, the content in the alert follows the visual location on the page.

This can only be tested in your implementation of the component. Be sure to test this in your project.

**WCAG A**  
1.3.2 Meaningful Sequence  
**USWDS Test Status:** Conditional  
**Last Test:** v3.8.2

**Screen reader announces alert region.**  
When using a screen reader to access an alert, you hear the role of the region or landmark announced.

This can only be tested in your implementation of the component. Be sure to test this in your project.

**WCAG AAA**  
1.3.6 Identify Purpose  
**USWDS Test Status:** Conditional  
**Last Test:** v3.8.2

**Screen reader announces role values.**  
When you use a screen reader to access an alert, you hear the appropriate role announced. For example, time-sensitive alerts with `role="alert"` will announce “alert”.

This can only be tested in your implementation of the component. Be sure to test this in your project.

**WCAG A**  
4.1.2 Name, Role, Value  
**USWDS Test Status:** Conditional  
**Last Test:** v3.8.2

**Status alerts are announced by screen readers.**  
When triggered, assertive alert (i.e., warning status) content and status message is announced to screen reader users.

This can only be tested in your implementation of the component. Be sure to test this in your project.

**WCAG AA**  
4.1.3 Status 
