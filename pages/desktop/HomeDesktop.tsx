
import { Carousel } from 'flowbite-react';


import CardHome from '../../components/cards/card';
import CardNews from '../../components/cards/cardNews';
import { data } from '../../fakedata';
export interface HomeDesktopProps extends React.ComponentPropsWithoutRef<'div'> {}
const HomeDesktop:React.FC<HomeDesktopProps>=()=>{
    
    

    
    
    
    return(
        <div className="flex flex-col justify-center">
            <div className="home-row tablet:hidden">
                <div className="w-11/12 ">
                    
                    <div className="h-56 laptop:h-40">
                        <Carousel slideInterval={5000}>
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
                <div className="w-10/12 text-center tablet:w-full tablet:text-left">
                    <h2 className="font-bold">Cho thuê căn hộ chung cư giá rẻ, chính chủ, mới nhất T7/2022</h2>
                    <p className="text-sm">Cho thuê căn hộ chung cư mini: Giá rẻ, chất lượng, chính chủ, đầy đủ nội thất, an ninh đảm bảo. Đăng tin cho thuê căn hộ hiệu quả với 1.000.000+ truy cập mỗi tháng</p>
                </div>
            </div>
            
            <div className="home-row tablet:max-w-6xl"> 
                <div className="w-11/12 space-y-4 tablet:w-full overflow-x-scroll"> 
                    <div className="flex flex-row items-center space-x-2">
                        <img src="apartment_home.svg" className="w-5 h-5"/>
                        <h2>Tìm kiếm nhiều nhất</h2>
                    </div>
                    <div className="bg-slate-100 py-4 flex flex-row  shadow-lg rounded-lg">
                        <div className=" flex-[5_1_0%]">
                            <div className="flex-row flex space-x-3">
                                <div className="w-[45%] h-48 rounded-md relative">
                                    <img src="/banner.png" className="object-cover w-full h-full rounded-md shadow opacity-80" />
                                    <div  className="absolute bottom-2 left-2">
                                        <h3>Hà Nội</h3>
                                        <p className="text-sm">49.576 tin đăng</p>
                                    </div>
                                    
                                </div>
                                <div className="w-[45%] h-48 rounded-md relative">
                                    <img src="/banner.png" className="object-cover w-full h-full rounded-md shadow opacity-80" />
                                    <div  className="absolute bottom-2 left-2">
                                        <h3>Hồ Chí MInh</h3>
                                        <p className="text-sm">69.524 tin đăng</p>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                        <div className=" flex-[7_1_0%] flex flex-row">
                            <div className="flex-[2_1_0%] ">
                                <h4>Dự án nổi bật</h4>
                                <div className="flex flex-row">
                                    <img src="/arrow-down-red.svg" className="-rotate-90 w-5 h-5"/>
                                    <p>Cho thuê căn hộ The Sun</p>
                                </div>
                            </div>
                            <div className="flex-[2_1_0%]">
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
            <div className="home-row">
                <div  className="w-11/12 space-y-4">
                    <div className="flex flex-row items-center space-x-2">
                        <img src="apartment_home.svg" className="w-5 h-5"/>
                        <h2>Cho thuê chung cư mới nhất</h2>
                    </div>
                    <div className="flex flex-row flex-wrap">
                        <CardHome data={data[0]}/>
                        <CardHome data={data[1]}/>
                        <CardHome data={data[2]}/>
                        <CardHome data={data[3]}/>
                        <CardHome data={data[4]}/>
                        <CardHome data={data[5]}/>
                        <CardHome data={data[6]}/>
                        <CardHome data={data[7]}/>
                    </div>
                </div>
            </div>
            <div className="home-row pt-0">
                <div  className="w-11/12 space-y-4">
                    <div className="flex items-center w-full">

                  
                        <div className="flex flex-row items-center space-x-2">
                            <img src="apartment_home.svg" className="w-5 h-5"/>
                            <h2>Tin tức</h2>
                        </div>
                     
                        <div className="p-0 m-0 h-[2px] w-[20px] bg-gray-200 rotate-90"></div>
                        
                        
                        <div className="flex items-center">
                            <a className="text-sm font-bold text-purple-700 flex ">Đến trang tin tức
                                <img src="/arrow-left.svg" className="h-5 w-8 rotate-180"/>
                            </a>
                            
                        </div>
                    </div>
                    <div>
                        <div className="w-full flex border-b-2 border-gray-100 flex-wrap ml-3 ">
                            <CardNews />
                            <CardNews />
                            <CardNews />
                            <CardNews />
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-row">
                <div  className="w-11/12 space-y-4">
                    he
                </div>
            </div>
        </div>
    )
}

export default HomeDesktop;