import React from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Detail from '../views/Detail'

export default function index() {
    return (
    <Router>
        <div>
        <Route path="/detail" component={Detail} />
        </div>
    </Router>
    )
}
