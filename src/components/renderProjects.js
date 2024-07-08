class Project {

    // updateStatus() {
    //     const statusBtn = document.querySelector('fa-regular.fa-circle');
    //     statusBtn.addEventListener('click', () => {
    //         statusBtn.classList.remove('fa-regular.fa-circle');
    //         statusBtn.classList.add('fa-regular.fa-circle-check');
    //     });
    // }

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

    renderNewProjects() {

        let projectsArray = [];

        document.addEventListener('click', (event) => {
            if (event.target.id === 'addProjectBtn') {
                const submitBtn = document.getElementById('submit');
                if (submitBtn) {
                    submitBtn.addEventListener('click', (event) => {
                        event.preventDefault();
                        const inputProjectName = document.getElementById('projectName').value;
                        const inputProjectDesc = document.getElementById('projectDesc').value;
                        const inputProjectStatus = document.getElementById('projectStatus').checked;

                        
                        const projectDiv = document.createElement('div');
                        projectDiv.classList.add('project');

                        const elements = [inputProjectName, inputProjectDesc, inputProjectStatus];

                        elements.forEach(el => projectDiv.append(el));

                        let obj = {
                            projectDiv
                        };

                        projectsArray.push(obj);

                        projectsArray.forEach(prj => containerEl.append(prj.projectDiv));

                        const formDiv = document.getElementById('formDiv');
                        formDiv.remove();

                    });
                }
            }
        });
    }
}

export default Project;
