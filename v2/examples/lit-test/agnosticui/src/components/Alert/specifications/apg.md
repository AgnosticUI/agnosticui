## Role, Property, State, and Tabindex Attributes

| Role          | Attribute                        | Element     | Usage                                                                                                                                                 |
|---------------|----------------------------------|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| `alert`       |                                  | `div`       | Identifies the element as the container where alert content will be added or updated.                                                                 |
|               | `aria-live="assertive"`          | Implicit on `div` | - This does not have to be declared in the code because it is implicit in the alert role.  
  - Tells assistive technologies to interrupt other processes to provide users with immediate notification of relevant alert container changes. |
|               | `aria-atomic="true"`             | Implicit on `div` | - This does not have to be declared in the code because it is implicit in the alert role.  
  - Tells assistive technologies to use the entire content of the alert element as the alert message even if only a portion of it has changed.            |
