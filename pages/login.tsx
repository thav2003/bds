import PrimaryLayout from '../components/layouts/PrimaryLayout';
import { NextPageWithLayout } from './page';

import { useState } from 'react';

const LoginPage:NextPageWithLayout=()=>{
    const [isHide,setHide]=useState(true)
    const changeHide=()=>{
        setHide(!isHide)
    }

    return (
        <div className=" bg-slate-200 p-[3.5rem]">
            <div className=" w-full relative m-auto md:max-w-6xl">
            <div className="flex flex-[2_1_0%]">
                <div className="flex-[6_1_0%] bg-[url('/welcome.png')] bg-no-repeat bg-contain">
                   
                </div>
                
                <div className="bg-white flex flex-col flex-[6_1_0%]    p-10 shadow shadow-slate-800 rounded-xl max-w-[34rem]">
                    <div className="mb-6">
                        <h1 className="font-bold text-2xl">Đăng nhập</h1>
                        <p>Chào mừng bạn đến với thuê căn hộ</p>
                    </div>
                    <div className="space-y-3 mb-1 ">
                        <div>
                            <label htmlFor="email">Số điện thoại hoặc Email</label>
                            <input id="email" type="text" name="email"
                                className="
                                w-full
                                placeholder:text-slate-400  
                                bg-white rounded pl-3 py-2 pr-10
                                shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                                border border-slate-300 "
                            />
                        </div>
                        <div className="relative">
                        
                            <label htmlFor="pass">Mật khẩu</label>
                            <input id="pass"  type={isHide ===true ?"password" : "text"}name="pass"
                                className="
                                w-full
                                placeholder:text-slate-400  
                                bg-white rounded pl-3 py-2 pr-10
                                shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                                border border-slate-300 "
                            />
                            <span className="absolute inset-y-1/2 top-2/3 right-3 flex items-center pl-2 cursor-pointer">
                                <button onClick={changeHide}>
                                    {isHide ===true ? (<img src="password-hide.svg" className="w-auto h-auto"/>): (<img src="password-visble.svg" className="w-auto h-auto"/>)}
                                    
                                </button>
                                
                            </span>
                        </div>
                        <a className="w-full text-sm flex justify-end mb-4">Quên mật khẩu?</a>
                        <button className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-full w-full">Đăng nhập</button>
                        <div>
                            <div className="flex items-center py-4">
                                <div className="flex-grow h-px bg-gray-400"></div> 
                                <span className="flex-shrink text-xs text-gray-500 px-4  font-light">hoặc đăng nhập bằng</span>
                                <div className="flex-grow h-px bg-gray-400"></div>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <button type="button" className="btn-login">
                            <img src="/facebook.svg" alt="Logo" className="w-5 h-5 mr-2 ml-1 "  />
                                Đăng nhập với Facebook
                            </button>
                            <button type="button" className="btn-login">
                            <img src="/google.svg" alt="Logo" className="w-5 h-5 mr-2 ml-1 "  />
                                Đăng nhập với Google
                            </button>
                            <button type="button" className="btn-login">
                            <img src="/zalo.svg" alt="Logo" className="w-5 h-5 mr-2 ml-1 "  />
                                Đăng nhập với Zalo
                            </button>
                            <p className="flex justify-center items-center w-full text-sm ">Bạn chưa có tài khoản <span className="text-purple-600 ml-2">Đăng kí ngay</span></p>
                        </div>
                    </div>
                    
                        
                    
                        
                    
                </div>
             
            </div>
            </div>
        </div>
       
      );
}
LoginPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>;
  };
export default LoginPage;