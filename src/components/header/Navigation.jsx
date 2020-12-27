import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

import './styles/header.css';

const HeaderContainer = styled.header`
  background-color: ${props => props.theme.colors.dark.first};
  position: fixed;
  width: 100%;
  height: ${props => props.theme.spacing.xl * 3}px;
  display: flex; 
  justify-content: center;
  color: ${props => props.theme.colors.font.light};
`;

const LiJavaScript = styled.li`
  background-color: transparent;
  width: ${props => props.theme.spacing.xl * 6}px;
  display: flex; 
  justify-content: center;
  transition: .2s;

  &:hover {
    background-color: ${props => props.theme.colors.js_yellow};
    color: #000000;
  }
`;

const LiTypeScript = styled.li`
  background-color: transparent;
  width: ${props => props.theme.spacing.xl * 6}px;
  display: flex; 
  justify-content: center;
  transition: .2s;

  &:hover {
    background-color: ${props => props.theme.colors.ts_blue};
    color: #ffffff;
  }
`;

const LiNormalItem = styled.li`
  background-color: transparent;
  width: ${props => props.theme.spacing.xl * 6}px;
  display: flex; 
  justify-content: center;
  transition: .2s;

  &:hover {
    background-color: ${props => props.theme.colors.dark.second};
    color: #ffffff;
  }
`;



function Header() {

  return (  
    <>
      <HeaderContainer>
        
        <nav className="main-menu">
          <ul>
            <NavLink to="/" activeClassName="active-normal" exact> <LiNormalItem>strona główna</LiNormalItem> </NavLink>
            <NavLink to="/lib/javascript" activeClassName="active-js"> <LiJavaScript>javaScript</LiJavaScript> </NavLink>
            <NavLink to="/lib/typescript" activeClassName="active-ts"> <LiTypeScript>typeScript</LiTypeScript> </NavLink>
          </ul>
        </nav>

      </HeaderContainer>
    </>
   );
}
 
export default Header;