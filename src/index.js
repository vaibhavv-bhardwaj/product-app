import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './modules/dashboard';
import reportWebVitals from './reportWebVitals';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes component={Routes} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
{/* <BrowserRouter>
<Provider store={store}>
    <Routes component={Routes} />

</Provider>
</BrowserRouter> */}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
