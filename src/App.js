import React, { useState } from "react";
import "./App.scss";
import SearchPeople from "./components/search/SearchPeople";
import LandingPage from "./pages/landingpage/LandingPage";
import LoginPage from "./pages/loginPage/LoginPage";
import UserList from "./pages/userlist/UserList";

function App() {
  const [validUser, setValidUser] = useState(false);
  return (
    <div className="App">
      <SearchPeople />

      {/* {validUser ? (
        <LandingPage />
      ) : (
        <LoginPage loginCheck={setValidUser} valid={validUser} />
      )} */}
    </div>
  );
}

export default App;
