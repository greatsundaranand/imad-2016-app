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
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                var answer=document.getElementById("visitor");
                answer.innerHTML = request.responseText;
            }
        }
    }
    
    request.open('GET','http://greatsundaranand.imad.hasura-app.io/visitor', true);
    request.send(null);
}

function plus() {
    var var1 = parseInt(document.getElementById("1").value);
    var var2 = parseInt(document.getElementById("2").value);
    var var3 = var1 + var2;
    var answer=document.getElementById("tantan");
    answer.innerHTML = var3;
    
    var request = new XMLHttpRequest();
    
    
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                var answer=document.getElementById("tantan");
                answer.innerHTML = request.responseText;
            }
        }
    }
    
    request.open('GET','http://greatsundaranand.imad.hasura-app.io/add?var1='+var1+'&var2='+var2, true);
    console.log('http://greatsundaranand.imad.hasura-app.io/add?var1='+var1+'&var2='+var2);
    request.send(null);
}