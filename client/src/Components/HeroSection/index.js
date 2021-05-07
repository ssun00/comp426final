import React, {useState} from 'react'
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  HeroBtn,
  HeroBtnLink
} from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  }

  return (
    <HeroContainer>
      <HeroBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Hello</HeroH1>
        <HeroP>
          Wassup bruhs.
        </HeroP>
        <HeroBtnWrapper>
          <HeroBtn>
            <HeroBtnLink to="/signup" onMouseEnter={onHover} onMouseLeave={onHover}>Get Started</HeroBtnLink>
          </HeroBtn>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
