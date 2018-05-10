import React, { Component } from 'react';
import styled from 'styled-components';
import Menu from './Components/Menu.js';
import StepList from './Components/StepList.js';
import { ArrivalSteps } from './Data/ArrivalSteps.js';

const AppContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 78px);
  min-height: calc(178vw - 78px);
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

  constructor(props) {
    super(props);
    this.state = {
      arrivalType: ''
    }
  }

  setArrivalType(arrivalType) {
    this.setState({
      arrivalType: arrivalType
    });
  }

  render() {
    return (
      <AppContainer>
        { this.state.arrivalType !== '' ?
          <StepList
            arrivalSteps={ArrivalSteps[this.state.arrivalType]}
            setArrivalType={this.setArrivalType.bind(this)}
          />
        :
          <Menu
            setArrivalType={this.setArrivalType.bind(this)}
          />
        }
      </AppContainer>
    );
  }
}

export default App;
