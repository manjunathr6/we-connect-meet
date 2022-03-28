import React, { useState } from "react";
import "./App.scss";
import LandingPage from "./pages/landingpage/LandingPage";
import LoginPage from "./pages/loginPage/LoginPage";

function App() {
  const [validUser, setValidUser] = useState(false);
  return (
    <div className="App">
      {validUser ? (
        <LandingPage />
      ) : (
        <LoginPage loginCheck={setValidUser} valid={validUser} />
      )}
      {/* <LoginPage loginCheck={setValidUser} /> */}
    </div>
  );
}

export default App;
