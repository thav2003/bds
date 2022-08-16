import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from '../page';
import { wrapper } from "../reducers/store";
import '../styles/globals.css';
interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  const router = useRouter()
 
  return getLayout(<Component key={router.asPath} {...pageProps} />);
}

export default wrapper.withRedux(MyApp);
