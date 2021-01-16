const containerElement = document.querySelector(`.container`);

const popoverHandler = (event) => {
    let state = event.target.className;

    deleteOpenedPopovers();

    if (!state) {
        let popover = document.createElement('div');
        popover.classList.add('popover');

        popover.style.left = event.pageX + 'px';
        popover.style.top = event.pageY + 'px';

        popover.innerHTML = "<p class='create' onclick='createFile()'>Create</p>";
        event.target.append(popover);

    } else if (state === 'file') {
        let popover = document.createElement('div');
        popover.classList.add('popover');
        popover.innerHTML = "<p class='edit' onclick='editFile(event)'>Edit</p>" +
            "<p class='delete' onclick='deleteFile(event)'>Delete</p>";
        event.target.append(popover);
    }
};

const editFile = (event) => {
    let mainDiv = event.target.parentElement.parentElement;
    let fileName = mainDiv.firstChild.nodeValue;
    let oldName = fileName.replace(/\s+/g, ' ');
    let newName = isValidName(oldName, 'Enter file name', 'ERROR! Enter a valid file name');
    return newName ? mainDiv.innerText = newName : mainDiv.innerText = oldName;
}

const deleteFile = (event) => {
    event.target.parentElement.parentElement.remove();
}

const createFile = () => {
    let name = isValidName('', 'Name', 'ERROR! Enter a valid file name');

    if (name === null) {
        return;
    }

    const newFile = document.createElement('div');
    newFile.innerHTML = name;
    newFile.classList.add('file');
    containerElement.appendChild(newFile);
    updateAllFiles();
}

const checkIfValidFileName = (name) => {
    return /^(.|\s)*\S(.|\s)*$|^[^\\\/\:\*\?\"\<\>\|\.]+(\.[^\\\/\:\*\?\"\<\>\|\.]+)+$/.test(name);
}

const deleteOpenedPopovers = () => {
    let allPopovers = document.querySelectorAll('.popover')

    if (allPopovers.length) {
        allPopovers[0].remove();
    }
}

const isValidName = (oldName, mainPrompt, errorPrompt) => {
    let newName = prompt(mainPrompt, oldName);

    while (!checkIfValidFileName(newName)) {
        if (newName === null) return null;
        newName = prompt(errorPrompt, oldName);
    }

    return newName;
}

document.addEventListener('click', popoverHandler);
