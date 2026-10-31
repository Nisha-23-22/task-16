# Task 16: JavaScript - Student Records with Search

A web page that shows student records as cards and filters them by name while the user types. Built with HTML, CSS and JavaScript.

## Files

- `index.html` - page structure (top bar, search box, empty container for the cards)
- `style.css` - styling (cards, search box, responsive grid)
- `script.js` - student data, rendering and search
- `Readme.md` - this file

## How it works

- **Data:** an array of student objects, each with `name`, `marks`, `class` and `address`.
- **Rendering:** `renderStudents(list)` uses `map()` to turn each student object into a card and puts the cards into the page.
- **Search:** `searchStudents()` uses `filter()` to keep only the students whose name contains the search text (not case sensitive).
- **Real time:** the search runs on every keystroke (`input` event) and also when the **Search** button is clicked. Clearing the box shows all students again.
- **No match:** a "No student found." message is shown.

## How to run

Open `index.html` in a browser. Type in the search box (for example `ri` or `raj`) and the cards update straight away.
