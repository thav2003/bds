import type { DataProps } from '../../fakedata';
export interface Card extends React.ComponentPropsWithoutRef<'div'> {
    data:DataProps
}

const CardHome:React.FC<Card>=(props)=>{
    const {data} = props
 
    return(
        <div id="card" className="p-[0px_14px] w-1/4 select-none">
            <div  className="flex flex-col h-80 w-full shadow mb-8 rounded flex-grow space-y-2">
                <div className="flex-grow-[2] ">
                    
                    <img src={data.image} className="object-cover w-full h-full rounded-t"/>
                </div>
                <div className="divide-y flex-shrink   flex flex-col px-2 ">
                    <div className=" flex-[2_1_0%]  space-y-2">
                        
                        <h3 className="text-base font-semibold text-purple-600 ">{`${data.prices} triệu/${data.followBy}`}</h3>
                        <p className=" truncate whitespace-normal text-sm font-bold ">{data.title}</p>
                        <div className="flex flex-row space-x-4  flex-wrap ">
                            <div className="flex flex-row space-x-2 items-center">
                                <img src="/phong_ngu.svg" className="h-3 w-3"/>
                                <p> {data.room} pn</p>
                            </div>
                            <div className="flex flex-row space-x-2 items-center ">
                                <img src="/phong_tam.svg" className="h-3 w-3"/>
                                <p> {data.wc} pn</p>
                            </div>
                            <div className="flex flex-row space-x-2 items-center ">
                                <img src="/dien_tich.svg" className="h-3 w-3"/>
                                <p> {data.wc} pn</p>
                            </div>
                        </div>
                        <div className="flex flex-row space-x-1 items-center  ">
                            <img src="/location_icon.svg" className="h-4 w-4"/>
                            <p className="text-xs"> {data.address}</p>
                        </div>
                    </div>
                    
                    <div className="mt-2 py-1 flex-[1_1_0%]">
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