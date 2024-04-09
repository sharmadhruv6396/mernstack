// let arr=[2,4,54,67];  


// function printArray(elem) {
//     console.log(':',elem);

// }
//     function printArray(arr){
//     for(let i=0;i<arr.length;i++){
//         console.log(arr(i));
//     }
//     arr.forEach(printPretty);

//     Array.forEach(function (elem){
//         console.log(':',elem);
//     });


//     arr.forEach(a=>{
//         console.log(':',a);
//     });

//     // arr.forEach(a,b,c)=>{
//     //     console.log(':',a,b,c);
//     // };
// }




// printArray(arr);

// function printpreety(elem){
//     console.log('hello')
// }
//  setTimeout(printpreety,1000);


// console.log('GEC Start')
// function printpreety(){
//         console.log('preetyStart');
//         let ans=2+3;
//         console.log(ans);
//         console.log('preetyEnd');
//     }
// setTimeout(printpreety,10000);

//  console.log('GEC End')

// const btn=document.getElementById('btn');
// btn.addEventListener("click",printpreety);



// console.log('Start');

// const req=fetch("https://github.com/sarthaksemwal/Social_Links");

// console.log(req);

// req.then(()=>console.log('Fetched'));


 
console.log('Start');
const req=fetch('https://dummyjson.com/products/1').then(res => res.json()).then((data) => console.log(data));


cconsole.log('End');

            