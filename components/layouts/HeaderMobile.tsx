import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import type { IHeader } from '../../interfaces/interfaces';
import RangeSlider from '../button/rangeslider';
type PopUpProps = {
    label?:string,
    page:string,
    className?:string,
    filter?:boolean,
    img?:string,
    children: React.ReactNode; // 👈️ type children
};
type DropProps={
    label?:string,
    value?:string,
    children: React.ReactNode;
}
const RenderPopUp=(props: PopUpProps)=>{
    const [isVisible,setIsVisible] = useState(true)

    const onOpen=()=>{
        setIsVisible(false)
      }
      const onClose=()=>{
        setIsVisible(true)
      }
      useEffect(() => {
        if(!isVisible){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'unset';
        }
        
     }, [isVisible ]);
    return(
        <div>
            <button type="button" className={` text-placeholder
                    placeholder:text-slate-400  relative  text-left
                    bg-white rounded  py-2  ${!props.img ? "pl-3 pr-1 justify-between" : "pr-3 pl-2 gap-2"}   flex   items-center
                    shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                    border border-slate-300   ${props.className}`}  
                    onClick={onOpen}
            >
                {props.img && 
                    <div  className="h-6 w-4  relative">
                        <Image width="100%" height="100%" layout="fill" objectFit="contain"  src={props.img} />
                    </div>
                }
                {props.label}
               
                {!props.img && 
                    <div className="relative ">
                        <div className="relative  h-6 w-6">
                            <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/down_button_grey.svg" />
                        </div>
                    </div>
                }
                {props.img ==="/khu_vuc.svg" && 
                    <div className="relative ml-auto">
                        <div className="relative  h-6 w-6">
                            <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/down_button_grey.svg" />
                        </div>
                    </div>
                }
            </button>
            <div className={`${isVisible ? 'hidden' : 'block'} modal  flex justify-center items-center `}>
                <div className="modal-content  tablet:w-full tablet:h-full   ">
                    <div className="w-full  bg-slate-50 flex flex-col  items-center      ">
                        {/* header */}
                        <div  className={`w-full mb-4  bg-white flex flex-col relative justify-center items-center py-5  shadow select-none gap-4 `}>
                            <div className="absolute flex inset-x-0 bottom-[25px] px-4  w-[50px]  ">
                                <a onClick={onClose}>
                                    <div className="w-4 h-4 relative cursor-pointer">
                                    <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/arrow-left.svg" />
                                    </div>
                                </a>
                                
                            </div>

                            <h3 className="w-full text-center text-xl font-bold">{props.page}</h3>
                            
                            { !props.filter ?
                            <div className="absolute flex  right-0 bottom-[25px]  px-4    w-[50px]  ">
                                <a onClick={onClose}>
                                    <div className="w-4 h-4 relative cursor-pointer">
                                        <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/closed-black.svg" />
                                    </div>
                                </a>
                                
                            </div>
                            :
                            <div className="absolute flex  right-0 bottom-[25px]  px-4    w-[5rem]  ">
                                <button onClick={onClose} className="text-pink-600 w-auto h-4">Đặt lại</button>
                            </div>
                            }
                        </div>
                        {props.children}
                    </div>
                </div>
                
            </div>
        </div> 
    )
}
const RenderDrop=(props:DropProps)=>{
    const [isHidden,setIsHidden] = useState(true)


    const changeDrop=()=>{
        setIsHidden(!isHidden)
    }
    return(
        <div >
            <button type="button" className={` text-placeholder
                    placeholder:text-slate-400  relative  text-left
                        rounded   py-4 px-5  flex   items-center
                        group
                        w-full h-full `}  
                        onClick={changeDrop}
            >
                <p className="font-bold w-[70%]">{props.label}</p>
            
        
                <div className="relative ml-auto w-fit flex items-center">
                    <p className="text-[12px] text-purple-500">{props.value}</p>
                    <div className={`relative ${isHidden && "-rotate-90"} transition-transform duration-700 transition-a h-6 w-6`}>
                        <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/down_button_grey.svg" />
                    </div>
                </div>
                
                
            </button>
            <div className={`${isHidden && "hidden"} transition delay-700 duration-300 ease-in-out`}>
                {props.children}
            </div>
        </div>
    )
}
const cities=new Array(120).fill({
    name:"Hồ Chí Minh" 
})
const HeaderMobile: React.FC<IHeader>=({ ...headerProps })=>{
    const router = useRouter()
    const [popUp,setPopUp] = useState<number>(1)
    const [change,setChange]= useState('')
   

    return(
        <header 
            {...headerProps}
            className={`w-full flex flex-col relative items-center py-5 shadow z-10 select-none gap-4`}>
           
            {(router.pathname!=='/') &&
                <div className="absolute  inset-x-0   px-4  w-[50px]  ">
                    <a onClick={()=>{
                        router.back()
                        
                        }}
                        className=""
                    >
                        <div className="w-[1.25rem]  h-[3rem] relative">
                            <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/arrow-left.svg" />
                        </div>
                    </a>
                    
                </div>
            }
            {router.pathname!=='/query/[id]' ?
                <div className=" w-11/12 flex items-center justify-between">
                    <div className="flex flex-grow items-center justify-center">
                        <Link href="/">
                            <a >
                                <div className="w-[10rem] h-[3rem] relative" >
                                    <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/logo.svg" alt="Logo"  />
                                </div>
                            </a>
                        </Link>
                    
                    </div>
                </div>
                :
                <div className="w-full flex pl-3 px-2">
                    <div className="flex pl-6 items-center ">
                        <Link href="/">
                            <a >
                                <div className="w-[6rem]  h-[3rem] relative" >
                                    <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/logo_small.svg" alt="Logo"  />
                                </div>
                            </a>
                        </Link>
                    
                    </div>
                    <div className="w-full relative">
                        <input type="text" className="w-full text-placeholder
                            placeholder:text-slate-400 
                            bg-gray-200  pl-3 py-2 pr-10
                            shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                            border border-slate-300 rounded-lg"
                            placeholder="Nhập địa điểm, dự án"
                            />

                        <div >
                            <button type="button" 
                                
                                className={`absolute z-[4] top-2 right-2 flex  items-center`}>
                                <div className="w-6 h-7 relative">
                                    <Image  layout="fill" objectFit="contain"   src="/search_pink.svg" />
                                </div>
                            
                            </button>
                        
                        </div>
                    </div>
                </div>
            }
            {router.pathname==='/query/[id]' && 
                <div>

                </div>
            }
            {router.pathname==='/' && 
                <>
                <div className="w-full   flex flex-row px-2   items-center flex-wrap gap-4">
                    <div className="w-full relative">
                        <input type="text" className="w-full text-placeholder
                            placeholder:text-slate-400 
                            bg-gray-200  pl-3 py-2 pr-10
                            shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                            border border-slate-300 rounded-lg"
                            placeholder="Nhập địa điểm, dự án"
                            />

                        <div >
                            <button type="button" 
                                
                                className={`absolute z-[4] top-2 right-2 flex  items-center`}>
                                <div className="w-6 h-7 relative">
                                    <Image  layout="fill" objectFit="contain"   src="/search_pink.svg" />
                                </div>
                            
                            </button>
                        
                        </div>
                    </div>
                    <div className="flex w-full  ">
                        <div className="relative w-[72%] ">
                                            
                            {/*chọn location*/}
                            <RenderPopUp label="Toàn quốc" className="w-full" page="Chọn khu vực" img="/khu_vuc.svg">
                                <div className="w-full  bg-slate-50 flex flex-col  items-center     rounded-lg ">
                                    {/*slug*/}
                                    <div className="w-full flex  px-5 pt-1 gap-3  bg-white">
                                        {popUp===1 ? 
                                            <div  className="cursor-pointer border-solid border-b-[1px] border-purple-600">
                                                <p className="text-purple-600">Tỉnh/Thành</p>
                                            </div>
                                            :
                                            <div className="cursor-pointer" onClick={()=>setPopUp(1)}>
                                                <p>Tỉnh/Thành</p>
                                            </div>
                                        }
                                        {popUp===2 ? 
                                            <div  className="cursor-pointer border-solid border-b-[1px] border-purple-600">
                                                <p className="text-purple-600">Quận/Huyện</p>
                                            </div>
                                            :
                                            <div className="cursor-pointer" onClick={()=>setPopUp(2)}>
                                                <p>Quận/Huyện</p>
                                            </div>
                                        }
                                        {popUp===3 ? 
                                            <div  className="cursor-pointer border-solid border-b-[1px] border-purple-600">
                                                <p className="text-purple-600">Phường/Xã</p>
                                            </div>
                                            :
                                            <div className="cursor-pointer" onClick={()=>setPopUp(3)}>
                                                <p>Phường/Xã</p>
                                            </div>
                                        }
                                
                                    </div>
                                    {/* body */}
                                    <div className={`${popUp===1 ? "flex" :"hidden"} w-full  flex-col   p-5 bg-white rounded-b-lg `}>
                                        <div className=" w-full flex flex-col  space-y-4  ">
                                            
                                            <div className="relative w-full">
                                                <input   placeholder="Chọn Tỉnh/Thành" type="text" onChange={e => setChange(e.target.value)}  value={change} autoComplete="off"
                                                    className="              
                                                        w-full text-placeholder
                                                        placeholder:text-slate-400  
                                                        bg-gray-100 pl-9 py-2 pr-10
                                                        shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                                                        border border-slate-300 rounded-lg"
                                                        />
                                                
                                                <button type="button" 
                                                    
                                                    className={`absolute z-[8] top-2 left-2 flex  items-center`}>
                                                    <div className="w-6 h-7 relative">
                                                        <Image  layout="fill" objectFit="contain"   src="/search_grey.svg" />
                                                    </div>
                                                
                                                </button>
                                            </div>
                                            <div className="overflow-y-auto h-[64vh]    w-full relative ">
                                                <ul className=" p-2 grid gap-1 ">
                                     
                                                    {cities.map((item:any,index:any):any=>{
                                                        return(
                                                            <Fragment key={index}>
                                                                <li className=" flex  items-center gap-2  text-base relative cursor-pointer  hover:text-purple-500 hover:bg-gray-200 hover:rounded-lg" 
                                                                >
                                                                    <input type="radio" id={"du_an"+index} name="du_an" className=" appearance-none
                                                                            border-[2px] border-gray-300  w-4 h-4 
                                                                            check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                                            checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                                                    <label htmlFor={"du_an"+index} className='font-[400] text-[14px] cursor-pointer w-full  py-2'>
                                                                        {item.name}
                                                                    
                                                                        <div className={` absolute z-[4] top-2 right-2 flex  items-center`}>
                                                                            <div className="w-4 h-7 relative -rotate-90 opacity-50">
                                                                                <Image  layout="fill" objectFit="contain"   src="/down_button_black.svg" />
                                                                            </div>
                                                                        </div>
                                                                    </label>
                                                                    
                                                                </li>
                                                                <div className=" h-px bg-gray-200 "></div>
                                                    
                                                            </Fragment>
                                                        )
                                                    })}
                                                        
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${popUp===2 ? "flex" :"hidden"} w-full  flex-col   p-5 bg-white rounded-b-lg `}>
                                        <div className=" w-full flex flex-col  space-y-4  ">
                                            
                                            <div className="relative w-full">
                                                <input   placeholder="Chọn Quận/Huyện" type="text" onChange={e => setChange(e.target.value)}  value={change} autoComplete="off"
                                                    className="              
                                                        w-full text-placeholder
                                                        placeholder:text-slate-400  
                                                        bg-gray-100 pl-9 py-2 pr-10
                                                        shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                                                        border border-slate-300 rounded-lg"
                                                        />
                                                
                                                <button type="button" 
                                                    
                                                    className={`absolute z-[8] top-2 left-2 flex  items-center`}>
                                                    <div className="w-6 h-7 relative">
                                                        <Image  layout="fill" objectFit="contain"   src="/search_grey.svg" />
                                                    </div>
                                                
                                                </button>
                                            </div>
                                            <div className="overflow-y-auto h-[64vh]    w-full relative ">
                                                <ul className=" p-2 grid gap-1 ">
                                     
                                                    {cities.map((item:any,index:any):any=>{
                                                        return(
                                                            <Fragment key={index}>
                                                                <li className=" flex  items-center gap-2  text-base relative cursor-pointer  hover:text-purple-500 hover:bg-gray-200 hover:rounded-lg" 
                                                                >
                                                                    <input type="radio" id={"du_an"+index} name="du_an" className=" appearance-none
                                                                            border-[2px] border-gray-300  w-4 h-4 
                                                                            check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                                            checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                                                    <label htmlFor={"du_an"+index} className='font-[400] text-[14px] cursor-pointer w-full  py-2'>
                                                                        {item.name}
                                                                    
                                                                        <div className={` absolute z-[4] top-2 right-2 flex  items-center`}>
                                                                            <div className="w-4 h-7 relative -rotate-90 opacity-50">
                                                                                <Image  layout="fill" objectFit="contain"   src="/down_button_black.svg" />
                                                                            </div>
                                                                        </div>
                                                                    </label>
                                                                    
                                                                </li>
                                                                <div className=" h-px bg-gray-200 "></div>
                                                    
                                                            </Fragment>
                                                        )
                                                    })}
                                                        
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${popUp===3 ? "flex" :"hidden"} w-full  flex-col   p-5 bg-white rounded-b-lg `}>
                                        <div className=" w-full flex flex-col  space-y-4  ">
                                            
                                            <div className="relative w-full">
                                                <input   placeholder="Chọn Phường/Xã" type="text" onChange={e => setChange(e.target.value)}  value={change} autoComplete="off"
                                                    className="              
                                                        w-full text-placeholder
                                                        placeholder:text-slate-400  
                                                        bg-gray-100 pl-9 py-2 pr-10
                                                        shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                                                        border border-slate-300 rounded-lg"
                                                        />
                                                
                                                <button type="button" 
                                                    
                                                    className={`absolute z-[8] top-2 left-2 flex  items-center`}>
                                                    <div className="w-6 h-7 relative">
                                                        <Image  layout="fill" objectFit="contain"   src="/search_grey.svg" />
                                                    </div>
                                                
                                                </button>
                                            </div>
                                            <div className="overflow-y-auto h-[64vh]    w-full relative ">
                                                <ul className=" p-2 grid gap-1 ">
                                     
                                                    {cities.map((item:any,index:any):any=>{
                                                        return(
                                                            <Fragment key={index}>
                                                                <li className=" flex  items-center gap-2  text-base relative cursor-pointer  hover:text-purple-500 hover:bg-gray-200 hover:rounded-lg" 
                                                                >
                                                                    <input type="radio" id={"du_an"+index} name="du_an" className=" appearance-none
                                                                            border-[2px] border-gray-300  w-4 h-4 
                                                                            check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                                            checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                                                    <label htmlFor={"du_an"+index} className='font-[400] text-[14px] cursor-pointer w-full  py-2'>
                                                                        {item.name}
                                                                    
                                                                        <div className={` absolute z-[4] top-2 right-2 flex  items-center`}>
                                                                            <div className="w-4 h-7 relative -rotate-90 opacity-50">
                                                                                <Image  layout="fill" objectFit="contain"   src="/down_button_black.svg" />
                                                                            </div>
                                                                        </div>
                                                                    </label>
                                                                    
                                                                </li>
                                                                <div className=" h-px bg-gray-200 "></div>
                                                    
                                                            </Fragment>
                                                        )
                                                    })}
                                                        
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div> 
                            </RenderPopUp>
                        </div>
                        <div className="h-full  ml-auto">
                            <RenderPopUp label="Bộ lọc" className="w-full" page="Bộ lọc" img="/filter_header.svg">
                                <div className="w-full   flex flex-col   pt-0 bg-white rounded-b-lg ">
                                    <div className="overflow-y-auto h-[78vh]  relative">
                                        <div className="space-y-3 py-4 p-5">
                                            <p className="font-semibold  text-[14px]">Tìm nhanh khu vực, dự án</p>
                                            <div className="relative w-full">
                                                <input   placeholder="Nhập nhanh khu vực, dự án" type="text" onChange={e => setChange(e.target.value)}  value={change} autoComplete="off"
                                                    className="              
                                                        w-full text-placeholder
                                                        placeholder:text-slate-400  
                                                        bg-gray-100 pl-9 py-2 pr-10
                                                        shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                                                        border border-slate-300 rounded-lg"
                                                        />
                                                
                                                <button type="button" 
                                                    
                                                    className={`absolute z-[8] top-2 left-2 flex  items-center`}>
                                                    <div className="w-6 h-7 relative">
                                                        <Image  layout="fill" objectFit="contain"   src="/search_grey.svg" />
                                                    </div>
                                                
                                                </button>
                                            </div>
                                            <ul className="grid gap-y-3">
                                                <li className=" flex  items-center   relative " 
                                                >
                                                    <div className={`mr-4 relative  flex justify-center items-center w-8 h-8 bg-gray-200 rounded-full`}>
                                                        <div className="w-5 h-7 relative ">
                                                            <Image  layout="fill" objectFit="contain"   src="/khu_vuc.svg" />
                                                        </div>
                                                    </div>
                                                    

                                                    <div>
                                                        <p className="text-[12px] text-purple-500">Phường Long Thạnh Mỹ, Quận 9, Hồ Chí Minh</p>
                                                        <p className="text-[11px] text-gray-500">Khu vực</p>
                                                    </div>
                                                    <div className={` relative  flex ml-auto items-center`}>
                                                        <div className="w-4 h-7 relative -rotate-90 opacity-50">
                                                            <Image  layout="fill" objectFit="contain"   src="/down_button_black.svg" />
                                                        </div>
                                                    </div>
                                                </li>
                                                <div className=" h-[1px] bg-gray-200 "></div>
                                                <li className=" flex  items-center   relative " 
                                                >
                                                    <div className={`mr-4 relative  flex justify-center items-center w-8 h-8 bg-gray-200 rounded-full`}>
                                                        <div className="w-5 h-7 relative ">
                                                            <Image  layout="fill" objectFit="contain"   src="/du_an.svg" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p className="text-[12px] text-purple-500">Vinhomes Grand Parks</p>
                                                        <p className="text-[11px] text-gray-500">Dự án</p>
                                                    </div>
                                                    <div className={` relative  flex ml-auto items-center`}>
                                                        <div className="w-4 h-7 relative -rotate-90 opacity-50">
                                                            <Image  layout="fill" objectFit="contain"   src="/down_button_black.svg" />
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className=" h-[6px] bg-gray-200 w-full"></div> 

                                        <div className="space-y-4 py-4 p-5">
                                           <div className="space-y-3">
                                                <p className="font-semibold  text-[14px]">Khoảng giá</p>
                                                <button type="button" className={` text-placeholder
                                                        placeholder:text-slate-400  relative  text-left
                                                        bg-white rounded  py-2  pl-3 pr-3   flex   items-center
                                                        shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                                                        border border-slate-300  w-full`}  
                                                >
                                                    <p className="text-purple-500">5 - 25 triệu</p>
                                                
                                            
                                                    <div className="relative ml-auto">
                                                        <div className="relative  h-6 w-6">
                                                            <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/down_button_grey.svg" />
                                                        </div>
                                                    </div>
                                                    
                                                    
                                                </button>
                                            </div>
                                            <RangeSlider
                                                initialMin={0}
                                                initialMax={2000}
                                                min={0}
                                                max={2000} 
                                                step={100}
                                                priceGap={100}
                                                
                                            /> 
                                        </div>
                                        <div className=" h-[1px] bg-gray-200 w-full"></div> 

                                        <div className="space-y-4 py-4 p-5">
                                           <div className="space-y-3">
                                                <p className="font-semibold  text-[14px]">Diện tích</p>
                                                <button type="button" className={` text-placeholder
                                                        placeholder:text-slate-400  relative  text-left
                                                        bg-white rounded  py-2  pl-3 pr-3   flex   items-center
                                                        shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                                                        border border-slate-300  w-full`}  
                                                >
                                                    <p className="text-purple-500">20 m<sup>2</sup> - 300 m<sup>2</sup></p>
                                                
                                            
                                                    <div className="relative ml-auto">
                                                        <div className="relative  h-6 w-6">
                                                            <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/down_button_grey.svg" />
                                                        </div>
                                                    </div>
                                                    
                                                    
                                                </button>
                                            </div>
                                            <RangeSlider
                                                initialMin={0}
                                                initialMax={2000}
                                                min={0}
                                                max={2000} 
                                                step={100}
                                                priceGap={100}
                                                
                                            /> 
                                        </div>
                                        <div className=" h-[1px] bg-gray-200 w-full"></div> 

                                        <div className="space-y-4 p-5">
                                            <p className="font-semibold  text-[14px]">Số phòng ngủ</p>
                                            <div className="gap-2 flex select-none w-full">
                                                <div className="">
                                                    <input type="checkbox" id="room1" name="room" className=" peer hidden"  />
                                                    <label htmlFor="room1" className="cursor-pointer text-[12px] h-10 w-10 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-full font-normal peer-hover:bg-red-200">
                                                        <p>1</p>
                                                    </label>
                                                </div>
                                                <div className="">
                                                    <input type="checkbox" id="room2" name="room"  className=" peer hidden"  />
                                                    <label htmlFor="room2" className="cursor-pointer text-[12px] h-10 w-10 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-full font-normal peer-hover:bg-red-200">
                                                        <p>2</p>
                                                    </label>
                                                </div>
                                                <div className="">
                                                    <input type="checkbox" id="room3" name="room"  className=" peer hidden"  />
                                                    <label htmlFor="room3" className="cursor-pointer text-[12px] h-10 w-10 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-full font-normal peer-hover:bg-red-200">
                                                        <p>3</p>
                                                    </label>
                                                </div>
                                                <div className="">
                                                    <input type="checkbox" id="room4" name="room"  className=" peer hidden"  />
                                                    <label htmlFor="room4" className="cursor-pointer text-[12px] h-10 w-10 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-full font-normal peer-hover:bg-red-200">
                                                        <p>4</p>
                                                    </label>
                                                </div>
                                                <div className="">
                                                    <input type="checkbox" id="room5" name="room"  className=" peer hidden"  />
                                                    <label htmlFor="room5" className="cursor-pointer text-[12px] h-10 w-10 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-full font-normal peer-hover:bg-red-200">
                                                        <p>5 +</p>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" h-px bg-gray-200 "></div>

                                        <div className="space-y-4 p-5">
                                            <p className="font-semibold  text-[14px]">Số phòng vệ sinh</p>
                                            <div className="gap-2 flex select-none w-full">
                                                <div className="">
                                                    <input type="checkbox" id="wc1" name="wc" className=" peer hidden"  />
                                                    <label htmlFor="wc1" className="cursor-pointer text-[12px] h-10 w-10 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-full font-normal peer-hover:bg-red-200">
                                                        <p>1</p>
                                                    </label>
                                                </div>
                                                <div className="">
                                                    <input type="checkbox" id="wc2" name="wc"  className=" peer hidden"  />
                                                    <label htmlFor="wc2" className="cursor-pointer text-[12px] h-10 w-10 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-full font-normal peer-hover:bg-red-200">
                                                        <p>2</p>
                                                    </label>
                                                </div>
                                                <div className="">
                                                    <input type="checkbox" id="wc3" name="wc"  className=" peer hidden"  />
                                                    <label htmlFor="wc3" className="cursor-pointer text-[12px] h-10 w-10 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-full font-normal peer-hover:bg-red-200">
                                                        <p>3</p>
                                                    </label>
                                                </div>
                                                <div className="">
                                                    <input type="checkbox" id="wc4" name="wc"  className=" peer hidden"  />
                                                    <label htmlFor="wc4" className="cursor-pointer text-[12px] h-10 w-10 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-full font-normal peer-hover:bg-red-200">
                                                        <p>4</p>
                                                    </label>
                                                </div>
                                                <div className="">
                                                    <input type="checkbox" id="wc5" name="wc"  className=" peer hidden"  />
                                                    <label htmlFor="wc5" className="cursor-pointer text-[12px] h-10 w-10 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-full font-normal peer-hover:bg-red-200">
                                                        <p>5 +</p>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" h-[6px] bg-gray-200 "></div>
                                        
                                       
                                      
                                        {/*loai hinh can ho*/}
                                        <RenderDrop label="Loại hình căn hộ" value="Tất cả">
                                            <div className="pt-2 pb-8 p-5">
                                                <div className="gap-2 flex flex-wrap select-none w-full">
                                                    <div className="">
                                                        <input type="checkbox" id="TypeOfApartment1" name="TypeOfApartment" className=" peer hidden"  />
                                                        <label htmlFor="TypeOfApartment1" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-full font-normal peer-hover:bg-red-200">
                                                            <p>Tất cả</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="checkbox" id="TypeOfApartment2" name="TypeOfApartment"  className=" peer hidden"  />
                                                        <label htmlFor="TypeOfApartment2" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>Chung cư</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="checkbox" id="TypeOfApartment3" name="TypeOfApartment"  className=" peer hidden"  />
                                                        <label htmlFor="TypeOfApartment3" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100  rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>Duplex</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="checkbox" id="TypeOfApartment4" name="TypeOfApartment"  className=" peer hidden"  />
                                                        <label htmlFor="TypeOfApartment4" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>Penthouse</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="checkbox" id="TypeOfApartment5" name="TypeOfApartment"  className=" peer hidden"  />
                                                        <label htmlFor="TypeOfApartment5" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>Căn hộ dịch vụ, mini</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="checkbox" id="TypeOfApartment6" name="TypeOfApartment"  className=" peer hidden"  />
                                                        <label htmlFor="TypeOfApartment6" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>Tập thể cư xá</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="checkbox" id="TypeOfApartment7" name="TypeOfApartment"  className=" peer hidden"  />
                                                        <label htmlFor="TypeOfApartment7" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>Officetel</p>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </RenderDrop>
                                        <div className=" h-px bg-gray-200 "></div>

                                        {/*tinh trang noi that*/}
                                        <RenderDrop label="Tình trạng nội thất" value="Tất cả">
                                            <div className="pt-2 pb-8 p-5">
                                                <div className="gap-2 flex flex-wrap select-none w-full">
                                                    <div className="">
                                                        <input type="radio" id="status1" name="status" className=" peer hidden"  />
                                                        <label htmlFor="status1" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-full font-normal peer-hover:bg-red-200">
                                                            <p>Tất cả</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="radio" id="status2" name="status"  className=" peer hidden"  />
                                                        <label htmlFor="status2" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>Cao cấp</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="radio" id="status3" name="status"  className=" peer hidden"  />
                                                        <label htmlFor="status3" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100  rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>Đầy đủ</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="radio" id="status4" name="status"  className=" peer hidden"  />
                                                        <label htmlFor="status4" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>Cơ bản</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="radio" id="status5" name="status"  className=" peer hidden"  />
                                                        <label htmlFor="status5" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>Chưa có</p>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </RenderDrop>                                     
                                        <div className=" h-px bg-gray-200 "></div>

                                        {/*huong cua chinh*/}
                                        <RenderDrop label="Hướng cửa chính" value="Tất cả">
                                            <div className="pt-2 pb-8 p-5">
                                                <div className="gap-x-2 gap-y-4 flex flex-wrap select-none w-full">
                                                    <div className="">
                                                        <input type="checkbox" id="main_door_direction1" name="main_door_direction" className=" peer hidden"  />
                                                        <label htmlFor="main_door_direction1" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-full font-normal peer-hover:bg-red-200">
                                                            <p>Tất cả</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="checkbox" id="main_door_direction2" name="main_door_direction" className=" peer hidden"  />
                                                        <label htmlFor="main_door_direction2" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>Đông</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="checkbox" id="main_door_direction3" name="main_door_direction" className=" peer hidden"  />
                                                        <label htmlFor="main_door_direction3" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100  rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>Tây</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="checkbox" id="main_door_direction4" name="main_door_direction" className=" peer hidden"  />
                                                        <label htmlFor="main_door_direction4" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>Nam</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="checkbox" id="main_door_direction5" name="main_door_direction" className=" peer hidden"  />
                                                        <label htmlFor="main_door_direction5" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>Bắc</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="checkbox" id="main_door_direction6" name="main_door_direction" className=" peer hidden"  />
                                                        <label htmlFor="main_door_direction6" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>Đông Bắc</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="checkbox" id="main_door_direction7" name="main_door_direction" className=" peer hidden"  />
                                                        <label htmlFor="main_door_direction7" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>Đông Nam</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="checkbox" id="main_door_direction8" name="main_door_direction" className=" peer hidden"  />
                                                        <label htmlFor="main_door_direction8" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>Tây Nam</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="checkbox" id="main_door_direction9" name="main_door_direction" className=" peer hidden"  />
                                                        <label htmlFor="main_door_direction9" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>Tây Bắc</p>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </RenderDrop>
                                        <div className=" h-px bg-gray-200 "></div>

                                        {/*huong cua chinh*/}
                                        <RenderDrop label="Hướng ban công" value="Tất cả">
                                            <div className="pt-2 pb-8 p-5">
                                                <div className="gap-x-2 gap-y-4 flex flex-wrap select-none w-full">
                                                    <div className="">
                                                        <input type="checkbox" id="balcony_direction1" name="balcony_direction" className=" peer hidden"  />
                                                        <label htmlFor="balcony_direction1" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-full font-normal peer-hover:bg-red-200">
                                                            <p>Tất cả</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="checkbox" id="balcony_direction2" name="balcony_direction"  className=" peer hidden"  />
                                                        <label htmlFor="balcony_direction2" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>Đông</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="checkbox" id="balcony_direction3" name="balcony_direction"  className=" peer hidden"  />
                                                        <label htmlFor="balcony_direction3" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100  rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>Tây</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="checkbox" id="balcony_direction4" name="balcony_direction"  className=" peer hidden"  />
                                                        <label htmlFor="balcony_direction4" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>Nam</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="checkbox" id="balcony_direction5" name="balcony_direction"  className=" peer hidden"  />
                                                        <label htmlFor="balcony_direction5" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>Bắc</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="checkbox" id="balcony_direction6" name="balcony_direction"  className=" peer hidden"  />
                                                        <label htmlFor="balcony_direction6" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>Đông Bắc</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="checkbox" id="balcony_direction7" name="balcony_direction"  className=" peer hidden"  />
                                                        <label htmlFor="balcony_direction7" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>Đông Nam</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="checkbox" id="balcony_direction8" name="balcony_direction"  className=" peer hidden"  />
                                                        <label htmlFor="balcony_direction8" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>Tây Nam</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="checkbox" id="balcony_direction9" name="balcony_direction"  className=" peer hidden"  />
                                                        <label htmlFor="balcony_direction9" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>Tây Bắc</p>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </RenderDrop>
                                        <div className=" h-px bg-gray-200 "></div>

                                        {/*dac diem can ho*/}
                                        <RenderDrop label="Đặc điểm căn hộ" value="Tất cả">
                                            <div className="pt-2 pb-8 p-5">
                                                <div className="gap-x-2 gap-y-4 flex flex-wrap select-none w-full">
                                                    <div className="">
                                                        <input type="checkbox" id="dac_diem1" name="dac_diem" className=" peer hidden"  />
                                                        <label htmlFor="dac_diem1" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-full font-normal peer-hover:bg-red-200">
                                                            <p>Căn góc</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="checkbox" id="dac_diem2" name="dac_diem"  className=" peer hidden"  />
                                                        <label htmlFor="dac_diem2" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>Tin có video</p>
                                                        </label>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </RenderDrop>
                                        <div className=" h-px bg-gray-200 "></div>

                                        {/*nguoid dang tin*/}
                                        <RenderDrop label="Người đăng tin" value="Tất cả">
                                            <div className="pt-2 pb-8 p-5">
                                                <div className="gap-x-2 gap-y-4 flex flex-wrap select-none w-full">
                                                    <div className="">
                                                        <input type="radio" id="individual_broker1" name="individual_broker" className=" peer hidden"  />
                                                        <label htmlFor="individual_broker1" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-full font-normal peer-hover:bg-red-200">
                                                            <p>Môi giới</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="radio" id="individual_broker2" name="individual_broker"  className=" peer hidden"  />
                                                        <label htmlFor="individual_broker2" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>Cá nhân</p>
                                                        </label>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </RenderDrop>
                                        <div className=" h-px bg-gray-200 "></div>

                                        {/*ngay dang tin*/}      
                                        <RenderDrop label="Ngày đăng tin" value="Tất cả">
                                            <div className="pt-2 pb-8 p-5">
                                                <div className="gap-x-2 gap-y-4 flex flex-wrap select-none w-full">
                                                    <div className="">
                                                        <input type="checkbox" id="time_day1" name="time_day" className=" peer hidden"  />
                                                        <label htmlFor="time_day1" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-full font-normal peer-hover:bg-red-200">
                                                            <p>Tất cả</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="radio" id="time_day2" name="time_day"  className=" peer hidden"  />
                                                        <label htmlFor="time_day2" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>1 ngày</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="radio" id="time_day3" name="time_day"  className=" peer hidden"  />
                                                        <label htmlFor="time_day3" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>3 ngày</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="radio" id="time_day4" name="time_day"  className=" peer hidden"  />
                                                        <label htmlFor="time_day4" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>5 ngày</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="radio" id="time_day5" name="time_day"  className=" peer hidden"  />
                                                        <label htmlFor="time_day5" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>7 ngày</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="radio" id="time_day6" name="time_day"  className=" peer hidden"  />
                                                        <label htmlFor="time_day6" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>15 ngày</p>
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <input type="radio" id="time_day7" name="time_day"  className=" peer hidden"  />
                                                        <label htmlFor="time_day7" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                            <p>30 ngày</p>
                                                        </label>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </RenderDrop>   
                                       
                                       



                                        <div className="space-y-3 p-5 mt-10">
                                            <button className="w-full  text-white font-semibold rounded-full p-2 bg-pink-500">Áp dụng</button>
                                        </div>       
                                    </div>
                                </div>
                            </RenderPopUp>
                          
                        </div>
                    </div>              
                </div>
                <div className="w-full ">
                    <div className="h-40 ">
                            <Carousel slideInterval={5000} >
                                <div className=" h-full relative">
                                    <Image width="100%" height="100%" layout="fill" 
                                    src="/banner.png"
                                    alt="..."
                                    />
                                </div>
                                <div className=" h-full relative">
                                    <Image width="100%" height="100%" layout="fill" 
                                    src="/banner.png"
                                    alt="..."
                                    />
                                </div>
                                <div className=" h-full relative">
                                    <Image width="100%" height="100%" layout="fill" 
                                    src="/banner.png"
                                    alt="..."
                                    />
                                </div>
                                <div className=" h-full relative">
                                    <Image width="100%" height="100%" layout="fill" 
                                    src="/banner.png"
                                    alt="..."
                                    />
                                </div>
                                
                            </Carousel>
                        </div>
                </div>
                </>
            }
           
        </header>
    )
}
export default HeaderMobile;