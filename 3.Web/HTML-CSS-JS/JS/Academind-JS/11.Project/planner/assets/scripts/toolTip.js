import Component from "./component.js";

class ToolTip extends Component {
  constructor(closeNotifier, textContent, parentElementSelector) {
    super(parentElementSelector, false);
    this.closeNotifier = closeNotifier;
    this.textContent = textContent;
    this.show();
  }

  closeToolTip = () => {
    this.detach();
    this.closeNotifier();
  };

  show() {
    const tooltipEl = document.createElement("div");
    tooltipEl.id = "tool-tip";
    tooltipEl.classList.add("project-card");

    tooltipEl.textContent = this.textContent;

    const [parentPosLeft, parentPosTop, parentHeight, parentScrolling] = [
      this.parentElement.offsetLeft,
      this.parentElement.offsetTop,
      this.parentElement.clientHeight,
      this.parentElement.parentElement.scrollTop,
    ];

    const toolTipTop = parentPosTop + parentHeight - parentScrolling;
    const toolTipLeft = parentPosLeft + 5;

    tooltipEl.style.top = toolTipTop + "px";
    tooltipEl.style.left = toolTipLeft + "px";

    tooltipEl.addEventListener("click", this.closeToolTip);

    this.element = tooltipEl;
  }
}

export default ToolTip;
