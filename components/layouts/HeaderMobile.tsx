import { Carousel } from 'flowbite-react';
import { useRouter } from 'next/router';
import type { IHeader } from '../../interfaces/interfaces';
const HeaderMobile: React.FC<IHeader>=({ ...headerProps })=>{
    const router = useRouter()
    return(
        <header 
            {...headerProps}
            className={`w-full flex flex-col relative items-center py-5 shadow z-10 select-none gap-4`}>
           
            <div className="absolute  inset-x-0 bottom-[25px] px-4">
                <a onClick={()=>{
                    router.back()
                   
                }}>
                    <img src="/arrow-left.svg" className="w-4 h-4"/>

                </a>
                
            </div>
            <div className=" w-11/12 flex items-center justify-between">
                <div className="flex flex-grow items-center justify-center">
                    
                        <a >
                            <img src="/logo.svg" alt="Logo" className="w-auto h-auto"  />
                        </a>
                
                </div>
            </div>
            {router.pathname==='/' && 
                <>
                <div className="w-full   flex flex-row px-2   items-center flex-wrap gap-2">
                    <div className="w-full">
                        <input type="text" className="w-full"/>
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
                                <img src="/khu_vuc.svg" className="w-5 h-5"/>
                            </div>
                        </div>
                        <div className="h-full flex flex-[3_1_0%]">
                       
                            <button className="filter btn-primary flex border-gray-400 "> 
                                <img src="/filter_header.svg" className="h-5 w-5 mr-2"/>
                            Bộ lọc</button> 
                        </div>
                    </div>              
                </div>
                <div className="w-full ">
                    <div className="h-40 ">
                            <Carousel slideInterval={5000} >
                                <img
                                src="/banner.png" className="h-full w-full object-cover"
                                alt="..."
                                />
                                <img
                                src="/banner.png" className="h-full w-full object-cover"
                                alt="..."
                                />
                                <img
                                src="/banner.png" className="h-full w-full object-cover"
                                alt="..."
                                />
                                <img
                                src="/banner.png" className="h-full w-full object-cover"
                                alt="..."
                                />
                                <img
                                src="/banner.png" className="h-full w-full object-cover"
                                alt="..."
                                />
                            </Carousel>
                        </div>
                </div>
                </>
            }
        </header>
    )
}
export default HeaderMobile;