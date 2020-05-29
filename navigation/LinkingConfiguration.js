import * as Linking from 'expo-linking';
import mlURL from 'multi-languages-url';



export default function ({ languages, pathname }) {
  const ml = new mlURL({ languages: languages, pathname: pathname });
  return {
    prefixes: [Linking.makeUrl(ml.url('/'))],
    //prefixes: ['https://app.mychat.com', 'exps://app.mychat.com'],
    //prefixes: [Linking.makeUrl('/')],// ['mychat://', Linking.makeUrl('/'), 'https://mychat.com'],
    config: {
      Main: {
        path: ml.url('/'),
        screens: {
          Home: '/',
          Links: '/links',
          Menu: {
            path: '/',
            screens: {
              menu: '/menu',
              Settings: '/settings',
              Language: '/settings/language',
            }
          },
        },
      },

      Legal: {
        path: ml.url('/legal'),
        initialRouteName: 'Legal',
        screens: {
          Legal: '/',
          Terms: '/terms',
          Privacy: '/privacy',
          Cookies: '/privacy/cookies',
        },
      },

      ContactUs: {
        path: ml.url('/contact-us'),
        initialRouteName: 'ContactUs',
        screens: {
          ContactUs: '/',
        },
      },

    },
  };
}
