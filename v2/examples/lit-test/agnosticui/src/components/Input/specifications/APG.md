# WAI-ARIA APG Input Pattern Specification

**Source:** None found (native HTML5 inputs have built-in semantics)
**Downloaded:** Retroactively dated - Downloaded prior to September 19, 2025
**APG Version:** N/A (no specific APG pattern for native HTML inputs)

I do not see any ARIA Authoring Practices Guide (APG) for the html5 input component. Here's from Google's AI Mode:

You do not see an ARIA Authoring Practices Guide (APG) for the native HTML5 <input> component because there is generally no need for one. The purpose of ARIA is to provide accessibility semantics for custom UI widgets that are not natively available in HTML. Since <input> elements already have built-in semantics, ARIA is usually unnecessary. 
Using the native HTML input element is the best and most accessible approach whenever possible. The APG instead focuses on complex, non-native widgets like comboboxes or custom switches, where ARIA is required to fill in the accessibility gaps. 
Key principles for native inputs
Use the for and id attributes
To properly label a native <input>, use the HTML <label> element. A screen reader will only associate a <label> with an <input> when its for attribute matches the input's id. This creates a much larger, more accessible click target for users. 
Rely on native semantics
Default semantics: Most HTML elements, including <input>, have default semantic meanings that are already understood by browsers and assistive technologies.
Automatic validation: HTML5 input types like email, url, and number provide built-in validation. If the browser or assistive technology supports them, they also offer enhanced usability features, such as showing a specific keyboard on a mobile device.
The "First Rule of ARIA": When building accessible websites, always try to use a native HTML element for the job first. Only add ARIA when you need extra features that HTML5 can't provide by itself