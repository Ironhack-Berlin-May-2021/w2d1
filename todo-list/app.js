// document.querySelector('#my-button').onclick = function () {
//     console.log('click');
// };

document.querySelector('button').addEventListener('click', addTodo);

// get all the list items and add an event listener that
// triggers 'toggleTodo'
document.querySelectorAll('ul>li').forEach(function (todo) {
    todo.onclick = toggleTodo;
})


function addTodo() {
    // console.log('click');
    // we need to get the value from the input field
    const input = document.querySelector('input').value
    const todo = document.createElement('li');
    todo.innerHTML = input;
    // also add the toggle todo click listener
    todo.onclick = toggleTodo;
    const list = document.querySelector('ul');
    // console.log(list);
    list.appendChild(todo);
    document.querySelector('input').value = '';
    // console.log(todo);
    // console.log(input);
}

function toggleTodo(event) {
    // console.log('toggle todo');
    console.log(event.target);
    // toggle the class checked for the clicked list item
    // event.target.classList.toggle('checked');

    // to delete the todo:
    // const ul = event.target.parentNode;
    const ul = document.querySelector('ul');
    console.log(ul)
    ul.removeChild(event.target)
}
