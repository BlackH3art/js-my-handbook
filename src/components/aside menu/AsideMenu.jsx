import styled from 'styled-components';
import { motion } from 'framer-motion';

import { LiComponent } from '../li component';

import './styles/aside_menu.css';

const Aside = styled.aside`
  width: 100%;
  background-color: ${props => props.theme.colors.grey.first};
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-top: 20px;
`

function AsideMenu({ state, title }) {


  const items = Object.keys(state).map(item => (
    <LiComponent key={item} id={item} itemName={item} list={state[item]}> {item} </LiComponent>
  ));

  return (
    <>
      <motion.div className="aside-container">
        
        <Aside>
          <Title>{title}</Title>
          <hr/>
          <motion.ul layout className="aside-menu">
            {items}
          </motion.ul>
        </Aside>

      </motion.div>
    </>
  )
};

export default AsideMenu;