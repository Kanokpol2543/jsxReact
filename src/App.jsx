/* eslint-disable no-unused-vars */
import { useState } from "react";

// import "./assets/css/style.css";
import MenuBar from "./components/MenuBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main-block">
        <div className="menu-bar pos-fix">
          <MenuBar />
        </div>
        <div className="block"></div>
      </div>
    </>
  );
}

export default App;
