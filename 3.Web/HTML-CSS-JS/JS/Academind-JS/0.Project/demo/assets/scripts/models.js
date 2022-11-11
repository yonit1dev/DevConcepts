"use strict";

class MoveHelper {
  static clearEventListeners(element) {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);

    return clonedElement;
  }

  static moveElement(elementId, destinationSelector) {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(destinationSelector);

    destinationElement.append(element);
  }
}

class ProjectItem {
  constructor(id, updateProjectListFn) {
    this.id = id;
    this.updateProjectListHandler = updateProjectListFn;
    this.connectSwitchBtn();
    this.connectMoreInfoBtn();
  }

  connectSwitchBtn() {
    const projItemEl = document.getElementById(this.id);
    let switchBtn = projItemEl.querySelector("button:last-of-type");
    switchBtn = MoveHelper.clearEventListeners(switchBtn);

    switchBtn.addEventListener(
      "click",
      this.updateProjectListHandler.bind(null, this.id)
    );
  }
  connectMoreInfoBtn() {}

  update(updateProjectListFn, type) {
    this.updateProjectListHandler = updateProjectListFn;
    this.connectSwitchBtn();
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type;

    const projItems = document.querySelectorAll(`#${type}-projects li`);

    for (const item of projItems) {
      this.projects.push(new ProjectItem(item.id, this.moveProject.bind(this)));
    }
  }

  setSwitchHandlerFn(switchHandlerFn) {
    this.switchHandler = switchHandlerFn;
  }

  addProject(project) {
    this.projects.push(project);
    console.log(this.projects);
    MoveHelper.moveElement(project.id, `#${this.type}-projects ul`);

    project.update(this.moveProject.bind(this), this.type);
  }

  moveProject(projectID) {
    const movedProject = (p) => p.id === projectID;

    this.switchHandler(this.projects.find(movedProject));
    this.projects = this.projects.filter(movedProject);
  }
}

class MoreInfo {}

export { ProjectItem, ProjectList, MoreInfo };
