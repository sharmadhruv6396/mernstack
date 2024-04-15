const fs=require("fs")
const http=require("http");


const data = fs.readFileSync("./data.json","utf8");
const dataObj= JSON.parse(data).products;
// console.log(dataObj)

const cardTemplate=`
<div class='product-card>
<h3>$TITLE$</h3>
</div>
`;

let result=[];
for(let i=0;i<dataObj.length;i++){
    result.push(cardTemplate);
}
result=result.join(' ');

// console.log(result);
const Server = http.createServer((req,res)=>{
res.end(result);
});

Server.listen(1400);