import React, {useState} from 'react'
import styled from 'styled-components';
import {useHistory} from "react-router-dom";
import {connect, useSelector} from "react-redux";

import {SET_EMAIL, SET_FIRST_NAME, SET_LAST_NAME, SET_PHONE, SET_POSITION} from "../../store/actions";

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

const StepperCard = styled.div`
    // display: flex;
    // justify-content: center;
    // align-items: center;
    //
    // span {
    //     padding: 15px;
    //     border: 1px solid #333;
    //     border-radius: 45%;
    // }
    //
    // hr {
    //     width: 60px;
    //     margin: 0 5px;
    //     border: none;
    //     border-bottom: 1px solid #333;
    // }
    //
    // :last-child hr {
    //     display: none;
    // }
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

    const toNext = (e) => {
        e.preventDefault();

        saveChanges();

        history.push("/step-2");
    }

    const saveChanges = () => {
        props.setFirstName(form.firstName);
        props.setLastName(form.lastName);
        props.setPosition(form.position);
        props.setPhone(form.phone);
        props.setEmail(form.email);
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
        (form.firstName && form.lastName && form.position && form.phone && form.email)
            ? setIsValid(true)
            : setIsValid(false)
    }

    return (<StyledForm>
        <form>
            <input type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="First name"/>
            <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last name"/>
            <input type="text" name="position" value={form.position} onChange={handleChange} placeholder="Position"/>
            <input type="text" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone"/>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email"/>

            <button disabled={!isValid} onClick={toNext}>Next</button>

        </form>

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
