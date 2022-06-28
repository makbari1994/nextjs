import '../styles/globals.css'
import type { AppProps } from 'next/app'
import store from './../store/store';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )



}



const makeStore = () => store;
export default withRedux(makeStore)(MyApp);
