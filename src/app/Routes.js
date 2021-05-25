/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
// import ProtectedLayout from "../../components/ProtectedLayout";
import AppLayout from "../components/Layout";
import { Logout, AuthPage } from "../app/modules/Auth";
import BasePage from "./BasePage";

export function Routes() {
    const { isAuthorized } = useSelector(
        ({ auth }) => ({
          isAuthorized: auth.user != null,
        }),
        shallowEqual
      );
      
  return (
    <Switch>
      {!isAuthorized ? (
        /*Render auth page when user at `/auth` and not authorized.*/
        <AppLayout >
          <AuthPage /> 
        </AppLayout>
      ) : (
        /*Otherwise redirect to root page (`/`)*/
        <Redirect from="/auth" to="/" />
      )}

      {/* <Route path="/error" component={ErrorsPage} /> */}
      <Route path="/logout" component={Logout} />

      {!isAuthorized ? (
        /*Redirect to `/auth` when user is not authorized*/
        <Redirect to="/auth/login" />
      ) : (
        <AppLayout >
          <BasePage />
        </AppLayout>
      )}
    </Switch>
  );
}
