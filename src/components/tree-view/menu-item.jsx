import { useState } from "react";
import { FaMinus, FaPlus } from 'react-icons/fa';
import MenuList from "./menu-list";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    function handleToggle(getCurrentLabel){
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel]
        })
    }

  return (
    <li >
      <div className="menu-item">
        <p> {item.label}</p>
        {item && item.children && item.children.length ? <span onClick={()=>handleToggle(item.label)}>
            {
                displayCurrentChildren[item.label] ? <FaMinus color="#ffffff" size={25}/> : <FaPlus color="#ffffff" size={25}/>
            }
        </span> : null}
      </div>
      {item && item.children && item.children.length > 0  && displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
