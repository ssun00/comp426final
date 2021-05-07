import React from 'react'
import {
  SidebarContainer, 
  Icon, 
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon /> 
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>ABOUT</SidebarLink>
            <SidebarLink to="events" onClick={toggle}>EVENTS</SidebarLink>
            <SidebarLink to="resources" onClick={toggle}>RESOURCES</SidebarLink>
            <SidebarLink to="shop" onClick={toggle}>SHOP</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/signin">SIGN IN</SidebarRoute>
          </SideBtnWrap>
          </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}

export default Sidebar
