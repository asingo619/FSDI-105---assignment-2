const KEY_USERS = "users";
function saveUser(user){
    //load old data
    let data = readUsers();
    //merge
    data.push(user);
    //save
    let val = JSON.stringify(data);//JSON=JavaScript Obeject Notation.
    console.log(val);
    localStorage.setItem(KEY_USERS,val);
}

function readUsers(){
    let data = localStorage.getItem(KEY_USERS);
        // console.log(data);
        // console.log(!data);
    if(!data){ //NOT data(!=no data present)
        return[]; //creates an array
    }else{
        let list = JSON.parse(data);// (parse)-turns string back into object
        return list;// this an array of objects
        console.log("there are users");
    }
}
function clearUser(){
    localStorage.removeItem(KEY_USERS);
}
function clearData(){
    //WARNING!!!:this will clear all data
    localStorage.clear();
}


