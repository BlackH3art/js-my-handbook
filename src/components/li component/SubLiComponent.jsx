import './styles/sub_li_component.css';

function SubLiComponent({ children, subItems }) {

  console.log(subItems);

  const items = subItems.map((item, index) => (
    <li key={item + index}>
      {item}
    </li>
  ))

  return (
    <>
      <li className="submenu-element">
        {children}
        <ul className="links-list">
          {items}
        </ul>
      </li>
    </>
  )
};

export default SubLiComponent;