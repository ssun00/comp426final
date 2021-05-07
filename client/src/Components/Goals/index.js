import React from 'react'
import {Button} from '../ButtonElements'
import {
  GoalsContainer,
  GoalsH1,
  GoalsH2,
  GoalsWrapper,
  GoalsCard,
  GoalsP,
  BtnWrap
} from './GoalsElements'

const Goals = () => {
  return (

    <GoalsContainer id='goals' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">
      <GoalsH1>our goals</GoalsH1>
      <GoalsWrapper>
        <GoalsCard>
          <GoalsH2>reduce expenses</GoalsH2>
          <GoalsP>help reduce feeds and increase overall revenue</GoalsP>
        </GoalsCard>

        <GoalsCard>
          <GoalsH2>waefaew</GoalsH2>
          <GoalsP>awhaowijefoiawjge</GoalsP>
        </GoalsCard>

        <GoalsCard>
          <GoalsH2>waefaew</GoalsH2>
          <GoalsP>awhaowijefoiawjge</GoalsP>
        </GoalsCard>

        <GoalsCard>
          <GoalsH2>reduce expenses</GoalsH2>
          <GoalsP>help reduce feeds and increase overall revenue</GoalsP>
        </GoalsCard>
      </GoalsWrapper>
      <BtnWrap>
          <Button to='exec' smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={true} dark={true}>Check out our Exec!</Button>
        </BtnWrap>
    </GoalsContainer>
  );
;}

export default Goals;