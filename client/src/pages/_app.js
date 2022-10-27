import { Provider } from 'react-redux';

import '../tailwind/tailwind.css';

import { wrapper } from '../redux/store';

function MyApp({ Component, ...pageProps }) {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <div className='min-h-[100vh] bg-gray-2'>
      <Provider store={store}>
        <Component {...props.pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;
