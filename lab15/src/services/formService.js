export const changeStep = (e, history, url, saveChangesFunc = null, isValid = null, errorSetter = null) => {
    e.preventDefault();

    if (isValid && !isValid()) return errorSetter(true);

    if (saveChangesFunc) saveChangesFunc();

    errorSetter(false);

    history.push(url);
}

export const handleChange = (e, initialForm, formSetter, isFormValidSetter) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    formSetter({
        ...initialForm,
        [fieldName]: fieldValue
    });

    for (const property in initialForm) {
        if (!((property === fieldName && fieldValue) || initialForm[property] !== '')) return isFormValidSetter(false)
    }

    return isFormValidSetter(true)
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

