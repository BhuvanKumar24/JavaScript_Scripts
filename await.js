// async function weather() {
//     let delhiWeather = new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             resolve("27 deg");
//         },5000);
//     });


//     let banglorewWeather = new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             resolve("21 deg");
//         },10000);
//     });

//      delhiWeather.then(alert)
//      banglorewWeather.then(alert)


//      let delhiW = await delhiWeather
//      let bangloreW = await banglorewWeather
//   return[delhiW, bangloreW]
// }

// console.log("welcome to weather control room")
// let a = weather()
// console.log(a)


//=================================================================================================================
async function weather() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("27 deg");
        },5000);
    });


    let banglorewWeather = new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("21 deg");
        },10000);
    });
console.log("Fetching Delhi weather Please Wait.....")
let delhiW = await delhiWeather;
console.log("Fetched Delhi weather:" + delhiW);


console.log("Fetching Banglore weather Please Wait.....")
let bangloreW = await bangloreWeather;
console.log("Fetched Banglore weather:" + bangloreW);
return[delhiW, bangloreW];
}
 console.log("welcome to weather control room");
 let a = weather();
 a.then((value) =>{
    console.log(value)
 });
