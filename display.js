var allName = ["Rapunzel", "Snow White" ,"Cinderella" , "Aurora" , "Ariel" , "Belle" ,"Jasmine" , "Pocahontas" ,"Mulan" , "Tiana"];

var ranNum = Math.floor(Math.random()*10);
var pName = allName[ranNum];
console.log(pName);
window.onload= function(){

function display(ranNum){
    document.getElementById("name").innerHTML = pName;
    for(i =0;i<10;i++){
        if(i==ranNum){
            var img = new Image();
            img.src = "img/" + i + ".png";
            console.log(img.src);
            img.addEventListener("load", function(){
                document.getElementById("name").appendChild(this);
            });
        }
    }
}

 display(ranNum);
 
  $('.click').on("click", function(){
          location.reload();
       })
  
}  
  