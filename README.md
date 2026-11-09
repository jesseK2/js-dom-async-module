# js-dom-async-module

A small, dependency-free **interactive to-do list** built with HTML, CSS, and vanilla JavaScript. It’s a simple starting point for practicing DOM selection, event listeners, and updating the page in response to user input.

## Run it

1. Clone or download this repository.
2. Open `todo-interactive/index.html` in a browser.

No build step, package installation, or server is required.

## Use the to-do list

Click or keyboard-activate a task to mark it complete. Activate it again to undo. The completion state is shown visually and exposed to assistive technology through each button’s `aria-pressed` value.

> Task completion is only kept in the current page; refreshing the browser resets the list.

## Project structure

```text
todo-interactive/
├── index.html   # Page markup, styles, and interaction logic
├── script.js    # Empty placeholder for JavaScript
└── style.css    # Empty placeholder for CSS
```

The current page includes its CSS and JavaScript directly in `index.html`; the adjacent `script.js` and `style.css` files are placeholders.

## Ideas to extend it

- Add and remove tasks with a form.
- Save task state in `localStorage` so it survives a refresh.
- Move the inline styles and script into the placeholder files.
- Add asynchronous loading or persistence to explore async JavaScript.
