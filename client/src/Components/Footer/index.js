// Code styling based on https://www.youtube.com/watch?v=Nl54MJDR2p8&t=11559s

import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {animateScroll as scroll} from 'react-scroll'
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'
import {
  Container,
  Wrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIconLink,
  SocialIcons,
  Clock
} from './FooterElements'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const [clock, setClock] = useState(loadClock);
  
  async function loadClock() {
    const clock = await axios({
      method: 'get',
      url: 'http://worldtimeapi.org/api/ip'
    });
    const getDate = clock.data.datetime;
  
    setClock({
      date: getDate
    });
  }

  useEffect(() => {
    loadClock();
  }, []);

  return (
    <Container>
      <Wrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              unc aasa.
            </SocialLogo>
            <WebsiteRights>unc aasa {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="https://www.facebook.com/uncaasa" target="_blank" aria-label="Facebook"> 
                <FaFacebook /> 
              </SocialIconLink>
              <SocialIconLink href="https://www.instagram.com/uncaasa/?hl=en" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="https://www.youtube.com/channel/UCzWixtRuBXZes8Per6gsX7w" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </Wrap>
      <Clock>{clock.date}</Clock>
    </Container>
  )
}

export default Footer
