import '/src/styles/todo.css';
import ToDo from '/src/components/renderToDos.js';
import ButtonForm from '/src/components/renderButtonForm.js';
import Menu from '/src/components/renderMenu.js';
import Form from '/src/components/closeForm.js';


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

const menu = new Menu();
menu.renderMenu();

const toDosStructure = new ToDo();
toDosStructure.renderStructure();

const toDosButton = new ToDo();
toDosButton.renderNewToDoButton();

const toDosButtonForm = new ButtonForm();
toDosButtonForm.renderForm('addToDoBtn');

const toDos = new ToDo();
toDos.renderToDos();

const form = new Form();
form.close();

