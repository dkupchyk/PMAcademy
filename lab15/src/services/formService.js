export const changeStep = (e, history, url, saveChangesFunc = null, isValid = null, errorSetter = null) => {
    e.preventDefault();

    if (isValid) {
        if (!isValid()) return errorSetter(true);
        errorSetter(false);
    }

    if (saveChangesFunc) saveChangesFunc();

    history.push(url);
}

export const handleChange = (e, initialForm, formSetter, isFormValidSetter = null) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    formSetter({
        ...initialForm,
        [fieldName]: fieldValue
    });

    if (isFormValidSetter) {
        for (const property in initialForm) {
            if (!((property === fieldName && fieldValue) || initialForm[property] !== '')) return isFormValidSetter(false)
        }

        isFormValidSetter(true)
    }
}

export const cancel = (e, initialFormState, errorSetter, formSetter, isFormOpenSetter = null, isFormOpenValue = null) => {
    e.preventDefault();

    errorSetter(false);

    formSetter(initialFormState);

    if (isFormOpenSetter) isFormOpenSetter(isFormOpenValue);
}

export const submit = (e, saveChangesFunc, isValid, errorSetter, isFormOpenSetter = null, isFormOpenValue = null,) => {
    e.preventDefault();

    if (isValid && !isValid()) return errorSetter(true);
    errorSetter(false);

    saveChangesFunc();

    if (isFormOpenSetter) isFormOpenSetter(isFormOpenValue);
}

