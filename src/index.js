// import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react'
// import { render } from 'react-dom'
import { Provider } from 'react-redux'
import reducer from '../src/Reducer'
import App from '../src/App'
import './index.css';
import { createStore } from 'redux';

import {persistReducer, persistStore} from "redux-persist" 
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react';

// const store = createStore(
//   reducer,
//    window.__REDUX_DEVTOOLS_EXTENSION__ && 
//    window.__REDUX_DEVTOOLS_EXTENSION__()
// )


const persistConfig={
   key:"root", 
   storage
}


const persistedReducer = persistReducer(persistConfig,  reducer)

const store = createStore(persistedReducer)
const persistedStore = persistStore(store)

const root = ReactDOM.createRoot(
   document.getElementById('root')
) 


root.render(
<React.StrictMode>
        <Provider store = {store} >
           <PersistGate persistor={persistedStore}>
              <App />
              </PersistGate>
      
         </Provider>
    </React.StrictMode>
)


// const root= ReactDOM.createRoot(document.getElementById("root"))
// root.render(

//    <React.StrictMode>
//        <Provider store = {store} ><App />
      
//          </Provider>

//    </React.StrictMode>
// )
