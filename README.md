Lifting state up is a React pattern used to share data between multiple components

State is moved from child components to their closest common parent

The parent component becomes the single source of truth

Child components receive data via props

Child components update state using callback functions passed from the parent

Helps keep UI consistent and synchronized

Reduces duplicate or conflicting state across components

Improves maintainability and debugging

Commonly used with forms, filters, and sibling component communication

Encourages a clear data flow (top-down) in React applications
