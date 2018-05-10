import React, { Component } from 'react';
import styled from 'styled-components';
import Menu from './Components/Menu.js';
import StepList from './Components/StepList.js';
import { ArrivalSteps } from './Data/ArrivalSteps.js';

const AppContainer = styled.div`
  width: 100vw;
  height: ${props => props.landscape ? '178vw' : '100%' };
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 100%;
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
      landscape: false,
      arrivalType: ''
    };
    this.setLandscape = this.setLandscape.bind(this);
  }

  componentDidMount() {
    this.setLandscape();
    window.addEventListener('resize', this.setLandscape);
    window.addEventListener('orientationchange', this.setLandscape);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setLandscape);
    window.addEventListener('orientationchange', this.setLandscape);
  }

  setLandscape() {
    let width = window.innerWidth;
    let height = window.innerHeight
    this.setState({
      landscape: width > height
    });
  }

  setArrivalType(arrivalType) {
    this.setState({
      arrivalType: arrivalType
    });
  }

  render() {
    return (
      <AppContainer landscape={this.state.landscape}>
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
