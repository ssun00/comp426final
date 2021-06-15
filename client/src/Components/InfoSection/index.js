// Code styling based on https://www.youtube.com/watch?v=Nl54MJDR2p8&t=11559s

import React from 'react';
import {Button} from '../ButtonElements'
import aasa from '../../Images/aasa.jpg';
import {
  Container,
  Wrapper,
  Row,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img
} from './InfoSectionElements';

const InfoSection = ({id, imgStart, topLine, headline, description, buttonLabel}) => {
  return (
      <Container id={id}>
        <Wrapper>
          <Row imgStart={imgStart}>
            <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading>{headline}</Heading>
              <Subtitle >{description}</Subtitle>
              <BtnWrap>
                <Button to='goals' smooth={true} duration={500} spy={true} exact="true" offset={-80}>{buttonLabel}</Button>
              </BtnWrap>
            </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={aasa} />
              </ImgWrap>
            </Column2>
          </Row>
        </Wrapper>
      </Container>
  );
};

export default InfoSection;
