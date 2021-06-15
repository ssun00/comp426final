import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Container,
  TextWrapper,
  Heading,
  TopLine,
  APIHeader,
  CatFact,
  Icon,
  Img,
  IconContainer
} from './WholesomeElements'

const Wholesome = ({topLine, heading}) => {
  const [cat, setCat] = useState(loadCat);

  async function loadCat() {
    const cat = await axios({
      method: 'get',
      url: 'https://catfact.ninja/fact?max_length=140'
    });
    const getCat = cat.data.fact

    setCat({
      fact: getCat
    });
  }

  useEffect(() => {
    loadCat();
  }, []);

  const [compliment, setCompliment] = useState(loadCompliment);

  async function loadCompliment() {
    const compliment = await axios({
      method: 'get',
      url: 'https://complimentr.com/api'
    });
    const getCompliment = compliment.data.compliment

    setCompliment({
      comp: getCompliment
    });
  }

  useEffect(() => {
    loadCompliment();
  }, []);

  const [catPic, setCatPic] = useState(loadCatPic);
  async function loadCatPic() {
    const catPic = await axios({
      method: 'get',
      url: 'https://aws.random.cat/meow?ref=apilist.fun'
    });
    const getCatPic = catPic.data.file
    setCatPic({
      url: getCatPic
    });
  }
  useEffect(() => {
    loadCatPic();
  }, []);

  const [dogPic, setDogPic] = useState(loadDogPic);
  async function loadDogPic() {
    const dogPic = await axios({
      method: 'get',
      url: 'https://dog.ceo/api/breeds/image/random',
    });
    const getDogPic = dogPic.data.message
    setDogPic({
      url: getDogPic
    });
  }
  useEffect(() => {
    loadDogPic();
  }, []);


  return (
    <>
    <Container id="events">
      <IconContainer>
        <Icon to="/">unc aasa.</Icon>
      </IconContainer>
      <TextWrapper>
        <TopLine>{topLine}</TopLine>
        <Heading>{heading}</Heading>
      </TextWrapper>

      <APIHeader>Cat Fact of the Day: </APIHeader>
      <CatFact> {cat.fact} </CatFact>

      <APIHeader>Enjoy the Random Cat and Dog</APIHeader>
      <Img src={catPic.url}></Img>
      <Img src={dogPic.url}></Img>

      <APIHeader>Last But Not Least, Here's a Compliment to Make Your Day Better</APIHeader>
      <CatFact> {compliment.comp} </CatFact>
    </Container>
    </>
  )
}

export default Wholesome;
