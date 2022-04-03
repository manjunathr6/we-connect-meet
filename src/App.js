import React from "react";
import "./App.scss";
import SearchPeople from "./components/search/SearchPeople";

function App() {
  // const [validUser, setValidUser] = useState(false);
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
