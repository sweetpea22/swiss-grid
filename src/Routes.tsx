import React from 'react';
import { Switch, Route } from "@chainsafe/common-components";
import CareersPage from "./CareersPage";
import ListingPage from "./ListingPage";
import EditorialPage from "./EditorialPage";
import SquareGrid from './SquareGrid';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={SquareGrid}/>
      <Route exact path={"/square-grid"} component={CareersPage}/>
      <Route exact path={"/listing"} component={ListingPage}/>
      <Route exact path={"/editorial"} component={EditorialPage}/>
    </Switch>
  )
}

export default Routes;