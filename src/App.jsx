import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CustomComponent from "./CustomComponent";

function App() {
  let styleObject = {
    backgroundColor: "#f0f0f0",
    color: "#000",
  };

  return (
    <>
      <div className="wrapper" style={styleObject}>
        <h1>Main Component</h1>
        <CustomComponent />
        <CustomComponent />
        <CustomComponent />
      </div>
    </>
  );
}

export default App;
