// Initialization of all files
const containerElement = document.querySelector(`.container`);
const allFiles = containerElement.querySelectorAll(`.file`);

let openedPopOver = null;

// Popovers
const popoverHandler = (event) => {
    let state = event.target.className;

    if (state === 'file') {
        let allPopovers = document.querySelectorAll('.popover')

        if (allPopovers.length) {
            allPopovers[0].remove();
        }

        openedPopOver = document.createElement('div');
        openedPopOver.classList.add('popover');
        openedPopOver.innerHTML = "<p class='edit' onclick='editFile(event)'>Edit</p>" +
            "<p class='delete' onclick='deleteFile(event)'>Delete</p>"
        event.target.append(openedPopOver);
    }
};

const editFile = (event) => {
    let mainDiv = event.target.parentElement.parentElement;
    let fileName = mainDiv.firstChild.nodeValue;
    let refactoredFileName = fileName.replace(/\s+/g, ' ');
    let newName = prompt('Enter file name', refactoredFileName);

    while (!checkIfValidFileName(newName)) {
        newName = prompt('ERROR! Enter a valid file name', refactoredFileName);
    }

    mainDiv.innerText = newName;
}

const deleteFile = (event) => {
    event.target.parentElement.parentElement.remove();
}

const checkIfValidFileName = (name) => {
    return /^(.|\s)*\S(.|\s)*$|^[^\\\/\:\*\?\"\<\>\|\.]+(\.[^\\\/\:\*\?\"\<\>\|\.]+)+$/.test(name);
}

// const createNewFile = () => {
//     let name = prompt("Name:");
//     const newFile = document.createElement('div');
//     newFile.innerHTML = name;
//     newFile.classList.add('file');
//     containerElement.appendChild(newFile);
// }

// document.addEventListener('click', createNewFilePopover);

for (const file of allFiles) {
    file.draggable = true;
    file.addEventListener('click', popoverHandler);
}

