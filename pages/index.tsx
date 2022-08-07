import { useRouter } from 'next/router';
import PrimaryLayout from '../components/layouts/PrimaryLayout';
import { NextPageWithLayout } from './page';


const Home: NextPageWithLayout = () => {
  const { locale } = useRouter();
  return (
    <div>
      HomePage
    </div>
  );
};
Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
export default Home;
