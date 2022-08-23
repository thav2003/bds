import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import useDevice from '../hooks/useDevice';
import { NextPageWithLayout } from '../page';
const PrimaryLayout=  dynamic(() => import('../components/layouts/PrimaryLayout'),{ssr:false})
const ProductDetailPage:NextPageWithLayout=()=>{
    const {isMobile} =useDevice()
    return(
        <div className={`flex flex-col ${!isMobile&&"mt-[5.5rem]"}  justify-center  mb-4 `}>
            <div className="home-row py-2 mb-3">
                <div className={`${!isMobile ? "w-9/12" : "w-full"} flex items-center  gap-4`}>
                    <button className="text-[14px] flex items-center border-solid border-gray-300 border-[1px] p-1 rounded-lg px-2 pl-0">
                        <div className="relative h-6 w-6 rotate-90">
                            <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/down_button_grey.svg"/>
                        </div>
                        Về danh sách
                    </button>
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
                    
                </div>  
                
            </div>
        </div>
    )
}
ProductDetailPage.getLayout = (page) => {
    return <PrimaryLayout name="productDetail">{page}</PrimaryLayout>;
  };
export default ProductDetailPage