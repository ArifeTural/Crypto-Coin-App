import "./scss/style.scss";
import { getCoins } from "./src/getCoins.js";



const form = document.querySelector("header form");
console.log(form);


form.addEventListener("submit",(e)=>{
    e.preventDefault();

    getInputVal()
    
    form.reset()
})

const getInputVal = () =>{

    const inputVal = document.querySelector("header form input").value
    console.log(inputVal);

    if(!inputVal.trim()){
        alert("input not be blank!")
    }else{
        // console.log("input dolu");
        getCoins(inputVal)
    

    }

}

