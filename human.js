import "./human.css";

/**
 *
 * @param {NodeList} elements
 */
export function setupToggle(elements) {
  elements.forEach((el) => {
    const dialogEl = el.nextElementSibling;
    const toggleVisibility = () => dialogEl.classList.toggle("invisible");
    el.addEventListener("click", toggleVisibility);
  });
}
