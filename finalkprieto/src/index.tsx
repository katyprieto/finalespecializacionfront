import * as React from "react";
import * as ReactDOM from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import { store } from './componentes/redux/store'
import { Provider } from 'react-redux'


const rootElement: HTMLDivElement= document.querySelector('#root') as HTMLDivElement;

ReactDOM.render(





 
  
  <React.StrictMode>
    
    
    <Provider store={store}>
    <BrowserRouter>
        <App />
        </BrowserRouter>
        </Provider>
        
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
