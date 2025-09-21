# MyAccordion

Generated from inspiration: `agnostic/lib/src/components/Accordion/vibes/material-accordion/`

## Features
- Material Design 3 inspired styling
- Smooth animations for expand/collapse
- Roboto font and Material Design typography
- Dark theme and high-contrast mode support

## Usage
```html
<!-- Basic usage -->
<my-accordion-item>
  <span slot="header">Personal Information</span>
  <div slot="content">
    <p>Enter your personal details including name, address, and contact information. This information will be used to create your profile and for communication purposes.</p>
    <ul>
      <li>Full name and preferred name</li>
      <li>Email address and phone number</li>
      <li>Home address and postal code</li>
    </ul>
  </div>
</my-accordion-item>

<my-accordion-item>
  <span slot="header">Account Settings</span>
  <div slot="content">
    <p>Configure your account preferences, security settings, and notification options. You can update these settings at any time from your account dashboard.</p>
    <p>Available settings include:</p>
    <ul>
      <li>Password and two-factor authentication</li>
      <li>Email and push notification preferences</li>
      <li>Privacy and data sharing options</li>
    </ul>
  </div>
</my-accordion-item>
```

## Customization

The following CSS custom properties can be used for theming:

- `--material-accordion-primary`
- `--material-accordion-on-primary`
- `--material-accordion-surface`
- `--material-accordion-on-surface`
- `--material-accordion-background`
- `--material-accordion-on-background`
- `--material-accordion-header-font-size`
- `--material-accordion-body-font-size`
- and many more...
