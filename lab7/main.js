// const mouseOverHandler = (event) => {
//     if (!event.target.dataset.popover) {
//         return;
//     }
//     const popover = document.createElement('div');
//     popover.innerText = event.target.dataset.popover;
//     popover.classList.add('popover');
//     event.target.append(popover);
// };
//
// const mouseOutHandler = (event) => {
//     if (!event.target.dataset.popover) {
//         return;
//     }
//     event.target.querySelector('.popover').remove();
// };
//
// document.addEventListener('mouseover', mouseOverHandler);
// document.addEventListener('mouseout', mouseOutHandler);

const containerElement = document.querySelector(`.container`);
const allFiles = containerElement.querySelectorAll(`.file`);

for (const file of allFiles) {
    file.draggable = true;
}

containerElement.addEventListener(`dragstart`, (event) => {
    event.target.classList.add(`selected`);
})

containerElement.addEventListener(`dragend`, (event) => {
    event.target.classList.remove(`selected`);
});

containerElement.addEventListener(`dragover`, (event) => {
    event.preventDefault();

    const activeElement = containerElement.querySelector(`.selected`);
    const currentElement = event.target;
    // const isMoveable = activeElement !== currentElement &&
    //     currentElement.classList.contains(`file`);
    //
    // if (!isMoveable) {
    //     return;
    // }

    // evt.clientY — вертикальная координата курсора в момент,
    // когда сработало событие
    const nextElement = getNextElement(event.clientY, currentElement);

    // Проверяем, нужно ли менять элементы местами
    if (
        nextElement &&
        activeElement === nextElement.previousElementSibling ||
        activeElement === nextElement
    ) {
        // Если нет, выходим из функции, чтобы избежать лишних изменений в DOM
        return;
    }

    containerElement.insertBefore(activeElement, nextElement);
});


const getNextElement = (cursorPosition, currentElement) => {
    // Получаем объект с размерами и координатами
    const currentElementCoord = currentElement.getBoundingClientRect();
    // Находим вертикальную координату центра текущего элемента
    const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;

    // Если курсор выше центра элемента, возвращаем текущий элемент
    // В ином случае — следующий DOM-элемент
    return (cursorPosition < currentElementCenter) ?
        currentElement :
        currentElement.nextElementSibling;
};
