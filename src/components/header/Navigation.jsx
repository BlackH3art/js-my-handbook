import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: ${props => props.theme.colors.red};
  width: 100%;
  height: ${props => props.theme.spacing.xl * 5}px;
`

const Header = () => {

  return ( 
    <>
      <HeaderContainer />
    </>
   );
}
 
export default Header;