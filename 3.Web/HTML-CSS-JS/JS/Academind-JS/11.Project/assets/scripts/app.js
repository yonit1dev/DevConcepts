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
  constructor(type) {
  }
}

class MoreInfoTip {}

class App {
  static init() {
    const activeProjects = new ProjectList("active");
    const finishedProjects = new ProjectList("finished")
  }
}

const activeProject = new ProjectItem(
  "Finish Course",
  "Finish JS course by two weeks."
);

const insertProject = document.createElement("div");
insertProject.className = "project";
insertProject.innerHTML = `
    <h3>${activeProject.title}</h3>
    <p>${activeProject.description}</p>
    <div class="buttons">
        <button id="more-info-btn">More Info</button>
        <button id="finish-btn">Finish</button>
    </div>
`;

activeList.append(insertProject);
