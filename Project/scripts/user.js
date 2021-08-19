//global variable - can be accessed anywhere througout the script. If created inside a function it is only relative to that function.
/*var x=10;

function sum(a,b){//*a,b*<--parameters to a function not variables
    let result = a+b;
    console.log("result"+(a+b));
}*/
console.log("Users register");
function init(){
    console.log("init function");
    //sum(12,15);//parameters *a,b*.
}

window.onload=init;