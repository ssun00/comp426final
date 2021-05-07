import styled from 'styled-components'

export const EventsContainer = styled.div`
  width: 100vw;
  min-height: 150vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

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
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: white;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const EventWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  margin: auto;
`;

export const EventCard = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  align-items: center;
  padding: 20px;
  line-height: 2;
  width: 1000px;
`

export const EventImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
`

export const EventTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: white;
`

export const EventDate = styled.h2`
  font-weight: 400;
  font-size: 15;
  color: white;
`

export const EventTime = styled.h2`
  font-weight: 400;
  font-size: 15;
  color: white;
`
export const EventDesc = styled.p`
  margin-bottom: 1rem;
  color: white;
`

export const EventButton = styled.button`
  font-size: 1rem;
  padding: 1rem 1rem;
  border: none;
  background: pink;
  color: black;
  transition: 0.2 ease-out;

  &:hover {
    background: #f06292;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: black;
  }
`

export const Weather = styled.h2`
  margin-bottom: 1rem;
  color: white;
`