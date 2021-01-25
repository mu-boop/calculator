function show(abc){
    var a = document.getElementById("input");
    a.value += abc;
}

function result(){
    var b = document.getElementById("input");
    b.value = eval(b.value);
}

function clr(){
    var c = document.getElementById("input");
    c.value = "";
}

function square(){
    var d = document.getElementById("input");
    d.value = d.value*d.value;
}

function upon(){
    var e = document.getElementById("input");
    e.value = 1/e.value;
}

function minus(){
    var f = document.getElementById("input");
    
}