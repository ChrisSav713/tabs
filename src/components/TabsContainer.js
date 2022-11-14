import React from 'react'
import Tab from './Tab'

export default function TabsContainer(props) {
    const {tabs} = props

    const allTabs = tabs.map(tab => {
        return(
            <Tab key={tab.id} tab={tab}/>
        )
    })

    return (
        <ul className="nav nav-pills">
            {allTabs}
        </ul>
        )
    }