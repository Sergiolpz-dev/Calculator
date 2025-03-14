let screen = document.getElementById("screen");
let botones = document.querySelectorAll(".btn");

botones.forEach(btn => {
    btn.addEventListener("click", ()=>{


        if(btn.innerText === "C"){
            screen.value = "0";
        }   
        else if(btn.innerText === "CE"){

            if(screen.value === "Error")
                screen.value = "0";
            else{
                screen.value = screen.value.slice(0, -1);
                if(screen.value === ""){
                    screen.value = "0";
                }
            }
        }
        
        else if(btn.innerText === "="){
            try {
                screen.value = eval(screen.value);
            } catch (error) {
                screen.value = "Error";
                
            }
        } 
        
        else{
            if(screen.value === "0" || screen.value === "Error"){
                screen.value = btn.innerText;
            }else{
                screen.value += btn.innerText;
            }
        }

   

        

    
    });
});