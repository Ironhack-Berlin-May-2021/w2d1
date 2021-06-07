// dom - manipulation
console.log(document);

// access an element from the html
// get an element with a specific id

const myHeading = document.getElementById('my-heading');
console.log(myHeading);

const todoList = document.getElementById('todo-list');
console.log(todoList);
console.clear();
// get all the li tags 
// this returns an html collection
const allListItems = document.getElementsByTagName('li');

// console.log(allListItems[3]);
// can be treated like an array but you cannot use array
// methods
// allListItems.forEach(function (item) {
//     console.log(item)
// })

console.log(todoList);

// you can use these methods also on the nodes that are
// returned
const todoListItems = todoList.getElementsByTagName('li');

console.log(todoListItems);
// access the inner Text in between the tags
console.log(todoListItems[0].innerText)

// todoListItems[0].innerText = 'solve katas';

// all list items should be turned to uppercase

// we need to iterate over todoListItems and change
// every innerText to the innerText to upperCase()
for (const item of todoListItems) {
    item.innerText = item.innerText.toUpperCase();
}
console.clear();
const container = document.getElementsByClassName('todo-container');
// this returns an html collection as well
console.log(container[0]);


// querySelector
// selects all elements using a css selector

const container2 = document.querySelector('.todo-container');
console.log(container2)

const firstItem = document.querySelector('#todo-list li');
console.log(firstItem)

// querySelectorAll 
// returns a node list - here you can use some array functions

const allItems = document.querySelectorAll('#todo-list li');
console.log(allItems)

allItems.forEach(function (el) {
    console.log(el.innerText)
})
console.clear();

// change the css
console.log(firstItem)
const prop = 'backgroundColor';

// firstItem.style.backgroundColor = 'green';
// firstItem.style[prop] = 'green';
// firstItem.style.textDecoration = 'line-through';
// add a class
firstItem.classList.add('checked');

// remove a class
firstItem.classList.remove('checked');

firstItem.classList.toggle('checked');
firstItem.classList.toggle('checked');

// we can set an Attribute
// firstItem.setAttribute('id', 'first-item');
// fix the broken image 
document.querySelector('img').setAttribute(
    'src',
    'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2534&q=80'
);

// we want to add a new element - a heading

const heading = document.createElement('h1');
heading.innerText = 'My Todo List';
const list = document.querySelector('#todo-list');
console.log(heading)
const parentElement = document.querySelector('.todo-container');

console.log(parentElement);
//<parentElement>.insertBefore(<elememtToAdd>, <beforeWhichElement>)
parentElement.insertBefore(heading, list);

// let's remove the p tag from the dom

//<parentElement>.removeChild(<elememtToRemove>);
const paragraph = document.querySelector('p');
// const paragraph = document.getElementsByTagName('p')[0];
console.log(paragraph);
parentElement.removeChild(paragraph);


// const parentElement = document.querySelector('.todo-container');

// to dynamically add HTML to the page 
parentElement.innerHTML = "<h5 class='a'>This is my new h5 Heading</h5>"
