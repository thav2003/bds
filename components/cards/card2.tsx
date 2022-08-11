import type { Card } from '../../interfaces/interfaces';
const CardHome2:React.FC<Card>=(props)=>{
    const {data} = props
    return(
        <div  className=" w-full select-none h-[17rem] mb-8">
             <div  className="flex flex-col   h-full  w-full shadow  rounded-lg flex-grow ">
                <div className="w-full flex-grow grid gap-2">
                    <div className="col-start-1 col-end-4 row-span-2">
                        <img src={data.image} className="object-cover w-full h-full rounded-l-lg rounded-b-[0px]  "/>
                    </div>
                    <div className="col-start-4 col-end-6">
                        <img src={data.image} className="object-cover w-full h-full rounded-r-lg rounded-b-[0px]"/>
                    </div>
                    <div className="col-start-4 col-end-6">
                        <img src={data.image} className="object-cover w-full h-full  "/>
                    </div>
                   
                    
                </div>
                <div className="w-full p-2 pt-4 ">
                    <div className="  tablet:h-full tablet:gap-x-2   tablet:space-y-4 tablet:grid">
                        <div className="flex flex-col tablet:col-start-1 tabletcol-end-2 tablet:col-span-2">

                        
                            <h3 className="text-base  font-semibold text-purple-600  ">{`${data.prices} triệu/${data.followBy}`}</h3>
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
                </div>
            </div>
        </div>
    )
    
}

export default CardHome2;