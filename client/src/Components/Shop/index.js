import React from 'react'
import {
  ShopContainer,
  ShopWrapper,
  ShopHeading,
  ShopTitle,
  ShopImg,
  ShopCard,
  ShopInfo,
  ShopDesc,
  ShopPrice,
  ShopButton
} from './ShopElements'

const Shop = ({heading, data}) => {
  return (
    <ShopContainer id="shop">
      <ShopHeading>{heading}</ShopHeading>
      <ShopWrapper>
        {data.map((product, index) => {
          return (
            <ShopCard key={index}>
              <ShopImg src={product.img} alt={product.alt} />
              <ShopInfo>
                <ShopTitle>{product.name}</ShopTitle>
                <ShopDesc>{product.desc}</ShopDesc>
                <ShopPrice>{product.price}</ShopPrice>
                <ShopButton>{product.button}</ShopButton>
              </ShopInfo>
            </ShopCard>
          )
        })}
      </ShopWrapper>
    </ShopContainer>
  )
}

export default Shop
