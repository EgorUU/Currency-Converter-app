import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/base/main.scss'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
          <App />
      </Provider>
    </BrowserRouter>
);
