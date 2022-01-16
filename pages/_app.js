import Head from 'next/head';
import Router from 'next/router';
import { getAppCookies, verifyToken } from '../middleware/utils';
import NProgress from 'nprogress';
import UserNav from '../components/navigation/User';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', url => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const { user, origin } =  pageProps;
  return (
    <>
      <Head>
        {/* Import CSS for nprogress */}
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <UserNav props={{ user: user }} />
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const {
    store,
    isServer,
    req,
    query: { amp },
    asPath,
  } = ctx;

  const { token } = getAppCookies(req);
  const user = token && verifyToken(token.replace('Bearer ', ''));

  let pageProps = { user, asPath };
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps({ ctx });
  }

  return { pageProps };
};

export default MyApp;
