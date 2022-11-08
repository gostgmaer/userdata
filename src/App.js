import "./App.css";
import Header from "./Components/ComponentsParts/Headers/Header";
import React from "react";
import Birthday from "Applications/BirthDayReminder/Birthday";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Birthday></Birthday>
    </div>
  );
}

export default App;
