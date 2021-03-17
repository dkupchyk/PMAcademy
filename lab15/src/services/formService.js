export const changeStep = (e, history, url, saveChangesFunc = null) => {
    e.preventDefault();

    if (saveChangesFunc) {
        saveChangesFunc();
    }

    history.push(url);
}

export const handleChange = (e, initialForm, formSetter, validate = null) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    formSetter({
        ...initialForm,
        [fieldName]: fieldValue
    });

    if(validate) validate();
}

export const cancel = (e, initialFormState, formSetter, isFormOpenSetter = null, isFormOpenValue = null) => {
    e.preventDefault();

    formSetter(initialFormState);

    if (isFormOpenSetter) isFormOpenSetter(isFormOpenValue);
}

export const submit = (saveChangesFunc, isFormOpenSetter = null, isFormOpenValue = null) => {
    saveChangesFunc();

    if (isFormOpenSetter) isFormOpenSetter(isFormOpenValue);
}

