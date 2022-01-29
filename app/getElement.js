function getElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  } else {
    throw new Error(
      `something is wrong with selector, check selector => ${selector}`
    );
  }
}

export default getElement;
