import Link from 'next/link';
import { useRouter } from 'next/router';
import type { IHeader } from '../../interfaces/interfaces';







const Header : React.FC<IHeader>=({ ...headerProps })=>{
    const router = useRouter()
    

 

    return(
   
        <header
            {...headerProps}
            className={`w-full flex flex-col  items-center p-5 shadow z-10 select-none `}
        >
            <div className=" w-10/12 flex items-center justify-between ">

                <div className="flex flex-row space-x-4 flex-grow">
                    <Link href="/" >
                        <a >
                            <img src="/logo.svg" alt="Logo" className="w-auto h-auto"  />
                        </a>
                    </Link>
                    <label className="relative w-3/6 laptop:hidden">
                        <input 
                            className="
                                w-full 
                                placeholder:text-slate-400  
                                bg-white rounded-3xl pl-3 py-2 pr-10
                                shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                                border border-slate-300 "
                            placeholder="Tìm kiếm khu vực,dự án"
                            type="text"
                            name="search"
                        />
                        <span className="absolute inset-y-0 right-3 flex items-center pl-2">
                            <img src="search_black.svg" className="w-5 h-5"/>
                        </span>
                    </label>
                </div>
                <div className="flex-shrink ">
                    <div className="flex flex-row items-center font-medium space-x-1">
                        <div  className="flex flex-grow rounded-lg items-center justify-center">
                            <Link href="/">
                                <a >
                                    <img src="favorite-desktop.svg"  className="w-auto h-auto"/>
                                </a>
                            </Link>
                        </div>
                        
                        <div className="flex flex-grow rounded-lg w-24 items-center justify-center">
                            <Link href="/register">
                                <a className="btn-primary">Đăng kí</a>
                            </Link>
                        </div>
                        <div className="flex flex-grow rounded-lg w-24 items-center justify-center">
                            <Link href="/login">
                                <a className="btn-primary">Đăng nhập</a>
                            </Link>
                        </div>
                        <div className="flex flex-grow bg-pink-700 rounded-lg w-28 items-center justify-center">
                            <Link href="/upload">
                                <a className="btn-primary hover:bg-pink-700 text-white flex flex-row space-x-2">
                                    <span className="items-center">
                                        <img src="white-edit.svg" className="w-auto h-auto" />
                                    </span>
                                    <p>Đăng tin</p>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {router.pathname==='/' && 
                <div className="w-10/12  flex flex-row pl-2 pt-7  items-center flex-wrap gap-2">
                    <div className="relative">
                        <select name="location" id="locations"  className='filter pl-6 pr-8 border-gray-400'>
                            
                            <option value="1">Toàn quốc</option>
                            <option value="2">Saab</option>
                            <option value="2">Opel</option>
                            <option value="3">Audi</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-1 text-gray-700">
                            <img src="/khu_vuc.svg" className="w-5 h-5"/>
                        </div>
                    </div>
                
                        
                    <select name="prices" id="prices"  className='filter pr-8 border-gray-400'>
                        <option value="1">Giá thuê</option>
                        <option value="2">Saab</option>
                        <option value="2">Opel</option>
                        <option value="3">Audi</option>
                    </select>
            
                    <select name="areas" id="areas"  className='filter pr-8 border-gray-400'>
                        <option value="1">Diện tích</option>
                        <option value="2">Saab</option>
                        <option value="2">Opel</option>
                        <option value="3">Audi</option>
                    </select>
                
                    <select name="rooms" id="rooms"  className='filter pr-8 border-gray-400'>
                        <option value="1">Số phòng ngủ</option>
                        <option value="2">Saab</option>
                        <option value="2">Opel</option>
                        <option value="3">Audi</option>
                    </select>
                
                    <select name="projects" id="projects"  className='filter pr-8 border-gray-400'>
                        <option value="1">Dự án</option>
                        <option value="2">Saab</option>
                        <option value="2">Opel</option>
                        <option value="3">Audi</option>
                    </select>
                
                    <select name="types" id="types"  className='filter pr-8 border-gray-400'>
                        <option value="1">Loại hình căn hộ</option>
                        <option value="2">Saab</option>
                        <option value="2">Opel</option>
                        <option value="3">Audi</option>
                    </select>
                    <div className="h-full flex">
                       
                        <button className="filter btn-primary flex items-center border-gray-400"> 
                            <img src="/fillter-black.svg" className="h-4 w-4 mr-2"/>
                        Lọc thêm</button> 
                    </div>
                    <div className="h-full flex">
                       
                        <button className=" btn-primary flex border-gray-400 "> 
                            <img src="/reset_fillter.svg" className="h-5 w-5 mr-2"/>
                        Đặt lại</button> 
                    </div>
                               
                </div>
            }
            
        
        </header>
            
      
        
    )
}
export default Header;