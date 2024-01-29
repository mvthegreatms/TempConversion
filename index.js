
document.getElementById("Calculate").onclick=function(){
    let num=document.getElementById("value").value;
   num=Number(num);
    convert(num);
}
function convert(val){
    let from= document.getElementById("from").value;
    let to=document.getElementById("to").value;
    let answer=document.getElementById("ans");
    if(from!=to){
        if(from==="Celcius" && to==="Fahrenhreit"){
            let res=val*(9/5)+32;
            answer.textContent=`Answer: ${res} Fahrenheit`;
        }
         if(from==="Celcius" && to==="kelvin"){
            let res=val+273.15;
            answer.textContent=`Answer: ${res} Kelvin`;
    
        }
        if(from==="Fahrenhreit" && to==="Celcius"){
            let res=(val-32)*(5/9);
            answer.textContent=`Answer: ${res} Celcius`;
        }
        if(from==="Fahrenhreit" && to==="kelvin"){
            let res=val*(5/9)+459.67;
            answer.textContent=`Answer: ${res} Kelvin`;
    
        }
        if(from==="kelvin" && to==="Celcius"){
            let res=val-273.15;
            answer.textContent=`Answer: ${res} Celcius`;
        }
        if(from==="kelvin" && to==="Fahrenhreit"){
            let res=(val-273.15)*(9/5)+32 ;
            answer.textContent=`Answer: ${res} Fahrenheit`;
        }
    }
    else{
        answer.textContent=`No Conversion! Answer: ${val}  ${from}`;
    }
   

}
