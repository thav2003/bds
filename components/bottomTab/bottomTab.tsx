import { useEffect, useState } from "react";
interface ItabName extends React.ComponentPropsWithoutRef<"div">{
    name:string,
    router:any
}

const BottomTab:React.FC<ItabName>=(props)=>{
    const {router,name} = props;
    const [activeTabs, setActiveTabs] = useState(name)
    console.log(activeTabs)
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
            default:
                setActiveTabs(name.split('/')[1])
                router.push(name)
                break;
        }
    }, [activeTabs])
    return(
        <div className="bottomNav gap-2 shadow-sm-light bg-white shadow-slate-800 select-none">
            <div className="bnTab ">
                {activeTabs ==='home' ||name==="/"  ? (
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
            
                {activeTabs ==='home'  ? (
                    <button type="button" className="btn-nav-bar text-purple-600"
                        onClick={() => setActiveTabs('home')}
                    >
                        <img src="/listing_manage_fill.svg" className="h-5 w-5"/>
                        Quản lí tin</button>
                    ):(
                        <button type="button" className="btn-nav-bar"
                        onClick={() => setActiveTabs('home')}
                    >
                        <img src="/listing-manager.svg" className="h-5 w-5"/>
                        Quản lí tin</button>
                )}
            </div>
            <div className="bnTab relative ">
                {activeTabs ==='upload'  ? (
                    <>
                        <div className="absolute    circle-nav shadow-under boder-white bg-white  flex items-center justify-center -translate-y-1/2">
                            <div className="text-lg text-purple-600">+</div>
                        </div>
                  
                        <button type="button" className="btn-nav-bar text-purple-600  translate-y-[1em]"
                        onClick={() => setActiveTabs('upload')}
                    >
                        
                        Đăng tin</button>
                        </>
                    ):(
                        <>
                        <div onClick={() => setActiveTabs('upload')} className="absolute    circle-nav shadow-under boder-white bg-white  flex items-center justify-center -translate-y-1/2">
                            <div className="text-lg text-purple-600 ">+</div>
                        </div>
                  
                        <button type="button" className="btn-nav-bar   translate-y-[1em]"
                        onClick={() => setActiveTabs('upload')}
                    >
                        
                        Đăng tin</button>
                        </>
                    )}
            </div>
            <div className="bnTab">
            {activeTabs ==='home'  ? (
                    <button type="button" className="btn-nav-bar text-purple-600"
                        onClick={() => setActiveTabs('home')}
                    >
                        <img src="/favorite-mobile.svg" className="h-5 w-5"/>
                        Yêu thích</button>
                    ):(
                        <button type="button" className="btn-nav-bar"
                        onClick={() => setActiveTabs('home')}
                    >
                        <img src="/favorite-desktop.svg" className="h-5 w-5"/>
                        Yêu thích</button>
                )}
            </div>
            <div className="bnTab">
                {activeTabs ==='home'  ? (
                    <button type="button" className="btn-nav-bar text-purple-600"
                        onClick={() => setActiveTabs('login')}
                    >
                        <img src="/user-toolbar-footer.svg" className="h-5 w-5"/>
                        Tài khoản</button>
                    ):(
                        <button type="button" className="btn-nav-bar"
                        onClick={() => setActiveTabs('login')}
                    >
                        <img src="/user-toolbar-footer.svg" className="h-5 w-5"/>
                        Tài khoản</button>
                )}
            </div>
           
        </div>
    )
}
export default BottomTab;