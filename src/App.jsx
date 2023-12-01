/* eslint-disable no-unused-vars */
import { useState } from "react";

// import "./assets/css/style.css";
import MenuBar from "./components/MenuBar";
import Welcome from "./components/Welcome";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main-block">
        <div className="menu-bar pos-fix">
          <MenuBar/>
        </div>
        <div className="intro">
          <Welcome/>
        </div>
      </div>
    </>
  );
}

export default App;
