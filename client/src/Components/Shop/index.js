// Code styling based on https://www.youtube.com/watch?v=GlROncAX4XI&t=3488s

import React from 'react'
import {
  Container,
  Wrapper,
  Heading,
  Title,
  Img,
  Card,
  Info,
  Desc,
  Price,
  Button,
  Link
} from './ShopElements'

const Shop = ({heading, data}) => {
  return (
    <Container id="shop">
      <Heading>{heading}</Heading>
      <Wrapper>
        {data.map((product, index) => {
          return (
            <Card key={index}>
              <Img src={product.img} alt={product.alt} />
              <Info>
                <Title>{product.name}</Title>
                <Desc>{product.desc}</Desc>
                <Price>{product.price}</Price>
                <Button>
                  <Link href="https://forms.gle/TawYJ9Hvkci9VrJa8" target="_blank">
                    {product.button}
                  </Link>
                </Button>
              </Info>
            </Card>
          )
        })}
      </Wrapper>
    </Container>
  )
}

export default Shop
