import React, {useState, useEffect} from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {IconContext} from 'react-icons/lib'
import {FaBars} from 'react-icons/fa';
import {
  Nav, 
  NavbarContainer, 
  NavLogo, 
  NavItem, 
  NavLinks, 
  NavMenu, 
  NavBtn, 
  NavBtnLink,
  MobileIcon
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

  return (
    <>
    <IconContext.Provider value={{color: 'black'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>unc aasa.</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">ABOUT</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="events" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">EVENTS</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="resources" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">RESOURCES</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="shop" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">SHOP</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
