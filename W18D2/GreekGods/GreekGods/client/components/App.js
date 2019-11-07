import React from "react";
import { Route, Switch } from 'react-router-dom';
import GodsList from './gods/GodsList';
import CreateIndex from './create/CreateIndex'
import Nav from "./Nav";
import GodDetail from "./detail/GodDetail";

const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/gods/:id" component={GodDetail} />
        <Route exact path="/new" component={CreateIndex} />
        <Route exact path="/" component={GodsList} />
      </Switch>
    </div>
  );
};

export default App;