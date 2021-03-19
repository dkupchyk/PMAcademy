import React from 'react'
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {CHANGE_STEP} from "../../store/actions";
import {connect} from "react-redux";

const StyledStepper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StepperCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    span {
        padding: 15px;
        border: 1.5px solid #677767;
        border-radius: 45%;
        
        color: ${props => props.isDone && props.isActive ? '#F7F6F1' : '#677767'};
        background-color: ${props => props.isDone && props.isActive ? '#677767' : '#F7F6F1'};
        
        text-decoration: none;
    }

    hr {
        width: 60px;
        margin: 0 5px;
        border: none;
        border-bottom: 2px solid #677767;
    }
    
    :last-child hr {
        display: none;
    }
`;

const Stepper = (props) => {

    const dispatchStepChange = (step) => props.changeStep(step);

    const renderAllSteps = () => {
        let stepper = [];

        for (let i = 1; i <= props.amount; i++) {
            stepper[i] =
                <StepperCard key={i} isDone={i < props.currentStep} isActive={props.firstName}>
                    <Link to={props.firstName ? `/step-${i}` : '#'} style={{textDecoration: 'none'}}
                          onClick={dispatchStepChange.bind(this, i)}>
                        <span>{i}</span>
                    </Link>
                    <hr/>
                </StepperCard>
        }

        return stepper;
    }

    return (<StyledStepper>{renderAllSteps()}</StyledStepper>);
};
const mapStateToProps = (state) => ({
    firstName: state.firstName,
    currentStep: state.currentStep,
});

const mapDispatchToProps = (dispatch) => ({
    changeStep: (step) => dispatch(CHANGE_STEP(step)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stepper);
