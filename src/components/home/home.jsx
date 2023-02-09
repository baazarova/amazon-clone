import React from "react";
import "./home.css";
import heroPicture from "../../assets/amazon-hero.jpeg";
import { Cards } from "../cards/cards";

export const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={heroPicture} alt="hero picture" />
        <div className="home__row">
          <Cards
            id="1234342344"
            title="The Lean Startup"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
          <Cards
            id="44545432434"
            title="BrilliantHouse Fitness Tracker with Heart Rate Blood Pressure Blood Oxygen Sleep & Temperature Monitor Activity Tracker Smart Watch Pedometer for Kids Man Women"
            price={100}
            image="https://m.media-amazon.com/images/I/41WpqIvJWRL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Cards
          id='9867453058'
            title="Crazy Dog T-Shirts I Like Gaming And Maybe 3 People Hoodie Funny Nerdy Video Game Sweatshirt"
            image="https://m.media-amazon.com/images/I/811wZEP2oxL._AC_UX522_.jpg"
            price={30.99}
          />
          <Cards
          id='459725024856'
            title="Champion Ameritage Dad Adjustable Cap"
            image="https://m.media-amazon.com/images/I/61kO3ycK0qS._AC_UX522_.jpg"
            price={21.57}
          />
          <Cards
          id='448273658402'
            image="https://m.media-amazon.com/images/I/81RrmgSdOLL._AC_SX522._SX._UX._SY._UY_.jpg"
            title="Balega Hidden Comfort Performance No Show Athletic Running Socks for Men and Women (1 Pair)"
            price={26.99}
          />
        </div>
        <div className="home__row">
          <Cards
          id='341111000344'
            image="https://m.media-amazon.com/images/I/51QxA-98Q+L._AC_SX466_.jpg"
            title="Beats Solo3 Wireless On-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 40 Hours of Listening Time, Built-in Microphone - Black (Latest Model)"
            price={120.88}
          />
        </div>
      </div>
    </div>
  );
};
