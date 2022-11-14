import React from 'react'
import {TabsContext} from '../App'

export default function Tab(props) {
    const {handleTabSelect, selectedTab} = React.useContext(TabsContext)

    const { tab } = props
    
    return ( 
        <li className="nav-item">
            
            <a id={tab.id} class={`nav-link ${selectedTab.id === tab.id && "active"}`} href="#" onClick={() => handleTabSelect(tab.id)}>{tab.title}</a>
        </li> 
    )
}