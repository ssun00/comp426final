import React from 'react'
import $ from 'jquery'
import axios from 'axios'
import {animateScroll as scroll} from 'react-scroll'
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap,
  // FooterLinksWrapper,
  // FooterLinksContainer,
  // FooterLinkItem,
  // FooterLinkTitle,
  // FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIconLink,
  SocialIcons,
} from './FooterElements'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  loadClock();

  return (
    <FooterContainer>
      <FooterWrap>
        {/* <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItem>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to="/QuestionForm">Have Questions?</FooterLink>
                <FooterLink to="/">Email Us</FooterLink>
            </FooterLinkItem>
          </FooterLinksWrapper>
        </FooterLinksContainer> */}
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

        
      </FooterWrap>
    </FooterContainer>
  )
}

async function loadClock() {
  const $root = $('#root');
  const clock = await axios({
    method: 'get',
    url: 'http://worldtimeapi.org/api/ip'
  });
  console.log(clock);
  const dateTime = clock.data.datetime;
  $root.append(dateTime);
}

export default Footer
