import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import ProfileSetup from './pages/ProfileSetup'

export default function ProfileSetupPage() {
    return (
        <Switch>
            <Route path="/setup-profile" component={ProfileSetup}/>
            <Redirect to="/setup-profile"/>
        </Switch>
    )
}
