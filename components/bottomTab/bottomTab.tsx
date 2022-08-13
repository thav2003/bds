import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAuthState } from "../../reducers/actions/auth";
interface ItabName extends React.ComponentPropsWithoutRef<"div">{
    name?:string
}

const BottomTab:React.FC<ItabName>=(props)=>{
    const {name} = props;
    const authState = useSelector(selectAuthState);
    
    const router=useRouter()
    const [activeTabs, setActiveTabs] = useState(name)
    useEffect(()=>{
        if(name!==activeTabs){
            setActiveTabs('')
        }
    },[name])
   
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
                
                {authState ? router.push('/accounts/login') :  router.push('/accounts/logout')}
                
                break;
            
        }
    }, [activeTabs,authState ])
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
                        {authState ? 
                        
                            <div className="flex items-center space-x-4 ">
                                <div className="relative">
                                    <img 
                                        className="w-6 h-6 rounded-full p-1 ring-2 ring-sky-300  relative  overflow-hidden "
                                        src="/user-toolbar-footer.svg" 
                                    /> 
                                    <span className="-bottom-1 -right-1 bg-green-400 absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800"></span>
                                </div>
                            </div>
                            
                            : <img src="/user-toolbar-footer.svg" className="h-5 w-5"/>}
                        
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