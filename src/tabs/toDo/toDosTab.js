import '/src/styles/todo.css';
import ToDo from '/src/components/renderToDos.js';
import ButtonForm from '/src/components/renderButtonForm.js';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('projectsBtn').addEventListener('click', () => {
        window.location.href = '/dist/projects.html';
    });

    document.getElementById('toDosBtn').addEventListener('click', () => {
        window.location.href = '/dist/toDos.html';
    });

    document.getElementById('categoriesBtn').addEventListener('click', () => {
        window.location.href = '/dist/categories.html';
    });
});


const toDosButton = new ToDo();
toDosButton.renderNewToDoButton();

const toDosButtonForm = new ButtonForm();
toDosButtonForm.renderForm('addToDoBtn');