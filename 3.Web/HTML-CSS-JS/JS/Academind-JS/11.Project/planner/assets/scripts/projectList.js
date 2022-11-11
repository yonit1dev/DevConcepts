import ProjectItem from "./projectItem.js";
import DOManipulator from "./domManipulator.js";

class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type;

    const prjItems = document.querySelectorAll(
      `.${this.type}-projects-list li`
    );

    for (let prjItem of prjItems) {
      const projItem = new ProjectItem(
        prjItem.id,
        this.switchProject.bind(this),
        this.type
      );
      this.projects.push(projItem);
    }

    this.connectDrop();
  }

  setSwitchHandler(switchHandler) {
    this.switchHandler = switchHandler;
  }

  addProject(project) {
    this.projects.push(project);
    DOManipulator.moveElement(project.id, `.${this.type}-projects-list`);
    project.update(this.switchProject.bind(this), this.type);
  }

  switchProject(projectId) {
    this.switchHandler(this.projects.find((p) => p.id === projectId));
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }

  connectDrop() {
    const list = document.querySelector(`.${this.type}-projects-list`);

    list.addEventListener("dragenter", (event) => {
      list.parentElement.classList.add("droppable");
      event.preventDefault();
    });

    list.addEventListener("dragover", (event) => {
      event.preventDefault();
    });

    list.addEventListener("dragleave", (event) => {
      // To trigger leave events only when the cursor truly leaves the element, and not in child elemement, etc.
      if (event.relatedTarget.closest(`.${this.type}-projects-list`) !== list) {
        list.parentElement.classList.remove("droppable");
      }
    });

    list.addEventListener("drop", (event) => {
      list.parentElement.classList.remove("droppable");
      const draggedProject = event.dataTransfer.getData("text/plain");

      if (this.projects.find((p) => p.id === draggedProject)) {
        return;
      }

      document
        .getElementById(draggedProject)
        .querySelector(".main-btn")
        .click();
    });
  }
}

export default ProjectList;
