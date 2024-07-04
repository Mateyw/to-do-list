import '/src/styles/project.css';
import Project from '/src/components/renderProjects.js';
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

const projectsMenu = new Project();
projectsMenu.renderMenu();

const projectsStructure = new Project();
projectsStructure.renderStructure();

const defaultPrj1 = new Project();
defaultPrj1.renderDefaultProjects('ToDo WebApp', 'Build a ToDo WebApp');

const defaultPrj2 = new Project();
defaultPrj2.renderDefaultProjects('Calculator Project', 'Build a simple Calculator WebApp');

const projectButton = new Project();
projectButton.renderNewProjectButton();

const projectsButtonForm = new ButtonForm();
projectsButtonForm.renderForm('addProjectBtn');