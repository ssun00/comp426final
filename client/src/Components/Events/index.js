import React from 'react'
import $ from 'jquery'
import axios from 'axios'
import {
  EventsContainer,
  TextWrapper,
  Heading,
  TopLine,
  EventWrapper,
  EventCard,
  EventImg,
  EventTitle,
  EventDate,
  EventButton,
  Weather
} from './EventsElements'

const Events = ({topLine, heading, data}) => {
  loadWeather();
  return (
    <>
    <EventsContainer id="events">
      <TextWrapper>
        <TopLine>{topLine}</TopLine>
        <Heading>{heading}</Heading>
      </TextWrapper>

      <Weather id="weather"></Weather>

      <EventWrapper>
        {data.map((event, index) => {
          return (
            <EventCard key={index}>
              <EventImg src={event.img} alt={event.alt} />
              <EventTitle>{event.name}</EventTitle>
              <EventDate>{event.date}</EventDate>
              <EventButton>{event.button}</EventButton>
          </EventCard>
          )
        })}
      </EventWrapper>
    </EventsContainer>
    </>
  )
}

async function loadWeather() {
  const $weather = $('#weather');
  const weather = await axios({
    method: 'get',
    url: 'https://goweather.herokuapp.com/weather/{city}'
  });
  const getTemp = weather.data.temperature;
  const getDesc = weather.data.description;
  $weather.append(getTemp);
  $weather.append(getDesc);
}

// async function loadSpotify() {
//   const $root = $('#root');
//   const spotify = await axios({
//     method: 'post',
//     url: 'https://api.spotify.com/v1/users/{user_id}/playlists'
//   });
//   const spotify = clock.data.datetime;
//   $root.append(dateTime);
// }

export default Events
