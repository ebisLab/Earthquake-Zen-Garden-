import React, { useState } from "react";
import { Route, Switch, Navigation } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Profile from "./pages/Profile";
import { mock } from "./mock";

export default function App() {
  const [data] = useState(mock);

  let options = {
    year: "numeric",
    month: "long",
    weekday: "long",
    hour: "numeric",
    minute: "numeric"
  };

  return (
    <div>
      <Nav data={data.site} usrName={data.profile} />
      <Switch>
        <Route path="/profile">
          <Profile data={data.profile} />
        </Route>
        <Route path="/info/:infoID">
          <Detail data={data.data.features} options={options} />
        </Route>

        <Route exact path="/">
          <Home data={data.data} options={options} />
        </Route>
      </Switch>
    </div>
  );
}
