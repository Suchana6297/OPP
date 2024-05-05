import React from 'react';
import web from "../Image/Home.png";
import "../../src/Style/HomePage/HomePage.css";


export const Home = () => {
  return (
    

    <section id="header" className="d-flex align-items-center">
    <div className="container-fluid nav_bg">
    <div className="row">
      <div className="col-10 mx-auto">
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-1 d-flex flex-column justify-content-center">
            <h1>Online Programming Platform <strong className="brand-name"> <br /> Created by Biswas & Kamilya</strong></h1>
            <h2 className="my-3">
              Sharpen your skills with hands-on coding challenges in various languages.
            </h2>
            <div className="mt-3">
              <a href="/register" className="btn-get-started">Get Started</a>
            </div>
          </div>
          <div className="col-lg-6 order-2 order-lg-2 header-img">
          <div className="card shadow-lg">
              <img src={web} className="card-img-top img-fluid animated" alt="home img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


  );
};


export default Home;



