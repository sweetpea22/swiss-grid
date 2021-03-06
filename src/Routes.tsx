import React from 'react';
import { Switch, Route } from "@chainsafe/common-components";
import CareersPage from "./CareersPage";
import ListingPage from "./ListingPage";
import EditorialPage from "./EditorialPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={CareersPage}/>
      <Route exact path={"/listing"} component={ListingPage}/>
      <Route exact path={"/editorial"} component={EditorialPage}/>
    </Switch>
  )
}