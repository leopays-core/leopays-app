import React from 'react';
import Loadable from 'react-loadable';
import { Helmet } from 'react-helmet';
import UI from '../../containers/UI';
import LoadingApp from '../../components/LoadingApp';
import SwitchWithRoutes from '../../components/SwitchWithRoutes';



function BC({ txt, pn }) {
  return (
    <UI>
      <Helmet>
        <title>{txt ? txt + ' | ' + pn : pn}</title>
      </Helmet>
      <div id="app" className="App-header">
        <hr />
        <div>{txt ? txt : pn}</div>
      </div>
    </UI>
  );
}


const HomePageLayout = Loadable({
  loader: () => import('../../layouts/HomePageLayout'),
  loading: LoadingApp,
});
const SignInLayout = Loadable({
  loader: () => import('../../layouts/SignInLayout'),
  loading: LoadingApp,
});


const NotFoundPageLayout = Loadable({
  loader: () => import('../../layouts/NotFoundPageLayout'),
  loading: LoadingApp,
});


export const routes = (ml, t) => ([
  {
    exact: true,
    path: ml.url('/'),
    component: () => (<HomePageLayout />),
  },
  {
    path: ml.url('/explorer'),
    component: () => (<BC pn={t('main:proName')} txt={t('menu:Explorer')} />),
  },
  {
    path: ml.url('/dashboard'),
    component: () => (<BC pn={t('main:proName')} txt={t('menu:Dashboard')} />),
  },
  {
    path: ml.url('/wallet'),
    component: () => (<BC pn={t('main:proName')} txt={t('menu:Wallet')} />),
  },
  {
    path: ml.url('/my/settings'),
    component: () => (<BC pn={t('main:proName')} txt={t('menu:Settings')} />),
  },
  {
    path: ml.url('/about'),
    component: () => (<BC pn={t('main:proName')} txt={t('footer:About')} />),
  },
  {
    path: ml.url('/support'),
    component: () => (<BC pn={t('main:proName')} txt={t('footer:Support')} />),
  },
  {
    path: ml.url('/faq'),
    component: () => (<BC pn={t('main:proName')} txt={t('footer:FAQ')} />),
  },
  {
    path: ml.url('/privacy'),
    component: () => (<BC pn={t('main:proName')} txt={t('footer:Privacy Policy')} />),
  },
  {
    path: ml.url('/terms'),
    component: () => (<BC pn={t('main:proName')} txt={t('footer:Terms & Conditions')} />),
  },
  {
    path: ml.url('/my'),
    component: SwitchWithRoutes,
    routes: [
      {
        path: ml.url('/my/dashboard'),
        component: () => (<BC pn={t('main:proName')} txt={t('menu:Dashboard')} />),
      },
      {
        path: ml.url('/my/login'),
        component: () => (<SignInLayout />),
      },
      {
        path: ml.url('/my/register'),
        component: () => (<SignInLayout />),
      },
      {
        path: ml.url('/my/logout'),
        component: () => (<BC pn={t('main:proName')} txt={t('menu:Logout')} />),
      }
    ]
  },
  {
    component: () => (<NotFoundPageLayout />),
  }
]);
