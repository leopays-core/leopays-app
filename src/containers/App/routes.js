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
    path: ml.url('/dashboard'),
    component: () => (<BC pn={t('main:proName')} txt={t('menu:Dashboard')} />),
  },
  {
    path: ml.url('/mining'),
    component: () => (<BC pn={t('main:proName')} txt={t('footer:Start Mining')} />),
  },
  {
    path: ml.url('/wallets'),
    component: () => (<BC pn={t('main:proName')} txt={t('menu:Wallets')} />),
  },
  {
    path: ml.url('/cpu-gpu-mining'),
    component: () => (<BC pn={t('main:proName')} txt={t('footer:Mining with CPU/GPU')} />),
  },
  {
    path: ml.url('/asic-mining'),
    component: () => (<BC pn={t('main:proName')} txt={t('footer:ASIC Mining')} />),
  },
  {
    path: ml.url('/lhos-mining'),
    component: () => (<BC pn={t('main:proName')} txt={t('footer:LitHash OS')} />),
  },
  {
    path: ml.url('/algorithm'),
    component: () => (<BC pn={t('main:proName')} txt={t('footer:Algorithms')} />),
  },
  {
    path: ml.url('/miner'),
    component: () => (<BC pn={t('main:proName')} txt={t('footer:Find Miner')} />),
  },
  {
    path: ml.url('/profitability-calculator'),
    component: () => (<BC pn={t('main:proName')} txt={t('footer:Profitability Calculator')} />),
  },
  {
    path: ml.url('/stratum-generator'),
    component: () => (<BC pn={t('main:proName')} txt={t('footer:Stratum Generator')} />),
  },
  {
    path: ml.url('/marketplace'),
    component: () => (<BC pn={t('main:proName')} txt={t('footer:Live Marketplace')} />),
  },
  {
    path: ml.url('/pricing'),
    component: () => (<BC pn={t('main:proName')} txt={t('footer:Pricing')} />),
  },
  {
    path: ml.url('/compatible-pools'),
    component: () => (<BC pn={t('main:proName')} txt={t('footer:Compatible Pools')} />),
  },
  {
    path: ml.url('/exchange'),
    component: () => (<BC pn={t('main:proName')} txt={t('footer:Trade Digital Currencies')} />),
  },
  {
    path: ml.url('/pool-operators'),
    component: () => (<BC pn={t('main:proName')} txt={t('footer:Pool Operators')} />),
  },
  {
    path: ml.url('/software-developers'),
    component: () => (<BC pn={t('main:proName')} txt={t('footer:Software Developers')} />),
  },
  {
    path: ml.url('/business-development'),
    component: () => (<BC pn={t('main:proName')} txt={t('footer:Business Development')} />),
  },
  {
    path: ml.url('/about'),
    component: () => (<BC pn={t('main:proName')} txt={t('footer:About')} />),
  },
  {
    path: ml.url('/media'),
    component: () => (<BC pn={t('main:proName')} txt={t('footer:Media')} />),
  },
  {
    path: ml.url('/referrals'),
    component: () => (<BC pn={t('main:proName')} txt={t('footer:Referrals')} />),
  },
  {
    path: ml.url('/support'),
    component: () => (<BC pn={t('main:proName')} txt={t('footer:Support')} />),
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
      },
      {
        path: ml.url('/my/settings'),
        component: () => (<BC pn={t('main:proName')} txt={t('menu:Settings')} />),
      }
    ]
  },
  {
    component: () => (<NotFoundPageLayout />),
  }
]);

/*
{'https://docs.lithash.io/'} {t('footer:API\'s')},
{'https://github.com/lithash/rest-clients-demo'} {t('footer:Sample code')},
{'https://blog.lithash.io/'} {t('footer:News')},
{'https://status.lithash.io/'} {t('footer:Status')},
{'https://blog.lithash.io/'} {t('footer:Blog')},

{'https://www.facebook.com/@?/'} Facebook,
{'https://www.youtube.com/c/@?'} Youtube,
{'https://www.twitter.com/@?/'} Twitter,
{'https://discordapp.com/channels/@?/@?'} Discord,
{'https://vk.com/@?'} VK,
{'https://www.reddit.com/r/@?/'} Reddit,
{'https://github.com/lithash'} GitHub,
{'https://www.instagram.com/@?/'} Instagram,
`mailto:info@lithash.io`,
*/
