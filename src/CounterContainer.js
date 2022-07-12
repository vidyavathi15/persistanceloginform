// import { connect } from "react-redux";

// import Counter from "./Counter";
// import { increment, decrement, reset } from '../actions';

// const mapStateToProps = (state) => {
//   return {
//     counter: state,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement()),
//     reset: () => dispatch(reset()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);


import { connect } from 'react-redux'
import Counter from './Counter'
import { increment, decrement, reset } from './Actions';

const mapStateToProps = (state) => {
   return {
      counter: state
   };
};


const mapDispatchToProps = (dispatch) => {
   return {
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement()),
      reset: () => dispatch(reset())
   };
};

// here Counter is alredy Bounded in counterContainer component 
// we should import counterContainner in APP.js
export default connect(mapStateToProps, mapDispatchToProps)(Counter);