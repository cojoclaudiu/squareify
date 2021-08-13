import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '../store';
import Header from '../components/ui/Header/Header';
import Navigation from '../components/ui/Navigation/Navigation';

import '../styles/_globals.css';

function Squareify({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="appWrapper">
          <Header />
          <Navigation />
          <Component {...pageProps} />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default Squareify;
