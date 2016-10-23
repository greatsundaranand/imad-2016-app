console.log('Loaded!');
mymargin=0;
function fn1() {
    var mydiv=document.getElementById("tantan");
    mydiv.innerHTML="Thanks for clicking me";
    setInterval(fn2,100);
}

function fn2() {
    var myimage=document.getElementById("myimage");
    mymargin=mymargin+1;
    console.log(mymargin);
    myimage.style.marginLeft=mymargin+"px";
}