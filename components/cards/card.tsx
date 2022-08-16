
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import type { Card } from '../../interfaces/interfaces';
const CardHome:React.FC<Card>=(props)=>{
    const {data,isVertical} = props
    const time="2 phút trước"
    const img=2
    const video=2
    return(
        <div  className={` tablet:w-full ${!isVertical ? "flex-[1_0_21%] h-80": "h-full "} tablet:h-[40rem] tablet:p-0 select-none  rounded-lg`}>
            <div  className={`flex ${!isVertical ? "flex-col" : "flex-row p-3 h-[12rem]"} tablet:p-3 gap-2 tablet:h-full  tablet:flex-row h-full   w-full shadow  animationhover rounded-lg flex-grow` }>
                <div className={` ${!isVertical ? "flex-[1_0_55%]" : "flex-[1_0_20%] "} tablet:flex-[1_0_30%]  relative  indicator`}>
                    {!isVertical && <div className=" absolute tablet:hidden z-[60] bottom-2 left-2 opacity-90">
                        <div className="gap-2 flex ">
                            <div className="bg-gray-700  rounded-md p-1  flex items-end">
                                <div className="flex  items-center gap-1">
                                    <div className="h-5 w-3 relative">
                                        <Image layout='fill' src="/video_thumb_white.svg" className="h-5 w-3 rounded-md mb-[2px]"/>
                                    </div>
                                    {video && <p className="text-white opacity-80 cardText ">{video}</p>}
                                </div>
                               
                            </div>
                            <div className="bg-gray-700 rounded-md p-1 flex items-end" >
                                <div className="flex  items-center gap-1">
                                    <div className="h-4 w-3 relative">
                                        <Image layout='fill' src="/images_thumb_white.svg" className="h-4 w-3 rounded-md"/>
                                    </div>
                                    {img && <p className="text-white opacity-80 cardText">{img}</p>}
                                </div>
                            </div>
                        </div>
                    </div>}
                    <Carousel slideInterval={5000} indicators={true} >
                        <div className="w-full h-full reative">
                            <Image layout='fill' src={data.image} className="object-cover w-full h-full rounded-t-lg tablet:rounded-lg"/>
                        </div>
                        <div className="w-full h-full reative">
                            <Image layout='fill' src={data.image} className="object-cover w-full h-full rounded-t-lg tablet:rounded-lg"/>
                        </div>
                        <div className="w-full h-full reative">
                            <Image layout='fill' src={data.image} className="object-cover w-full h-full rounded-t-lg tablet:rounded-lg"/>
                        </div>
                        <div className="w-full h-full reative">
                            <Image layout='fill' src={data.image} className="object-cover w-full h-full rounded-t-lg tablet:rounded-lg"/>
                        </div>
                        <div className="w-full h-full reative">
                            <Image layout='fill' src={data.image} className="object-cover w-full h-full rounded-t-lg tablet:rounded-lg"/>
                        </div>
                       
                       
                    </Carousel>
                    
                </div>
                <div className="divide-y w-full  flex flex-col justify-between tablet:divide-y-0 p-1 overflow-hidden  flex-[1_0_45%] tablet:flex-[2_0_70%]   tablet:px-0  px-2 ">
                    <div className=" cardTitle flex flex-col justify-between tablet:h-full tablet:gap-x-2 tablet:flex-none  tablet: ">
                        <div className="flex flex-col ">

                        
                            <h3 className="cardHead text-base leading-1 font-semibold text-purple-600  ">{`${data.prices} triệu/${data.followBy}`}</h3>
                            <p className="cardTitle truncate whitespace-normal text-sm font-bold ">{data.title}</p>
                        </div>
                        <div className="  flex  w-full  flex-wrap tablet:text-xs gap-1   ">
                            <div className="flex flex-row gap-2 items-center tablet:gap-1">
                                <div className="h-3 w-3 tablet:hidden relative">
                                    <Image layout='fill' src="/phong_ngu.svg" className="h-3 w-3 tablet:hidden"/>
                                </div>
                                <p className="cardInfo"> {data.room} pn</p>
                            </div>
                            .
                            <div className="flex flex-row gap-2 items-center tablet:gap-1">
                                <div className="h-3 w-3 tablet:hidden relative">
                                    <Image layout='fill' src="/phong_tam.svg" className="h-3 w-3 tablet:hidden"/>
                                </div>
                                <p className="cardInfo"> {data.wc} wc</p>
                            </div>
                            .
                            <div className="flex flex-row gap-2 items-center tablet:gap-1">
                                <div className="h-3 w-3 tablet:hidden relative">
                                    <Image layout='fill' src="/dien_tich.svg" className="h-3 w-3 tablet:hidden"/>
                                </div>
                                <p className="cardInfo"> {data.areas} m2</p>
                            </div>
                            <div className="flex flex-row  truncate tablet:text-xs gap-2 items-center tablet:col-start-2 tablet:col-end-3">
                                <div className="h-3 w-3 tablet:hidden relative">
                                    <Image layout='fill' src="/location_icon.svg" className="h-3 w-3 tablet:hidden"/>
                                </div>
                                <p className="text-xs line-clamp-1 "> {data.address}</p>

                            </div>
                        </div>
                    
                    </div>
                    
                    <div className="pt-1.5 pb-2.5 tablet:hidden flex justify-between items-center">
                        <div className="flex flex-row items-center space-x-1">
                            <div className="h-5 w-5 relative">
                                <Image layout='fill' src="/default-user.svg" className="h-5 w-5"/>
                            </div>
                            <p className="cardAuthor font-semibold"> {data.author}</p>
                        </div>
                        <div>
                            <p className="cardTime">{time}</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default CardHome;