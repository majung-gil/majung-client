import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cafe from './components/cafe/Cafe';
import Favorite from './components/favorite/Favorite';
import Home from './components/home/Home';
import Interview from './components/interview/Interview';
import Search from './components/search/Search';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cafe" component={Cafe} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/favorite" component={Favorite} />
        <Route exact path="/interview" component={Interview} />
        <Route exact path="*" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
