import Project from "./project";

function ToDo(title, description, dueDate, priority, project = 'Default') {
this.title = title;
this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;

    const defaultProject = new Project(project);
    defaultProject.todos.push(this);
}

export default ToDo;