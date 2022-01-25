import React from "react";
import { Routes, Route } from "react-router-dom";

//components
import SecretSantaMessanger from "../SecretSantaMessanger/SecretSantaMessanger";

//pages
import Home from "../../Pages/Home";

export default function SwitchRouter() {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/messanger" element={<SecretSantaMessanger />} />
      </Routes>
    </main>
  );
}
