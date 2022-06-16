const body = document.body;

// adding element
body.append('Hello World');

// creating element
const div = document.createElement('div');

// modifying element text
div.innerText = 'This is a div';

// modifying element html
const div2 = document.createElement('div');
div2.innerHTML = '<p>This is a element created by innerHTML</p>';

const div3 = document.createElement('div');
const p = document.createElement('p');
p.innerText = 'This element will be removed after 5 sec';

div3.append(p);
body.append(div, div2, div3);

// removing element
setTimeout(() => {
  div3.removeChild(p); // remove its child
  div3.remove(); // remove itself
}, 5000);

// modifying element attribute
div2.id = '2'; // or use div2.setAttribute("id", "2");
div2.title = 'no.2'; // or use div2.setAttribute("title", "no.2");
div2.removeAttribute('title');
console.log(div2.getAttribute('id'), div2.getAttributeNames());

// modifying element classes
div.classList.add('class-1', 'class-2');
div.classList.remove('class-2');
div.classList.toggle('class-3'); // add if class-3 not exists, remove if class-3 exists

// modifying element styles
div.style = 'color: white; background-color: black; width: fit-content; padding: 12px;';
div.style.height = '200px';
