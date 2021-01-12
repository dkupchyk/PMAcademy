// Initialization of all files
const containerElement = document.querySelector(`.container`);
const allFiles = containerElement.querySelectorAll(`.file`);

// Popovers
const popoverHandler = (event) => {
    let allPopovers = document.querySelectorAll('.popover')

    if (allPopovers.length) {
        allPopovers[0].remove();
    }

    let fileName = event.target.innerText;
    const popover = document.createElement('div');
    popover.classList.add('popover');
    popover.innerHTML = "<p class='edit'>Edit</p>" +
                        "<p class='delete'>Delete</p>"
    event.target.append(popover);

    document.querySelector('.edit').addEventListener('click', () => {
        let name = prompt('Enter file name', fileName);
        event.target.innerText = name;
    });

    document.querySelector('.delete').addEventListener('click', () => {
        event.target.remove();
    });
};

// const createNewFile = () => {
//     let name = prompt("Name:");
//     const newFile = document.createElement('div');
//     newFile.innerHTML = name;
//     newFile.classList.add('file');
//     containerElement.appendChild(newFile);
// }

// Drag n drop

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

// document.addEventListener('click', createNewFilePopover);

for (const file of allFiles) {
    file.draggable = true;
    file.addEventListener('click', popoverHandler);
}
