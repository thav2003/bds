import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import PrimaryLayout from '../../components/layouts/PrimaryLayout';
import { NextPageWithLayout } from '../../page';
import { selectAuthState, setAuthState } from "../../reducers/actions/auth";
const LogoutPage:NextPageWithLayout =()=>{
    const dispatch = useDispatch();
    const authState = useSelector(selectAuthState);
    const router = useRouter()
    const login=()=>{
        dispatch(setAuthState(true))
    }
    const register=()=>{
        router.push('/register')
      
    }
    
    return(
        <div className={`w-full flex flex-col   items-center p-0 select-none bg-slate-50 `}>
            <div className=" w-full flex flex-col    space-y-5  ">
                <div className="p-5 bg-white space-y-4 rounded-xl tablet:px-3 flex flex-col items-center justify-center">
                    <div>
                        <Image src="/default-user.svg" className=" w-20 h-20"/>
                    </div>
                    <div className="gap-4 flex w-full">
                        <button onClick={register} className="btn-login  rounded-lg border-purple-600 text-purple-600">Đăng kí</button>
                        <button onClick={login} className="btn-login rounded-lg border-none bg-purple-600 text-white">Đăng nhập</button>
                    </div>
                </div>
                <div className="p-5  bg-white space-y-4 rounded-xl pl-3 pt-0">
                    <div className="divide-y-[1px] ">
                        <div className="w-full p-3 pb-2">
                           <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <Image src="/favorite-desktop.svg" className="h-3 w-auto"/>
                                    <p>Tin yêu thích</p>
                                </div>
                                <div >
                                    <Image src="/left-icon-path.svg"/>
                                </div>
                           </div>
                        </div>
                        <div className="w-full p-3 pb-2">
                           <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <Image src="/notification.svg" className="h-4 w-auto"/>
                                    <p>Thông báo</p>
                                </div>
                                <div >
                                    <Image src="/left-icon-path.svg"/>
                                </div>
                           </div>
                        </div>
                        <div className="w-full p-3 pb-2">
                           <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <Image src="/huong-dan.svg" className="h-3 w-auto"/>
                                    <p>Hướng dẫn</p>
                                </div>
                                <div >
                                    <Image src="/left-icon-path.svg"/>
                                </div>
                           </div>
                        </div>
                        <div className="w-full p-3 pb-2">
                           <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <Image src="/lien-he.svg" className="h-3 w-auto"/>
                                    <p>Liên hệ</p>
                                </div>
                                <div >
                                    <Image src="/left-icon-path.svg"/>
                                </div>
                           </div>
                        </div>
                        
                        <div></div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}
LogoutPage.getLayout = (page) => {
    return <PrimaryLayout name="account">{page}</PrimaryLayout>;
  };
export default LogoutPage