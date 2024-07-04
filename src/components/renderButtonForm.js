class ButtonForm {
    renderForm(addBtnId) {
        const addButtonEl = document.getElementById(addBtnId);
        const bodyEl = document.querySelector('body');

        addButtonEl.addEventListener('click', () => {

            if (document.getElementById('formDiv')) {
                return; 
            }

            switch (addBtnId) {
                case 'addProjectBtn':
                    const projectButtonFormEl = document.createElement('div');
                    projectButtonFormEl.id = 'formDiv';
                    projectButtonFormEl.innerHTML = `
                        <form id="form">
                                <div class="name">
                                    <label for="projectName">Project Name</label>
                                    <input type="text" id="projectName" maxlength="40">
                                </div>
                                <div class="desc">
                                    <label for="projectDesc">Description</label>
                                    <textarea id="projectDesc" name="projectDesc" rows="3" cols="max-content" form="form" maxlength="120" placeholder="Max. 120 characters"></textarea>
                                </div>
                                <div class="status">
                                    <label for="projectStatus">Status</label>
                                    <input type="checkbox" id="projectStatus">
                                </div>
                                <button id="submit">Submit</button>
                            </form>`;

                    bodyEl.appendChild(projectButtonFormEl);
                    const projectSubmitBtnEl = document.getElementById('submit');

                    projectSubmitBtnEl.addEventListener('click', (event) => {
                        event.preventDefault();

                        
                    });
                    break;

                case 'addToDoBtn':
                    const toDoButtonFormEl = document.createElement('div');
                    toDoButtonFormEl.id = 'formDiv';
                    toDoButtonFormEl.innerHTML = `
                            <form id="form">
                                <div class="name">
                                    <label for="toDoName">To-Do Name</label>
                                    <input type="text" id="toDoName">
                                </div>
                                <div class="desc">
                                    <label for="toDoDesc">Description</label>
                                    <input type="text" id="toDoDesc">
                                </div>
                                <div class="dueDiv">
                                    <label for="dueDateFormEl">Due Date</label>
                                    <input type="date" id="dueDateFormEl">
                                </div>
                                <div class="priorityDiv">
                                    <label for="priorityFormEl">Priority</label>
                                    <select name="priorityFormEl" class="priorityDropdown">
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                    </select>
                                </div>
                                <div class="status">
                                    <label for="toDoStatus">Status</label>
                                    <input type="checkbox" id="toDoStatus">
                                </div>
                                <button id="submit">Submit</button>
                            </form>`;
                    bodyEl.appendChild(toDoButtonFormEl);
                    const toDoSubmitBtnEl = document.getElementById('submit');

                    toDoSubmitBtnEl.addEventListener('click', (event) => {
                        event.preventDefault();
                    });

                    break;

                case 'addCategoryBtn':
                    const categoryButtonFormEl = document.createElement('div');
                    categoryButtonFormEl.id = 'formDiv';
                    categoryButtonFormEl.innerHTML = `
                            <form id="form">
                                <div class="name">
                                    <label for="categoryName">Category Name</label>
                                    <input type="text" id="categoryName">
                                </div>
                                <button id="submit">Submit</button>
                            </form>`;
                    bodyEl.appendChild(categoryButtonFormEl);
                    const categorySubmitBtnEl = document.getElementById('submit');

                    categorySubmitBtnEl.addEventListener('click', (event) => {
                        event.preventDefault();
                    });
                    break;

                default:
                    break;
            }
        });




    }
}

export default ButtonForm;