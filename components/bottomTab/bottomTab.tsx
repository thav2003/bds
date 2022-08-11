import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthState } from "../../reducers/actions/auth";
interface ItabName extends React.ComponentPropsWithoutRef<"div">{}

const BottomTab:React.FC<ItabName>=()=>{
    const authState = useSelector(selectAuthState);
    const dispatch = useDispatch();
    const router=useRouter()
    const [activeTabs, setActiveTabs] = useState(router.pathname)
    useEffect(() => {
        
        switch (activeTabs) {

            case 'home':
                router.push('/')
                break;
            case 'register':
                router.push('/register')
                break;
            case 'login':
                router.push('/login')
                break;
            case 'upload':
                router.push('/upload')
                break;
            case 'account':
                {authState ?  router.push('/accounts/login') :  router.push('/accounts/logout')}
                
                break;
            default:
                
                router.push(router.pathname)
                break;
        }
    }, [activeTabs,authState])
    return(
        
        <div className="bottomNav gap-2  shadow-sm-light bg-white shadow-slate-800 select-none">
            <div className="bnTab ">
                {activeTabs ==='home'  ? (
                    <button type="button" className="btn-nav-bar text-purple-600"
                    onClick={() => setActiveTabs('home')}
                >
                    <img src="/home_toolbar_footer_fill.svg" className="h-5 w-5"/>
                Trang chủ</button>
                ):(
                    <button type="button" className="btn-nav-bar"
                    onClick={() => setActiveTabs('home')}
                >
                    <img src="/home_toolbar_footer.svg" className="h-5 w-5"/>
                    Trang chủ</button>
                )}
                
            </div>
            <div className="bnTab">
            
                {activeTabs ==='manager'  ? (
                    <button type="button" className="btn-nav-bar text-purple-600"
                        // onClick={() => setActiveTabs('home')}
                    >
                        <img src="/listing_manage_fill.svg" className="h-5 w-5"/>
                        Quản lí tin</button>
                    ):(
                        <button type="button" className="btn-nav-bar"
                        // onClick={() => setActiveTabs('home')}
                    >
                        <img src="/listing-manager.svg" className="h-5 w-5"/>
                        Quản lí tin</button>
                )}
            </div>
            <div className="bnTab relative ">
                {activeTabs ==='upload'  ? (
                    <>
                        <div onClick={() => setActiveTabs('upload')} className="absolute    circle-nav shadow-under boder-white bg-white  flex items-center justify-center -translate-y-1/2">
                            <div className="text-lg text-purple-600">+</div>
                        </div>
                  
                        <button type="button" className="btn-nav-bar text-purple-600  translate-y-[1em]"
                        
                    >
                        
                        Đăng tin</button>
                        </>
                    ):(
                        <>
                        <div onClick={() => setActiveTabs('upload')} className="absolute    circle-nav shadow-under boder-white bg-white  flex items-center justify-center -translate-y-1/2">
                            <div className="text-lg text-purple-600 ">+</div>
                        </div>
                  
                        <button type="button" className="btn-nav-bar   translate-y-[1em]"
                        
                    >
                        
                        Đăng tin</button>
                        </>
                    )}
            </div>
            <div className="bnTab">
            {activeTabs ==='favorite'  ? (
                    <button type="button" className="btn-nav-bar text-purple-600"
                        // onClick={() => setActiveTabs('home')}
                    >
                        <img src="/favorite-mobile.svg" className="h-5 w-5"/>
                        Yêu thích</button>
                    ):(
                        <button type="button" className="btn-nav-bar"
                        // onClick={() => setActiveTabs('home')}
                    >
                        <img src="/favorite-desktop.svg" className="h-5 w-5"/>
                        Yêu thích</button>
                )}
            </div>
            <div className="bnTab">
                {activeTabs ==='account'  ? (
                    <button type="button" className="btn-nav-bar text-purple-600"
                        onClick={() => setActiveTabs('account')}
                    >
                        <img src="/user-toolbar-footer.svg" className="h-5 w-5"/>
                        Tài khoản</button>
                    ):(
                        <button type="button" className="btn-nav-bar"
                        onClick={() => setActiveTabs('account')}
                    >
                        <img src="/user-toolbar-footer.svg" className="h-5 w-5"/>
                        Tài khoản</button>
                )}
            </div>
           
        </div>
    )
}
export default BottomTab;