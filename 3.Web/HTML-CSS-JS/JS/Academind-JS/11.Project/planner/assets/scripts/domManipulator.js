class DOManipulator {
  static clearEventListener(element) {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);

    return clonedElement;
  }

  static moveElement(elementId, newDestinationTag) {
    const element = document.getElementById(elementId.toString());
    const destinationElement = document.querySelector(
      newDestinationTag.toString()
    );

    destinationElement.append(element);
  }
}

export default DOManipulator;
