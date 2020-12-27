import { SubLiComponent } from './';
import './styles/li_component.css';

function LiComponent({ itemName, list }) {


  const items = Object.keys(list).map(listItem => {
    
    return <SubLiComponent key={listItem} subItems={list[listItem]} > {listItem} </SubLiComponent>
  })

  return (
    <>
      <li className="menu-element">
        {itemName}

        <ul className="aside-submenu">
          {items}
        </ul>
        
      </li>
    </>
  )
}

export default LiComponent;