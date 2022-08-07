import PrimaryLayout from '../components/layouts/PrimaryLayout';
import { NextPageWithLayout } from './page';


const UploadPage:NextPageWithLayout=()=>{
    return (
        <div>
            UploadPage
        </div>
      );
}
UploadPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>;
  };
export default UploadPage;