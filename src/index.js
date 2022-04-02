import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import LandingPage from "./pages/landingpage/LandingPage";
import LoginPage from "./pages/loginPage/LoginPage";
import Accordian from "../src/components/accordian/Accordian";
import { ContextData } from "./components/context/context";
import Actors from "./components/actors/Actors";
import VoiceNotes from "./components/voiceNotes/VoiceNotes";
import Alignments from "./components/alignment/Alignments";

ReactDOM.render(
  <ContextData>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/landingpage" element={<LandingPage />}>
            <Route path="backgrounds" element={<Accordian />} />
            <Route path="voice" element={<VoiceNotes />} />
            <Route path="actor" element={<Actors />} />
            <Route path="alignment" element={<Alignments />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </ContextData>,
  document.getElementById("root")
);
