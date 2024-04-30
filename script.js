// // `use strict`;
// // const resturent = {
// //     name: `Italiyano Bangla Food`,
// //     address: `Tangail , Bangladesh`,
// //     fastFoods : [`Pizza`,`Burger`,`Shourma`,`chiness Noddoless`,`Cilly Fried Potatos`],
// //     treditionalFoods : [`Fried egg with Mustard oil`,`Potato egg smash with Mustard oil`,`Boiled Rice`,`hilsha curry`],
// //     openening :{
// //         sat :{
// //             open :`10:00 am `,
// //             close:`07:00 pm`
        
// //         },
// //         sun :{
// //             open :`10:00 am `,
// //             close:`07:00 pm`
        
// //         },
// //         mon :{
// //             open :`10:00 am `,
// //             close:`07:00 pm`
        
// //         },
// //         tus :{
// //             open :`10:00 am `,
// //             close:`07:00 pm`
        
// //         },
// //         wed :{
// //             open :`10:00 am `,
// //             close:`07:00 pm`
        
// //         },
// //     },
// //     // oderfood (fastindex = 0,treditionalindex = 2){
// //     //     return `sir you have oder ${this.fastFoods[fastindex]} and ${this.treditionalFoods[treditionalindex]} from our resturent `;
// //     // }


// // }

// // const newobj = new Map (Object.entries(resturent));
// // console.log(newobj);
// // console.log(newobj.has('openening'));
// // console.log(newobj.delete('openening'));
// // console.log(newobj.set('openening',"ooooo"));
// // console.log(newobj.size);
// // console.log(newobj.clear());
// // console.log(newobj);

// // // const time = 12
// // const mobj = new Map();
// // mobj.set('property' , 'value').set(
// //     'name','tauhid'
// // ).set(
// //     true ,'The answar is true'
// // ).set (
// //     false ,'the answar is false'
// // ).set(
// //     'open',10
// // ).set("close",20);
// // console.log(mobj.get('open'));
// // console.log(
// //     mobj.get(
// //         mobj.get("open")<=time && mobj.get('close')>=time
// //     )
// // )
// // console.log(mobj.entries())

// // console.log(mobj)
// // const exam = new Map([
// //     ['quesction','What is the most populer programming language in 2024'],
// //     [1 ,'Ruby'],[2,'C++'],[3,'javascript'],['correct' , 3]
// // ])
// // console.log(exam.get('quesction'))
// // for(let [value , keys] of exam){
// //     if (typeof(value)=='number'){
// //         console.log(`${value} : ${keys}`)
// //     }
// // }
// // let answar= 3;
// // if (answar == exam.get('correct')){
// //     console.log('you are right')
// // }
// // else(
// //     console.log('you are wrong')
// // )
// // exam.get('correct')==answar? console.log('right'): console.log('you are wrong')
// // console.log(exam)
// // const arrset = new Set([
// //     'tauhid',
// //     'islam',
// //     'rafi',
// //     ...resturent.fastFoods
// // ])

// // console.log(arrset);
// // arrset.add('tir');
// // console.log(arrset.size)
// // console.log(arrset.has('tir'))
// // // console.log(arrset.clear())
// // arrset.add(...resturent.fastFoods)
// // console.log(arrset)
// // console.log(arrset.size)
// // const arr =[...new Set([...arrset])]
// // console.log(arr);
// // for (let value of arr){
// //     console.log(value)
// // }
// // const entrie = Object.entries(resturent.openening);
// // console.log(entrie);
// // for(const [x,{open,close}] of entrie){
// //     console.log(x,open,close)
// // }
// // const opendays = Object.keys(resturent.openening);
// // const cumaand =()=>{
// //     for(let ca of opendays){

// //         if (opendays.length>0){
// //             return `,`
// //         }
// //         else{
// //     }
// //         return `and`;
// //     }
// // }
// // let str = `we are open for ${opendays.length} days in a week. The days is : `;
// // for (const days of opendays){
// //     str+=`${days} ${cumaand()} `;
// // }
// // console.log(str)
// // // console.log(resturent?.openening?.sat?.open || 'not in the object');
// // const res = new Map();
// // res.set('nam e',"kings hotel").set(
// //     1,'main'
// // ).set(
// //     2,'course'
// // ).set(
// //     true ,'yes'

// // ).set(
// //     false,'no'
// // ).set(
// //     'open',11
// // ).set(
// //     'close',20
// // )
// // const time = 15;

// // console.log(res.get(time<=res.get('close') && time>=res.get('open')))
// // console.log(res)
// // res.delete()
// // console.log(res)
// // for(let v of Object.entries(resturent)){
// //     console.log(v[0],v[1])
// // }
// ///maps in javascript 


// // const opening =  Object.entries(resturent.openening);
// // console.log(opening)
// // for(const [day,{open,close}] of opening){
// //  console.log(day,open,close)
// // }
// //  const arr = ['a','a','f','e','f','f','e'];
// //  console.log(arr)
// //  const arrset =new Set(arr)
// //  console.log(arrset)
// //  console.log(arrset.has("a"))
// //  console.log(arrset.add('d'))
// //  arrset.delete('a')
// //  for(let c of arrset.entries()){

// //      console.log(c)
// //  }
// //  console.log(arrset)
// //  const settoarr= [...new Set([1,1,1,1,1,1,1,1,1,1,1,42,45,2,123,34])]
// //  console.log(settoarr)
 
 


// // console.log(resturent.openening?.fri ?? `ldfjlsd` )
// // document.getElementById('color').value;
// // document.querySelector('.submit').addEventListener('click',function(){
// //    console.log(document.getElementById('color').value) ;
// // })

// // console.log(x.has('arabic') && 'kdsfkjsdah')
// // console.log(x.add('arabicr'))
// // // console.log(x.delete('arabic'))
// // console.log(x.size);

// // for (let item of resturent.fastFoods.entries()){
// //     console.log(item)
// // }

// // // const [x,,z,y=[]]=resturent.fastFoods
// // // console.log(x,z,y);
// // const nasted = [2,3,[32,34321,42,424,234]];
// // console.log(nasted)
// // let [a,b,[c]]=nasted;
// // console.log(a,b,c);
// // [a,b]=[b,c];
// // console.log(a,b,c);
// // console.log (resturent.oderfood(3,1));

// // const {name,address:add,owner:ownby=`nobody`} =resturent;
// // console.log(name,ownby,add);
// // //nasted object
// // const {openening:{sat:{
// //     open:on,
// //     close,
// // }}}=resturent
// // console.log(on);

// // const a = [324324,324,3,23,423,4,324,32,32,32,36547647];
// // function bigsum(...number) {
// //     sum = 0;
// //     for(let i = 0; i<=number.length;i++){
// //         if (number[i]>=sum){
// //             sum = number[i];
// //         }
// //     }
// //     return sum;
// // }
// // console.log(bigsum(...a))
// // Data Structures, Modern Operators and Strings
// // Coding Challenge #1
// // We're building a football betting app (soccer for my American friends �)!
// // Suppose we get data from a web service about a certain game ('game' variable on
// // next page). In this challenge we're gonna work with that data.
// // Your tasks:
// // 1. Create one player array for each team (variables 'players1' and
// // 'players2')
// // 2. The first player in any player array is the goalkeeper and the others are field
// // players. For Bayern Munich (team 1) create one variable ('gk') with the
// // goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// // field players
// // 3. Create an array 'allPlayers' containing all players of both teams (22
// // players)
// // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// // new array ('players1Final') containing all the original team1 players plus
// // 'Thiago', 'Coutinho' and 'Perisic'
// // 5. Based on the game.odds object, create one variable for each odd (called
// // 'team1', 'draw' and 'team2')
// // 6. Write a function ('printGoals') that receives an arbitrary number of player
// // names (not an array) and prints each of them to the console, along with the
// // number of goals that were scored in total (number of player names passed in)
// // 7. The team with the lower odd is more likely to win. Print to the console which
// // team is more likely to win, without using an if/else statement or the ternary
// // operator.
// // Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// // Then, call the function again with players from game.scored
// // GOOD LUCK �
// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//     [
//     'Neuer',
//     'Pavard',
//     'Martinez',
//     'Alaba',
//     'Davies',
//     'Kimmich',
//     'Goretzka',
//     'Coman',
//     'Muller',
//     'Gnarby',
//     'Lewandowski',
//     ],
//     [
//     'Burki',
//     'Schulz',
//     'Hummels',
//     'Akanji',
//     'Hakimi',
//     'Weigl',
//     'Witsel',
//     'Hazard',
//     'Brandt',
//     'Sancho',
//     'Gotze',
//     ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski','Lewandowski','Lewandowski', 'Gnarby', 'Lewandowski',
//     'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//         team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//     },
//     };
// //. Loop over the game.scored array and print each player name to the console,
// // along with the goal number (Example: "Goal 1: Lewandowski"
// // for(const [value , name ] of game.scored.entries()){
// //     console.log(`Goal ${value+1} : ${name}`);
// // }
// // // 2. Use a loop to calculate the average odd and log it to the console(We already
// // // studied how to calculate averages, you can go check if you don't remember)
// // const games = Object.keys(game);
// // console.log(games)
// // const odds = Object.values(game.odds);
// // console.log(odds)
// // let averages = 0;
// // for(const i of odds){
// //     averages+=i
// // }
// // console.log(averages/odds.length);

// // . Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// // Odd of draw: 3.25
// // Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object, don't hardcode them
// // (except for "draw"). Hint: Note how the odds and the game objects have the
// // same property names �
// for(const [name , values] of Object.entries(game.odds)){
//     const data = game[name] ?`${game[name]} has goal ${values}`: name ? `match draw by ${values}`: `can't find data`;
//     console.log(data);
// }
// // . Bonus: Create an object called 'scorers' which contains the names of the
// // players who scored as properties, and the number of goals as the value. In this
// // game, it will look like this:
// // {
// //  Gnarby: 1,
// //  Hummels: 1,
// //  Lewandowski: 2
// // }
// // }
// let goals = { 

// }
// let y =1
// for(const name of game.scored){
//     let i = 1
    
//     goals[name] ? goals[name]=(y=i+y) : goals[name]=i;
//     console.log(name)
// }
// console.log(goals);
// console.log('string mathod');
// let airport = 'Hazrat Shajalal International Airport';
// console.log(airport)
// console.log(airport[3])
// console.log(airport.includes('Haz'
// ))
// console.log(airport.indexOf('a'))
// console.log(airport.lastIndexOf('a'));
// console.log(airport.slice(0,airport.length-1))
// console.log(airport.slice(0,-30))
// console.log(airport.slice(0,airport.indexOf(' ')));
// const word = function(myword){
//     let word = myword.toLowerCase().
// console.log(word)
// }
// // word(' b    alkjdflHKKJHKJHKJHJsdflsdkjflskdj')
// const chacksit = (sit)=>{
//     let sitno = sit.toLowerCase();
//     console.log(sitno)
//     sitno.slice(sitno.length -1) === 'b' ? console.log(`you got sit in left side middle`): sitno.slice(sitno.length -1) === 'c'?  console.log(`you got sit in right side middle`) :sitno.slice(sitno.length-1) === 'd'?  console.log(`you got sit in rigt window`) :sitno.slice(sitno.length-1) === 'a'?  console.log(`you got sit in left window side`) : console.log(`pleace enter the right vlaue`);
// }
// chacksit('32B')
// const gmail = 'tauhidislam@gmail.com';
// const login = '   TaUhidIsLAm@gmail.com '
// console.log(login);
// const normallization = login.toLocaleLowerCase().trim();
// console.log(normallization)
// console.log(gmail === normallization)
// gmail == normallization && console.log('yes email is correct')
// const oder = 'all of you listen your door is open . come fast we will close the door soon';
// console.log(oder.replace('door' , 'gate'))
// console.log(oder.replaceAll('door' , 'gate'))
// console.log(oder.replace(/door/g , 'gate'))

// let name1 = 'tauhid islam rafi'
// let newstr = name1.startsWith('tauhid') && name1.endsWith('rafi') ? 'You rafi welcome': 'you are not him'
// console.log(newstr)

// console.log(name1.split(' '));

// let wordseperater = (word)=>{
//     let arr = [];
//     let warr = word.split(' ');
//     for(const word of warr){
//         arr.push(word[0].toUpperCase()+word.slice(1));
//     }
//     console.log(arr.join(' '))
// }
// wordseperater(name1);

// let mastercard = 12324379832794;
// let padding = (number)=>{
//     str = number+ ' ' .trim();
//     add = str.slice(-4).padStart(str.length , "+")
//     console.log(add)

// }
// padding(mastercard)
// let tau = 'kshakfjhsdakjfhsdkaljh'
// tau.padStart(213, '23043');
// console.log( tau)
// console.log(tau.repeat(5))
// Coding Challenge #4
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// Hints:
// § Remember which character defines a new line in the textarea �
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working �
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data!
// GOOD LUCK �
// let camelCase = (value) =>{
//     let number= 1
//     let row = value.split('\n')
//     for(let value of row ){
//     let arr = [];
//     let x = value.trim().toLowerCase().split('_');
//     for(let i of x){
//         arr.push(i[0].toUpperCase() + i.slice(1))
//     }
//     let final = arr[0].toLowerCase()+arr[1]
//     let star = final.padEnd(final.length + number++,"✅")
//     console.log(star)
// }
//  }
 
//  document.body.append(document.createElement('textarea'));
//  document.body.append(document.createElement('button'));
//  let button = document.querySelector('button');
//  button.innerHTML= 'submit'
// button.addEventListener('click' , function(){
//    let value = document.querySelector("textarea").value;
//    camelCase(value)
//  })
 
// const arr = ["hi" , 'hello' , 'sir','hi' ,' hi']
// console.log(arr.includes("hi"), arr.indexOf("hi"), arr.lastIndexOf("hi"),arr.slice(1,-1))
// //  
