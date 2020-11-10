// "new" - Add A Todo
// "list" - List All Todos
// "delete" - Remove Specific Todo
// "q" - Quit App

const toDoList = ['ad', 'sgsgd', 'aseffeaf'];

while (true) {
    let userInput = prompt('What You Want To Do?');

    if (userInput === 'new') {
        let newToDo = prompt('Enter a new ToDo:');
        toDoList.push(newToDo);
    } else if (userInput === 'q') {
        console.clear();
        console.log('See YA!!');
        break;
    } else if (userInput === 'list') {
        console.clear();
        for (let i = 0; i < toDoList.length; i++) {
            console.log(`${i}: ${toDoList[i]}`);
        }
    } else if (userInput === 'delete') {
        let toDelete = prompt('Enter index:');
        toDoList.splice(toDelete, 1);
        console.clear();
        for (let i = 0; i < toDoList.length; i++) {
            console.log(`${i}: ${toDoList[i]}`);
        }
    }
}
