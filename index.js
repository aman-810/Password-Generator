let txt = document.querySelector("#txt")
let btn = document.querySelector("#btn")
let range = document.querySelector("#range")
let rangeval = document.querySelector("#rangeval")
let uppercase = document.querySelector("#uppercase")
let lowercase = document.querySelector("#lowercase")
let nums = document.querySelector("#nums")
let sym = document.querySelector("#sym")
let cpbtn = document.querySelector("#cpbtn")

range.addEventListener("input", ()=>{
    rangeval.innerText = range.value
})

btn.addEventListener("click", ()=>{
    let capletter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let smletter = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbom = "@$#_&";
    let finalStr = "";
    let result = "";
    if(uppercase.checked)
    {
        finalStr += capletter;
    }
    if(lowercase.checked)
    {
        finalStr += smletter;
    }
    if(nums.checked)
    {
        finalStr += numbers;
    }
    if(sym.checked)
    {
        finalStr += symbom;
    }
    if(finalStr=="")
    {
        alert("Please select character option")
    }
    
    if(finalStr.length>=1)
    {
    for(let i=0; i<range.value; i++)
    {
        let cidx = Math.floor(Math.random()*finalStr.length)
        result += finalStr[cidx];
    }
    txt.value = result;
    }
})

cpbtn.addEventListener("click", async()=>{
    await navigator.clipboard.writeText(txt.value);
    cpbtn.innerText = "Copied!";
    setTimeout(()=>{
        cpbtn.innerText = "Copy";
    }, 1500)
})