import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PrimaryLayout from '../../components/layouts/PrimaryLayout';
import { NextPageWithLayout } from '../page';
type queryProps={
    id: string;
}

const queryData: queryProps[] = [
    {id:"1"},
    {id:"2"},
]
export const getStaticProps: GetStaticProps = async (context) => {
    const itemID = context.params?.id;
    
    const foundItem = queryData.find((item: queryProps) => itemID === item.id);
  
    if (!foundItem) {
      return {
        props: { hasError: true },
      }
  }
  
  return {
    props: {
      specificData: foundItem
    }
  }
}
export const getStaticPaths: GetStaticPaths = async () => {
    
    const path = queryData.map((item: queryProps) => ({ params: {  id: item.id }}))

    return {
        paths:path,
        fallback: true
    }
}
async function getData() {

    const data = JSON.parse(queryData.toString());

    return data;
}

type Props={
    hasError:boolean
    specificData:queryProps
}

const QueryPage:NextPageWithLayout<Props>=(props) => {
    const router = useRouter();
 
    if (props.hasError) {
      return <h1>Error - please try another parameter</h1>
    }
  
    if (router.isFallback) {
        return <h1>Loading...</h1>
    }
    return(
        <div className={`w-full flex flex-col   items-center p-5 tablet:p-0 select-none bg-slate-50 laptop:text-sm`}>
            <div className=" w-8/12 flex items-center justify-between tablet:p-3  tablet:w-full">
                <ol className=" flex items-center text-sm ">
                    <li className="pathMenu ">
                    
                    <Link href="/" >
                        <a className="text-purple-600">Cho thuê căn hộ</a>
                    </Link>
                    </li>
                    <li> 
                        <a className="font-semibold">
                            {props.specificData.id === "1" ? "Hồ Chí Minh" : "Đà Nẵng"}
                        </a>
                    </li>
                
                </ol>
            </div>
        </div>

    )
}
QueryPage.getLayout = (page:any) => {
    return <PrimaryLayout>{page}</PrimaryLayout>;
  };
export default QueryPage;