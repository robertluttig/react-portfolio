import React from "react";

const Portfolio = () =>{
    return <div>
  <div className="container">
    <header>
      <h1 className="text-center projects">Projects</h1>
    </header>
    <div className="row">
      <div className="col-md-6">
        <p> <a href="https://robertluttig.github.io/WorkDayScheduler/" target="_blank"> Work Day Planner</a></p>
        <p> <a href="https://github.com/robertluttig/WorkDayScheduler.git" target="_blank">GitHub Repo Work Day Planner</a></p>
      </div>
      <div className="col-md-6">
        <p> <a href="https://robertluttig.github.io/WeatherDashboard/" target="_blank"> Weather Dashboard</a></p>
        <p> <a href="https://github.com/robertluttig/WeatherDashboard.git" target="_blank">GitHub Repo Weather Dashboard</a></p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <p> <a href="https://robertluttig.github.io/VideoWorld/" target="_blank"> Group Project: VideoWorld</a></p>
        <p> <a href="https://github.com/robertluttig/VideoWorld.git" target="_blank"> GitHub Repo VideoWorld</a></p>
      </div>
      <div className="col-md-6">
        <p> <a href="https://still-sierra-23537.herokuapp.com/" target="_blank"> Group Project: CookBook</a></p>
        <p> <a href="https://github.com/mandisareed/cookbook.git" target="_blank"> GitHub Repo CookBook</a></p>
      </div>
    </div>
  </div>
</div>
;
};

export default Portfolio;