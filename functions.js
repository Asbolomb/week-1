//task 1 complete

// factorial = (n) =>{
//     if ((n===0) || (n===1)){
//         return 1;
//     }else{
//         return(n*factorial(n-1));
//     }
//     }
// console.log(factorial(30));

// task 2 complete
let orderCount=0;
const takeOrder = (topping, base) =>{
    orderCount++;
    console.log(`pizza with ${topping} on a ${base} base`);
    
    console.log(orderCount)
}

takeOrder("cheese,", "thin");
takeOrder("pineapple", "stuffedCrust");

//task 3 complete

// let balance = (12345)
// let pin = (1234)
// const cashWithdraw = (pinNum, amount,) => {
//     if (amount <= balance && pin==pinNum) 
//     console.log (`withdrawing ${amount}`)
//     else if (amount >balance)
//     console.log("you do not have enough in your account")
//     else if (pin!=pinNum)
//     console.log ("incorrect pin")
//     else
//     console.log("unkown error")
// }
// cashWithdraw (234, 12345,)  


