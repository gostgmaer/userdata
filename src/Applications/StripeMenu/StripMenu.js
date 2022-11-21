import React from 'react'
import HeroComponent from './HeroComponent'
import NavbarComponents from './NavbarComponents'
import Sidebar from './Sidebar'
import SubmenuComponents from './SubmenuComponents'
import './styles.scss'
const StripMenu = () => {
  return (
    <div className='stripMenuPage'>
        <NavbarComponents></NavbarComponents>
        <Sidebar></Sidebar>
        <HeroComponent></HeroComponent>
        <SubmenuComponents></SubmenuComponents>

        
    </div>
  )
}

export default StripMenu