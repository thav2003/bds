import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CardHome from '../../components/cards/card';
import PrimaryLayout from '../../components/layouts/PrimaryLayout';
import { data } from '../../fakedata';
import { DataProps } from '../../interfaces/interfaces';
import { NextPageWithLayout } from '../page';
type queryProps={
    id: string;
}

const queryData: queryProps[] = [
    {id:"1"},
    {id:"2"},
]
export const getStaticProps: GetStaticProps = async (context) => {
    const itemID = context.params?.id;
    
    const foundItem = queryData.find((item: queryProps) => itemID === item.id);
  
    if (!foundItem) {
      return {
        props: { hasError: true },
      }
  }
  
  return {
    props: {
      specificData: foundItem
    }
  }
}
export const getStaticPaths: GetStaticPaths = async () => {
    
    const path = queryData.map((item: queryProps) => ({ params: {  id: item.id }}))

    return {
        paths:path,
        fallback: true
    }
}
async function getData() {

    const data = JSON.parse(queryData.toString());
    
    return data;
}

type Props={
    hasError:boolean
    specificData:queryProps
}

const QueryPage:NextPageWithLayout<Props>=(props) => {
    const router = useRouter();
    const [isActive,setIsActive]=useState(true)
    const [isGrid,setIsGrid] = useState<boolean>(false)
    const [min,setMin]= useState(0)
    const [max,setMax]= useState(4)
    const [maxi,setMaxi]= useState(4)
    const [active,setActive] = useState(0)
    const [moretext,setMoreText]=useState(false)
    const pages=[] as any
    let start=0 
    data.forEach((item:DataProps,index:number)=>{
        if(index%18==0 ){
            start++;
        }
        if(pages.hasOwnProperty(start)){
            pages[start].push(item)
        }else{
        pages[start]=[item]
        }
       
        
    })
    useEffect(()=>{
        setMaxi(data.length/18-1)

    },[pages])
    console.log(pages,data)
    const moreText=()=>{
        setMoreText(!moretext)
    }
    
    const nextButton=()=>{
        if(active<max ){
            setActive(active+1)
        }else if(active<maxi){
            setMax(max+1)
            setMin(min+1)
            setActive(active+1)
        }
    }
    const prevButton=()=>{
        if(active>min){
            setActive(active-1)
        }else {
            setMax(max-1)
            setMin(min-1)
            setActive(active-1)
        }
    }
    const activeButton=(index:number)=>{
        if(index===max){
            setMax(max+1)
            setMin(min+1)
          
        }else if(index===min && min!==0){
            setMax(max-1)
            setMin(min-1)
        
        }
        setActive(index)
        
        
    }
    if (props.hasError) {
      return <h1>Error - please try another parameter</h1>
    }
    
    if (router.isFallback) {
        return <h1>Loading...</h1>
    }
    const RenderPage=()=>{
        return(
            <div>he</div>
        )
    }
    return(
        <div className="flex flex-col mt-[4.5rem]  justify-center  mb-4 ">
            
            
            <div className="home-row py-2 ">
                <div className=" w-9/12 flex flex-col  gap-2">
                    <ol className=" flex items-center text-sm ">
                        <li className="pathMenu ">
                        
                        <Link href="/" >
                            <a className="text-purple-600">Cho thuê căn hộ</a>
                        </Link>
                        </li>
                        <li> 
                            <a className="font-semibold">
                                {props.specificData.id === "1" ? "Hồ Chí Minh" : "Đà Nẵng"}
                            </a>
                        </li>
                    
                    </ol>
                    <h2 className="font-bold">Cho thuê căn hộ chung cư giá rẻ, chính chủ, mới nhất T7/2022</h2>
                </div>  
                
            </div>
            <div className="home-row pt-2 ">
                <div className="w-9/12  ">
                    <div className="w-[65%] space-y-4 relative">
                        <div className="flex flex-row items-end justify-between">
                            <p className="text-sm text-left ">Tìm thấy 256 căn hộ cho thuê</p>
                            <div className="gap-2 flex flex-shrink ">
                                <select name="location" id="locations"  className='filter w-[100px] pr-8 border-gray-400'>
                                        
                                    <option value="1">Mặc định</option>
                                    <option value="2">Thành phố Hồ Chí Minh</option>
                                    <option value="2">Opel</option>
                                    <option value="3">Audi</option>
                                </select>
                                <div className="flex border-solid border-[1px]  border-gray-400 rounded-md">
                                    <button onClick={()=>setIsGrid(false)} className="flex item-center bg-[#fefefe] border-solid border-r-[1px] rounded-l-md  border-gray-400">
                                        <img src={isGrid ? "/list_grey.svg" : "/list_selected.svg" } className={`${!isGrid ? "clickhover" :""} animationhover`}/>
                                    </button>
                                    <button onClick={()=>setIsGrid(true)} className="flex item-center rounded-r-md bg-[#fefefe]">
                                        <img src={isGrid ? "/grid_selected.svg" : "/grid_grey.svg"} className={`${isGrid ? "clickhover" :""} animationhover`}/>
                                    </button>
                                </div>
                                    
                             
                        </div>

                        </div>
                     
                         <div className={`  w-full  `} >
                            {pages.map((page:any, i:number) =>{
                                return(
                                <div key={i} className={`${active!==i-1 && "hidden"} ${isGrid ? "grid grid-cols-2" :" flex-col flex"} overflow-hidden gap-4 max-h-[3750px] relative"`}>
                                  
                                    {page.map((item:any,i:number)=>{
                                        return(
                                            <CardHome key={i} data={item} isVertical={!isGrid && true}/>
                                        )
                                    })}
                        
                                </div>
                                )
                            })}
                            {/* <div className={`${active!==0 && "hidden"} ${isGrid ? "grid grid-cols-2" :" flex-col flex"} overflow-hidden gap-4 max-h-[3750px] relative"`}>
                            <CardHome data={data[0]} isVertical={!isGrid && true}/>
                            <CardHome data={data[1]} isVertical={!isGrid && true}/>
                    
                            </div>
                            <div className={`${active!==1 && "hidden"}  ${isGrid ? "grid grid-cols-2" :" flex-col flex"} overflow-hidden gap-4 max-h-[3750px] relative`} >
                            
                            <CardHome data={data[0]} isVertical={!isGrid && true}/>
                            <CardHome data={data[1]} isVertical={!isGrid && true}/>
                            <CardHome data={data[2]} isVertical={!isGrid && true}/>
                            <CardHome data={data[3]} isVertical={!isGrid && true}/>
                            <CardHome data={data[4]} isVertical={!isGrid && true}/>
                            
                           
                            
                           
                    
                            </div>  */}
                            
                           
                    
                        </div>
                        
                        <div >
                            <ul className="flex justify-center items-center gap-2">
                               {active!==0 && <li className="w-10 h-10">
                                    <button onClick={prevButton} className="btn-slide">
                                        <img src="/previous-button-purple.svg" className="h-3 w-3"/>
                                    </button>
                                </li>}
                                {data.map((item, index) =>{
                                    if(index >=min && index <=max){
                                        return(
                                            <li key={index} className={`w-10 h-10 `}>
                                                <button onClick={()=>activeButton(index)} className={`btn-slide ${index===active && "btn-slide-active"}`}>{index+1}</button>
                                            </li>
                                        )
                                    }
                                })}
                                
                                <li className="w-10 h-10">
                                    <button onClick={nextButton} className="btn-slide">
                                        <img src="/next-button-pruple.svg" className="h-3 w-3"/>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            <div className="home-row">
                <div  className="w-9/12 space-y-4  tablet:w-full tablet:px-0">
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
QueryPage.getLayout = (page:any) => {
    return <PrimaryLayout>{page}</PrimaryLayout>;
  };
export default QueryPage;