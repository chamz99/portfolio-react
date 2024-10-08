import React from "react";
import "./portfolio.css";
import mywork_data from "../../assets/mywork_data";
const Portfolio = () => {
  return (
    <div id="Portfolio" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
