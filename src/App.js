import React, { Component } from 'react';
import styled from 'styled-components';
import Menu from './Components/Menu.js';
import Step from './Components/Step.js';

const AppContainer = styled.div`
  width: 100vw;
  min-height: calc(178vw - 84px);
  display: grid;
  grid-template-columns: 100%;
  border-bottom: 1px solid red;
  font-family: 'Cardo', serif;
  font-weight: 200;
  letter-spacing: 1px;
  font-feature-settings: "liga" 0;
  color: #262626;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Step/>
      </AppContainer>
    );
  }
}

export default App;
