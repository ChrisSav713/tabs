import React from 'react'
import './App.css';
import TabsContainer from './components/TabsContainer'
import { v4 as uuidv4 } from 'uuid'

export const TabsContext = React.createContext()

function App() {
    const [tabs, setTabs] = React.useState([
      {id:uuidv4(), title:"Tab A", content:"This is tab A"}, 
      {id:uuidv4(), title:"Tab B", content:"This is tab B"},
      {id:uuidv4(), title:"Tab C", content:"This is tab C"}
    ])

    const [selectedTabId, setSelectedTabId] = React.useState(tabs[0].id)
    const selectedTab = tabs.find(item => item.id === selectedTabId)

    function handleTabSelect(id) {
        setSelectedTabId(id)
    }

    function handleTabTextChange(id, newValue) {
      const newTabs = [...tabs]
      const index = tabs.findIndex(item => item.id === id)
      newTabs[index] = {...newTabs[index], content: newValue}
      setTabs(newTabs)
    }

    const tabsContextValue = {handleTabSelect, selectedTab}

    return ( 
      <TabsContext.Provider value={tabsContextValue}>
        <div className = "Container">
          <TabsContainer tabs={tabs}/>
          <textarea id="tabContent" value={selectedTab.content} rows="10" onInput={e => handleTabTextChange(selectedTab.id, e.target.value)}></textarea>
        </div>
      </TabsContext.Provider>
    );
}

export default App;