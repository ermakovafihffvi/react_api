import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/css/index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);


