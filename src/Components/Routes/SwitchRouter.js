import React from "react";
import { Routes, Route } from "react-router-dom";

//pages
import PlayingPage from "../../Pages/PlayingPage/PlayingPage";
import Congratulations from "../../Pages/CongratsPage/CongratsPage";
import LandingPage from "../../Pages/LandingPage/LandingPage";

export default function SwitchRouter() {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/playingPage" element={<PlayingPage />} />
        <Route exact path="/congratsPage" element={<Congratulations />} />
      </Routes>
    </main>
  );
}
