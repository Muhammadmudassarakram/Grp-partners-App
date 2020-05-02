import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import ActivePartner from "./ActivePartner";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/partner/:partnerId" component={ActivePartner} />
    </Switch>
  </BrowserRouter>
);

export default Router;


