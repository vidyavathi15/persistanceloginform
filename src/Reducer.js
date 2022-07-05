
// const CounterReducer = (state, action) => {
//     console.log('In reducers');
//   switch (action.type) {
//     case "INCREMENT":
//         console.log('In increment');
//       return state + 1;

//     case "DECREMENT":
//         console.log('in decrement');
//       return state - 1;

//     case "RESET":
//       return 0;
//     default:
//       return state;
//   }
// };

// export default CounterReducer;

const reducer = (state = 0, action) => {
    switch (action.type) {
       case 'INCREMENT': return state + 1
       case 'DECREMENT': return state - 1
       case 'RESET' : return 0
        default: return state
    }
 }
 export default reducer;
