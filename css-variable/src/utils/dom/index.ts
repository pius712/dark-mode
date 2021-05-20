const BODY = "body";

export const getElement = (selector: string) =>
  document.querySelector(selector);

export const addClass = (element: Element, className: string) =>
  element.classList.add(className);

export const removeClass = (element: Element, className: string) =>
  element.classList.remove(className);
export const hasClass = (element: Element, className: string) =>
  element.classList.contains(className);

export const getBody = () => getElement(BODY);

export const addClassToBody = (className: string) => {
  const body = getBody();
  if (body) {
    addClass(body, className);
  }
};

export const removeClassToBody = (className: string) => {
  const body = getBody();
  if (body) {
    removeClass(body, className);
  }
};

export const hasClassOfBody = (className: string) => {
  const body = getBody();
  if (body) {
    return hasClass(body, className);
  } else {
    return false;
  }
};
