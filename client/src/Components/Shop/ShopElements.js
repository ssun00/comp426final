import styled from 'styled-components'

export const ShopContainer = styled.div`
  width: 100vw;
  min-height: 150vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: white;
`

export const ShopWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`

export const ShopCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`

export const ShopImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  // box-shadow: 8px 8px pink;
`

export const ShopHeading = styled.h1`
  font-size: 48px;
  text-align: center;
  margin-bottom: 5rem;
  font-weight: 700;
  color: black;
`

export const ShopTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  color: black;
`

export const ShopInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  color: black;
`

export const ShopDesc = styled.p`
  margin-bottom: 1rem;
  color: black;
`

export const ShopPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
  color: black;
`

export const ShopButton = styled.button`
  font-size: 1rem;
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