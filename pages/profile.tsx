import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import CardHome from '../components/cards/card';
import ContactForm from '../components/forms/formcontact';
import PrimaryLayout from '../components/layouts/PrimaryLayout';
import { data } from '../fakedata';
import useDevice from '../hooks/useDevice';
import { NextPageWithLayout } from '../page';
let start=0 
const pages=[] as any
data.forEach((item:any,index:number)=>{
    if(index%18==0 ){
        start++;
    }
    if(pages.hasOwnProperty(start)){
        pages[start].push(item)
    }else{
    pages[start]=[item]
    }
   
    
})
const PageProfile:NextPageWithLayout=()=>{
    const {isMobile}=useDevice()
    const [isGrid,setIsGrid] = useState<boolean>(false)
    const [min,setMin]= useState(0)
    const [max,setMax]= useState(4)
    const [maxi,setMaxi]= useState(data.length/18-1)
    const [active,setActive] = useState(0)
    const [moretext,setMoreText]=useState(false)
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
    return(
        <div className={`flex flex-col   justify-center    bg-slate-50 `}>
            <div className="home-row py-4 ">
                <div className={`${!isMobile ? "w-9/12" : "w-full"} flex flex-col  gap-2`}>
                    <ol className=" flex items-center text-sm ">
                        <li className="pathMenu ">
                        
                        <Link href="/" >
                            <a className="text-purple-600">Trang chủ</a>
                        </Link>
                        </li>
                        <li> 
                            <a className="font-semibold">
                              Trang cá nhân của XXX
                            </a>
                        </li>
                    
                    </ol>
                  
                </div>  
                
            </div>
            <div className="home-row py-4 bg-white">
                <div className={`${!isMobile ? "w-9/12" : "w-full"}  flex justify-between gap-[6rem]`}>
                    <div className="relative flex-[1_0_50%] flex w-auto auto gap-5">
                        <div  className="w-[40%] h-[8rem] rounded-full p-1 flex   overflow-hidden relative">
                            <Image width="100%" height="100%" layout="fill"   objectFit="contain"
                                
                                src="/user-toolbar-footer.svg" 
                            /> 
                           
                        </div>
                        <div className="space-y-2 w-full pr-10">
                            <h1 className="font-medium">Nguyễn Văn Nam</h1>
                            <p className="text-[14px]">Ngày tham gia XXX</p>
                            <p className="flex items-center gap-1"><span className=" bg-green-400  h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800"></span>Đang hoạt dộng</p>
                            <div className="flex gap-4">
                                <button className="text-[14px] bg-purple-600 text-white font-semibold rounded-lg text-center w-[50%] p-1">viber</button>
                                <button className="text-[14px] bg-white border-solid border-[1.5px] border-gray-200 font-semibold rounded-lg text-center w-[50%] p-1">Nhắn tin Zalo</button>
                            </div>

                        </div>
                    </div>
                    <div className="flex-[1_0_50%] space-y-2">
                        <p><span>Địa chỉ</span> xxxx</p>
                        <p><span>Email</span> xxxx</p>
                        <p><span>Facebook</span> xxxx</p>
                    </div>
                </div>
            </div>
            <div className="home-row pt-2 bg-white">
            <div className={`${!isMobile ? "w-9/12" : "w-full"}  flex gap-8`}>
                    <div className={`${!isMobile ? "w-[65%]" : "w-full"} space-y-4 relative`}>
                        <div className="flex flex-row items-end justify-between">
                            <p className="text-sm text-left ">Tìm thấy 6 tin cho thuê căn hộ </p>
                            <div className="gap-2 flex flex-shrink ">
                            <select name="location" id="locations"  className='filter w-[100px] tablet:hidden pr-8 border-gray-400'>
                                    
                                <option value="1">Mặc định</option>
                                <option value="2">Thành phố Hồ Chí Minh</option>
                                <option value="2">Opel</option>
                                <option value="3">Audi</option>
                            </select>
                            <div className="flex border-solid border-[1px]  border-gray-400 rounded-md">
                                <button onClick={()=>setIsGrid(false)} className="flex  item-center bg-[#fefefe] border-solid border-r-[1px] rounded-l-md  border-gray-400">
                                    <div className={`${isGrid ? "clickhover" :""} animationhover relative w-10 h-10`}>
                                        <Image width="100%" height="100%" layout="fill"   src={isGrid ? "/list_grey.svg" : "/list_selected.svg" } />
                                    </div>
                                </button>
                                <button onClick={()=>setIsGrid(true)} className="flex item-center rounded-r-md bg-[#fefefe]">
                                    <div className={`${isGrid ? "clickhover" :""} animationhover relative w-10 h-10`}>
                                    <Image width="100%" height="100%" layout="fill" objectFit="contain"  src={isGrid ? "/grid_selected.svg" : "/grid_grey.svg"}  />
                                    </div>
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
                                    <div className="h-3 w-3 relative">
                                        <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/previous-button-purple.svg" />
                                    </div>
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
                                        <div className="h-3 w-3 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/next-button-pruple.svg" />
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                   {!isMobile && <div className="w-[35%] gap-2 flex flex-col ">
                        
                        <p className="font-medium">Yêu cầu tư vấn</p>
                      
                        <div className="bg-gray-100 rounded-lg">

                            <ContactForm hidden={true}/>
                        </div>
                   </div>}
                </div>
            </div>
        
          
      </div>
    )
}
PageProfile.getLayout = (page) => {
    return <PrimaryLayout name="profile">{page}</PrimaryLayout>;
  };
export default PageProfile;