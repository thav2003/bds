import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {}
  


const PrimaryLayout:React.FC<IPrimaryLayout>=({
    children,
    ...divProps
})=>{
    return( 
        <div {...divProps} className={`min-h-screen flex flex-col select-none`}>
            <Head>
                <title>NextJs Projects</title>
            </Head>
            <Header/>
            <main >{children}</main>
            <div className="m-auto" />
            <Footer/>
        </div>
    )
}
export default PrimaryLayout;