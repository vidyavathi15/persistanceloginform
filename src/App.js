
// import './App.css';
// import {Provider} from "react-redux"

// import {counterStore} from "./Store" 
// import Counter from "./Counter"

// function App() {
//   return (
//     <Provider store={counterStore}>
//       <Counter />
//     </Provider>
   
//   );
// }

// export default App;

import React, { Component } from 'react';
import './App.css';
import CounterContainer from './CounterContainer';

class App extends Component {
   render() {
      return (
         <div className = "App">
            <header className = "App-header">
               <CounterContainer/>
            </header>
         </div>
      );
   }
}
export default App;
