import '@/styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import { SessionProvider } from 'next-auth/react';
import 'react-toastify/dist/ReactToastify.css';
import { NextComponentType } from 'next';

type CustomComponentType = NextComponentType & {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
};

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = ('getLayout' in Component
    ? (Component as CustomComponentType).getLayout
    : undefined) || ((page: React.ReactNode) => page);

  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        {getLayout && getLayout(<Component {...pageProps} />)}
      </Provider>
    </SessionProvider>
  );
}