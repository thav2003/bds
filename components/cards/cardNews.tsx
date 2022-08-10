export interface CardNews extends React.ComponentPropsWithoutRef<'div'> {
    
}


const CardNews:React.FC<CardNews>=()=>{
    return(
        <div id="cardNews" className=" flex h-[18rem] flex-col  pl-0 w-1/4 select-none space-y-2">
            <div className="flex-[6_1_0%] w-[85%] ">
               <img src="/banner.png" className="object-cover h-full w-full rounded-lg"/>
            </div>
            <div className="flex-[2_1_0%] w-[85%] ">
                <p>6 cách tiết kiệm không gian phòng trọ không thể bỏ qua</p>
            </div>
        </div>
    )


}

export default CardNews;