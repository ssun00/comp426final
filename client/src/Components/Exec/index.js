// Code styling based on https://www.youtube.com/watch?v=Nl54MJDR2p8&t=11559s

import React from 'react'
import {
  Container,
  TextWrapper,
  TopLine,
  Heading,
  Wrapper,
  Card,
  Img,
  Heading2,
  Subtitle
} from './ExecElements'

const Exec = ({data}) => {
  return (
    <>
    <Container id="exec">
      <TextWrapper>
        <TopLine>2021-2022</TopLine>
        <Heading>Exec Board</Heading>
      </TextWrapper>
      <Wrapper>
        {data.map((pic, index) => {
          return (
            <Card key={index}>
              <Img src={pic.img} />
              <Heading2>{pic.heading2}</Heading2>
              <Subtitle>{pic.subtitle}</Subtitle>
            </Card>

          )
        })}
      
      </Wrapper>
    </Container>
    </>
  );
};

export default Exec;