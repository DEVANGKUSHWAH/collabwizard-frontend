import React from 'react';

const { Route } = require("react-router-dom");

function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        exact 
        render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    );
  }

export default RouteWithSubRoutes;
  