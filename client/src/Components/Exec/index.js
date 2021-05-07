import React from 'react'
import {
  ExecContainer,
  TextWrapper,
  TopLine,
  Heading,
  ExecWrapper,
  ExecCard,
  ExecImg,
  ExecH2,
  ExecP
} from './ExecElements'

const Exec = ({data}) => {
  return (
    <>
    <ExecContainer id="exec">
      <TextWrapper>
        <TopLine>2021-2022</TopLine>
        <Heading>Exec Board</Heading>
      </TextWrapper>
      <ExecWrapper>
        {data.map((pic, index) => {
          return (
            <ExecCard key={index}>
              <ExecImg src={pic.img} />
              <ExecH2>{pic.h2}</ExecH2>
              <ExecP>{pic.p}</ExecP>
            </ExecCard>

          )
        })}
      
      </ExecWrapper>
    </ExecContainer>
    </>
  );
};

export default Exec;