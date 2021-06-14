import React from 'react'

import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Main, Contacts, About, NotFound } from '../pages'
import { NavBar } from '../components/NavBar'
import { path } from '../static/constants'
export const Routing = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path={path.main} exact>
                    <Main />
                </Route>
                <Route path={path.contacts} exact>
                    <Contacts />
                </Route>
                <Route path={path.about} exact>
                    <About />
                </Route>

                <NotFound />
            </Switch>
        </Router>
    )
}
