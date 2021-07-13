import React from 'react';
import { Switch, Route } from "@chainsafe/common-components";
import CareersPage from "./CareersPage";
import ListingPage from "./ListingPage";
import EditorialPage from "./EditorialPage";
import SquareGrid from './SquareGrid';
import SquareGrid2 from './SquareGrid2';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={SquareGrid}/>
      <Route exact path={"/s"} component={SquareGrid2}/>
      <Route exact path={"/careers-draft"} component={CareersPage}/>
      <Route exact path={"/listing"} component={ListingPage}/>
      <Route exact path={"/editorial"} component={EditorialPage}/>
    </Switch>
  )
}

export default Routes;