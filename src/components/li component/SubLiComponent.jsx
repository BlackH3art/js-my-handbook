import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

import './styles/sub_li_component.css';

function SubLiComponent({ children, subItems, id, index }) {

  const [showUl, setShowUl] = useState(false);

  const showUlCallback = () => {
    setShowUl(!showUl);
  }


  const items = subItems.map((item, i) => {
    
    // console.log(index);
    return (
    <motion.li key={item + i} className="single-link-li" initial={{opacity: 0}} animate={{opacity: 1}}>
      {item}
    </motion.li>
  )});

  return (
    <>
      <AnimatePresence>
        <motion.li layout id={id} className="submenu-element" onClick={showUlCallback}
          variants={{
            hidden: {
              opacity: 0,
              y: -50 * index
            },
            visible: () => ({
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.15
              }
            }),
          }}
          initial='hidden'
          animate='visible'
        >
          <FontAwesomeIcon icon={faChevronRight} className={showUl ? "icon-item-active icon-item" : "icon-item"}/>{children}
        </motion.li>
        {!showUl ? null : <motion.ul className="links-list" exit={{opacity: 0}}>
          {items}
        </motion.ul>}

      </AnimatePresence>
    </>
  )
};

export default SubLiComponent;