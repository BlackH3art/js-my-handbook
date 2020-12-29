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
  border-bottom: 1px solid black;
  width: 100%;
  text-align: center;
  padding-bottom: 20px;
`

function AsideMenu({ state, title }) {


  const items = Object.keys(state).map(item => (
    <LiComponent key={item} id={item} itemName={item} list={state[item]}> {item} </LiComponent>
  ));


// lista menu

  return (
    <>
      <motion.div className="aside-container" initial={{width: 0}} animate={{width: 300}}>
        
        <Aside>
          <Title>{title}</Title>
          <motion.ul layout className="aside-menu" initial={{width: 0}} animate={{width: 300}}>
            {items}
          </motion.ul>
        </Aside>

      </motion.div>
    </>
  )
};

export default AsideMenu;