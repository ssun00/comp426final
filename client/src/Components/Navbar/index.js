// Code styling based on https://www.youtube.com/watch?v=Nl54MJDR2p8&t=11559s

import React, {useState, useEffect} from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {IconContext} from 'react-icons/lib'
import { useAuth } from '../../useAuth.js'
import {FaBars} from 'react-icons/fa';
import {
  Nav, 
  Container, 
  Logo, 
  Item, 
  Links, 
  Menu, 
  Btn, 
  BtnLink,
  MobileIcon,
  HiddenLink
} from './NavbarElements';

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])


  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const auth = useAuth();


  return (
    <>
    <IconContext.Provider value={{color: 'black'}}>
      <Nav scrollNav={scrollNav}>
        <Container>
          <Logo to="/" onClick={toggleHome}>unc aasa.</Logo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <Menu>
            <Item>
              <Links to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">ABOUT</Links>
            </Item>
            <Item>
              <Links to="events" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">EVENTS</Links>
            </Item>
            <Item>
              <Links to="shop" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">SHOP</Links>
            </Item>
            {auth.user ? (
              <Item>
                <HiddenLink to="/wholesome">WHOLESOME</HiddenLink>
                <BtnLink onClick={() => auth.signout()}>Sign Out</BtnLink>
              </Item>
            ) : (<Btn>
              <BtnLink to="/signin">Sign In</BtnLink>
            </Btn>)}
          </Menu>
        </Container>
      </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
