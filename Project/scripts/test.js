//javascript vs jQuery

/*var title=document.getElementById('title');
title.style.display="none";
console.log(title)*/


$("#title").hide();//$ can be used to call jQuery.
jQuery("#title").show();

var h2 = document.createElement("h2");
var text = document.createTextNode("Title 2");
h2.appendChild(text);
document.body.appendChild(h2);
$("h3").text("<h3></h3>");
$(".example").html("<h5>Example</h5>");