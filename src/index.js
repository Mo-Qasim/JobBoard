import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Path } from 'react-router-dom'

import ScrollTop from './components/ScrollTop'
import JobBoardWrapper from './Pages/JobBaord'
import JobDetailWrapper from './Pages/JobDetail'
import AdvanceSearchWrapper from './Pages/AdvanceSearch'

import './index.css';

function Root() {

  return (
    <>
      <Router>
        <ScrollTop />
        <Switch>
          <Route path="/search" component={AdvanceSearchWrapper} />
          <Route path="/detail" component={JobDetailWrapper} />
          <Route path="/" component={JobBoardWrapper} />
        </Switch>
      </Router>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);


