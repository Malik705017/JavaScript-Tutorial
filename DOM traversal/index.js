// getElementById & getElementsByClassName

const grandparent = document.getElementById('grandparent-id');
const parents = Array.from(document.getElementsByClassName('parent')); // Creates an array from an iterable object.

// querySelector

/* The Document method querySelector() returns the first Element 
within the document that matches the specified selector, or group 
of selectors. If no matches are found, null is returned. */

/* selectors: A string containing one or more selectors to match. 
This string must be a valid CSS selector string */

const grandparentByQuerySelectorId = document.querySelector('#grandparent-id');
const grandparentByQuerySelectorClassName = document.querySelector('.grandparent');

// querySelectorAll
const parentsByQuerySelectorAll = document.querySelectorAll('.parent');

// selecting children
const parentsSelectedByGrandParent = Array.from(grandparent.children);

// selecting descendants
const children = grandparent.querySelectorAll('.child');
const child = grandparent.querySelector('.child');

// selecting parents
const parentSelectedByChild = child.parentElement;

// selecting ancestors
const grandparentSelectedByDescadants = child.closest('.grandparent'); // Returns the first (starting at element) inclusive ancestor that matches selectors, and null otherwise.

// select sibling
const childTwo = child.nextElementSibling;
const childOne = childTwo.previousElementSibling;

// Use this function to highlight the element you select
const changeColor = (element) => {
  element.style.backgroundColor = 'yellow';
};

changeColor(child);
