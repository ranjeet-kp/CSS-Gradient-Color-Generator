let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let copyCode = document.querySelector(".copy-box");

function getColorCode(){
    let color = "#";
    let colorCode = "0123456789abcdef";
    for(let i=0;i<6;i++){
        let randomValue = Math.floor(Math.random()*16);
        color = color + colorCode[randomValue];
    }
    return color;
}

var rgb1 = "#3589B0";
var rgb2 = "#57C785";

const handleBtn1 = ()=>{
    rgb1 = getColorCode();
    btn1.textContent=rgb1;
    btn1.style.backgroundColor=rgb1;
    copyCode.innerHTML=`background-image: linear-gradient(to right,${rgb1},${rgb2});`
    document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`;
}
const handleBtn2 = ()=>{
    rgb2 = getColorCode();
    btn2.textContent=rgb2;
    btn2.style.backgroundColor=rgb2;
    copyCode.innerHTML=`background-image: linear-gradient(to right,${rgb1},${rgb2});`
    document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`;
}

btn1.addEventListener('click', handleBtn1);
btn2.addEventListener('click', handleBtn2);

copyCode.addEventListener('click', ()=>{
    navigator.clipboard.writeText(copyCode.innerHTML);
    alert(`Code Copy : ${copyCode.textContent}`)
});


