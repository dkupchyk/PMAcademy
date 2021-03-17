import React, {useState} from 'react'
import styled from 'styled-components';

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

const NamePhoneForm = () => {

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        position: '',
        phone: '',
        email: '',
    });
    const [isValid, setIsValid] = useState(false)

    const toPrevious = (e) => {
        e.preventDefault();

        console.log("prev")
    }

    const toNext = (e) => {
        e.preventDefault();

        console.log("next")

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
            <input type="text" name="firstName" onChange={handleChange} placeholder="First name"/>
            <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last name"/>
            <input type="text" name="position" value={form.position} onChange={handleChange} placeholder="Position"/>
            <input type="text" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone"/>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email"/>

            <div>
                <button disabled={!isValid} onClick={toPrevious}>Previous</button>
                <button disabled={!isValid} onClick={toNext}>Next</button>
            </div>
        </form>

    </StyledForm>);
};

export default NamePhoneForm;
