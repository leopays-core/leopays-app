import * as React from 'react';
//import { ConnectedRouter } from 'connected-react-router';
import { ConnectedRouter } from 'connected-react-router/immutable';



const Router = ({ children, history/*, context*/ }) => {
  return (
    <ConnectedRouter history={history} /* context={context} */>
      {children}
    </ConnectedRouter>
  );
}

export default Router;
