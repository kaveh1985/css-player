import React from 'react'
import './App.css';
import './styles/RecentlyPlayed.css';
import MobileInfo from './components/MobileInfo';
import Slider from "./components/Slider"
import Home from "./components/NavBottom";
import one from './img/1.jpg';
import two from './img/2.jpg';
import three from './img/3.jpg';
import for1 from './img/4.jpg';
import five from './img/5.webp';
import six from './img/6.jpg';
import seven from './img/7.jpg';
import eight from './img/8.jpg';
import nine from './img/9.jpg';
import ten from './img/10.jpg';
import eleven from './img/11.jpg';
import tweleve from './img/12.jpg';
import thirteen from './img/13.jpg';
import forteen from './img/14.jpg';
import fifteen from './img/15.jpg';
import sixteen from './img/16.jpg';
import seventeen from './img/17.jpg';

const text = [
 "The Chainsmokers...",
 "Mr. Morale & The Big Steppers",
 "Liked Songs"
]


class App extends React.Component  {

  render() {
    return (
      <div className="App">
          <MobileInfo />
          <Slider topic={"Recently played"} text={text} one={one} two={two} three={three} for1={for1} five={five}/>
          <Slider topic={"Afrobeats is life"} text={text} one={six} two={seven} three={eight} for1={nine} five={ten}/>
          <Slider topic={"Workout"} text={text} one={eleven}  two={tweleve} three={thirteen} for1={forteen} five={fifteen}/>
          <Slider topic={"Intrest"} text={text} one={sixteen}  two={seventeen} three={ten} for1={one} five={eight}/>
          <Slider topic={"Favorite"} text={text} one={eleven}  two={tweleve} three={thirteen} for1={forteen} five={fifteen}/>
          <Slider topic={"Jazz"} text={text} one={one} two={two} three={three} for1={for1} five={five}/>
          <Home />
      </div>
    );
  }
}



export default App;
