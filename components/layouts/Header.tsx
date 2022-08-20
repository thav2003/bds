import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import useBlur from '../../hooks/useBlur';
import type { IHeader } from '../../interfaces/interfaces';
import { selectAuthState, setAuthState } from "../../reducers/actions/auth";


const Header : React.FC<IHeader>=({ ...headerProps })=>{
    const router = useRouter()
    const authState = useSelector(selectAuthState);
    const [patnName,setPathName]=useState<boolean>(true)
    const dispatch = useDispatch();
    const { ref, isComponentVisible,setIsComponentVisible } = useBlur(false);
    const handleClick=()=>{
       setIsComponentVisible(!isComponentVisible)


    }

    useEffect(()=>{
        const setPath=()=>{
            if(router.pathname==='/'){
                setPathName(true)
            }else if(router.pathname==='/query/[id]'){
                setPathName(true)
            }else{
                setPathName(false)
            }
            
        }
        setPath()
    },[router])
    
    
    const submitLogout=()=>{
        
        dispatch(setAuthState(false))
        setIsComponentVisible(false)
    }



    const handleFilter=()=>{
        router.push('/profile')
    }
    const naviGate=(link:string)=>{
        router.push(link)
    }
    return(
   
        <header
            {...headerProps}
            className={`w-full fixed bg-white  flex flex-col px-10 justify-center  items-center p-5 shadow z-[80] select-none `}
        >
            <div className=" w-9/12 flex bigger:w-7/12 items-center justify-between ">
                
                <div className="flex  w-1/2  space-x-4  ">
                    <Link href="/" >
                        <a className="w-1/2 ">
                            <div className="w-full h-full relative " >
                                <Image  layout="fill"  src="/logo.svg"  alt="Logo"  />
                            </div>
                        </a>
                    </Link>
                    <label className="relative  laptop:hidden">
                        <input 
                            className=" 
                                w-full 
                                  
                                bg-white rounded-3xl pl-3 py-2 pr-10
                                shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                                border border-slate-300 "
                            placeholder="Tìm kiếm khu vực,dự án"
                            type="text"
                            name="search"
                        />
                        <span className="absolute inset-y-0 right-3 flex items-center pl-2">
                            <div className="w-5 h-5 relative">
                                <Image  layout="fill" objectFit="contain"  src="/search_black.svg" className="w-5 h-5"/>
                            </div>
                        </span>
                    </label>
                </div>
                <div  className={`  cardInfo navBarButton `}>
                    <div className="flex  w-full items-center font-medium gap-3">
                     
                            <div  className="flex rounded-lg items-center justify-center">
                                
                                    <a >
                                        <div  className="w-6 h-6 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/favorite-desktop.svg"  className="w-6 h-full "/>
                                        </div>
                                    </a>
                                
                            </div>
                            {authState && <div  className="flex  rounded-lg items-center justify-center">
                                
                                    <a >
                                        <div  className="w-6 h-6 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/notification.svg"  className="w-6 h-full "/>
                                        </div>
                                    </a>
                                
                            </div>}
                      
                        {!authState ? 
                            
                            <>
                            <div className="flex flex-shrink rounded-lg  items-center justify-center">
                                <Link href="/register">
                                    <a className="btn-primary">Đăng kí</a>
                                </Link>
                            </div>
                            <div className="flex flex-shrink rounded-lg items-center justify-center">
                                <Link href="/login">
                                    <a className="btn-primary ">Đăng nhập</a>
                                </Link>
                            </div>
                            </>
                            :
                            <>
                          
                            <div  className='flex space-x-2 h-full  items-center relative'>
                                <div className="flex items-center w-6 space-x-4 h-full ">
                                    <div className="relative   w-auto auto">
                                        <div  className="w-6 h-6 rounded-full p-1 ring-2 ring-sky-300    overflow-hidden relative">
                                            <Image width="100%" height="100%" layout="fill"   objectFit="contain"
                                                
                                                src="/user-toolbar-footer.svg" 
                                            /> 
                                        </div>
                                       
                                        <span className="-bottom-1 -right-1 bg-green-400 absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800"></span>
                                    </div>
                                </div>
                     
                                <div  className="labelDrop  relative group " ref={ref}>
                                  
                                        <div className="w-fit flex items-center">
                                            <button onClick={handleClick} className="flex items-center truncate ">Nguyễn Văn Nam
                                                
                                            </button>
                                            <div className="cursor-pointer h-4 w-3 ml-2 relative" onClick={handleClick} >
                                                <Image width="100%" height="100%" layout="fill" objectFit="contain"    src="/down_button_black.svg" className="cursor-pointer h-4 w-3 ml-2"/>
                                            </div>
                                        </div> 
                                     
                                        {isComponentVisible &&<div  className={`dropbackground w-[350px] rounded-lg   block"}`}>
                                            <div  className="py-4 px-4 text-sm h-[130px]  text-gray-700 dark:text-gray-200">
                                                   <div className="w-full h-full flex  justify-between gap-2 ">
                                                        <div className="bg-gray-100 flex-[1_0_50%] py-4 p-2 h-full rounded-lg space-y-2">
                                                            <div className="flex items-center gap-1">
                                                                <div className="h-5 w-5 relative">
                                                                    <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/du_an.svg" />
                                                                </div>
                                                                <p>Số tin đăng</p>
                                                            </div>
                                                            <div className="text-lg font-semibold ">0 tin</div>
                                                        </div>
                                                        <div className="bg-gray-100 flex-[1_0_50%] py-4 p-2 h-full rounded-lg space-y-2">
                                                            <div className="flex items-center gap-1">
                                                                <div className="h-5 w-5 relative">
                                                                    <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/du_an.svg"/>
                                                                </div>
                                                                <p>Số tin đăng</p>
                                                            </div>
                                                            <div className="text-lg font-semibold">0 tin</div>
                                                        </div>
                                                     
                                                   </div>
                               
                                            </div>
                                            <div className="dropItem">
                                                <div onClick={submitLogout} className="w-full">Quản lí tin đăng</div>
                                            </div>
                                            <div className="dropItem">
                                                <div onClick={submitLogout} className="w-full">Nạp tiền</div>
                                            </div>
                                            <div className="dropItem">
                                                <div onClick={submitLogout} className="w-full">Lịch sử nạp tiền</div>
                                            </div>
                                            <div className="dropItem">
                                                <div onClick={submitLogout} className="w-full">Quản lý khuyến mãi</div>
                                            </div>
                                            <div className="dropItem">
                                                <div onClick={()=>naviGate('/profile')} className="w-full">Thông tin tài khoản</div>
                                            </div>
                                            <div className="dropItem">
                                                <div onClick={submitLogout} className="w-full">Thay đổi mật khẩu</div>
                                            </div>
                                            <div className="dropItem">
                                                <div onClick={submitLogout} className="w-full">Đăng xuất</div>
                                            </div>
                                        </div>}
                                        
                                   
                                     
                                      
                                 
                                </div>
                             
                            
                            </div>
                            </>
                            
                        }
                        <div className="flex  bg-pink-700 rounded-lg  items-center justify-center">
                            <Link href="/upload">
                                <a className="btn-primary hover:bg-pink-700 text-white flex flex-row space-x-2  items-center">
                                    <span className="items-center">
                                        <div className="w-5 h-5 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/white-edit.svg" className="w-auto h-auto" />
                                        </div>
                                    </span>
                                    <p>Đăng tin</p>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {patnName  && 
                <div className="w-9/12 bigger:w-7/12 flex flex-row  pt-7  items-center flex-wrap gap-2 ">
                    <div className="relative flex-shrink ">
                        <select name="location" id="locations"  className='filter text-xs pl-6 pr-8 border-gray-400'>
                            
                            <option value="1">Toàn quốc</option>
                            <option value="2">Thành phố Hồ Chí Minh</option>
                            <option value="2">Opel</option>
                            <option value="3">Audi</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-1 text-gray-700">
                            <div className="w-6 h-5 relative">
                            <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/khu_vuc.svg" className="w-6 h-5"/>
                            </div>
                        </div>
                    </div>
                  
                        
                    <select name="prices" id="prices"  className='filter text-xs pr-8 border-gray-400 flex-shrink'>
                        <option value="1">Giá thuê</option>
                        <option value="2">Saab</option>
                        <option value="2">Opel</option>
                        <option value="3">Audi</option>
                    </select>
            
                    <select name="areas" id="areas"  className='filter text-xs pr-8 border-gray-400 flex-shrink'>
                        <option value="1">Diện tích</option>
                        <option value="2">Saab</option>
                        <option value="2">Opel</option>
                        <option value="3">Audi</option>
                    </select>
                
                    <select name="rooms" id="rooms"  className='filter text-xs pr-8 border-gray-400 flex-shrink'>
                        <option value="1">Số phòng ngủ</option>
                        <option value="2">Saab</option>
                        <option value="2">Opel</option>
                        <option value="3">Audi</option>
                    </select>
                
                    <select name="projects" id="projects"  className='filter text-xs pr-8 border-gray-400 flex-shrink'>
                        <option value="1">Dự án</option>
                        <option value="2">Saab</option>
                        <option value="2">Opel</option>
                        <option value="3">Audi</option>
                    </select>
                
                    <select name="types" id="types"  className='filter text-xs  pr-8 border-gray-400 flex-shrink'>
                        <option value="1">Loại hình căn hộ</option>
                        <option value="2">Saab</option>
                        <option value="2">Opel</option>
                        <option value="3">Audi</option>
                    </select>
                    <div className="h-full flex flex-shrink">
                       
                        <button onClick={handleFilter} className="filter text-xs btn-primary flex items-center border-gray-400"> 
                            <div  className="h-4 w-3 mr-1 relative">
                                <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/fillter-black.svg" className="h-4 w-3 mr-1"/>
                            </div>
                        Lọc thêm</button> 
                    </div>
                    <div className="h-full flex flex-shrink">
                       
                        <button className="  btn-primary flex border-gray-400 "> 
                            <div  className="h-5 w-5 mr-2 relative">
                                <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/reset_fillter.svg" className="h-5 w-5 mr-2"/>
                            </div>
                        Đặt lại</button> 
                    </div>
                               
                </div>
            }
            
        
        </header>
            
      
        
    )
}
export default Header;