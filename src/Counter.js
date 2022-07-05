// import React from "react";

// function Counter(props) {
//     console.log('..........',props);
//   const { counter, increment, decrement, reset } = props;
//   console.log(counter);
//   return (
//     <div>
//       <h1>{counter}</h1>
//       <div>
//         <button type="button" onClick={increment}>
//           increment
//         </button>
//       </div>

//       <div>
//         <button type="button" onClick={decrement}>
//           decrement
//         </button>
//       </div>
//       <div>
//         <button type="button" onClick={reset}>
//           reset
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Counter;


import React, { Component } from 'react';
class Counter extends Component { 
   render() {
    const {counter,increment,decrement,reset} = this.props;
    console.log('this.props---------::', this.props)
      return (
         <div className = "App">
            <div>{counter}</div>
            <div>
               <button onClick = {increment}>INCREMENT BY 1</button>
            </div>
            <div>
               <button onClick = {decrement}>DECREMENT BY 1</button>
            </div>
            <button onClick = {reset}>RESET</button>
         </div>
      );
   }
}
export default Counter;
