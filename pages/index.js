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
  return {
    props: {
      origin,
    },
  };
}