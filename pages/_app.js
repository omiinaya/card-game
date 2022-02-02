import { getAppCookies, verifyToken } from '../middleware/utils';
import UserNav from '../components/navigation/User';
import CssBaseline from "@material-ui/core/CssBaseline";
import "../public/global.scss";

function MyApp({ Component, pageProps }) {
  const { user, origin } = pageProps;
  return (
    <>
      <CssBaseline />
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
