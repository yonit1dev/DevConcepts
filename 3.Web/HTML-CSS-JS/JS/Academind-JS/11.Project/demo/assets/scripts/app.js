import { ProjectItem, ProjectList, MoreInfo } from "./models.js";

class App {
  static init() {
    const activeProjectsList = new ProjectList("active");
    const finishedProjectsList = new ProjectList("finished");

    activeProjectsList.setSwitchHandlerFn(
      finishedProjectsList.addProject.bind(finishedProjectsList)
    );

    finishedProjectsList.setSwitchHandlerFn(
      activeProjectsList.addProject.bind(activeProjectsList)
    );
  }
}

App.init();
