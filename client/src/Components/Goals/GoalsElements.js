import styled from 'styled-components'

export const GoalsContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`
export const GoalsWrapper = styled.div`
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

export const GoalsCard = styled.div`
  background: #F6F2ED;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;
  margin-bottom: 64px;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

export const GoalsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`

export const GoalsH1 = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: white;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const GoalsH2 = styled.h2`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #f06292;
`

export const GoalsP = styled.p`
  font-size: 15px;
  text-align: center;
  color: black;
`

export const BtnWrap = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
`;
