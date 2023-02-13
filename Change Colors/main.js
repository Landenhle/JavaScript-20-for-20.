const button = document.getElementById("btn");
var up = 0;
button.addEventListener("click", () => {

    var colors = ['red', 'green', 'blue', 'orange'];
     document.body.style.backgroundColor = colors[up++]
    
     if(up > colors.length -1){
        up = 0;
     }
        
    }
);


