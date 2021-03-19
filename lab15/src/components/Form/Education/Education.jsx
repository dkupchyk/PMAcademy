import React, {useState} from 'react'
import styled from 'styled-components';
import {useHistory} from "react-router-dom";
import {connect, useSelector} from "react-redux";

import {ADD_EDUCATION, CHANGE_STEP} from "../../../store/actions";
import {cancel, changeStep, handleChange, submit} from "../../../services/formService";
import EducationForm, {StyledButtonsRow} from "./EducationForm";
import {DATE_VALIDATION} from "../../../services/validation";

const StyledForm = styled.div`
    width: 60%;
    margin: 10% auto;
    
    form {
        width: 100%;
        
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;

const Education = (props) => {

    const history = useHistory();

    const initialFormState = {
        educName: '',
        educSpecialization: '',
        educStartDate: '',
        educEndDate: '',
    };

    const educations = useSelector(state => state.educations);
    const [form, setForm] = useState(initialFormState);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [hasError, setHasError] = useState(false)

    const saveChanges = () => props.addEducation({...form});

    const toPrevious = (e) => changeStep(e, history, 1, 1, props.changeStep,);
    const toNext = (e) => changeStep(e, history, 3, props.changeStep,);

    const changeInputs = (e) => handleChange(e, form, setForm);

    const cancelEducForm = (e) => cancel(e, initialFormState, setHasError, setForm, setIsFormOpen, !isFormOpen);
    const submitEducForm = (e) => submit(e, saveChanges, validate, setHasError, setIsFormOpen, !isFormOpen);

    const renderError = () => {
        if (hasError) return <p>Inputs are invalid</p>
    }

    const validate = () => (form.educName && form.educSpecialization && DATE_VALIDATION(form.educStartDate) && DATE_VALIDATION(form.educEndDate));

    return (<StyledForm>

        {educations.map(item => <EducationForm item={item} onChangeFunc={changeInputs} areButtonsVisible={false}/>)}

        {!isFormOpen
            ? <button onClick={() => setIsFormOpen(!isFormOpen)}>Add education</button>
            : <EducationForm
                onChangeFunc={changeInputs}
                areButtonsVisible={true}
                submit={submitEducForm}
                cancel={cancelEducForm}/>}

        {renderError()}

        <StyledButtonsRow justify='center'>
            <button onClick={toPrevious}>Previous</button>
            <button onClick={toNext}>Next</button>
        </StyledButtonsRow>

    </StyledForm>);
};

const mapStateToProps = (state) => ({
    educations: state.educations,
});

const mapDispatchToProps = (dispatch) => ({
    changeStep: (step) => dispatch(CHANGE_STEP(step)),
    addEducation: (education) => dispatch(ADD_EDUCATION(education)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Education);
