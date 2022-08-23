import Link from 'next/link';

import dynamic from 'next/dynamic';
import useDevice from '../hooks/useDevice';
import { NextPageWithLayout } from '../page';
const PrimaryLayout=  dynamic(() => import('../components/layouts/PrimaryLayout'),{ssr:false})
const ProductDetailPage:NextPageWithLayout=()=>{
    const {isMobile} =useDevice()
    return(
        <div className={`flex flex-col ${!isMobile&&"mt-[5.5rem]"}  justify-center  mb-4 `}>
            <div className="home-row py-2 mb-3">
                <div className={`${!isMobile ? "w-9/12" : "w-full"} flex flex-col  gap-2`}>
                    <ol className=" flex items-center text-sm ">
                        <li className="pathMenu ">
                        
                            <Link href="/" >
                                <a className="text-purple-600">Cho thuê căn hộ</a>
                            </Link>
                        </li>
                        <li className="pathMenu ">
                        
                            <Link href="/" >
                                <a className="text-purple-600">Hồ Chí Minh</a>
                            </Link>
                        </li>
                        <li className="pathMenu ">
                        
                            <Link href="/" >
                                <a className="text-purple-600">Quận 9</a>
                            </Link>
                        </li>
                        <li className="">
                        
                            
                            <a className="text-purple-600">Vinhomes Grand Park</a>
                          
                        </li>
                        
                    
                    </ol>
                    <h1 className="font-bold ">Cho thuê căn hộ chung cư giá rẻ, chính chủ, mới nhất T7/2022</h1>
                </div>  
                
            </div>
        </div>
    )
}
ProductDetailPage.getLayout = (page) => {
    return <PrimaryLayout name="productDetail">{page}</PrimaryLayout>;
  };
export default ProductDetailPage