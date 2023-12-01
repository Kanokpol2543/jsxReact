/* eslint-disable react/no-unknown-property */
/*eslint-disable no-unused-vars */
import { useState } from "react";
import "../assets/css/style.css";
import "../assets/css/welcome.css";

function Welcome() {
  return (
    <>
      <div className="detail-block">
        <div className="header d-flex al-jt-ceter mr-1 ml-1">
          <h1>WELCOME TO JW SNEAKERS SHOP</h1>
        </div>
        <div className="descript d-flex al-jt-ceter mt-2 mr-1 ml-1">
          <p>
            Welcome to JW. We have a variety of sneakers for you to choose from.
            Ready to provide you with excellent service.
          </p>
        </div>
        <div className="btn-bock d-flex al-jt-ceter mt-2 mr-1 ml-1">
          <div align="center" className="res d-flex al-jt-ceter">
            <div className="join-btn2 d-flex al-jt-ceter mr-1 ml-1 mb-1 cursor button-hover">
              <p className="mr-1 ml-1">Join Member</p>
            </div>
            <div className="login-btn d-flex al-jt-ceter mr-1 ml-1 mb-1 cursor button-hover">
              <p className="mr-1 ml-1">Log in</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
