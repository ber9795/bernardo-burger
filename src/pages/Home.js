
import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/hamburguerSpecial.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage })`}}>
      <div className="headerContainer">
        <h1> Bernardo's Burguer </h1>
               <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;