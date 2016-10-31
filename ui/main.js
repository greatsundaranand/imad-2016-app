console.log('Loaded!');
mymargin=0;
function fn1() {
    var mydiv=document.getElementById("tantan");
    mydiv.innerHTML="Thanks for clicking me";
    setInterval(fn2,100);
}

function fn2() {
    var myimage=document.getElementById("myimage");
    mymargin=mymargin+5;
    myimage.style.marginLeft=mymargin+"px";
}

function on_load() {
    var request = new XMLHttpRequest();
    
    
    request.onreadystatechange = function () {
        console.log(request.readyState);
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                consolde.log(request.responseText);
                var answer=document.getElementById("tantan");
                answer.innerHTML = request.responseText;
            }
        }
    }
    
    request.open('GET','www.apple.co.in', true);
    
}