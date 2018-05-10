import React, { Component } from 'react';
import styled from 'styled-components';
import { MdDirectionsWalk, MdDirectionsCar } from 'react-icons/lib/md';

const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 50% 10% 34% 6%;
`;

const MenuHeader = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 100%;
  align-items: center;
  justify-items: center;
  background-color: #799293;
`;

const MenuHeaderLogo = styled.div`
  width: 70%
  height: 100%;
  position: relative;
  left: -4vw;
  background-image: url(https://static1.squarespace.com/static/57337691f8baf36eb1172a98/t/5a343681652dea7bc2cd1ae2/1525651173817/?format=1500w);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50% 50%;
`;

const MenuHeaderText = styled.div`
  position: absolute;
  bottom: 4vw;
  right: 4vw;
  text-align: left;
`;

const MenuHeaderTextMain = styled.span`
  font-size: 10vw;
`;

const MenuHeaderTextSub = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 5vw;
`;

const MenuBodyHeader = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  align-items: end;
  justify-items: center;
  font-size: 6.5vw;
`;

const MenuBody = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  justify-items: center;
`;

const MenuBodySquare = styled.div`
  width: 36vw;
  height: 36vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #FFF;
  color: #212121;
  border: .75vw solid #D6A94D;
  border-radius: 5px;
  text-align: center;
`;

const MenuBodySquareText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 4.25vw;
`;

const MenuFooter = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 100%;
`;

const MenuFooterLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export default class Menu extends Component {
  render() {
    return (
      <MenuContainer>
        <MenuHeader>
          <MenuHeaderLogo/>
          <MenuHeaderText>
            <MenuHeaderTextMain>City Center</MenuHeaderTextMain>
            <br/><MenuHeaderTextSub>421 W 3rd st, 78701</MenuHeaderTextSub>
          </MenuHeaderText>
        </MenuHeader>
        <MenuBodyHeader>
          <span>How are you arriving today?</span>
        </MenuBodyHeader>
        <MenuBody>
          <MenuBodySquare
            onClick={() => this.props.setArrivalType('driving')}
          >
            <MdDirectionsCar size={window.innerWidth * .12} color={'#D6A94D'}/>
            <MenuBodySquareText>
              Driving
              <br/>(need parking)
            </MenuBodySquareText>
          </MenuBodySquare>
          <MenuBodySquare
            onClick={() => this.props.setArrivalType('walking')}
          >
            <MdDirectionsWalk size={window.innerWidth *.12} color={'#D6A94D'}/>
            <MenuBodySquareText>
              Walking
              <br/>(dropped off)
            </MenuBodySquareText>
          </MenuBodySquare>
        </MenuBody>
        <MenuFooter>
          <MenuFooterLink href='tel:5126237480'>
            <span>need help? call or text <span style={{color: '#D6A94D'}}>512-623-7480</span></span>
          </MenuFooterLink>
        </MenuFooter>
      </MenuContainer>
    )
  }
}
