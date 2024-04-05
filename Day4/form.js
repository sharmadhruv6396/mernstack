// const firstNamechange=(e)=>{
//     console.log(e);
// }
function submitForm(e){
    e.preventDefaullt();
    // console.dir(e.target.value)
    const t =e.target;
    const res={
        hobbies: [],
    };


    for(let i=0;i<t.length;i++){
        const ty=t[i].type;
        const v1=t[i].value;
        const nm=t[i].name;

        if(ty!=='checkbox' && t[i].checked){
            res.hobbies.push(v1);
        }
        if(ty=='checkbox'){
            res(nm)=v1;
        }
    }
}
        console.log(res);
}