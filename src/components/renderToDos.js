import Project from './renderProjects.js';

class ToDo {
    
    renderStructure() {
        const contentEl = document.getElementById('content');
        const titleDiv = document.createElement('div');
        titleDiv.classList.add('titleDiv');
        const titleEl = document.createElement('p');
        titleEl.classList.add('title');
        titleEl.innerText = `To-Do's`;
        const containerEl = document.createElement('div');
        containerEl.classList.add('container');
        const todoHeaderRow = document.createElement('div');
        todoHeaderRow.id = 'todoHeaderRow';
        const todoHeaderName = document.createElement('div');
        todoHeaderName.id = 'todoHeaderName';
        todoHeaderName.innerText = 'ToDo';
        const todoHeaderDesc = document.createElement('div');
        todoHeaderDesc.id = 'todoHeaderDesc';
        todoHeaderDesc.innerText = 'Description';
        const todoHeaderDueDate = document.createElement('div');
        todoHeaderDueDate.id = 'todoHeaderDueDate';
        todoHeaderDueDate.innerText = 'Due Date';
        const todoHeaderPriority = document.createElement('div');
        todoHeaderPriority.id = 'todoHeaderPriority';
        todoHeaderPriority.innerText = 'Priority';
        const todoHeaderStatus = document.createElement('div');
        todoHeaderStatus.id = 'todoHeaderStatus';
        todoHeaderStatus.innerText = 'Status';
        const elements = [todoHeaderName, todoHeaderDesc, todoHeaderDueDate, todoHeaderPriority, todoHeaderStatus];
        elements.forEach(el => todoHeaderRow.appendChild(el));
        containerEl.appendChild(todoHeaderRow);
        titleDiv.appendChild(titleEl);
        contentEl.appendChild(titleDiv);
        contentEl.appendChild(containerEl);
    }




    renderToDos() {
        const toDoArray = [];

        const buttonEl = document.getElementById('addToDoBtn');
        buttonEl.addEventListener('click', () => {
            const toDoName = document.getElementById('toDoName').value;
            const toDoDesc = document.getElementById('toDoDesc').value;
            const dueDate = document.getElementById('dueDateFormEl').value;
            const priority = document.getElementById('priorityDropdown').value;
            const toDoStatus = document.getElementById('toDoStatus').value;

            let toDoObj = {
                toDoName,
                toDoDesc,
                dueDate,
                priority,
                toDoStatus
            };

            toDoArray.push(toDoObj);
        });

        const containerEl = document.querySelector('.container');

        toDoArray.forEach(el => containerEl.append(el));

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