# React State Preserve

Here component maintains a separate message state for each contact, allowing to switch between contacts and see the message we typed earlier.

- [preserving-and-resetting-state](https://react.dev/learn/preserving-and-resetting-state) You could lift the state up and hold the pending message for each recipient in the parent component. This way, when the child components get removed, it doesn’t matter, because it’s the parent that keeps the important information. This is the most common solution.
