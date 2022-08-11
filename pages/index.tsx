import PrimaryLayout from '../components/layouts/PrimaryLayout';
import { Device } from '../Device';
import HomeDesktop from './desktop/HomeDesktop';
import { NextPageWithLayout } from './page';
const Home: NextPageWithLayout = (props) => {
 
  return (
    <>
    <Device desktop>
       <HomeDesktop/>
    </Device>
    <Device mobile>
       <HomeDesktop/>
    </Device>

    </>
  );
};
Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
export default Home;
