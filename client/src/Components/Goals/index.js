// Code styling based on https://www.youtube.com/watch?v=Nl54MJDR2p8&t=11559s

import React from 'react'
import {Button} from '../ButtonElements'
import {
  Container,
  Heading1,
  Heading2,
  Wrapper,
  Card,
  Subtitle,
  BtnWrap
} from './GoalsElements'

const Goals = () => {
  return (

    <Container id='goals' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">
      <Heading1>Our Goals</Heading1>
      <Wrapper>
        <Card>
          <Heading2>Collaborations</Heading2>
          <Subtitle>More organization collaborations (at UNC, outside of UNC, etc.)</Subtitle>
        </Card>

        <Card>
          <Heading2>Relationships</Heading2>
          <Subtitle>Closer relationships between Exec and Leadership</Subtitle>
        </Card>

        <Card>
          <Heading2>Inclusion</Heading2>
          <Subtitle>Focus on whole Asia and make AASA more inclusive for S & SE Asians</Subtitle>
        </Card>

        <Card>
          <Heading2>Engagement</Heading2>
          <Subtitle>More engagement with General Body members</Subtitle>
        </Card>
      </Wrapper>
      <BtnWrap>
          <Button to='exec' smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={true} dark={true}>Check out our Exec!</Button>
        </BtnWrap>
    </Container>
  );
;}

export default Goals;