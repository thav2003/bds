
import { Carousel } from 'flowbite-react';

import { useEffect, useState } from 'react';
import CardHome from '../../components/cards/card';
import CardHome2 from '../../components/cards/card2';
import CardNews from '../../components/cards/cardNews';
import { data } from '../../fakedata';
import useDevice from '../../hooks/useDevice';
import type { HomeDesktopProps } from '../../interfaces/interfaces';
const HomeDesktop:React.FC<HomeDesktopProps>=()=>{
    const [IsMobile,setIsMobile] =useState(false)
    const [moretext,setMoreText]=useState(false)
    
    const moreText=()=>{
        setMoreText(!moretext)
    }

    useEffect(()=>{
   
        const {isMobile} =useDevice()
        if(isMobile)
            setIsMobile(true)
    },[])
    
    
    
    return(
        <div className="flex flex-col justify-center placeholder-red-500 mb-4">
            <div className="home-row tablet:hidden">
                <div className="w-8/12 ">
                   
                    <div className="h-56 laptop:h-40 ">
                   
                        <Carousel slideInterval={5000} indicators={true}>
                  
                            <img
                            src="/banner.png"
                            alt="..."
                            />
                            <img
                            src="/banner.png"
                            alt="..."
                            />
                            <img
                            src="/banner.png"
                            alt="..."
                            />
                            <img
                            src="/banner.png"
                            alt="..."
                            />
                            <img
                            src="/banner.png"
                            alt="..."
                            />
                        </Carousel>
                    </div>
 
                </div>
            </div>
            
      
     
    
            <div className="home-row">
                <div className="w-8/12 text-center tablet:w-full tablet:text-left">
                    <h1 className="font-bold">Cho thuê căn hộ chung cư giá rẻ, chính chủ, mới nhất T7/2022</h1>
                    <p className="text-sm text-left">Cho thuê căn hộ chung cư mini: Giá rẻ, chất lượng, chính chủ, đầy đủ nội thất, an ninh đảm bảo. Đăng tin cho thuê căn hộ hiệu quả với 1.000.000+ truy cập mỗi tháng</p>
                </div>
            </div>
            
            <div className="home-row "> 
                <div className="w-8/12 space-y-4  tablet:w-full   "> 
                    <div className="flex flex-row items-center space-x-2">
                        <img src="apartment_home.svg" className="w-5 h-5"/>
                        <h2>Tìm kiếm nhiều nhất</h2>
                    </div>
                    <div className="bg-slate-100 py-4  shadow-xl   rounded-lg  tablet:overflow-x-auto tablet:overflow-y-hidden">
                        <div className="tablet:min-w-[900px]w-8/12 flex  flex-row">
                            <div className=" flex-[5_1_0%] ">
                                <div className=" flex space-x-3 ">
                                    <div className="w-[45%]  h-48 rounded-md relative">
                                        <img src="/banner.png" className="object-cover w-full h-full rounded-md shadow opacity-80" />
                                        <div  className="absolute bottom-2 left-2">
                                            <h3>Hà Nội</h3>
                                            <p className="text-sm">49.576 tin đăng</p>
                                        </div>
                                        
                                    </div>
                                    <div className="w-[45%]  h-48 rounded-md relative">
                                        <img src="/banner.png" className="object-cover w-full h-full rounded-md shadow opacity-80" />
                                        <div  className="absolute bottom-2 left-2">
                                            <h3>Hồ Chí MInh</h3>
                                            <p className="text-sm">69.524 tin đăng</p>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                            <div className=" flex-[7_1_0%]   flex flex-row tablet:gap-4">
                                <div className="flex-[2_1_0%] tablet:flex-none">
                                    <h4>Dự án nổi bật</h4>
                                    <div className="flex flex-row">
                                        <img src="/arrow-down-red.svg" className="-rotate-90 w-5 h-5"/>
                                        <p>Cho thuê căn hộ The Sun</p>
                                    </div>
                                </div>
                                <div className="flex-[2_1_0%] tablet:flex-none">
                                    <h4>Khu vực nổi bật</h4>
                                    <div className="flex flex-row">
                                        <img src="/arrow-down-red.svg" className="-rotate-90 w-5 h-5"/>
                                        <p>Cho thuê căn hộ The Sun</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-row">
                <div  className="w-8/12 space-y-4 tablet:w-full">
                    <div className="flex flex-row items-center space-x-2">
                        <img src="apartment_home.svg" className="w-5 h-5"/>
                        <h2>Cho thuê chung cư mới nhất</h2>
                    </div>
                    <div className="flex flex-row flex-wrap gap-4 tablet:flex-col">
                        {IsMobile ? <CardHome2 data={data[0]}/> :  <CardHome data={data[0]}/>}
                        <CardHome data={data[1]}/>
                        <CardHome data={data[2]}/>
                        <CardHome data={data[3]}/>
                        {IsMobile ? <CardHome2 data={data[4]}/> :  <CardHome data={data[4]}/>}
                        <CardHome data={data[5]}/>
                        <CardHome data={data[6]}/>
                        <CardHome data={data[7]}/>
                    </div>
                </div>
            </div>
            <div className="home-row ">
                <div  className="w-8/12 space-y-4 tablet:w-full  overflow-hidden">
                    <div className="flex  w-full justify-between">

                  
                        <div className="flex flex-row items-center space-x-2">
                            <img src="apartment_home.svg" className="w-5 h-5"/>
                            <h2>Tin tức</h2>
                        </div>
                     
                        
                        
                        <div className="flex items-center">
                            <a className="text-sm font-bold text-purple-700 flex ">Đến trang tin tức
                                <img src="/arrow-left.svg" className="h-5 w-8 rotate-180"/>
                            </a>
                            
                        </div>
                    </div>
                    <div className="tablet:overflow-x-auto tablet:overflow-y-hidden">
                        <div className="w-full  tablet:min-w-[900px] flex border-b-2 border-gray-100 flex-wrap ml-3 ">
                            <CardNews />
                            <CardNews />
                            <CardNews />
                            <CardNews />
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-row">
                <div  className="w-8/12 space-y-4 px-6 tablet:w-full tablet:px-0">
                    <div className="w-full bg-[#fefefe] p-5  shadow-md border-[1px] border-solid border-gray-100 rounded-lg">
                        <div className="flex justify-center items-center">
                            <h2 className="font-bold">CHO THUÊ CĂN HỘ CHUNG CƯ - CHO THUÊ CHUNG CƯ MINI</h2>
                        </div>
                       <div className="relative flex flex-col  w-full h-auto gap-7 py-5">
                            {!moretext && <div className="absolute w-full   tablet:bottom-[4.5rem]    bg-gray-50 text-hidden bottom-[4.75rem] opacity-40"><br/><br/></div>}
                            <p className={`${!moretext && "line-clamp-[12]"}  whitespace-normal truncate`}>
                                Thị trường <span className="font-semibold">CHO THUÊ CĂN HỘ</span> chung cư hiện nay đang diễn ra rất là sôi động, nhu cầu thuê căn hộ ngày càng tăng của những gia đình trẻ, những bạn rẻ đang đi làm hoặc thậm chí là những bạn sinh viên đang ngày càng tăng lên rat71 nhiều bởi những tiện ích mang lại là rất nhiều.
                                <br/>
                                <br/>
                                Việc có rất nhiều những căn hộ, căn hộ chung cư được xây dựng và cho thuê sẽ giúp cho bạn có thể dễ dàng tìm được những căn hộ cho thuê, tuy nhiên không phải cũng có thể biết và chọn mình được căn hộ phù hợp nhất.
                                <br/>
                                <br/>
                                Thuecanho123.com chia sẻ những kinh nghiệm, lưu ý để giúp bạn có thể chọn thuê căn hộ tốt nhất.
                                <br/>
                                <br/>
                                <span className="leading-2 font-bold">Những điều lưu ý trước khi thuê căn hộ chung cư</span>
                                <br/>
                                <br/>
                                Hiện nay việc thuê căn hộ, chung cư đang rất được nhiều người ưu chuộng và người mới tìm hiểu.Bởi mang nhiều tiện ích tích hợp trong một căn hộ như: Cửa hàng tiện lợi, Khu Trung tâm Thương mại, Hộ bơi, phòng GYM Yoga, Khu nhà trẻ, Khu vườn cây xanh đi bộ ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

                            </p>
                           {!moretext ? <button onClick={moreText} className="text-purple-600">Xem thêm</button> :  <button onClick={moreText} className="text-purple-600">Rút gọn</button>}
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeDesktop;