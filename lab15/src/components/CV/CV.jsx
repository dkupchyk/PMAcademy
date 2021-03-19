import React from 'react'
import styled from 'styled-components';
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";

const StyledCV = styled.div`
    width: 60%;
    margin: 5% auto;

    form {
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;

const Heading = styled.h2`
    margin: 25px 0 10px 0;
`;

const StyledForm = styled.div`
    width: 60%;
    margin: 1% auto;
    
    border-radius: 3px;
    border: 1.5px solid #677767;
`;

const CV = (props) => {

    const history = useHistory();

    const renderList = (items, ...properties) => {
        return items.length !== 0
            ? items.map(item => <StyledForm>
                {properties.map(prop => <p>{item[prop]}</p>)}
            </StyledForm>)
            : <p>-</p>
    }

    const renderMainContext = () => {
        return <StyledCV>

            <Heading>{props.firstName} {props.lastName}</Heading>

            <p>Position: {props.position}</p>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>

            <Heading>EDUCATION</Heading>
            {renderList(props.educations, 'educName', 'educSpecialization', 'educStartDate', 'educEndDate')}

            <Heading>WORK</Heading>
            {renderList(props.works, 'workName', 'workPosition', 'workStartDate', 'workEndDate')}

        </StyledCV>
    }

    return (<div>{!props.firstName ? history.push("/") : renderMainContext()}</div>);
};

const mapStateToProps = (state) => ({
    firstName: state.firstName,
    lastName: state.lastName,
    position: state.position,
    phone: state.phone,
    email: state.email,
    educations: state.educations,
    works: state.works
});

export default connect(mapStateToProps)(CV);
