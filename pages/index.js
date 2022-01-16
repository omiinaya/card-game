import { absoluteUrl } from '../middleware/utils';
import UserNav from '../components/navigation/User';
import Home from '../components/home/Home';


export default function App(props) {
  
  return (
    <div>
      <Home data={props}/>
    </div>
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