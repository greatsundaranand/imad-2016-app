console.log('Loaded!');

function fn1() {
    var mydiv=document.getElementById("tantan");
    mydiv.innerHTML="Thanks for clicking me";
    var myimage=document.getElementById("myimage");
    if (myimage.style.marginleft==='') {
    myimage.style.marginleft="100px";
    } else {
    myimage.style.marginleft=myimage.style.marginleft+100+"px";
    }
}