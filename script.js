let string = "";
let inp = document.querySelector("#value");
let buttons = document.querySelectorAll("span")
Array.from(buttons).forEach((button) => {
    button.addEventListener("click",function(dets){
        if(dets.target.innerHTML == "="){
            string = eval(string);
            inp.innerHTML = string;
        }

        else if(dets.target.innerHTML == "Clear"){
            string = "";
            inp.innerHTML = string;
        }

        else{
        string = string + dets.target.innerHTML;
        inp.innerHTML = string;
        }

    })
    
});