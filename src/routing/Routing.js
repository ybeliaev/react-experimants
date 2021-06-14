import React from 'react'

import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Main, Contacts, About, NotFound } from '../pages/Main'

export const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Main />
                </Route>
                <Route path="/contacts" exact>
                    <Contacts />
                </Route>
                <Route path="/about" exact>
                    <About />
                </Route>

                <NotFound />
            </Switch>
        </Router>
    )
}
