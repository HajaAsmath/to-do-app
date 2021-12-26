import domUtils from './utils/domUtils.js'
import './style/style.css'

(function() {
    let container = domUtils.createDiv('main-container');
    let header = domUtils.createDiv('header');
    let headerLabel = domUtils.createLabel('heading');
    headerLabel.textContent = 'Mark your word';
    header.appendChild(headerLabel);

    let contentContainer = domUtils.createDiv('content-container');
    let sideNav = domUtils.createDiv('side-nav');
    let homeNavButton = domUtils.createDiv('home-button', 'nav-button');
    let homeLabel = domUtils.createLabel();
    homeLabel.textContent = 'Home';
    homeNavButton.appendChild(homeLabel);
    sideNav.appendChild(homeNavButton);

    let projectNavButton = domUtils.createDiv('project-button','nav-button');
    let projectLabel = domUtils.createLabel();
    projectLabel.textContent = 'Projects';
    let iconSpan = domUtils.createSpan('icon-drop', 'material-icons');
    let addIcon = domUtils.createSpan('icon-add', 'material-icons');
    addIcon.textContent = 'add_circle_outline';
    iconSpan.classList.add('icons');
    iconSpan.textContent = 'chevron_right';
    projectNavButton.appendChild(addIcon);
    projectNavButton.appendChild(projectLabel);
    projectNavButton.appendChild(iconSpan);
    sideNav.appendChild(projectNavButton);
    
    let todoContainer = domUtils.createDiv('todo-container');
    let todos = domUtils.createDiv('todo-div');
    let addTodo = domUtils.createDiv('add-todo');
    let addLabel = domUtils.createLabel('add-label');
    addLabel.textContent = 'Add Task';
    let addIcon1 = domUtils.createSpan('icon-add1', 'material-icons');
    addIcon1.textContent = 'add_circle_outline';
    addTodo.appendChild(addIcon1);
    addTodo.appendChild(addLabel);

    todos.appendChild(addTodo);
    todoContainer.appendChild(todos);
    
    contentContainer.appendChild(sideNav);
    contentContainer.appendChild(todoContainer);
    container.appendChild(header);
    container.appendChild(contentContainer);

    document.body.appendChild(container);


})();