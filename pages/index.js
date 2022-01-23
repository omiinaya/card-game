import { absoluteUrl } from '../middleware/utils';
import Home from '../components/home/Home';

export default function App(props) {

  return (
    <Home data={props} />
  );
}
/* getServerSideProps */
export async function getServerSideProps(context) {
  const { req } = context;
  const { origin } = absoluteUrl(req);
  const UA = context.req.headers['user-agent'];
  const isMobile = Boolean(UA.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  ))
  return {
    props: {
      origin,
      deviceType: isMobile ? 'mobile' : 'desktop'
    },
  };
}