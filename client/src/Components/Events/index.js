// Code styling based on https://www.youtube.com/watch?v=Nl54MJDR2p8&t=11559s

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Container,
  TextWrapper,
  Heading,
  TopLine,
  Wrapper,
  Card,
  Img,
  Title,
  Date,
  Button,
  Weather,
  Link
} from './EventsElements'

const Events = ({topLine, heading, data}) => {
  const [weather, setWeather] = useState(loadWeather);

  async function loadWeather() {
    const weather = await axios({
      method: 'get',
      url: 'https://goweather.herokuapp.com/weather/{city}'
    });
    const getTemp = weather.data.temperature;
    const getDesc = weather.data.description;

    setWeather({
      temp: getTemp,
      desc: getDesc
    });
  }

  useEffect(() => {
    loadWeather();
  }, []);


  return (
    <>
    <Container id="events">
      <TextWrapper>
        <TopLine>{topLine}</TopLine>
        <Heading>{heading}</Heading>
      </TextWrapper>

      <Weather>Today's weather is {weather.temp} {weather.desc}</Weather>

      <Wrapper>
        {data.map((event, index) => {
          return (
            <Card key={index}>
              <Img src={event.img} alt={event.alt} />
              <Title>{event.name}</Title>
              <Date>{event.date}</Date>
              <Button><Link href={event.link} target="_blank">{event.button}</Link></Button>
          </Card>
          )
        })}
      </Wrapper>
    </Container>
    </>
  )
}

export default Events
