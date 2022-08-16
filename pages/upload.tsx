import Link from 'next/link';
import "react-datepicker/dist/react-datepicker.css";
import UploadForm from '../components/forms/formupload';
import PrimaryLayout from '../components/layouts/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const UploadPage:NextPageWithLayout=()=>{

    const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms));

    const  showResults =async  (values:any) =>{
      console.log(values)

      await sleep(500); // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    };
   

  
    return (
        <div className={`w-full flex flex-col   items-center p-5 tablet:p-0 select-none bg-slate-50 laptop:text-sm`}>
           
          <div className=" w-8/12 flex items-center justify-between tablet:p-3  tablet:w-full">
            <ol className=" flex items-center text-sm">
                <li className="pathMenu">
                
                <Link href="/" >
                    <a className="text-purple-600">Trang chủ</a>
                </Link>
                </li>
                <li> 
                    <a className="font-bold">
                    Đăng tin mới
                    </a>
                </li>
            
            </ol>
          </div>
          <div className=" w-8/12 flex flex-col  m-4 tablet:m-0 tablet:w-full ">
            
            <UploadForm onSubmit={showResults}/>
          </div>
         
            
        </div>
      );
}
UploadPage.getLayout = (page) => {
    return <PrimaryLayout name="upload">{page}</PrimaryLayout>;
  };
export default UploadPage;