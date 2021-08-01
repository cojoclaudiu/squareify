import { Provider } from 'react-redux';
import store from '../store';

import '../styles/_globals.css';

function Nextify({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="appWrapper">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default Nextify;
