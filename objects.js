// task 1
// const person={
//     name:"andrew",
//     age:28,
//         sayHi(){
//             return console.log(`hello, my name is ${person.name}`)
//         }
// }

// person.sayHi();

// let day="gfd"
// const alarmClock={
//     weekend:"lie in",
//     weekday:"alarm at 7"}
//     if (day =="saturday" || day == "sunday"){
//         alarm=alarmClock.weekend;
//         console.log(alarm)

//     }
//     else{
//         alarm=alarmClock.weekday;
//         console.log(alarm)
//     }
    
    
// task 2

// const pet={
//     name:"layla",
//     type:"dog",
//     age:2,
//     colour:"black",
//     eat:() =>{
//         console.log(`${pet.name} is eating`)
//     },
//     drink:() => {
//         console.log(`${pet.name} is drinking`)
//     }
// };pet.eat();
// pet.drink();


// task 3

const coffeeShop={
    branch:"starbucks",
    food:{
    sandwich:4.10,
    cake: 3.50,
    toast: 1.20,},
    drink:{
    tea: 2.40,
    coffee:3.50,
    juice:3.10},

drinksOrder(...drinks) {
    let cost = 0;
    const drinksStr = drinks.join (" & ");
    drinks.forEach(drink =>(cost += this.drinks[drink]));
    cost=cost.toString().split(".");
    cost[1]=cost[1].padEnd(2, "0")
    cost=cost.join(".");
    return this.showOrder(drinksStr, cost);

},
foodOrder(...food){
    let cost=0;
    const foodStr=food.join("&");
    food.forEach(chosen =>(cost += this.food[chosen]))
    cost=cost.toString().split(".");
    cost[1]=cost[1].padEnd(2, "0")
    cost=cost.join(".");
    return this.showOrder(foodStr, cost)
},
showOrder(order, cost){
    console.log (`${order} confirmed, total amount due is £${cost}`);
},
}

coffeeShop.drinksOrder ("tea", "juice", "tea");
coffeeShop.foodOrder( "cake", "cake", "toast")

  


    





    