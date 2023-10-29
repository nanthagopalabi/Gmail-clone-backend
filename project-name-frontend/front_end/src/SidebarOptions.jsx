import React from 'react';
import "./index.css";

function SidebarOptions({Icon,title,number,isactive}) {
  return (
    <div className={`sidebarOptions ${isactive && 'sidebarOptions--active'}`}>
       <Icon/>
       <h4>{title}</h4>
       <p>{number}</p>

    </div>
  )
}

export default SidebarOptions