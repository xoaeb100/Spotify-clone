import React from 'react'
import "./SidebarOption.css";


// parameters starting with capital letters are components 👇
function SidebarOption({title, Icon}) {
    return (
        <div className="sidebarOption">
            {/* if icons exist then render them 👇*/}
            {Icon && <Icon className="sidebarOption__icon"/>}
            {Icon? <h4>{title}</h4>: <p>{title}</p>}
            

            
        </div>
    )
}

export default SidebarOption;
