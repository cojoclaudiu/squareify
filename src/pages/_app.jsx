import { Provider } from 'react-redux';
import store from '../store';
import Header from '../components/ui/Header/Header';
import Navigation from '../components/ui/Navigation/Navigation';

import '../styles/_globals.css';

function Squareify({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="appWrapper">
        <Header />
        <Navigation />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default Squareify;
