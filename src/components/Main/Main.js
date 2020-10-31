import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import UserPage from "../../pages/UserPage/UserPage";


function Main() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users/:id" component={UserPage} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default Main;