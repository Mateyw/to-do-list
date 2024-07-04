import '/src/styles/category.css';
import Categories from '/src/components/renderCategories.js';
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

const categoriesMenu = new Categories();
categoriesMenu.renderMenu();

const categoriesStructure = new Categories();
categoriesStructure.renderStructure();

const categoriesContent = new Categories();
categoriesContent.renderContent();

const categoriesButton = new Categories();
categoriesButton.renderNewCategoryButton();

const categoriesButtonForm = new ButtonForm();
categoriesButtonForm.renderForm('addCategoryBtn');