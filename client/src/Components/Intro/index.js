// Code styling based on https://www.youtube.com/watch?v=Nl54MJDR2p8&t=11559s

import React, {useState} from 'react'
import {
  Container,
  Bg,
  Content,
  Header,
  Subtitle,
  BtnWrapper,
  Btn,
  BtnLink
} from './IntroElements';

const Intro = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  }

  return (
    <Container>
      <Bg>
      </Bg>
      <Content>
        <Header>Hello</Header>
        <Subtitle>
          Welcome to UNC AASA's website!
        </Subtitle>
        <BtnWrapper>
          <Btn>
            <BtnLink to="/signup" onMouseEnter={onHover} onMouseLeave={onHover}>Get Started</BtnLink>
          </Btn>
        </BtnWrapper>
      </Content>
    </Container>
  )
}

export default Intro
