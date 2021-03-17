import React from 'react'
import styled from 'styled-components';

export const StyledButtonsRow = styled.div`
    display: flex;
    justify-content: ${props => props.justify};
    align-items: center
`;

const EducationForm = ({onChangeFunc, areButtonsVisible, submit = null, cancel = null, item = null}) => {

    return (
        <form key={item}>
            <input type="text"
                   name="educName"
                   value={item ? item.educName : undefined}
                   onChange={onChangeFunc}
                   placeholder="Name"/>

            <input type="text"
                   name="educSpecialization"
                   value={item ? item.educSpecialization : undefined}
                   onChange={onChangeFunc}
                   placeholder="Specialization"/>

            <input type="text"
                   name="educStartDate"
                   value={item ? item.educStartDate : undefined}
                   onChange={onChangeFunc}
                   placeholder="Start date"/>

            <input type="text"
                   name="educEndDate"
                   value={item ? item.educEndDate : undefined}
                   onChange={onChangeFunc}
                   placeholder="End date"/>

            {areButtonsVisible
                ? <StyledButtonsRow justify='center'>
                    <button onClick={submit}>Add</button>
                    <button onClick={cancel}>Cancel</button>
                </StyledButtonsRow>
                : <></>}
        </form>
    );
}

export default EducationForm;
