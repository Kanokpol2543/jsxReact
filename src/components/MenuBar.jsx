/*eslint-disable no-unused-vars */
import { useState } from "react";
import "../assets/css/style.css";
import "../assets/css/menubar.css";

import logoImage from "../assets/img/UISOURCES.png";
import menu from "../assets/img/menus.png";

function MenuBar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="set-block pl-3 pr-3 mt-1 mb-1">
        <div className="menubar-block w-100-pc">
          <div className="menu-block d-flex al-jt-ceter">
            <div className="logo d-flex al-jt-ceter mr-3">
              <a className="d-flex al-jt-ceter cursor" href="/">
                <img className="logo-img" src={logoImage} alt="" />
              </a>
            </div>
            <div className="menu d-flex al-jt-ceter">
              <p className="mr-1 cursor t-hover">Home</p>
              <p className="mr-1 cursor t-hover">Apps</p>
              <p className="mr-1 cursor t-hover">Screenshots</p>
              <p className="mr-1 cursor t-hover">Inte</p>
            </div>
          </div>

          <div className="login-block w-nav-r d-flex al-jt-ceter">
            <div className="menu d-flex al-jt-ceter">
              <p className="ml-2 cursor t-hover">Pricing</p>
              <p className="ml-2 cursor t-hover">Login</p>
            </div>
            <div className="join-block d-flex al-jt-ceter cursor ml-2 button-hover">
              <div className="join-btn d-flex al-jt-ceter">Join now</div>
            </div>
          </div>
        </div>

        <div className="menubar-block-mobile w-100-pc">
          <div className="menu-block d-flex al-jt-ceter">
            <div className="logo d-flex al-jt-ceter cursor">
              <img className="logo-img" src={logoImage} alt="" />
            </div>
          </div>

          <div
            className="menu-lines d-flex al-jt-ceter cursor"
            onClick={() => setIsActive(!isActive)}
          >
            <img className="menus" src={menu} alt="" />
          </div>
        </div>
      </div>
      {/* <div className="list-menu"> */}
      <div className={`menu-show ${isActive ? "active fade-in" : "fade-out"}`}>
        <div className="list-menu">
          <div className="pl-3 pr-3 pt-2 pb-2 cursor menu-hover">
            <p href="">App</p>
          </div>
          <div className="pl-3 pr-3 pt-2 pb-2 cursor menu-hover">
            <p href="">Interaction</p>
          </div>
          <div className="pl-3 pr-3 pt-2 pb-2 cursor menu-hover">
            <p href="">Screenshots</p>
          </div>
          <div className="pl-3 pr-3 pt-2 pb-2 cursor menu-hover">
            <p href="">Pricing</p>
          </div>
          <div className="pl-3 pr-3 pt-2 pb-2 cursor menu-hover">
            <p href="">Login</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuBar;
