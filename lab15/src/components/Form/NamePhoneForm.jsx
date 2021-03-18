import React, {useState} from 'react'
import styled from 'styled-components';
import {useHistory} from "react-router-dom";
import {connect, useSelector} from "react-redux";

import {SET_EMAIL, SET_FIRST_NAME, SET_LAST_NAME, SET_PHONE, SET_POSITION} from "../../store/actions";
import {changeStep, handleChange} from "../../services/formService";
import {EMAIL_VALIDATION, PHONE_VALIDATION} from "../../services/validation";

const StyledForm = styled.div`
    width: 40%;
    margin: 5% auto;
    
    form {
        width: 100%;
        
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;

const NamePhoneForm = (props) => {

    const history = useHistory();

    const [form, setForm] = useState({
        firstName: useSelector(state => state.firstName),
        lastName: useSelector(state => state.lastName),
        position: useSelector(state => state.position),
        phone: useSelector(state => state.phone),
        email: useSelector(state => state.email)
    });

    const [isValid, setIsValid] = useState(false)
    const [hasError, setHasError] = useState(false)

    const toNext = (e) => changeStep(e, history, "/step-2", saveChanges, validate, setHasError);
    const changeInputs = (e) => handleChange(e, form, setForm, setIsValid);

    const validate = () => (form.firstName && form.lastName && form.position && PHONE_VALIDATION(form.phone) && EMAIL_VALIDATION(form.email));

    const renderError = () => { if (hasError) return <p>Inputs are invalid</p> }

    const saveChanges = () => {
        props.setFirstName(form.firstName);
        props.setLastName(form.lastName);
        props.setPosition(form.position);
        props.setPhone(form.phone);
        props.setEmail(form.email);
    }

    return (<StyledForm>
        <form>
            <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={changeInputs}
                   placeholder="First name"/>

            <input type="text"
                   name="lastName"
                   value={form.lastName}
                   onChange={changeInputs}
                   placeholder="Last name"/>

            <input type="text"
                   name="position"
                   value={form.position}
                   onChange={changeInputs}
                   placeholder="Position"/>

            <input type="text"
                   name="phone"
                   value={form.phone}
                   onChange={changeInputs}
                   placeholder="Phone: XXX-XXX-XXXX"/>

            <input type="email"
                   name="email"
                   value={form.email}
                   onChange={changeInputs}
                   placeholder="Email: example@gmail.com"/>

            <button disabled={!isValid} onClick={toNext}>Next</button>
        </form>

        {renderError()}

    </StyledForm>);
};

const mapStateToProps = (state) => ({
    firstName: state.firstName,
    lastName: state.lastName,
    position: state.position,
    phone: state.phone,
    email: state.email,
});

const mapDispatchToProps = (dispatch) => ({
    setFirstName: (name) => dispatch(SET_FIRST_NAME(name)),
    setLastName: (name) => dispatch(SET_LAST_NAME(name)),
    setPosition: (position) => dispatch(SET_POSITION(position)),
    setPhone: (phone) => dispatch(SET_PHONE(phone)),
    setEmail: (email) => dispatch(SET_EMAIL(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NamePhoneForm);
