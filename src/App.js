import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "bootswatch/dist/lux/bootstrap.min.css";

import MessagesList from './components/MessagesList'
import MessagesForm from './components/MessagesForm'
import Navigation from './components/Navbar';

function App() {
  return ( 
    <Router>
      <Navigation />
      <div className="container p-4">
      <Switch>
        <Route exact path="/" component={MessagesList} />
        <Route exact path="/new-message" component={MessagesForm} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
