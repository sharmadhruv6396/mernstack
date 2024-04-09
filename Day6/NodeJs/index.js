// const figlet=require("figlet");

// figlet('Hello',(err,data)=>{
//     console.log(data)
// })


async function getApi(){
const pr= await fetch('https://api.github.com/users/deepak3440');
console.log('making json...')
const data=await pr.json();
console.log(data);
}

getApi();
