import React, { Component } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  min-height: calc(178vw - 84px);
  background-color: #212121;
  font-family: 'Cardo', serif;
  font-weight: 200;
  letter-spacing: 1px;
  font-feature-settings: "liga" 0;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
      </AppContainer>
    );
  }
}

export default App;
