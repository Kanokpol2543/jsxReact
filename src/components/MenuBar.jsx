/*eslint-disable no-unused-vars */
import { useState } from "react";
import "../assets/css/style.css";
import "../assets/css/menubar.css";

import logoImage from "../assets/img/JW.png";
import menu from "../assets/img/menus.png";
import basket from "../assets/img/shopping-bag.png"

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
              <p className="mr-1 cursor text-hover">Home</p>
              <p className="mr-1 cursor text-hover">Shop</p>
              <p className="mr-1 cursor text-hover">Promotion</p>
            </div>
          </div>

          <div className="login-block w-nav-r d-flex al-jt-ceter">
            <div className="menu d-flex al-jt-ceter">
              <div className="d-flex al-jt-ceter cursor ">
                <img className="basket" src={basket} alt="" />
                <p className="text-hover">Basket</p>
              </div>
              <p className="ml-2  text-hover">Login</p>
            </div>
            <div className="join-block d-flex al-jt-ceter cursor ml-2 button-hover">
              <div className="join-btn d-flex al-jt-ceter">Join Member</div>
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
      <div className={`menu-show ${isActive ? "active fade-in" : ""}`}>
        <div className="list-menu">
          <div className="pl-3 pr-3 pt-1 pb-1 cursor menu-hover">
            <p href="">Shop</p>
          </div>
          <div className="pl-3 pr-3 pt-1 pb-1 cursor menu-hover">
            <p href="">Basket</p>
          </div>
          <div className="pl-3 pr-3 pt-1 pb-1 cursor menu-hover">
            <p href="">Promotion</p>
          </div>
          <div className="pl-3 pr-3 pt-1 pb-1 cursor menu-hover">
            <p href="">Login</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuBar;
