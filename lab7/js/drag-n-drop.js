let allFiles = containerElement.querySelectorAll(`.file`);
let activeElement = null;
let nextElement = null;

containerElement.addEventListener(`dragstart`, (event) => {
    deleteOpenedPopovers();
    event.target.classList.add(`selected`);
})

containerElement.addEventListener(`dragend`, (event) => {
    if (activeElement !== null && nextElement !== null) {
        containerElement.insertBefore(activeElement, nextElement);
    }
    event.target.classList.remove(`selected`);
});

containerElement.addEventListener(`dragover`, (event) => {
    event.preventDefault();

    activeElement = containerElement.querySelector(`.selected`);
    const currentElement = event.target;
    const isMovable = activeElement !== currentElement &&
        currentElement.classList.contains(`file`);

    if (!isMovable) {
        return;
    }

    nextElement = getNextElement(event.clientY, currentElement);
});

const getNextElement = (cursorPosition, currentElement) => {
    const currentElementCoord = currentElement.getBoundingClientRect();
    const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;
    return (cursorPosition < currentElementCenter) ?
        currentElement :
        currentElement.nextElementSibling;
};

const updateAllFiles = () => {
    for (const file of allFiles) {
        file.draggable = true;
    }
}

document.addEventListener('DOMContentLoaded', updateAllFiles());
