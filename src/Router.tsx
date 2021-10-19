import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cafe from './components/cafe/Cafe';
import Favorite from './components/favorite/Favorite';
import Home from './components/home/Home';
import Interview from './components/interview/Interview';
import Search from './components/search/Search';
import Team from './components/team/Team';

function Router() {
  return (
    <BrowserRouter forceRefresh={true}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cafe/:cafe_idx" component={Cafe} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/favorite" component={Favorite} />
        <Route exact path="/interview" component={Interview} />
        <Route exact path="/team" component={Team} />
        <Route exact path="*" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
