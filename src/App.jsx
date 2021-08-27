import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Dashboard, Setup, Onboarding } from './pages';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/onboarding">
          <Onboarding />
        </Route>

        <Route path="/setup">
          <Setup />
        </Route>

        <Route path="/dash">
          <Dashboard />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
