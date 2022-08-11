
import type { Card } from '../../interfaces/interfaces';

const CardHome:React.FC<Card>=(props)=>{
    const {data} = props
 
    return(
        <div  className="p-[0px_14px] w-1/4 tablet:w-full h-80 tablet:h-32 tablet:p-0 select-none mb-8 rounded-lg">
            <div  className="flex flex-col  tablet:flex-row h-full   w-full shadow  rounded-lg flex-grow space-y-2">
                <div className="flex-[1_1_0%]  tablet:p-2">
                    
                    <img src={data.image} className="object-cover w-full h-full rounded-t-lg tablet:rounded-lg"/>
                </div>
                <div className="divide-y tablet:divide-y-0  flex-[1_1_0%] tablet:flex-[2_1_0%]  tablet:p-2 tablet:px-0 flex flex-col px-2 ">
                    <div className=" flex-[2_1_0%] space-y-2 tablet:h-full tablet:gap-x-2 tablet:flex-none  tablet:space-y-0 tablet:grid">
                        <div className="flex flex-col tablet:col-start-1 tabletcol-end-2 tablet:col-span-2">

                        
                            <h3 className="text-base leading-1 font-semibold text-purple-600  ">{`${data.prices} triệu/${data.followBy}`}</h3>
                            <p className=" truncate whitespace-normal text-sm font-bold ">{data.title}</p>
                        </div>
                        <div className="  flex flex-row w-full  flex-wrap tablet:text-xs gap-2  tablet:gap-1 tablet:col-start-1 tabletcol-end-2 ">
                            <div className="flex flex-row gap-2 items-center tablet:gap-1">
                                <img src="/phong_ngu.svg" className="h-3 w-3 tablet:hidden"/>
                                <p> {data.room} pn</p>
                            </div>
                            <div className="flex flex-row gap-2 items-center tablet:gap-1">
                                <img src="/phong_tam.svg" className="h-3 w-3 tablet:hidden"/>
                                <p> {data.wc} wc</p>
                            </div>
                            <div className="flex flex-row gap-2 items-center tablet:gap-1">
                                <img src="/dien_tich.svg" className="h-3 w-3 tablet:hidden"/>
                                <p> {data.areas} m2</p>
                            </div>
                        </div>
                        <div className="flex flex-row  tablet:text-xs gap-1 items-center tablet:col-start-2 tabletcol-end-3">
                            <img src="/location_icon.svg" className="h-4 w-4 tablet:hidden"/>
                            <p className="text-xs line-clamp-1"> {data.address}</p>
                        </div>
                    </div>
                    
                    <div className="mt-2 py-2 flex-[1_1_0%] tablet:hidden">
                        <div className="flex flex-row items-center space-x-1">
                            <img src="/default-user.svg" className="h-7 w-7"/>
                            <p className="text-xs font-semibold"> {data.author}</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default CardHome;