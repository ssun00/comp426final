import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  min-height: 150vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: white;
`

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`

export const Card = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`

export const Img = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
`

export const Heading = styled.h1`
  font-size: 48px;
  text-align: center;
  margin-bottom: 5rem;
  font-weight: 700;
  color: black;
`

export const Title = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  color: black;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  color: black;
`

export const Desc = styled.p`
  margin-bottom: 1rem;
  color: black;
`

export const Price = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
  color: black;
`

export const Button = styled.button`
  padding: 1rem 4rem;
  border: none;
  background: black;
  color: white;
  transition: 0.2 ease-out;

  &:hover {
    background: pink;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: black;
  }
`

export const Link = styled.a`
  color: white;
  font-size: 15px;

  &:hover {
    color: pink;
    transition: 0.3s ease-out
  }
`