
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { data } from '../../fakedata';
import useDevice from '../../hooks/useDevice';
import type { HomeDesktopProps } from '../../interfaces/interfaces';

import dynamic from 'next/dynamic';
const CardNews=  dynamic(() => import('../../components/cards/cardNews'),{ssr:false})
const CardHome=  dynamic(() => import('../../components/cards/card'),{ssr:false})
const CardHome2=  dynamic(() => import('../../components/cards/card2'),{ssr:false})

const HomeDesktop:React.FC<HomeDesktopProps>=()=>{
    const {isMobile} =useDevice()
    const [moretext,setMoreText]=useState(false)
    
    const moreText=()=>{
        setMoreText(!moretext)
    }

   
    
    
    
    return(
        <div className="flex flex-col mt-[4.5rem] tablet:mt-3 justify-center placeholder-red-500 mb-8 ">
            {!isMobile &&<div className="home-row tablet:hidden ">
                <div className="w-9/12 bigger:w-7/12">
                   
                    <div className="h-56 laptop:h-40 ">
                       
                        <Carousel slideInterval={5000} indicators={true}>
                            <div className=" h-full relative">
                                <Image width="100%" height="100%" layout="fill" objectFit="contain" 
                                src="/banner.png"
                                alt="..."
                                />
                            </div>
                            <div className=" h-full relative">
                                <Image width="100%" height="100%" layout="fill" objectFit="contain" 
                                src="/banner.png"
                                alt="..."
                                />
                            </div>
                            <div className=" h-full relative">
                                <Image width="100%" height="100%" layout="fill" objectFit="contain" 
                                src="/banner.png"
                                alt="..."
                                />
                            </div>
                            <div className=" h-full relative">
                                <Image width="100%" height="100%" layout="fill" objectFit="contain" 
                                src="/banner.png"
                                alt="..."
                                />
                            </div>
                            <div className=" h-full relative">
                                <Image width="100%" height="100%" layout="fill" objectFit="contain" 
                                src="/banner.png"
                                alt="..."
                                />
                            </div>
                         
                            
                        </Carousel>
                    </div>
 
                </div>
            </div>}
            
      
     
    
            <div className="home-row">
                <div className="w-9/12 text-center tablet:w-full tablet:text-left bigger:w-7/12">
                    <h1 className="font-bold">Cho thu?? c??n h??? chung c?? gi?? r???, ch??nh ch???, m???i nh???t T7/2022</h1>
                    <p className="text-sm text-left">Cho thu?? c??n h??? chung c?? mini: Gi?? r???, ch???t l?????ng, ch??nh ch???, ?????y ????? n???i th???t, an ninh ?????m b???o. ????ng tin cho thu?? c??n h??? hi???u qu??? v???i 1.000.000+ truy c???p m???i th??ng</p>
                </div>
            </div>
            
            <div className="home-row "> 
                <div className="w-9/12 space-y-4  tablet:w-full bigger:w-7/12  "> 
                    <div className="flex flex-row items-center space-x-2">
                        <div className="relative h-5 w-5">
                            <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/apartment_home.svg"  className="w-5 h-5"/>
                        </div>
                        <h2 className="font-bold">T??m ki???m nhi???u nh???t</h2>
                    </div>
                    <div className="bg-slate-100 py-4  shadow-xl   rounded-lg  tablet:overflow-x-auto tablet:overflow-y-hidden">
                        <div className="tablet:min-w-[900px] w-full flex  flex-row ">
                            <div className=" flex-[5_1_0%] ">
                                <div className=" flex space-x-5  h-full">
                                    <div className="w-[45%]  h-full rounded-md relative">
                                        
                                        <Image  layout="fill" src="/banner.png" className="object-cover w-full h-full rounded-md shadow opacity-80" />
                                     
                                        <div  className="absolute bottom-2 left-2">
                                            <h3>H?? N???i</h3>
                                            <p className="text-sm">49.576 tin ????ng</p>
                                        </div>
                                        
                                    </div>
                                    <div className="w-[45%]  h-full rounded-md relative">
                                      
                                            <Image  layout="fill"  src="/banner.png" className="object-cover w-full h-full rounded-md shadow opacity-80" />
                                     
                                        <div  className="absolute bottom-2 left-2">
                                            <h3>H??? Ch?? MInh</h3>
                                            <p className="text-sm">69.524 tin ????ng</p>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                            <div className="text-gray-500  flex-[7_1_0%] text-xs gap-5 flex flex-row tablet:gap-4">
                                <div className="flex-[2_1_0%] flex flex-col gap-1 tablet:flex-none">
                                    <h4 className="font-semibold">D??? ??n n???i b???t</h4>
                                    <div className="flex flex-row">
                                        <div className="w-5 h-5 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/arrow-down-red.svg" className="-rotate-90 w-5 h-5"/>
                                        </div>
                                        <p>Cho thu?? c??n h??? The Sun Avenue</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="w-5 h-5 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/arrow-down-red.svg" className="-rotate-90 w-5 h-5"/>
                                        </div>
                                        <p>VinhHomes Ocean Park</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="w-5 h-5 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/arrow-down-red.svg" className="-rotate-90 w-5 h-5"/>
                                        </div>
                                        <p>VinhHomes Grand Park</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="w-5 h-5 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/arrow-down-red.svg" className="-rotate-90 w-5 h-5"/>
                                        </div>
                                        <p>Centena Th??? Thi??m</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="w-5 h-5 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/arrow-down-red.svg" className="-rotate-90 w-5 h-5"/>
                                        </div>
                                        <p>?????o Kim C????ng - Diamond Island</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="w-5 h-5 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/arrow-down-red.svg" className="-rotate-90 w-5 h-5"/>
                                        </div>
                                        <p>Cho thu?? c??n h??? The Sun Avenue</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="w-5 h-5 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/arrow-down-red.svg" className="-rotate-90 w-5 h-5"/>
                                        </div>
                                        <p>VinhHomes Grand Park</p>
                                    </div>
                                </div>
                                <div className="flex-[2_1_0%] flex flex-col gap-1 tablet:flex-none">
                                    <h4 className="font-semibold">Khu v???c n???i b???t</h4>
                                    
                                    <div className="flex flex-row">
                                        <div className="w-5 h-5 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/arrow-down-red.svg" className="-rotate-90 w-5 h-5"/>
                                        </div>
                                        <p>Cho thu?? c??n h??? Qu???n 1</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="w-5 h-5 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/arrow-down-red.svg" className="-rotate-90 w-5 h-5"/>
                                        </div>
                                        <p>Cho thu?? c??n h??? Qu???n 7</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="w-5 h-5 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/arrow-down-red.svg" className="-rotate-90 w-5 h-5"/>
                                        </div>
                                        <p>Cho thu?? c??n h??? Ho??n Ki???m</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="w-5 h-5 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/arrow-down-red.svg" className="-rotate-90 w-5 h-5"/>
                                        </div>
                                        <p>Cho thu?? c??n h??? Th??? ?????c</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="w-5 h-5 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/arrow-down-red.svg" className="-rotate-90 w-5 h-5"/>
                                        </div>
                                        <p>Cho thu?? c??n h??? B??nh Th???nh</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="w-5 h-5 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/arrow-down-red.svg" className="-rotate-90 w-5 h-5"/>
                                        </div>
                                        <p>Cho thu?? c??n h??? Ba ????nh</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="w-5 h-5 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/arrow-down-red.svg" className="-rotate-90 w-5 h-5"/>
                                        </div>
                                        <p>Cho thu?? c??n h??? ?????ng ??a</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-row">
                <div  className="w-9/12 space-y-4 tablet:w-full bigger:w-7/12">
                    <div className="flex flex-row items-center space-x-2">
                        <div className="w-5 h-5 relative">
                        <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/apartment_home.svg" className="w-5 h-5"/>
                        </div>
                        <h2 className="font-bold">Cho thu?? chung c?? m???i nh???t</h2>
                    </div>
                    <div className="grid grid-cols-4 tablet:flex  tablet:flex-col gap-x-4 gap-y-8  bigger:gap-8 tablet:gap-4">
                        {isMobile ? <CardHome2 data={data[0]}/> :  <CardHome data={data[0]}/>}
                        <CardHome data={data[1]} />
                        <CardHome data={data[2]}/>
                        <CardHome data={data[3]}/>
                        {isMobile ? <CardHome2 data={data[4]}/> :  <CardHome data={data[4]}/>}
                        <CardHome data={data[5]}/>
                        <CardHome data={data[6]}/>
                        <CardHome data={data[7]}/>
                    </div>
                </div>
            </div>
            <div className="home-row ">
                <div  className="w-9/12 space-y-4 tablet:w-full bigger:w-7/12 overflow-hidden">
                    <div className="flex  w-full justify-between">

                  
                        <div className="flex flex-row items-center space-x-2">
                            <div  className="w-5 h-5 relative" >
                            <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/apartment_home.svg" className="w-5 h-5"/>
                            </div>
                            <h2 className="font-bold">Tin t???c</h2>
                        </div>
                     
                        
                        
                        <div className="flex items-center">
                            <Link href="/tin-tuc">
                                <a className="text-sm font-bold text-purple-700 flex gap-2">?????n trang tin t???c
                                    <div className="h-5 w-4  relative">
                                        <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/arrow-left.svg" className="h-5 w-8 rotate-180"/>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="tablet:overflow-x-auto tablet:overflow-y-hidden ">
                        <div className="w-full  tablet:min-w-[900px] flex    flex-wrap ">
                            <CardNews />
                            <CardNews />
                            <CardNews />
                            <CardNews />
                    
                        </div>
                        <div className="border-b-2 border-gray-100 mt-2"></div>
                    </div>
                </div>
            </div>
            <div className="home-row">
                <div  className="w-9/12 space-y-4 px-6 tablet:w-full tablet:px-0 bigger:w-7/12">
                    <div className="w-full bg-[#fefefe] p-5  shadow-md border-[1px] border-solid border-gray-100 rounded-lg">
                        <div className="flex justify-center items-center">
                            <h2 className="font-bold">CHO THU?? C??N H??? CHUNG C?? - CHO THU?? CHUNG C?? MINI</h2>
                        </div>
                       <div className="relative flex flex-col  w-full h-auto gap-7 py-5">
                            {!moretext && <div className="absolute w-full   tablet:bottom-[4.5rem]    bg-gray-50 text-hidden bottom-[4.75rem] opacity-40"><br/><br/></div>}
                            <p className={`${!moretext && "line-clamp-[12]"}  whitespace-normal truncate`}>
                                Th??? tr?????ng <span className="font-semibold">CHO THU?? C??N H???</span> chung c?? hi???n nay ??ang di???n ra r???t l?? s??i ?????ng, nhu c???u thu?? c??n h??? ng??y c??ng t??ng c???a nh???ng gia ????nh tr???, nh???ng b???n r??? ??ang ??i l??m ho???c th???m ch?? l?? nh???ng b???n sinh vi??n ??ang ng??y c??ng t??ng l??n rat71 nhi???u b???i nh???ng ti???n ??ch mang l???i l?? r???t nhi???u.
                                <br/>
                                <br/>
                                Vi???c c?? r???t nhi???u nh???ng c??n h???, c??n h??? chung c?? ???????c x??y d???ng v?? cho thu?? s??? gi??p cho b???n c?? th??? d??? d??ng t??m ???????c nh???ng c??n h??? cho thu??, tuy nhi??n kh??ng ph???i c??ng c?? th??? bi???t v?? ch???n m??nh ???????c c??n h??? ph?? h???p nh???t.
                                <br/>
                                <br/>
                                Thuecanho123.com chia s??? nh???ng kinh nghi???m, l??u ?? ????? gi??p b???n c?? th??? ch???n thu?? c??n h??? t???t nh???t.
                                <br/>
                                <br/>
                                <span className="leading-2 font-bold">Nh???ng ??i???u l??u ?? tr?????c khi thu?? c??n h??? chung c??</span>
                                <br/>
                                <br/>
                                Hi???n nay vi???c thu?? c??n h???, chung c?? ??ang r???t ???????c nhi???u ng?????i ??u chu???ng v?? ng?????i m???i t??m hi???u.B???i mang nhi???u ti???n ??ch t??ch h???p trong m???t c??n h??? nh??: C???a h??ng ti???n l???i, Khu Trung t??m Th????ng m???i, H??? b??i, ph??ng GYM Yoga, Khu nh?? tr???, Khu v?????n c??y xanh ??i b??? ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

                            </p>
                           {!moretext ? <button onClick={moreText} className="text-purple-600">Xem th??m</button> :  <button onClick={moreText} className="text-purple-600">R??t g???n</button>}
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeDesktop;