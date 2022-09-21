class ProjectItem {
  constructor(title, description, active = true) {
    this.title = title;
    this.description = description;
    this.active = active;
  }

  changeProjectStatus() {
    this.active = !this.active;
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    const projectItems = document.querySelectorAll(`.${type}-projects`);
  }
}

class MoreInfoTip {}

export { ProjectItem, ProjectList };
