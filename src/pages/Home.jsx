import React from "react";
import "../components/style.css";
// import background from "../assets/img/background.jpg";
// import logo from "../assets/img/logo.jpeg";

function Home() {
 

  return (
    <div>
      <div className="cards">
        <div className="welcome">
          <h1>WELCOME TO MEDICARE </h1>
        </div>
        <div className="card">
          <div className="best">
            <h1>Your Premier Healthcare App</h1>
            <h3>You'ill Love the Way We Care for You</h3>
          </div>
          <h3 className="emergency">
            Do you need Emergency Healthcare? then ...
          </h3>
          <a href="/register">
            <button className="appointment">Take Appointment</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
