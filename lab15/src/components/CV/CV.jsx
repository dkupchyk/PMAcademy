import React, {useState} from 'react'
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

// const StyledForm = styled.div`
//     width: 60%;
//     margin: 10% auto;
//
//     form {
//         width: 100%;
//
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         flex-direction: column;
//     }
//
// `;
//
// const StepperCard = styled.div`
//     // display: flex;
//     // justify-content: center;
//     // align-items: center;
//     //
//     // span {
//     //     padding: 15px;
//     //     border: 1px solid #333;
//     //     border-radius: 45%;
//     // }
//     //
//     // hr {
//     //     width: 60px;
//     //     margin: 0 5px;
//     //     border: none;
//     //     border-bottom: 1px solid #333;
//     // }
//     //
//     // :last-child hr {
//     //     display: none;
//     // }
// `;

const CV = () => {

    const history = useHistory();

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

        history.push("/step-1");
    }

    const toNext = (e) => {
        e.preventDefault();

        history.push("/step-3");
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

    return (<div>CV</div>);
};

export default CV;
