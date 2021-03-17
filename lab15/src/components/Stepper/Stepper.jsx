import React from 'react'
import styled from 'styled-components';
import {Link} from "react-router-dom";

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
        border: 1px solid #333;
        border-radius: 45%;
    }

    hr {
        width: 60px;
        margin: 0 5px;
        border: none;
        border-bottom: 1px solid #333;
    }
    
    :last-child hr {
        display: none;
    }
`;

const Stepper = ({amount}) => {

    let stepper = [];
    for (let i = 1; i <= amount; i++) {
        stepper[i] =
            <StepperCard key={i}>
                <Link to={`/`}>
                    <span>{i}</span>
                </Link>
                <hr/>
            </StepperCard>
    }

    return (<StyledStepper>{stepper}</StyledStepper>);
};

export default Stepper;
