import React, { useState } from 'react'
import Section from '../Section'

const menuItems = [
  {
    title :'Navigation Menu',
    active: true,
    items : []
  },
  {
    title :'Questionare',
    active: false,
    items : []
  },
  {
    title :'Settings',
    active: true,
    items : [
      {
        title: 'Captions',
        active: true
      },
      {
        title: 'Quality',
        active: false
      }
    ]
  },
  {
    title :'Help',
    active: true,
    items : [
      {title:'Tutorial', active: true},
      {title:'Terms & Conditions', active: true},
      {title:'Privacy Policy', active: false},
      {title:'Cookie Policy', active: true},
      {title:'Disclaimer', active: true},
      {title:'FAQ', active: false},
      {title:'Other', active: true}
      ]
  },
  {
    title :'Immensive Conferancing',
    active: true,
    items : []
  }
]


const ActiveFeatures = () => {
  const [activeMenus, setActiveMenus] = useState(menuItems)

  const handleStatusClick = (itemName) => {
    const arr = [...activeMenus]
    arr.forEach((element, index) => {
      if(element.title === itemName) {
          arr[index] = updateNestedMenuItem(element);
      }
    })
    setActiveMenus(arr)
  }

  const handleInnerStatusClick = (itemName, innerItemName) => {
    console.log('-----itemName', itemName, innerItemName)
    const arr = [...activeMenus]

    arr.forEach((element, index) => {
      if(element.title === itemName) {
          arr[index] = updateSingleNestedMenuItem(element, innerItemName);
      }
    })
    setActiveMenus(arr)
  }

  const updateNestedMenuItem = (menuItem) => {
    const newStatus = !menuItem.active
    let formattedMenuItems = menuItem.items.map(innerMenuItem => { 
      return {...innerMenuItem, active: newStatus}
    })
    return {...menuItem, items: formattedMenuItems, active:newStatus }
  }

  const updateSingleNestedMenuItem = (menuItem, innerItemName) => {
    let formattedMenuItems = menuItem.items.map(innerMenuItem => { 
      return {...innerMenuItem, active: innerMenuItem.title === innerItemName ? !innerMenuItem.active : innerMenuItem.active}
    })
    return {...menuItem, items: formattedMenuItems}
  }

  return (
    <Section title='ACTIVE FEATURES'>
      {activeMenus.map(item => 
        <div style={{color:item.active ? 'black' : 'gray'}}>
          <div style={{display:'flex', height:25, paddingBottom:5}}>
              <input
              type='button'
              value={item.active ? '+':'-'}
              onClick={()=>handleStatusClick(item.title)}
              style={{width: 25, height:20}}
            />
            <div style={{paddingLeft: 10}}>{item.title} </div>
          </div>
          {item.items.length>0 &&
            <div>
              {item.items.map(innerMenuItem => 
                <div style={{display:'flex', paddingLeft: 30, height:25, paddingBottom:5}}>
                  <input
                    type='button'
                    value={innerMenuItem.active ? '+':'-'}
                    onClick={()=>handleInnerStatusClick(item.title, innerMenuItem.title)}
                    style={{width: 25, height:20}}
                  />
                  <div 
                    style={{paddingLeft: 10, color:innerMenuItem.active ? 'black' : 'gray'}}>
                    {innerMenuItem.title}
                  </div>
                </div>
              )}
            </div>
          }
        </div>
      )}
    </Section>
  )
}

export default ActiveFeatures