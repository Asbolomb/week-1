//array syntax

// let coffeeOrder=[
//     "alex-cortado",
//     "ben-cortado",
//     "carlie-whatevers new"
// ];
// console.log(coffeeOrder)
// coffeeOrder[1]="andy-tea"
// console.log(coffeeOrder.length)
// coffeeOrder.push("lizzy-latte")
// console.log(coffeeOrder)
// coffeeOrder.pop()
// console.log(coffeeOrder)

// let favSongs=[
//     "amaranthe-boomerang",
//     "space of variations-razorblade",
//     "eskimo callboy-we got the moves"
// ]
// console.log(favSongs)
// favSongs.push("invisions-goldblooded",
// "bfmv-fever")
// console.log(favSongs)
// favSongs.pop()
// console.log(favSongs)
// favSongs.shift()
// console.log(favSongs)

// let favDrinks=[
//     "coke",
//     "pepsi",
//     "beer",
//     "water",
//     "tea",
// ]
// for(let i=0; i<favDrinks.length; i++){
//     console.log(favDrinks[i])
//}

// let multiplesTwo=[];
// for(let i=0; i<=20; i++){
//     if(i%2==0){
//         multiplesTwo.push(i);
//     }
// };
// console.log(multiplesTwo)

// let cards=["diamond", "spade", "heart", "club"];
// let currentCard=cards[Math.floor(Math.random()*4)];
// while(currentCard!="spade"){
//     console.log(currentCard);
//     currentCard=cards[Math.floor(Math.random()*4)]
// }
// console.log(currentCard);

//task 1 complete

// let favFilms=["logan", "pans labyrinth", "no way home"]
// console.log(favFilms)
// favFilms.push("star wars", "lotr")
// console.log(favFilms)
// for(let i=0; i<favFilms.length; i++){
//     console.log(favFilms[i])
// }

//task 2 complete

// let number=[];
//  while(number.length<6) {
//      let i=Math.floor(Math.random()*50)+1
//  if(number.indexOf(i)===-1) number.push(i);
//  }
//  console.log(number);



//task 3 complete

// for(i=9; i>0; i--){
//     console.log(i)
// }

//task 4 complete
// let Films=["logan", "pans labyrinth", "no way home", "ghostbusters"]
// console.log(Films)
// for(i=0; i<Films.length; i++)
// console.log(Films[i])
// if(Films[2]=="ghostbusters")
// console.log("yay, ghostbusters");
// else
// console.log("you're not ghostbusters")

//task 5 complete

// let number=[];
//  while(number.length<6) {
//      let i=Math.floor(Math.random()*30)
//  if(number.indexOf(i)===-1) number.push(i);
//     if(i%7==0)
//     console.log((i), "this does divide by 7");
//     else
// console.log((i), "this does not divide by 7")}

// for (let i=0; i<6; i++){
//     let number=Math.floor(Math.random()*30)
//     if (number % 7==0)
//     console.log(`${number} divides by 7`);
//     else
//     console.log(`${number} does not divide by 7`)
// }

 
//  }
//  console.log(number);

//task 6 complete

// let andyFollowers=["mark", "lizzy", "james", "toria"]
// let lizzyFollowers=["Andy", "josh", "mark", "james"]
// for(let i=0; i<andyFollowers.length; i++){
//     for( let j=0; j<lizzyFollowers.length; j++){
//         if(andyFollowers[i]===lizzyFollowers[j]){
//             console.log("you are mutual friends with:" + lizzyFollowers[j])
//         }
//     }
// }

// for loops are helpful for when you konw how many times you want to loop the code, for example
// for (let i=0; i<6; i++){
//         let number =Math.floor(Math.random()*30)
//         console.log(number)}//" this will get you 6 random numbers between 1 and 30"
    

//while loops are helpful when the answer you are looking for is unknown or random, for example
// let i=0;
// while (i!=7){
// (i= Math.floor(Math.random()*10))
// console.log(i)} //this will keep printing until the number is 7

//do while loops are very similar to while loops, the main differnce is the order in which the loop runs
// let i=0;
// do{
//     (i= Math.floor(Math.random()*10))


// console.log(i)
// }while (i!=7) //this will also print a random number until 7 is hit