import * as React from 'react';
import { NativeRouter } from 'react-router-native';
//import { ConnectedRouter } from 'connected-react-router';
import { ConnectedRouter } from 'connected-react-router/immutable';



const Router = ({ children, history/*, context*/ }) => {
  return (
    <NativeRouter>
      <ConnectedRouter history={history} /* context={context} */>
        {children}
      </ConnectedRouter>
    </NativeRouter>
  );
}

export default Router;
