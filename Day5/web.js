console.log("...APP Starting")

function callAPI(){
fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=f04e215d22914ebc954cc79ac567e746")
.then((res) => {
    res.json().then((data)=>{
    renderUI(data)

})

})
}

const root=document.getElementById("root");
function renderUI(data){
    const articles=data.articles;
    
    for(let i=0;i<articles.length;i++)
    {

    const ar= articles[i];
    const div=document.createElement("div");
    div.setAttribute("class","news-card");

    const h3=document.createElement("h3")
    h3.innerText=ar.title;
    div.appendChild(h3);

    const img=document.createElement("img");
    img.src=ar.urlToImage;
    div.appendChild(img);

    const p=document.createElement("p");
    p.innerText= ar.description;

    root.appendChild(div);
    div.appendChild(p);

    const a=document.createElement("a");
    a.innerText=("Read more...!!")
    a.href=ar.url;
    div.appendChild(a);
}
}


callAPI()