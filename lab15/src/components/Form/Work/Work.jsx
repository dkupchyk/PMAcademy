import React, {useState} from 'react'
import styled from 'styled-components';
import {useHistory} from "react-router-dom";
import {connect, useSelector} from "react-redux";

import {ADD_WORK} from "../../../store/actions";
import {cancel, changeStep, handleChange, submit} from "../../../services/formService";
import {StyledButtonsRow} from "./WorkForm";
import {DATE_VALIDATION} from "../../../services/validation";
import WorkForm from "./WorkForm";

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

const Work = (props) => {

    const history = useHistory();

    const initialFormState = {
        workName: '',
        workPosition: '',
        workStartDate: '',
        workEndDate: '',
    };

    const works = useSelector(state => state.works);
    const [form, setForm] = useState(initialFormState);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [hasError, setHasError] = useState(false)

    const saveChanges = () => props.addWork({...form});

    const toPrevious = (e) => changeStep(e, history, "/step-2");
    const toNext = (e) => changeStep(e, history, "/cv");

    const changeInputs = (e) => handleChange(e, form, setForm);

    const cancelWorkForm = (e) => cancel(e, initialFormState, setHasError, setForm, setIsFormOpen, !isFormOpen);
    const submitWorkForm = (e) => submit(e, saveChanges, validate, setHasError, setIsFormOpen, !isFormOpen);

    const renderError = () => {
        if (hasError) return <p>Inputs are invalid</p>
    }

    const validate = () => (form.workName && form.workPosition && DATE_VALIDATION(form.workStartDate) && DATE_VALIDATION(form.workEndDate));

    return (<StyledForm>

        {works.map(item => <WorkForm item={item} onChangeFunc={changeInputs} areButtonsVisible={false}/>)}

        {!isFormOpen
            ? <button onClick={() => setIsFormOpen(!isFormOpen)}>Add work</button>
            : <WorkForm
                onChangeFunc={changeInputs}
                areButtonsVisible={true}
                submit={submitWorkForm}
                cancel={cancelWorkForm}/>}

        {renderError()}

        <StyledButtonsRow justify='center'>
            <button onClick={toPrevious}>Previous</button>
            <button onClick={toNext}>Next</button>
        </StyledButtonsRow>

    </StyledForm>);
};

const mapStateToProps = (state) => ({
    works: state.works,
});

const mapDispatchToProps = (dispatch) => ({
    addWork: (work) => dispatch(ADD_WORK(work)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Work);
