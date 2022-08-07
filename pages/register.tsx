import PrimaryLayout from '../components/layouts/PrimaryLayout';
import { NextPageWithLayout } from './page';


const RegisterPage:NextPageWithLayout=()=>{
    return (
        <div>
            registerPage
        </div>
      );
}
RegisterPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>;
  };
export default RegisterPage;