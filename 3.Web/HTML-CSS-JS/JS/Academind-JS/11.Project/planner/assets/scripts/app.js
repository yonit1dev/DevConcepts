"use strict";

import { ProjectItem, ProjectList } from "./classes.js";

class App {
  static activeProjectList = new ProjectList("active");
  static finishedProjectList = new ProjectList("finished");

  static createProjectItem(titleField, descriptionField) {
    let title = titleField.value;
    let description = descriptionField.value;

    const addedProject = new ProjectItem(title, description, true);

    return addedProject;
  }

  static addProject() {
    const addModal = document.getElementById("add-card");
    const plusBtn = document.getElementById("plus-btn");

    const titleField = addModal.querySelector("#title");
    const descriptionField = addModal.querySelector("#description");

    const addProjectBtn = addModal.querySelector("#add-project-btn");

    plusBtn.addEventListener("click", () => {
      addModal.classList.toggle("visible");
    });

    addProjectBtn.addEventListener("click", () => {
      const project = this.createProjectItem(titleField, descriptionField);

      this.activeProjectList.projects.push(project);
    });
  }
}

// App.init();
App.addProject();
