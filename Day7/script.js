// const fs=require('fs');


// const data =fs.readFileSync('./myReadMe.txt',{encoding: 'utf8'});

// console.log(data);



// const fs=require('fs')
// console.log('start')
// const data =fs.readFileSync('./myReadMe.txt',{encoding: 'utf8'});
// console.log(data);
// caches.log('end');


//promises in file system
// const fsPromises=require('fs/promises');
// console.log('start')
// const pr=fsPromises.readFile('./myReadMe.txt',{encoding: 'utf8'});
// pr.then((res)=>{
//     console.log(res);
// })
// console.log('end')

//callback in filesystem
// const fs= require('fs')

// fs.readFile('./myReadMe.txt',{encoding:"utf8"},(err,data)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
// console.log(data);

// });

//http://localhost:1400/
// const http= require('http');

// const app=http.createServer(()=>{
//     console.log("Recieved!");
// });

// app.listen(1400); 


// const http=require('http');

// const server=http.createServer((req,res)=>{
//     console.log('Request recieved!');
//     console.log(req.url);
//     res.end('hello');
// });


// server.listen(1400,()=>{
//     console.log('............Server Started..........')
// })



// const http = require('http');
// const app = http.createServer((req, res)=>{
//     console.log('Recieved!')
//     console.log(req.url)
//     res.writeHead(200, {'content-Type': 'text/html'}),
//     res.end('<h1>Hii<h1>')
// });

// app.listen(1400, ()=>{
//     console.log('....Server Started.......')
// });

const http = require('http');
const fs =require('fs');

const data = fs.readFileSync("./data.json", "utf-8");
const dataObj = JSON.parse(data); //JSON.parse is SYnc not async;
// console.log(dataObj);
const products = dataObj.products;


const htmlTemplate = `
<!DOCTYPE html>
<html lang="en-US">
    <head>
    <style>
    .product-card{
        max-width: 500px;
        margin: 20px auto;
        border: 3px double brown;
        border-radius:8px;
        padding: 16px;
    }
</style>
        <body>
        __PRODUCTS__CARDS__
        </body>
    </head>
</html>
`

const cardTemplate = `
<div class='product-card'>
<h4>__TITLE__</h4>
<p>__INFO___</p>
</div>
`

// const card1= cardTemplate
//       .replace('__TITLE__',products[0].title)
//       .replace('__INFO___',products[0].description);

//       const card2= cardTemplate
//       .replace('__TITLE__',products[1].title)
//       .replace('__INFO___',products[1].description);

//       const card3= cardTemplate
//       .replace('__TITLE__',products[2].title)
//       .replace('__INFO___',products[2].description);


    //   const allCards =card1+card2+card3;

        const allcards = products.map((elem) => {
            let newCard = cardTemplate;
            newCard = newCard
              .replace("TITLE", elem.title)
              .replace("INFO", elem.description);
            return newCard;
          });
           

          const page = htmlTemplate.replace("PRODUCT", allcards);

          const app = http.createServer((req, res) => {
            console.log("Recieved");
            console.log(req.url); //URL is printed in the console
            res.writeHead(200, {
              "content-type": "text/html",
            });
            res.end(page);
          });
          
          app.listen(1400, () => {
            console.log("......Server Started......");
          });