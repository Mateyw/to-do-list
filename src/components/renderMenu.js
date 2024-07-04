class Menu {
    renderMenu() {
        const menuEl = document.getElementById('menu');
        const dashboardEl = document.createElement('div');
        dashboardEl.classList.add('dashboard');
        const dashEl = document.createElement('p');
        dashEl.id = 'dash';
        dashEl.innerText = 'Dashboard';
        const projectsEl = document.createElement('div');
        projectsEl.classList.add('projects');
        const projectsBtnEl = document.createElement('button');
        projectsBtnEl.id = 'projectsBtn';
        projectsBtnEl.innerHTML = `<i class="fa-solid fa-list"></i>Projects`;
        const toDosEl = document.createElement('div');
        toDosEl.classList.add('toDos');
        const toDosBtnEl = document.createElement('button');
        toDosBtnEl.id = 'toDosBtn';
        toDosBtnEl.innerHTML = `<i class="fa-solid fa-check"></i>To-Do's`;
        const categoriesEl = document.createElement('div');
        categoriesEl.classList.add('categories');
        const categoriesBtnEl = document.createElement('button');
        categoriesBtnEl.id = 'categoriesBtn';
        categoriesBtnEl.innerHTML = `<i class="fa-solid fa-hashtag"></i>Categories`;
        categoriesEl.appendChild(categoriesBtnEl);
        toDosEl.appendChild(toDosBtnEl);
        projectsEl.appendChild(projectsBtnEl);
        dashboardEl.appendChild(dashEl);
        const elements =  [dashboardEl, projectsEl, toDosEl, categoriesEl];
        elements.forEach(el => menuEl.appendChild(el));
    }
}

export default Menu;