class Component {
  constructor(parentElSelector, insertBefore = false) {
    if (parentElSelector) {
      this.parentElement = document.getElementById(parentElSelector);
    } else {
      this.parentElement = document.body;
    }
    this.insertBefore = insertBefore;
  }

  detach() {
    if (this.element) {
      this.element.remove();
    }
  }

  attach() {
    this.parentElement.insertAdjacentElement(
      this.insertBefore ? "afterbegin" : "beforeend",
      this.element
    );
  }
}

export default Component;
