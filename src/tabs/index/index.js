import '/src/styles/style.css';
import Menu from '/src/components/renderMenu.js';


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('projectsBtn').addEventListener('click', () => {
        window.location.href = 'projects.html';
    });

    document.getElementById('toDosBtn').addEventListener('click', () => {
        window.location.href = 'toDos.html';
    });

    document.getElementById('categoriesBtn').addEventListener('click', () => {
        window.location.href = 'categories.html';
    });
});

const menu = new Menu();
menu.renderMenu();



