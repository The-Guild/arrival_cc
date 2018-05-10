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
  overflow: ${props => props.landscape ? 'scroll' : 'hidden'};
`;

const AppContainerDesktop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #F7F7F7;
  overflow: hidden;
`;

const ScaleDivParent = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  top: calc(50vh - 365px);
`;

const ScaleDiv = styled.div`
  -moz-transform: scale(${props => 411 / props.width});
  -webkit-transform: scale(${props => 411 / props.width});
  transform: scale(${props => 411 / props.width});
`;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dimensions: {
        width: 0,
        height: 0,
      },
      landscape: false,
      arrivalType: ''
    };
    this.setDimensions = this.setDimensions.bind(this);
  }

  componentDidMount() {
    this.setDimensions();
    window.addEventListener('resize', this.setDimensions);
    window.addEventListener('orientationchange', this.setDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setDimensions);
    window.addEventListener('orientationchange', this.setDimensions);
  }

  setDimensions() {
    let width = window.innerWidth;
    let height = window.innerHeight
    this.setState({
      dimensions: {
        width: width,
        height: height
      },
      landscape: width > height
    });
  }

  setArrivalType(arrivalType) {
    this.setState({
      arrivalType: arrivalType
    });
  }

  render() {
    if (this.state.dimensions.width <= 1024) {
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
    } else {
      return (
        <AppContainerDesktop>
          <ScaleDivParent>
            <ScaleDiv width={this.state.dimensions.width}>
              <AppContainer landscape={true}>
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
            </ScaleDiv>
          </ScaleDivParent>
        </AppContainerDesktop>
      );
    }
  }
}

export default App;
