import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Detail from './views/Detail'
import Home from './views/Home';

export default function index() {
    return (
        <Router>
            <div>
              <Route exact path="/"><Home /></Route>
              <Route path="/detail"><Detail /></Route>
            </div>
        </Router>
    )
}
