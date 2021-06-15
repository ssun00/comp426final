import React, {useState} from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Intro from '../Components/Intro';
import InfoSection from '../Components/InfoSection';
import { aboutUs } from '../Components/InfoSection/data';
import Goals from '../Components/Goals';
import Footer from '../Components/Footer';
import Exec from '../Components/Exec';
import Shop from '../Components/Shop';
import { shopData } from '../Components/Shop/data';
import Events from '../Components/Events';
import { eventData } from '../Components/Events/data';
import {execData} from '../Components/Exec/data';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    <Intro />
    <InfoSection {...aboutUs} />
    <Goals />
    <Exec data={execData} />
    <Events topLine="SPRING 2021" heading="Events" data={eventData}/>
    <Shop heading="Our Merch" data={shopData} />
    <Footer />
    </>
  );
};

export default Home;
