import PrimaryLayout from '../components/layouts/PrimaryLayout';
import { Device } from '../Device';
import { NextPageWithLayout } from './page';

import HomeDesktop from './desktop/HomeDesktop';


const Home: NextPageWithLayout = (props) => {
 
  return (
    <>
    <Device desktop>
       <HomeDesktop />
    </Device>
    <Device mobile>
      <HomeDesktop/>
    </Device>

    </>
  );
};
Home.getLayout = (page) => {
  return <PrimaryLayout name="home">{page}</PrimaryLayout>;
};
export default Home;
