import React from "react";
import { Switch, Route } from "react-router-dom";

export default function SwitchRouter() {
  return (
    <main>
      <Switch>
        <Route path="/mail"></Route>
      </Switch>
    </main>
  );
}
