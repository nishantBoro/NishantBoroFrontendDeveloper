import { Provider } from 'react-redux';

import '../tailwind/tailwind.css';

import { wrapper } from '../redux/store';

function MyApp({ Component, ...pageProps }) {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
}

export default MyApp;
