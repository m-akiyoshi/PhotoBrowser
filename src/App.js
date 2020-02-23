import React from "react";
import "./App.css";
import MainContent from "./MainContent";
import Header from "./Header";
require("dotenv").config();

function App() {
  return (
    <div>
      <Header />
      <div className="mt-5">
        <MainContent />
      </div>
    </div>
  );
}

export default App;
