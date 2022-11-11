import DOManipulator from "./domManipulator.js";
import ToolTip from "./toolTip.js";

class ProjectItem {
  constructor(id, updatePositionHandler, type) {
    this.id = id;
    this.projectElement = document.getElementById(this.id);
    this.updatePositionHandler = updatePositionHandler;
    this.hasActiveTooltip = false;
    this.connectMainBtn(type);
    this.connectMoreInfoBtn();
    this.connectDrag();
  }

  showMoreInfo() {
    if (this.hasActiveTooltip) {
      return;
    }

    const tooltipText =
      this.projectElement.dataset.extraDesc || "Nothing to see here.";

    const tooltip = new ToolTip(
      () => {
        this.hasActiveTooltip = false;
      },
      tooltipText.toString(),
      this.id
    );
    tooltip.attach();
    this.hasActiveTooltip = true;
  }

  connectMoreInfoBtn() {
    let moreInfoBtn = this.projectElement.querySelector(".alt-btn");

    moreInfoBtn.addEventListener("click", this.showMoreInfo.bind(this));
  }

  connectMainBtn(type) {
    let mainBtn = this.projectElement.querySelector(".main-btn");

    mainBtn = DOManipulator.clearEventListener(mainBtn);
    mainBtn.textContent = type === "active" ? "Finish" : "Activate";

    mainBtn.addEventListener(
      "click",
      this.updatePositionHandler.bind(null, this.id)
    );
  }

  connectDrag() {
    this.projectElement.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", this.id);
      event.dataTransfer.effectAllowed = "move";
    });
  }

  update(updateListHandler, type) {
    this.updatePositionHandler = updateListHandler;
    this.connectMainBtn(type);
  }
}

export default ProjectItem;
