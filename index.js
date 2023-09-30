var isStatus = document.querySelector("h1");
var btn= document.querySelector("#button1");
var removed = document.querySelector("#button2");
var check = 0;

    btn.addEventListener("click" , function(){
        if(check ==0 ){
         isStatus.innerHTML="Friend"
         isStatus.style.color ="green" 
         btn.innerHTML="Remove Friend" 
         check = 1; 
        }else{
            isStatus.innerHTML="Stranger"
            isStatus.style.color ="red"
            btn.innerHTML="Add Friend"  
            check = 0;
        }
    })

    // removed.addEventListener("click" , function(){
    //      isStatus.innerHTML="UnFriend"
    //      isStatus.style.color ="white"  
    //      console.log("HUE hue hue");   
       
    // })


