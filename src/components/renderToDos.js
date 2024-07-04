import Project from './renderProjects.js';

class ToDo {
    renderToDos() {
        const toDoArray = [];

        const buttonEl = document.getElementById('addToDoBtn');
        buttonEl.addEventListener('click', () => {
            const toDoName = document.getElementById('inputToDoName').value;
            const toDoDesc = document.getElementById('inputToDoDesc').value;
            const dueDate = document.getElementById('inputDueDate').value;
            const priority = document.getElementById('inputToDoPriority').value;
            const toDoStatus = document.getElementById('inputToDoStatus').value;

            let toDoObj = {
                toDoName,
                toDoDesc,
                dueDate,
                priority,
                toDoStatus
            };

            toDoArray.push(toDoObj);

        });

        console.log(toDoArray);
    }

    renderNewToDoButton() {
        const newToDoDiv = document.getElementById('newToDoDiv');
        const addToDoBtn = document.createElement('button');
        addToDoBtn.id = 'addToDoBtn';
        addToDoBtn.innerText = '+';
        newToDoDiv.appendChild(addToDoBtn);
    }
}

export default ToDo;