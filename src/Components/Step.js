import React, { Component } from 'react';
import styled from 'styled-components';
import Swipeable from 'react-swipeable';
import { MdChevronLeft, MdChevronRight } from 'react-icons/lib/md';

const StepContainer = styled.div`
  width: 100%;
  height: 100%;
  display: ${props => props.active ? 'grid' : 'none'};
  grid-template-columns: 100%;
  grid-template-rows: 12% 50% 8% 24% 6%;
  justify-items: center;
  background-color: #FFF;
`;

const StepHeader = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 30% 70%;
  align-items: center;
  justify-itmes: center;
`;

const StepHeaderLogo = styled.div`
  width: 100%
  height: 100%;
  background-color: #799293;
  background-image: url(https://static1.squarespace.com/static/57337691f8baf36eb1172a98/t/5a343681652dea7bc2cd1ae2/1525651173817/?format=1500w);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50% 50%;
  cursor: pointer;
`;

const StepHeaderText = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: #F7F7F7;
`;

const StepHeaderTextMain = styled.span`
  font-size: 8.5vw;
`;

const StepHeaderTextSub = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 4.5vw;
`;

const StepImage = styled.div`
  width: 90%;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const StepBodyHeader = styled.div`
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  align-items: center;
  font-size: 5.5vw;
`;

const StepBody = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  justify-items: center;
  background-color: #262626;
`;

const StepBodyButtons = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StepBodyButtonBack = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  padding-right: 2.5vw;
  font-size: 4.25vw;
  font-family: 'Roboto', sans-serif;
  background-color: #F7F7F7;
  border-radius: 4.25vw;
  color: #262626;
  cursor: pointer;
`;

const StepBodyButtonForward = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  padding-left: 2.5vw;
  font-size: 4.25vw;
  font-family: 'Roboto', sans-serif;
  background-color: #D6A94D;
  border-radius: 4.25vw;
  cursor: pointer;
`;

const StepBodyTextContainer = styled.div`
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
`;

const StepBodyText = styled.p`
  margin: 0px;
  padding: 0px;
  font-size: 4vw;
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  color: #FFF;
`;

const StepFooter = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  align-items: center;
  justify-items: center;
`;

const StepFooterLink = styled.a`
  font-size: 4.5vw;
  text-decoration: none;
  color: inherit;
`;

export default class Step extends Component {
  render() {
    return (
      <StepContainer active={this.props.active}>
        <StepHeader>
          <StepHeaderLogo
            onClick={() => this.props.setArrivalType('')}
          />
          <StepHeaderText>
            <StepHeaderTextMain>City Center</StepHeaderTextMain>
            <StepHeaderTextSub>421 W 3rd st 78701</StepHeaderTextSub>
          </StepHeaderText>
        </StepHeader>
        <Swipeable
          style={{
            width: '100%',
            height: '100%',
            display: 'grid',
            justifyItems: 'center'
          }}
          onSwipedLeft={
            this.props.index < this.props.maxSteps ?
              () => this.props.nextStep()
            :
              () => {''}
          }
          onSwipedRight={
            this.props.index > 1 ?
              () => this.props.prevStep()
            :
              () => this.props.setArrivalType('')
          }
        >
          <StepImage src={this.props.image}/>
        </Swipeable>
        <StepBodyHeader>
          {this.props.header}
        </StepBodyHeader>
        <StepBody>
          <StepBodyButtons>
            <StepBodyButtonBack
              onClick={
                this.props.index > 1 ?
                  () => this.props.prevStep()
                :
                  () => this.props.setArrivalType('')
              }
            >
              <MdChevronLeft size={window.innerWidth *.06}/>
              <span>back</span>
            </StepBodyButtonBack>
            {
              this.props.index < this.props.maxSteps &&
                <StepBodyButtonForward
                  onClick={() => this.props.nextStep()}
                >
                  <span>next</span>
                  <MdChevronRight size={window.innerWidth *.06}/>
                </StepBodyButtonForward>
            }
          </StepBodyButtons>
          <StepBodyTextContainer>
            <StepBodyText dangerouslySetInnerHTML={{__html: this.props.body}}/>
          </StepBodyTextContainer>
        </StepBody>
        <StepFooter>
          <StepFooterLink href='tel:5126237480'>
            <span>need help? call or text <span style={{color: '#D6A94D'}}>512-623-7480</span></span>
          </StepFooterLink>
        </StepFooter>
      </StepContainer>
    )
  }
}
