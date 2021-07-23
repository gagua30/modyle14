let nameOffice = "name";

let objOffice = {
    name: "mersedes"
}

function office(a,b){
    for(let key in a){
        if(key === b){
            console.log("true")
        }else{
            console.log("false")
        }
     }
}

office(objOffice, nameOffice);
