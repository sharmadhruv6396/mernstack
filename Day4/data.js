// const res =document.querySelector('div')
// const c=document.querySelector('p')
// console.log(res)

// res.removeChild(c)
// // res.remove()

// const res =document.querySelector('div')
// // const c=document.getElementById('ht1')
// console.log(res)

// res.removeChild(c)

// function getInfo(e){
//     console.log(e)
//     // console.log("Btn Clicked");
//     // const d=document.querySelector("div")
//     // d.prepend("My name is Dhruv");
// //   e.target.style.backgroundColor= 'green';
//     e.target.setAttribute('style','color:red')
//     e.target.style.color='blue';

// }
function submitForm(e){
    e.preventdefaullt();
    // console.dir(e.target.value)
    const t=e.target
    for(let i=0;i<t.length;i++){
        console.log(t[i],value);
        console.log(t[i].value);
        if(ty=='checkbox'){
            console.log(t[i].checked)
        }
    }
    
}