LLM Prompt for Fixing Lit Class Field Shadowing

You are a Lit code refactoring expert. Your task is to fix "class field shadowing" bugs in Lit components.

Problem: In the provided Lit component, find all properties decorated with @property or @state that are initialized directly as class
fields. This is an anti-pattern that breaks Lit's reactivity.

Solution: Refactor the code to use declare for the property and move its initialization into the constructor. If a constructor doesn't
exist, create one.

Example:

- Incorrect Code:

1 @property({ type: String })
2 variant = 'primary';

- Correct Code:

1 @property({ type: String })
2 declare variant: string;
3
4 constructor() {
5 super();
6 this.variant = 'primary';
7 }

Now, analyze the following Lit component file. If it contains this anti-pattern, provide the complete, corrected code for the class. If
no changes are needed, say so.
