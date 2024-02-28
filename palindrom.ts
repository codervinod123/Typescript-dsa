const checkPalin=(num:number):boolean=>{
    let x=+num.toString().split("").reverse().join("");
    return x===num;

 } 
console.log(checkPalin(190));