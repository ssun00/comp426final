import styled from 'styled-components'

export const Container = styled.div`
  height: 1400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f0e4d7;

  @media screen and (max-width: 768px) {
    height: 4000px;
  }

  @media screen and (max-width: 480px) {
    height: 5400px;
  }
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 0;
`;

export const TopLine = styled.p`
  color: #f06292;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  align-text: center;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: black;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const Card = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

export const Img = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`

export const Heading2 = styled.h1`
  font-size: 1rem;
  color: black;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const Subtitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #f06292;
`