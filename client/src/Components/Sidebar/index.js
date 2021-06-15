// Code styling based on https://www.youtube.com/watch?v=Nl54MJDR2p8&t=11559s

import React from 'react'
import {
  Container, 
  Icon, 
  CloseIcon,
  Wrapper,
  Menu,
  Link,
  SideBtnWrap,
  HiddenLink
} from './SidebarElements';
import { useAuth } from '../../useAuth.js'

const Sidebar = ({isOpen, toggle}) => {
  const auth = useAuth();
  return (
    <>
      <Container isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon /> 
        </Icon>
        <Wrapper>
          <Menu>
            <Link to="about" onClick={toggle}>ABOUT</Link>
            <Link to="events" onClick={toggle}>EVENTS</Link>
            <Link to="shop" onClick={toggle}>SHOP</Link>
            {auth.user ? (
              <div>
                <HiddenLink to="/wholesome">WHOLESOME</HiddenLink>
                <SideBtnWrap onClick={() => auth.signout()}>Sign Out</SideBtnWrap>
              </div>
            ) : (<SideBtnWrap to="/signIn">
              SIGN IN
            </SideBtnWrap>
            )}
          </Menu>
          </Wrapper>
      </Container>
    </>
  )
}

export default Sidebar
