import { useDispatch, useSelector } from "react-redux";
import PrimaryLayout from '../../components/layouts/PrimaryLayout';
import { selectAuthState, setAuthState } from "../../reducers/actions/auth";
import { NextPageWithLayout } from '../page';
const LoginPage:NextPageWithLayout =()=>{
    const dispatch = useDispatch();
    const authState = useSelector(selectAuthState);
    const logout=()=>{
        dispatch(setAuthState(false))
    }
    return(
        <div className={`w-full flex flex-col mb-8  items-center p-0 select-none bg-slate-50 `}>
            <div className=" w-full flex flex-col    space-y-5  ">
                
                <div className="p-5 bg-white space-y-4 rounded-xl tablet:px-3 flex flex-col ">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2 flex-[8_1_0%]">
                            <div  className="relative ">
                                <img src="/default-user.svg" className=" w-20 h-20"/>
                                <img src="/logo_small.svg" className=" w-5 h-5 absolute right-0 bottom-1"/>
                            </div>
                            
                            <div>
                                <p className="font-medium text-lg">Nguyễn Nam</p>
                                <p>0404040</p>
                                <p>Sửa thông tin</p>
                            </div>
                        </div>
                        <div className="flex-shrink ">
                            <button  className="btn-login rounded-lg text-xs  p-2 m-0 border-purple-500 bg-purple-transparent border-solid border-[1px] text-purple-500">Trang cá nhân</button>
                        </div>
                    </div>
                    <div className="bg-slate-100 p-5 space-y-5 text-gray-400 rounded-md">
                        <div className="w-full">
                            <div className="flex justify-between">
                                <p>Tài khoản chính</p>
                                <p className="text-black">0 đ</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Tài khoản khuyến mãi</p>
                                <p className="text-black">0 đ</p>
                            </div>
                        </div>
                        <button className="btn-login w-full rounded-lg border-none bg-purple-500 text-white">Nạp tiền</button>
                        <div className="w-full bg-white p-2 rounded-md">
                            <p>Mã tài khoản</p>
                            <div className="flex justify-between w-full">
                                <h3 className="font-medium text-black">SE81264</h3>
                                <img src="/share.svg"/>
                            </div>
                           
                        </div>
                    </div>
                    
                </div>

                <div className="p-5  bg-white space-y-4 rounded-xl pl-3 pt-0">
                    <div className="divide-y-[1px] ">
                        <div className="w-full p-3 pb-2">
                           <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <img src="/tong-quan.svg" className="h-4 w-auto"/>
                                    <p>Tổng quan</p>
                                </div>
                                <div >
                                    <img src="/left-icon-path.svg"/>
                                </div>
                           </div>
                        </div>
                        <div className="w-full p-3 pb-2">
                           <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <img src="/quan-ly-tin-dang.svg" className="h-4 w-auto"/>
                                    <p>Quản lý tin đăng</p>
                                </div>
                                <div >
                                    <img src="/left-icon-path.svg"/>
                                </div>
                           </div>
                        </div>
                        
                        
                        <div></div>
                    </div>
                    
                </div>


                <div className="p-5  bg-white space-y-4 rounded-xl pl-3 pt-0">
                    <div className="divide-y-[1px] ">
                        <div className="w-full p-3 pb-2">
                           <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <img src="/nap-tien.svg" className="h-4 w-auto"/>
                                    <p>Nạp tiền</p>
                                </div>
                                <div >
                                    <img src="/left-icon-path.svg"/>
                                </div>
                           </div>
                        </div>
                        <div className="w-full p-3 pb-2">
                           <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <img src="/lich_su_nap_tien.svg" className="h-4 w-auto"/>
                                    <p>Lịch sử nạp tiền</p>
                                </div>
                                <div >
                                    <img src="/left-icon-path.svg"/>
                                </div>
                           </div>
                        </div>
                        <div className="w-full p-3 pb-2">
                           <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <img src="/lich_su_thanh_toan.svg" className="h-4 w-auto"/>
                                    <p>Lịch sử thanh toán</p>
                                </div>
                                <div >
                                    <img src="/left-icon-path.svg"/>
                                </div>
                           </div>
                        </div>
                        <div className="w-full p-3 pb-2">
                           <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <img src="/quan-ly-khuyen-mai.svg" className="h-4 w-auto"/>
                                    <p>Quản lý khuyến mãi</p>
                                </div>
                                <div >
                                    <img src="/left-icon-path.svg"/>
                                </div>
                           </div>
                        </div>
                        
                        
                        <div></div>
                    </div>
                    
                </div>


                <div className="p-5  bg-white space-y-4 rounded-xl pl-3 pt-0">
                    <div className="divide-y-[1px] ">
                        <div className="w-full p-3 pb-2">
                           <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <img src="/time-icon.svg" className="h-4 w-auto"/>
                                    <p>Lịch xem nhà</p>
                                </div>
                                <div >
                                    <img src="/left-icon-path.svg"/>
                                </div>
                           </div>
                        </div>
                        <div className="w-full p-3 pb-2">
                           <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <img src="/favorite-desktop.svg" className="h-3 w-auto"/>
                                    <p>Tin yêu thích</p>
                                </div>
                                <div >
                                    <img src="/left-icon-path.svg"/>
                                </div>
                           </div>
                        </div>
                        <div className="w-full p-3 pb-2">
                           <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <img src="/notification.svg" className="h-4 w-auto"/>
                                    <p>Thông báo</p>
                                </div>
                                <div >
                                    <img src="/left-icon-path.svg"/>
                                </div>
                           </div>
                        </div>
                        <div className="w-full p-3 pb-2">
                           <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <img src="/thong-tin-ca-nhan.svg" className="h-4 w-auto"/>
                                    <p>Thông tin tài khoản</p>
                                </div>
                                <div >
                                    <img src="/left-icon-path.svg"/>
                                </div>
                           </div>
                        </div>
                        <div className="w-full p-3 pb-2">
                           <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <img src="/doi-mat-khau.svg" className="h-4 w-auto"/>
                                    <p>Thay đổi mật khẩu</p>
                                </div>
                                <div >
                                    <img src="/left-icon-path.svg"/>
                                </div>
                           </div>
                        </div>
                        
                        
                        <div></div>
                    </div>
                    
                </div>

                <div className="p-5  bg-white space-y-4 rounded-xl pl-3 pt-0">
                    <div className="divide-y-[1px] ">
                        <div className="w-full p-3 pb-2">
                           <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <img src="/huong-dan.svg" className="h-4 w-auto"/>
                                    <p>Hướng dẫn</p>
                                </div>
                                <div >
                                    <img src="/left-icon-path.svg"/>
                                </div>
                           </div>
                        </div>
                        <div className="w-full p-3 pb-2">
                           <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <img src="/lien-he.svg" className="h-4 w-auto"/>
                                    <p>Liên hệ</p>
                                </div>
                                <div >
                                    <img src="/left-icon-path.svg"/>
                                </div>
                           </div>
                           
                           
                        </div>
                       
                        
                        
                       <div></div>
                        
                        
                    </div>
                    <button onClick={logout} className="btn-login rounded-lg s">Đăng xuất</button>
                    
                </div>
                
            </div>
        </div>
    )
}
LoginPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>;
  };
export default LoginPage