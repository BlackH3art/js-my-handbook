import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';



import { SubLiComponent } from './';
import './styles/li_component.css';

function LiComponent({ itemName, list, id }) {

  const [showUl, setShowUl] = useState(false);

  const showUlCallback = () => {
    setShowUl(!showUl);
  }

  const items = Object.keys(list).map((listItem, i) => {
    return <SubLiComponent key={listItem} index={i} id={listItem} subItems={list[listItem]} > {listItem} </SubLiComponent>
  })


// lista obiektów


  return (
    <>
      <motion.li layout id={id} className="menu-element" onClick={showUlCallback}>
        <FontAwesomeIcon icon={faChevronRight} className={showUl ? "icon-item-active icon-item" : "icon-item"}/>{itemName}
      </motion.li>

      {!showUl ? null : <motion.ul layout className="aside-submenu">
        {items}
      </motion.ul>}
    </>
  )
}

export default LiComponent;