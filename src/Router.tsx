import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';

function Router() {
  return <Route path="/" component={Home} />;
}

export default Router;
