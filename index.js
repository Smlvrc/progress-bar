
let birinci=document.querySelector(".first");
let ikinci=document.querySelector(".second").value;
const bar=document.querySelector(".color")

birinci.addEventListener("change", function (e){
 const value=e.target.value;
 if(value<(ikinci/2)){
    bar.style.width=value+'%'
    bar.style.background='red'
 }
 else if(value>=(ikinci/2) && value<((ikinci*90)/100)){
 bar.style.width=value+'%';
 bar.style.background='yellow'}

else  {
    bar.style.width=value+'%';
    bar.style.background='green';
}
})
