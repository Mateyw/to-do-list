class Project {

    // updateStatus() {
    //     const statusBtn = document.querySelector('fa-regular.fa-circle');
    //     statusBtn.addEventListener('click', () => {
    //         statusBtn.classList.remove('fa-regular.fa-circle');
    //         statusBtn.classList.add('fa-regular.fa-circle-check');
    //     });
    // }



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
    
    renderStructure() {
        const contentEl = document.getElementById('content');
        const titleDiv = document.createElement('div');
        titleDiv.classList.add('titleDiv');
        const titleEl = document.createElement('p');
        titleEl.classList.add('title');
        titleEl.innerText = 'Projects';
        const containerEl = document.createElement('div');
        containerEl.classList.add('container');
        const projectHeaderRow = document.createElement('div');
        projectHeaderRow.id = 'projectHeaderRow';
        const projectHeaderName = document.createElement('div');
        projectHeaderName.id = 'projectHeaderName';
        projectHeaderName.innerText = 'Project';
        const projectHeaderDesc = document.createElement('div');
        projectHeaderDesc.id = 'projectHeaderDesc';
        projectHeaderDesc.innerText = 'Description';
        const projectHeaderStatus = document.createElement('div');
        projectHeaderStatus.id = 'projectHeaderStatus';
        projectHeaderStatus.innerText = 'Status';
        const elements = [projectHeaderName, projectHeaderDesc, projectHeaderStatus];
        elements.forEach(el => projectHeaderRow.appendChild(el));
        containerEl.appendChild(projectHeaderRow);
        titleDiv.appendChild(titleEl);
        contentEl.appendChild(titleDiv);
        contentEl.appendChild(containerEl);
    }

    renderDefaultProjects(projectName, projectDescription) {
        let projectsArray = [];

        const containerEl = document.querySelector('.container');
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        const projectNameEl = document.createElement('div');
        projectNameEl.classList.add('projectName');
        projectNameEl.innerText = projectName;
        const projectDesc = document.createElement('div');
        projectDesc.classList.add('projectDesc');
        projectDesc.innerText = projectDescription;
        const checkboxDiv = document.createElement('div');
        checkboxDiv.classList.add('checkboxDiv');
        const checkIcon = document.createElement('i');
        checkIcon.classList.add('fa-regular'); 
        checkIcon.classList.add('fa-circle'); 
        checkboxDiv.appendChild(checkIcon);
        const elements = [projectNameEl, projectDesc, checkboxDiv];
        elements.forEach(el => projectDiv.appendChild(el));
        

        let defaultPrj = {
            projectDiv
        };

        projectsArray.push(defaultPrj.projectDiv);

        projectsArray.forEach(prj => containerEl.append(prj));


        
    }

    renderProjects() {

        // still needs to be coded ...
        // containerEl.appendChild(projectEl);
    }

    renderNewProjectButton() {
        const newProjectDiv = document.getElementById('newProjectDiv');
        const addProjectBtn = document.createElement('button');
        addProjectBtn.id = 'addProjectBtn';
        addProjectBtn.innerText = '+';
        newProjectDiv.appendChild(addProjectBtn);
    }
}

export default Project;
