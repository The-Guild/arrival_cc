import React, { Component } from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 50% 8% 34% 8%;
  background-color: #000;
`;

const MenuLogoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  background-color: yellow;
`;

const MenuHeader = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  background-color: blue;
`;

const MenuBodyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  background-color: red;
`;

const MenuFooter = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  background-color: purple;
`;

export default class Menu extends Component {
  render() {
    return (
      <MenuContainer>
        <MenuLogoContainer/>
        <MenuHeader/>
        <MenuBodyContainer/>
        <MenuFooter/>
      </MenuContainer>
    )
  }
}
