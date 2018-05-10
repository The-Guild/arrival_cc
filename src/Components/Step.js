import React, { Component } from 'react';
import styled from 'styled-components';

const StepContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 12% 45% 8% 29% 6%;
  background-color: #000;
`;

const StepLogoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  background-color: yellow;
`;

const StepImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  background-color: blue;
`;

const StepHeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  background-color: yellow;
`;

const StepBodyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  background-color: red;
`;

const StepFooterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  background-color: yellow;
`;

export default class Step extends Component {
  render() {
    return (
      <StepContainer>
        <StepLogoContainer/>
        <StepImageContainer/>
        <StepHeaderContainer/>
        <StepBodyContainer/>
        <StepFooterContainer/>
      </StepContainer>
    )
  }
}
