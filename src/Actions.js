




// export function increment () {


//     return {
//         type:"INCREMENT"
//     }



// } 


// export function decrement () {
//     return{
//         type: "DECREMENT"
//     }
// } 



// export function reset () {


//     return{
//         typr: "RESET"
//     }
// }


export function increment() {
    console.log("increment triggerd")
    return {
       type: 'INCREMENT',

    }
 }
 export function decrement() {
     console.log("decrement triggered")
    return {
       type: 'DECREMENT'
    }
 }
 export function reset() {
    return { type: 'RESET' }
 }