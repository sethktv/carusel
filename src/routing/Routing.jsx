import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Main, About, Network } from '../pages'
import { paths } from '../constants'
import { Navbar } from '../components'

export const Routing = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path={paths.network} exact>
                    <Network />
                </Route>

                <Route path={paths.main}>
                    <Main />
                </Route>

                <Route path={paths.about}>
                    <About />
                </Route>
            </Switch>
        </Router>
    )
}