import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
  min-height: 1100px;
  position: flex;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  overflow: hidden;
  background: #F0E4D7;
`;

export const Icon = styled(Link)`
  color: black;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  margin-bottom: 50px;
`;

export const TextWrapper = styled.div`
  max-width: 1500px;
  position: relative;
  justify-content: center;
`;

export const TopLine = styled.p`
  color: black;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  margin-left: 45px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 45px;
  line-height: 1.1;
  font-weight: 600;
  color: #f06292;
  margin-left: 45px;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Img = styled.img`
  height: 400px;
  min-width: 400px;
  max-width: 100%;
  margin-left: 45px;
`

export const APIHeader = styled.h2`
  margin-bottom: 1rem;
  margin-top: 1rem;
  color: black;
  margin-left: 45px;
`

export const CatFact = styled.p`
  color: black;
  margin-left: 45px;
`