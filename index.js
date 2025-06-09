const display = document.getElementById("display");
const buttons = document.querySelectorAll("input[type=button]")


buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        const value = button.value;

        if(value === "AC"){
            display.value = " ";
        }else if(value === "DE"){
            display.value = display.value.slice(0,-1)
        }else if(value == "="){
            display.value = eval(display.value);
        }else{
            display.value+=value;
        }
    })
})