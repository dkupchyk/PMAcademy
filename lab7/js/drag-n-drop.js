//
// containerElement.addEventListener(`dragstart`, (event) => {
//     event.target.classList.add(`selected`);
// })
//
// containerElement.addEventListener(`dragend`, (event) => {
//     event.target.classList.remove(`selected`);
// });
//
// containerElement.addEventListener(`dragover`, (event) => {
//     event.preventDefault();
//
//     const activeElement = containerElement.querySelector(`.selected`);
//     const currentElement = event.target;
//     // const isMoveable = activeElement !== currentElement &&
//     //     currentElement.classList.contains(`file`);
//     //
//     // if (!isMoveable) {
//     //     return;
//     // }
//
//     // evt.clientY — вертикальная координата курсора в момент,
//     // когда сработало событие
//     const nextElement = getNextElement(event.clientY, currentElement);
//
//     // Проверяем, нужно ли менять элементы местами
//     if (
//         nextElement &&
//         activeElement === nextElement.previousElementSibling ||
//         activeElement === nextElement
//     ) {
//         // Если нет, выходим из функции, чтобы избежать лишних изменений в DOM
//         return;
//     }
//
//     containerElement.insertBefore(activeElement, nextElement);
// });
//
// const getNextElement = (cursorPosition, currentElement) => {
//     // Получаем объект с размерами и координатами
//     const currentElementCoord = currentElement.getBoundingClientRect();
//
//     // Находим вертикальную координату центра текущего элемента
//     const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;
//
//     console.log(cursorPosition)
//     console.log(currentElementCenter);
//
//     // Если курсор выше центра элемента, возвращаем текущий элемент
//     // В ином случае — следующий DOM-элемент
//     return (cursorPosition < currentElementCenter) ?
//         currentElement :
//         currentElement.nextElementSibling;
// };
