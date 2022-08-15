import Head from 'next/head';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useDevice from '../../hooks/useDevice';
import type { IPrimaryLayout } from '../../interfaces/interfaces';
import BottomTab from '../bottomTab/bottomTab';
import Footer from './Footer';
import Header from './Header';
import HeaderMobile from './HeaderMobile';
 


const PrimaryLayout:React.FC<IPrimaryLayout>=({
    name,
    children,
    ...divProps
})=>{
    const [IsMobile,setIsMobile] =useState(false)

    const router=useRouter();
    useEffect(()=>{
        
        const {isMobile} =useDevice()
        if(isMobile)
            setIsMobile(true)
    },[])
   
    return( 
        <div {...divProps} className={`min-h-screen flex flex-col select-none laptop:text-sm tablet:mb-[50px]`}>
            
            <Head>
                <title>NextJs Projects</title>
            </Head>
           
            {!IsMobile ? (<Header/>):(<HeaderMobile/>)}
            
            <main className={`${!IsMobile && "mt-[80px]"}`}>{children}</main>
            <div className="m-auto" />
           {!IsMobile ? <Footer/> : IsMobile && router.pathname==='/' && <Footer/> }
            
            
            {IsMobile &&<BottomTab name={name} />}
            
        </div>
    )
}
export default PrimaryLayout;