console.log('Loaded!');
//counter
 var button =document.getElementById("counter");
 var counter=0;
 button.onclick= function() {
     //make a request to the cunter end point
     //capture it in a variable
     //render the variable in a correct spam
     counter=counter+1;
     var span=document.getElementById("count");
     span.innerHTML=counter.toString();
     
 };