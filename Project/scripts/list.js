function displayUsers(users){
    //travel the array
    for(let i=1;i<users.length;i++){
    //get each user
    let user = users[i];    
    //display the user
    let sytax = `
        <tr>
            <td>${[i]}</td>
            <td>${user.email}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.age}</td>
            <td>${user.address}</td>
            <td>${user.phoneNumber}</td>
            <td>${user.payment}</td>
            <td>${user.color}</td>
        </tr>
    `;
    $("#tblUsers").append(sytax);   
    //append the user to the DOM
    }
}

function init(){
    console.log("Listing users");
    var users = readUsers();//this fn is on the storeManager
    displayUsers(users);
    $("#btnClear").click(function(){
        clearUser();
        location.reload();//refreshes the page.
    })
}

window.onload = init;