import PrimaryLayout from '../components/layouts/PrimaryLayout';
import { Device } from '../Device';
import HomeDesktop from './desktop/HomeDesktop';
import HomeMobile from './mobile/HomeMobile';
import { NextPageWithLayout } from './page';
const Home: NextPageWithLayout = () => {
  
  return (
    <>
    <Device desktop>
       <HomeDesktop/>
    </Device>
    <Device mobile>
       <HomeMobile/>
    </Device>

    </>
  );
};
Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
export default Home;
