import React from 'react'
import styled from 'styled-components';

export const StyledButtonsRow = styled.div`
    display: flex;
    justify-content: ${props => props.justify};
    align-items: center
`;

const WorkForm = ({onChangeFunc, areButtonsVisible, submit = null, cancel = null, item = null}) => {

    return (
        <form key={item}>
            <input type="text"
                   name="workName"
                   value={item ? item.workName : undefined}
                   onChange={onChangeFunc}
                   placeholder="Name"/>

            <input type="text"
                   name="workPosition"
                   value={item ? item.workPosition : undefined}
                   onChange={onChangeFunc}
                   placeholder="Position"/>

            <input type="text"
                   name="workStartDate"
                   value={item ? item.workStartDate : undefined}
                   onChange={onChangeFunc}
                   placeholder="Start month/year: 04/2020"/>

            <input type="text"
                   name="workEndDate"
                   value={item ? item.workEndDate : undefined}
                   onChange={onChangeFunc}
                   placeholder="End month/year: 04/2020"/>

            {areButtonsVisible
                ? <StyledButtonsRow justify='center'>
                    <button onClick={submit}>Add</button>
                    <button onClick={cancel}>Cancel</button>
                </StyledButtonsRow>
                : <></>}
        </form>
    );
}

export default WorkForm;
