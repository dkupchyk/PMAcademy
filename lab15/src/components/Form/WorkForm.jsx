import React, {useState} from 'react'
import styled from 'styled-components';
import {useHistory} from "react-router-dom";
import {connect, useSelector} from "react-redux";

import {ADD_WORK} from "../../store/actions";

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

const WorkForm = (props) => {

    const history = useHistory();
    const educations = useSelector(state => state.works);
    const [form, setForm] = useState({
        workName: '',
        workPosition: '',
        workStartDate: '',
        workEndDate: '',
    });
    const [isValid, setIsValid] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const toPrevious = (e) => {
        e.preventDefault();

        history.push("/step-1");
    }

    const toNext = (e) => {
        e.preventDefault();

        saveChanges();

        history.push("/step-3");
    }

    const saveChanges = () => {
        props.addWork({...form});
    }

    const handleChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setForm({
            ...form,
            [fieldName]: fieldValue
        });

        validate();
    }

    const validate = () => {
        (form.workName && form.workPosition && form.workStartDate && form.workEndDate)
            ? setIsValid(true)
            : setIsValid(false)
    }

    return (<StyledForm>

        {educations.map(item => {
            return <form key={item}>
                <input type="text" name="workName" value={item.workName} onChange={handleChange} placeholder="Name"/>
                <input type="text" name="workPosition" value={item.workPosition} onChange={handleChange} placeholder="Specialization"/>
                <input type="text" name="workStartDate" value={item.workStartDate} onChange={handleChange} placeholder="Start date"/>
                <input type="text" name="workEndDate" value={item.workEndDate} onChange={handleChange} placeholder="End date"/>
            </form>
        })}

        {!isFormOpen
            ? <button onClick={() => setIsFormOpen(!isFormOpen)}>Add work</button>
            : <form>
                <input type="text" name="workName" onChange={handleChange} placeholder="Name"/>
                <input type="text" name="workPosition" onChange={handleChange}
                       placeholder="Specialization"/>
                <input type="text" name="workStartDate" onChange={handleChange}
                       placeholder="Start date"/>
                <input type="text" name="workEndDate" onChange={handleChange} placeholder="End date"/>

                <div>
                    <button onClick={toPrevious}>Previous</button>
                    <button disabled={!isValid} onClick={toNext}>Finish</button>
                </div>
            </form>
        }

    </StyledForm>);
};

const mapStateToProps = (state) => ({
    works: state.works,
});

const mapDispatchToProps = (dispatch) => ({
    addWork: (work) => dispatch(ADD_WORK(work)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkForm);
