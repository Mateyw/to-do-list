class Categories {
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
        const elements = [dashboardEl, projectsEl, toDosEl, categoriesEl];
        elements.forEach(el => menuEl.appendChild(el));
    }

    renderStructure() {
        const contentEl = document.getElementById('content');
        const titleDiv = document.createElement('div');
        titleDiv.classList.add('titleDiv');
        const titleEl = document.createElement('p');
        titleEl.classList.add('title');
        titleEl.innerText = 'Categories';
        const containerEl = document.createElement('div');
        containerEl.classList.add('container');
        const categoryHeaderRow = document.createElement('div');
        categoryHeaderRow.id = 'categoryHeaderRow';
        const categoryHeaderName = document.createElement('div');
        categoryHeaderName.id = 'categoryHeaderName';
        categoryHeaderName.innerText = 'Category';
        categoryHeaderRow.appendChild(categoryHeaderName);
        containerEl.appendChild(categoryHeaderRow);
        titleDiv.appendChild(titleEl);
        contentEl.appendChild(titleDiv);
        contentEl.appendChild(containerEl);
    }

    renderContent() {
        const containerEl = document.querySelector('.container');
        const fitnessEl = document.createElement('div');
        fitnessEl.classList.add('item');
        fitnessEl.innerHTML = `<i class="fa-solid fa-dumbbell"></i><p class="categoryName">Fitness</p>`;
        const householdEl = document.createElement('div');
        householdEl.classList.add('item');
        householdEl.innerHTML = `<i class="fa-solid fa-house"></i><p class="categoryName">Household</p>`;
        const workEl = document.createElement('div');
        workEl.classList.add('item');
        workEl.innerHTML = `<i class="fa-solid fa-building"></i><p class="categoryName">Work</p>`;
        const vacationEl = document.createElement('div');
        vacationEl.classList.add('item');
        vacationEl.innerHTML = `<i class="fa-solid fa-umbrella-beach"></i><p class="categoryName">Vacation</p>`;
        const educationEl = document.createElement('div');
        educationEl.classList.add('item');
        educationEl.innerHTML = `<i class="fa-solid fa-book-bookmark"></i><p class="categoryName">Education</p>`;
        const healthEl = document.createElement('div');
        healthEl.classList.add('item');
        healthEl.innerHTML = `<i class="fa-solid fa-notes-medical"></i><p class="categoryName">Health</p>`;
        const elements = [fitnessEl, householdEl, workEl, vacationEl, educationEl, healthEl];
        elements.forEach(el => containerEl.appendChild(el));
    }


    renderNewCategoryButton() {
        const newCategoryDiv = document.getElementById('newCategoryDiv');
        const addCategoryBtn = document.createElement('button');
        addCategoryBtn.id = 'addCategoryBtn';
        addCategoryBtn.innerText = '+';
        newCategoryDiv.appendChild(addCategoryBtn);
    }


    renderNewCategory() {
        let categoryArr = [];

        const containerEl = document.querySelector('.container');

        document.addEventListener('click', (event) => {
            if (event.target.id === 'addCategoryBtn') {

                const submitBtn = document.getElementById('submit');

                if (submitBtn) {
                    submitBtn.addEventListener('click', (event) => {
                        event.preventDefault();
                        const inputCategory = document.getElementById('categoryName');

                        let categoryValue = inputCategory.value;

                        if (categoryValue) {

                            const newCategory = document.createElement('div');
                            newCategory.classList.add('item');
                            newCategory.innerHTML = `<i class="fa-solid fa-circle"></i><p class="categoryName">${categoryValue}</p>`;


                            categoryArr.push(newCategory);
                        }

                        categoryArr.forEach(category => containerEl.append(category));
                        const formDiv = document.getElementById('formDiv');
                        formDiv.remove();
                    })
                }
            }
        })



    }

}

export default Categories;