import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

const duration = 300;
const transitionName = "fade";

const Container = styled.section`

    &.${transitionName}-enter {
        opacity: 0.01;
        transform: scale(0.9) translateY(50%);
    }
    
    &.${transitionName}-enter-active {
        opacity: 1;
        transform: scale(1) translateY(0%);
        transition: all ${duration}ms ease-out;
    }

    &.${transitionName}-exit {
        opacity: 1;
        transform: scale(1) translateY(0%);
    }

    &.${transitionName}-exit-active {
        opacity: 0.01;
        transform: scale(0.9) translateY(50%);
        transition: all ${duration}ms ease-out;
    }`;



const Fade = ({ open, children}) => (
    <CSSTransition
        in={open}
        classNames={transitionName}>
        {() => (
            <Container>
                {children}
            </Container>
        )}
    </CSSTransition>
);

export default Fade;