import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: ${props => props.theme.colors.dark.first};
  width: 100%;
  height: ${props => props.theme.spacing.xl * 3}px;
  display: flex; 
`

function Header() {

  return ( 
    <>
      <HeaderContainer>
        
      </HeaderContainer>
    </>
   );
}
 
export default Header;