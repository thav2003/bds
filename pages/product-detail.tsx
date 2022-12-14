
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { data } from '../fakedata';
import useDevice from '../hooks/useDevice';
import { NextPageWithLayout } from '../page';
const CardHome=  dynamic(() => import('../components/cards/card'),{ssr:false})
const PrimaryLayout=  dynamic(() => import('../components/layouts/PrimaryLayout'),{ssr:false})

type RenderPopUp = {

    children: React.ReactNode;
}

const RenderPopUp=()=>{
    return(
        <div className="col-span-6 h-48 ">
            <div className="relative w-full h-full">
                <div className="absolute inset-y-[38%] inset-x-[40%] right-[1rem] z-[2] w-[4rem] h-[4rem] rounded-full  flex justify-center items-center">
                    <div className="relative h-full w-full">
                        <Image layout="fill" src="/play-button.svg" className="rounded-lg"/>
                    </div>
                </div>
                <div className="relative w-full h-full">
                    <Image layout="fill" src="/test.jpg" className="rounded-lg"/>
                </div>
                <div className=" absolute  bottom-2 right-2 opacity-90">
                    <div className="gap-2 flex ">
                        <div className="bg-gray-700  rounded-md p-1  flex items-end">
                            <div className="flex  items-center gap-1">
                                <div className="h-5 w-3 relative">
                                    <Image layout='fill' src="/video_thumb_white.svg" className="h-5 w-3 rounded-md mb-[2px]"/>
                                </div>
                                <p className="text-white opacity-80 cardText ">2</p>
                            </div>
                        
                        </div>
                        <div className="bg-gray-700 rounded-md p-1 flex items-end" >
                            <div className="flex  items-center gap-1">
                                <div className="h-4 w-3 relative">
                                    <Image layout='fill' src="/images_thumb_white.svg" className="h-4 w-3 rounded-md"/>
                                </div>
                                <p className="text-white opacity-80 cardText">2</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

const ProductDetailPage:NextPageWithLayout=()=>{
    const {isMobile} =useDevice()
    return(
        <div className={`flex flex-col ${!isMobile&&"mt-[5.5rem]"}  justify-center  mb-[6rem] `}>
            <div className="home-row py-2 mb-3 tablet:mb-0 tablet:py-3">
                <div className={`${!isMobile ? "w-9/12" : "w-full"} flex items-center  gap-4`}>
                    <button className="text-[14px] tablet:hidden flex items-center border-solid border-gray-300 border-[1px] p-1 rounded-lg px-2 pl-0">
                        <div className="relative h-6 w-6  rotate-90">
                            <Image  layout="fill" objectFit="contain" src="/down_button_grey.svg"/>
                        </div>
                        V??? danh s??ch
                    </button>
                    <ol className=" flex items-center text-sm ">
                        <li className="pathMenu ">
                        
                            <Link href="/" >
                                <a className="text-purple-600 tablet:text-[10px]">Cho thu?? c??n h???</a>
                            </Link>
                        </li>
                        <li className="pathMenu ">
                        
                            <Link href="/" >
                                <a className="text-purple-600 tablet:text-[10px]">H??? Ch?? Minh</a>
                            </Link>
                        </li>
                        <li className="pathMenu ">
                        
                            <Link href="/" >
                                <a className="text-purple-600 tablet:text-[10px]">Qu???n 9</a>
                            </Link>
                        </li>
                        <li className="">
                        
                            
                            <a className="text-purple-600 tablet:text-[10px]">Vinhomes Grand Park</a>
                          
                        </li>
                        
                    
                    </ol>
                    
                </div>  
                
            </div>

            <div className="home-row py-2  tablet:px-0 tablet:py-1 ">
                <div className={`${!isMobile ? "w-9/12" : "w-full"} grid grid-cols-6   rounded-lg gap-4 `}>
                    {!isMobile ? 
                        <>
                        <div className="col-span-4  rounded-lg">
                            <video controls  className="rounded-lg w-full h-full">
                                <source src="/testvideo.mkv" />
                            </video>
                        

                        </div>
                        <div className="col-span-2  rounded-lg">
                            <div className="relative w-full h-full">
                                <div className="absolute inset-y-[46%] right-[1rem] z-[2] w-7 h-7 rounded-full bg-white flex justify-center items-center">
                                    <div className="relative h-6 w-6 -rotate-90">
                                        <Image layout="fill" src="/down_button_grey.svg" className="rounded-lg"/>
                                    </div>
                                </div>
                                <div className="relative w-full h-full">
                                    <Image layout="fill" src="/test.jpg" className="rounded-lg"/>
                                </div>
                            </div>

                        </div>
                        </>
                        :
                        <div className="col-span-6 h-48 ">
                            <div className="relative w-full h-full">
                                <div className="absolute inset-y-[38%] inset-x-[40%] right-[1rem] z-[2] w-[4rem] h-[4rem] rounded-full  flex justify-center items-center">
                                    <div className="relative h-full w-full">
                                        <Image layout="fill" src="/play-button.svg" className="rounded-lg"/>
                                    </div>
                                </div>
                                <div className="relative w-full h-full">
                                    <Image layout="fill" src="/test.jpg" className="rounded-lg"/>
                                </div>
                                <div className=" absolute  bottom-2 right-2 opacity-90">
                                    <div className="gap-2 flex ">
                                        <div className="bg-gray-700  rounded-md p-1  flex items-end">
                                            <div className="flex  items-center gap-1">
                                                <div className="h-5 w-3 relative">
                                                    <Image layout='fill' src="/video_thumb_white.svg" className="h-5 w-3 rounded-md mb-[2px]"/>
                                                </div>
                                                <p className="text-white opacity-80 cardText ">2</p>
                                            </div>
                                        
                                        </div>
                                        <div className="bg-gray-700 rounded-md p-1 flex items-end" >
                                            <div className="flex  items-center gap-1">
                                                <div className="h-4 w-3 relative">
                                                    <Image layout='fill' src="/images_thumb_white.svg" className="h-4 w-3 rounded-md"/>
                                                </div>
                                                <p className="text-white opacity-80 cardText">2</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                    }
                </div>
            </div>
            <div className="home-row py-2 mb-6 ">
                <div className={`${!isMobile ? "w-9/12" : "w-full"} grid grid-cols-6 gap-4 `}>
                    <div className={`${!isMobile ? "col-span-4" : "col-span-6"} space-y-4`}>
                        <div className="w-full">
                            <p className="font-bold text-[18px] tablet:text-[16px] mb-6 tablet:mb-3">Cho thu?? c??n h??? cao c???p t???i Vinhomes Grand Parks Q9, gi?? r??? nh???t h??? cao c???p t???i Vinh th??? tr?????ng</p>
                            {isMobile && 
                                <p className="text-gray-500 mb-3">Th??? Hai, 1/8/2022 <sup>. </sup> 08:57</p>
                            }
                            <div className="flex justify-between tablet:mb-3">
                                <h2 className="text-[18px]  text-base font-semibold text-purple-600  ">5 tri???u/th??ng</h2>
                                <div className="grid grid-cols-2 gap-2">
                                    {!isMobile ?
                                        <>
                                        <button className="bg-white font-[500]  flex gap-2 items-center text-black border-solid border-[1px] border-gray-300 p-1 px-3 rounded-lg">
                                            <div className="relative h-4 w-4">
                                                <Image  layout="fill" src="/favorite-desktop.svg"/>
                                            </div>
                                                L??u tin
                                            </button>
                                        <button className="bg-white font-[500]  flex gap-2 items-center text-black border-solid border-[1px] border-gray-300 p-1 px-3 rounded-lg">
                                            <div className="relative h-4 w-4">
                                                <Image  layout="fill" src="/share.svg"/>
                                            </div>
                                            Chia s???</button>
                                        </>
                                        : 
                                        <>
                                        <button className="bg-white font-[500]  flex gap-2 items-center text-black border-solid border-[1px] border-gray-300 p-1 px-3 rounded-lg">
                                        <div className="relative h-4 w-4">
                                            <Image  layout="fill" src="/favorite-desktop.svg"/>
                                        </div>
                                            
                                        </button>
                                        <button className="bg-white font-[500]  flex gap-2 items-center text-black border-solid border-[1px] border-gray-300 p-1 px-3 rounded-lg">
                                            <div className="relative h-4 w-4">
                                                <Image  layout="fill" src="/share.svg"/>
                                            </div>
                                            </button>
                                        </>
                                    }
                                </div>
                            </div>
                            <div className="w-full mb-6 tablet:mb-4">
                                <div className="flex gap-8">
                                    <div className="flex  items-center gap-2">
                                        <div className="relative h-4 w-4">
                                            <Image layout="fill" src="/bedroom_small.svg"/>
                                        </div>
                                        <p className="font-semibold"> 2 PN</p>
                                    </div>
                                    <div className="flex  items-center gap-2">
                                        <div className="relative h-4 w-4">
                                            <Image layout="fill" src="/phong_tam.svg"/>
                                        </div>
                                        <p className="font-semibold"> 2 WC</p>
                                    </div>
                                    <div className="flex  items-center gap-2">
                                        <div className="relative h-4 w-4">
                                            <Image layout="fill" src="/dien_tich.svg"/>
                                        </div>
                                        <p className="font-semibold"> 65  m<sup>2</sup></p>
                                    </div>
                                </div>
                            </div>
                            {!isMobile && <div className="w-full flex items-center gap-2 mb-4">
                                <div className="relative h-4 w-5">
                                    <Image layout="fill"  src="/time-icon.svg"/>
                                </div>
                                <p className="text-gray-500">Th??? Hai, 1/8/2022 <sup>. </sup> 08:57</p>
                            </div>}
                            <div className="w-full flex gap-2  mb-6">
                                {!isMobile && <div className=" relative h-5 w-5">
                                    <Image layout="fill"  src="/location_icon.svg"/>
                                </div>}
                                <p className="text-gray-500 ">D??? ?? Vinhomes Grand Parks, ???????ng Nguy???n Xi???n, Ph?????ng Long Th???nh M???, Qu???n 9, H??? Ch?? Minh</p>
                            </div>
                            
                        </div>
                        <div className=" h-px bg-gray-200 "></div>

                        <div className="w-full">
                            <p className="font-bold text-[18px] tablet:text-[16px] mb-6">Th??ng tin chi ti???t</p>
                            
                            <div className={`w-full grid ${!isMobile ? "grid-cols-3" : "grid-cols-2"} gap-4 tablet:text-[16px]`}>
                                
                                    <div>
                                        <p className="text-gray-500">Ki???u ng?????i ????ng tin</p>
                                        <p className="text-lg">M??i gi???i</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">S??? ph??ng ng???</p>
                                        <p className="text-lg ">2</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">?????c ??i???m c??n h???</p>
                                        <p className="text-lg">C??n g??c</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">H?????ng c???a ban c??ng</p>
                                        <p className="text-lg">T??y</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">Th???i gian thu?? t???i thi???u</p>
                                        <p className="text-lg"> 6 th??ng</p>
                                    </div>
                               
                                
                                    <div>
                                        <p className="text-gray-500">Lo???i h??nh c??n h???</p>
                                        <p className="text-lg">Chung c??</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">S??? ph??ng v??? sinh</p>
                                        <p className="text-lg">1</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">Ti???n ?????t c???c</p>
                                        <p className="text-lg">14,5 tri???u</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">T???ng th???</p>
                                        <p className="text-lg">12</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">K?? thanh to??n</p>
                                        <p className="text-lg"> 1 th??ng/l???n</p>
                                    </div>
                               
                                
                                    <div>
                                        <p className="text-gray-500">Di???n t??ch</p>
                                        <p className="text-lg">250 m<sup>2</sup></p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">T??nh tr???ng n???i th???t</p>
                                        <p className="text-lg">?????y ?????</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">H?????ng c???a ch??nh</p>
                                        <p className="text-lg">????ng B???c</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">Block/Th??p</p>
                                        <p className="text-lg">S3.01</p>
                                    </div>
                                    
                                
                            </div>
                        </div>
                        <div className=" h-px bg-gray-200 "></div>

                        
                        <div className="w-full">
                            <p className="font-bold text-[18px] tablet:text-[16px] mb-4">Th??ng tin m?? t???</p>
                            <div className="tablet:text-[14px]">
                                <p >
                                    C???n cho thu?? c??n h??? cao c???p t???i Vinhomes Grand Park Qu???n 9 h?????ng m??t kh??ng b???t n???ng nhi???u 
                                    <br/>
                                    View ?????p, h?????ng m??t kh??ng b???t n???ng
                                    <br/>
                                    G???n l??ng ?????i h???c Th??? ?????c, ?????i h???c S?? ph???m k??? thu???t, FPT, khu c??ng ngh??? ?????i h???c Th??? ?????c, ?????i h???c cao,....
                                    <br/>
                                    ?????y ????? wifi, m??y l???nh,... thu?? c??n h??? cao c???p t???i Vinhomes Grand Park Qu???n 9 h?????ng m??t kh??ng
                                    <br/>
                                    ???????c h?????ng nhi???u ti???n ??ch: h??? b??i mi???n ph??, c??c s??n t???p th??? thao, khu vui ch??i gi???c t??? do, an ninh tr??? em n???i khu,....
                                    <br/>
                                    Gi??? gi???c t??? do, an ninh 24/7, c?? th??? pass ra v??o c???a <span className="bg-gray-200 p-1 px-2">0847 589 *** <button className="bg-purple-800 text-white rounded-md px-2">Hi???n s???</button></span>
                                    <br/>
                                    C?? c??c lo???i c??n:
                                    <br/>
                                    - Studio: 4tr-6tr5
                                    <br/>
                                    - 1pn: 5tr-7tr5
                                    <br/>
                                    - 2pn: 5tr5-10tr
                                    <br/>
                                    - 3pn: 7tr-15tr

                                </p>
                            </div>
                        </div>
                        <div className=" h-px bg-gray-200 "></div>

                        <div className="w-full">
                            <div className="flex">
                                <div className="flex gap-2">
                                    <div className="relative h-6 w-6">
                                        <Image layout="fill"  src="/location_icon.svg"/>
                                    </div>
                                    <p className="text-purple-500 font-semibold tablet:text-[16px]">Xem tr??n b???n ?????</p>
                                </div>
                                <div className="relative h-6 w-6 -rotate-90 ml-auto">
                                        <Image layout="fill"  src="/down_button_grey.svg"/>
                                </div>
                            </div>
                        </div>
                        <div className=" h-px bg-gray-200 "></div>

                        <div className="w-full ">
                            <p className="font-bold text-[18px] tablet:text-[16px]">T??m c??n h??? theo t??? kh??a</p>
                            <div className="w-full py-6">
                                <ul className="flex flex-wrap w-full gap-x-2 gap-y-5 tablet:text-[14px]">
                                    <li>
                                        <a className="bg-gray-200 px-4 py-2 rounded-full">Cho thu?? c??n h??? Vinhomes Grand Parks Qu???n 9</a>
                                    </li>
                                    <li>
                                        <a className="bg-gray-200 px-4 py-2 rounded-full">Cho thu?? c??n h??? Qu???n 9</a>
                                    </li>
                                    <li>
                                        <a className="bg-gray-200 px-4 py-2 rounded-full">Cho thu?? c??n h??? H??? Ch?? Minh</a>
                                    </li>
                                    <li>
                                        <a className="bg-gray-200 px-4 py-2 rounded-full">Cho thu?? c??n h??? Ph?????ng Long Th???nh M???</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="w-full border-solid border-gray-300 rounded-lg border-[1px] p-4 px-6 ">
                            <div className={`flex items-center ${isMobile && "flex-col gap-3"} justify-between`}>
                                <div className="flex gap-2 items-center">
                                    <div className="relative h-9 w-9 ">
                                        <Image layout="fill"  src="/verified.svg"/>
                                    </div>
                                    <div>
                                        <p className="text-[15px] tablet:text-[14px]"><span className="text-green-500">M?? tin 68095286 </span>n??y ???? ???????c duy???t ????ng</p>
                                        <p className="text-[15px] tablet:text-[14px]">N???u b???n g???p v???n ????? vui l??ng b??o vi ph???m </p>
                                    </div>
                                   
                                </div>
                                <button className={`bg-white ${isMobile && "w-full justify-center"} font-[500] flex gap-2 items-center text-black border-solid border-[1px] border-gray-300 p-1 px-3 rounded-lg`}>
                                        <div className="relative h-5 w-5">
                                            <Image  layout="fill" src="/report.svg"/>
                                        </div>
                                        B??o vi ph???m</button>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className={`col-span-2 ${isMobile && "hidden"}`}>
                        <div className="w-fit p-2 ml-auto flex items-center gap-2 font-[500] text-[12px] bg-slate-200 rounded-t-md">
                            <div className="relative h-4 w-4">
                                <Image  layout="fill" src="/nguoi_dang_tin.svg"/>
                            </div>
                            Ng?????i ????ng
                        </div>
                        <div className="shadow-e2  w-[85%] ml-auto bg-[#fefefe] p-4 py-6 rounded-l-md rounded-b-md">
                            <div className="relative w-auto h-auto space-y-4">
                                <div className="flex  space-x-4 ">
                                    <div className="relative w-auto h-full">
                                        <div  className="w-[4rem] h-[4rem] rounded-full  p-1 ring-2 ring-sky-300    overflow-hidden relative">
                                            <Image  layout="fill" objectFit="contain"  
                                            
                                                src="/user-toolbar-footer.svg"  
                                            /> 
                                        </div>
                                        <span className="-bottom-0 -right-0 bg-green-400 absolute h-4 w-4 rounded-full border-2 border-white dark:border-gray-800"></span>
                                    </div>
                                    <div>
                                        <h2 className="font-bold">V?? Nhi</h2>
                                        <p className="text-[14px]">9 tin ??ang rao</p>
                                        <p className="text-purple-500 text-[14px]">Xem trang c?? nh??n</p>
                                    </div>
                                </div>
                                <div className="w-full space-y-4">
                                    <button className="text-[12px] grid grid-cols-2 w-full tablet:text-[10px] p-3  gap-2  bg-purple-600 text-white font-semibold rounded-lg text-center  ">
                                        <div className="flex items-center gap-1">
                                            <div className="relative h-4 w-4">
                                                <Image  layout="fill" src="/phone_purple.svg"/>
                                            </div>
                                            0961 643 xxx
                                        </div>
                                        <div className=" tablet:text-[10px]">
                                            B???m ????? hi???n s???
                                        </div>
                                    </button>
                                    <button className="text-[12px] flex justify-center items-center w-full tablet:text-[10px] p-2 px-3  gap-2  bg-white border-solid border-gray-300 border-[1px] font-semibold rounded-lg text-center  ">
                                        
                                        <div className="relative h-4 w-4">
                                            <Image  layout="fill" src="/zalo.svg"/>
                                        </div>
                                        G???i y??u c???u    
                                    </button>
                                    <button className="text-[12px] flex justify-center items-center w-full tablet:text-[10px] p-2 px-3  gap-2  bg-white border-solid border-gray-300 border-[1px] font-semibold rounded-lg text-center  ">
                                        
                                        <div className="relative h-4 w-4">
                                            <Image  layout="fill" src="/zalo.svg"/>
                                        </div>
                                        Nh???n tin Zalo   
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>

            <div  className="home-row py-2 mb-4">
                <div className={`${!isMobile ? "w-9/12" : "w-full"} h-px bg-gray-200 `}></div>
            </div>

            <div className="home-row py-2 mb-6 ">
                <div  className="w-9/12 space-y-4 tablet:w-full bigger:w-7/12">
                    <div className="flex  w-full justify-between">

                  
                        <div className="flex flex-row items-center space-x-2">
                            <div  className="w-5 h-5 relative" >
                            <Image  layout="fill" objectFit="contain" src="/apartment_home.svg" className="w-5 h-5"/>
                            </div>
                            <h2 className="font-bold">Tin ????ng c??ng khu v???c</h2>
                        </div>



                        <div className="flex items-center">
                            <Link href="/tin-tuc">
                                <a className="text-sm font-bold text-purple-700 flex gap-2">Xem t???t c???
                                    <div className="h-5 w-4  relative">
                                        <Image  layout="fill"  src="/arrow-red.svg" className="h-5 w-8 rotate-180"/>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="overflow-x-auto  ">
                        <div className={`${!isMobile ? "grid grid-cols-4 gap-x-4 gap-y-8  bigger:gap-8" :"tablet:min-w-[900px] flex gap-x-4 bigger:gap-8"}   `}>
                            <CardHome data={data[0]} notchange={true}/>
                            <CardHome data={data[1]} notchange={true}/>
                            <CardHome data={data[2]} notchange={true}/>
                            <CardHome data={data[3]} notchange={true}/>
                        </div>
                    </div>
                
                </div>
            </div>
            <div className="home-row py-2 mb-6 ">
                <div  className="w-9/12 space-y-4 tablet:w-full bigger:w-7/12">
                    <div className="flex  w-full justify-between">

                  
                        <div className="flex flex-row items-center space-x-2">
                            <div  className="w-5 h-5 relative" >
                            <Image  layout="fill" objectFit="contain" src="/apartment_home.svg" className="w-5 h-5"/>
                            </div>
                            <h2 className="font-bold">Tin ????ng c??ng d??? ??n</h2>
                        </div>



                        <div className="flex items-center">
                            <Link href="/tin-tuc">
                                <a className="text-sm font-bold text-purple-700 flex gap-2">Xem t???t c???
                                    <div className="h-5 w-4  relative">
                                        <Image  layout="fill"  src="/arrow-red.svg" className="h-5 w-8 rotate-180"/>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="overflow-x-auto  ">
                        <div className={`${!isMobile ? "grid grid-cols-4 gap-x-4 gap-y-8  bigger:gap-8" :"tablet:min-w-[900px] flex gap-x-4 bigger:gap-8"}   `}>
                            <CardHome data={data[4]} notchange={true}/>
                            <CardHome data={data[5]} notchange={true}/>
                            <CardHome data={data[6]} notchange={true}/>
                            <CardHome data={data[7]} notchange={true}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
ProductDetailPage.getLayout = (page) => {
    return <PrimaryLayout name="productDetail">{page}</PrimaryLayout>;
  };
export default ProductDetailPage