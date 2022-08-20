import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { IHeader } from '../../interfaces/interfaces';

const HeaderMobile: React.FC<IHeader>=({ ...headerProps })=>{
    const router = useRouter()
    const handleFilter=()=>{
        router.push('/query/2')
    }
    return(
        <header 
            {...headerProps}
            className={`w-full flex flex-col relative items-center py-5 shadow z-10 select-none gap-4`}>
           
            {router.pathname!=='/' &&<div className="absolute  inset-x-0  px-4  w-[50px]  ">
                <a onClick={()=>{
                    router.back()
                   
                    }}>
                    <div className="w-4 h-[2rem] relative">
                        <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/arrow-left.svg" />
                    </div>
                </a>
                
            </div>}
            <div className=" w-11/12 flex items-center justify-between">
                <div className="flex flex-grow items-center justify-center">
                    <Link href="/">
                        <a >
                            <div className="w-[10rem] h-[2rem] relative" >
                                <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/logo.svg" alt="Logo"  />
                            </div>
                        </a>
                    </Link>
                
                </div>
            </div>
            {router.pathname==='/' && 
                <>
                <div className="w-full   flex flex-row px-2   items-center flex-wrap gap-4">
                    <div className="w-full relative">
                        <input type="text" className="w-full text-placeholder
                            placeholder:text-slate-400 
                            bg-gray-200 rounded pl-3 py-2 pr-10
                            shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                            border border-slate-300 rounded-lg"
                            placeholder="Nhập địa điểm, dự án"
                            />

                        <div >
                            <button type="button" 
                                
                                className={`absolute z-[4] top-2 right-2 flex  items-center`}>
                                <div className="w-6 h-7 relative">
                                    <Image  layout="fill" objectFit="contain"   src="/search_pink.svg" />
                                </div>
                            
                            </button>
                        
                        </div>
                    </div>
                    <div className="flex w-full gap-2">
                        <div className="relative flex-[7_1_0%] ">
                            <select name="location" id="locations"  className='w-full filter pl-6 pr-8 border-gray-400'>
                                
                                <option value="1">Toàn quốc</option>
                                <option value="2">Saab</option>
                                <option value="2">Opel</option>
                                <option value="3">Audi</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-1 text-gray-700">
                                <div className="w-5 h-5 relative">
                                <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/khu_vuc.svg" />
                                </div>
                            </div>
                        </div>
                        <div className="h-full flex flex-[3_1_0%]">
                            
                            <button onClick={handleFilter} className="filter btn-primary flex border-gray-400 "> 
                                <div className="h-5 w-5 mr-2 relative">
                                    <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/filter_header.svg" />
                                </div>
                                Bộ lọc</button> 
                        </div>
                    </div>              
                </div>
                <div className="w-full ">
                    <div className="h-40 ">
                            <Carousel slideInterval={5000} >
                                <div className=" h-full relative">
                                    <Image width="100%" height="100%" layout="fill" 
                                    src="/banner.png"
                                    alt="..."
                                    />
                                </div>
                                <div className=" h-full relative">
                                    <Image width="100%" height="100%" layout="fill" 
                                    src="/banner.png"
                                    alt="..."
                                    />
                                </div>
                                <div className=" h-full relative">
                                    <Image width="100%" height="100%" layout="fill" 
                                    src="/banner.png"
                                    alt="..."
                                    />
                                </div>
                                <div className=" h-full relative">
                                    <Image width="100%" height="100%" layout="fill" 
                                    src="/banner.png"
                                    alt="..."
                                    />
                                </div>
                                
                            </Carousel>
                        </div>
                </div>
                </>
            }
        </header>
    )
}
export default HeaderMobile;