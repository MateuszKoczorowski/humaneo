function okienko1(){
    alert('To jest okienko alert');
}
function okienko2(){
    confirm('To jest okienko confirm');
}
function okienko3(){
    prompt('To jest okienko prompt');        
}
function on(){
    document.getElementById("myimage").src="pic_bulbon_on.gif";
}
function off(){
    document.getElementById("myimage").src="pic_bulboff.gif";
}
function drukuj(){
    window.print();
}
function suma(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    a = parseFloat(a);
    b = parseFloat(b);
    document.getElementById("wynik").innerHTML = a + b;
}
function roznica(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    a = parseFloat(a);
    b = parseFloat(b);
    document.getElementById("wynik").innerHTML = a - b;
}
function iloczyn(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    a = parseFloat(a);
    b = parseFloat(b);
    document.getElementById("wynik").innerHTML = a * b;
}
function iloraz(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    a = parseFloat(a);
    b = parseFloat(b);
    document.getElementById("wynik").innerHTML = a / b;
}
function suma2(){
    let a = document.getElementById("c").value;
    let b = document.getElementById("d").value;
    a = parseFloat(a);
    b = parseFloat(b);
    document.getElementById("wynik1").innerHTML = a + b;
}
function roznica2(){
    let a = document.getElementById("e").value;
    let b = document.getElementById("f").value;
    a = parseFloat(a);
    b = parseFloat(b);
    document.getElementById("wynik2").innerHTML = a - b;
}
function iloczyn2(){
    let a = document.getElementById("g").value;
    let b = document.getElementById("h").value;
    a = parseFloat(a);
    b = parseFloat(b);
    document.getElementById("wynik3").innerHTML = a * b;
}
function iloraz2(){
    let a = document.getElementById("i").value;
    let b = document.getElementById("j").value;
    a = parseFloat(a);
    b = parseFloat(b);
    document.getElementById("wynik4").innerHTML = a / b;
}
function operacja(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let operator =  document.querySelector('input[name="dzialanie"]:checked').value;
    let wynik = 0;
    a = parseFloat(a);
    b = parseFloat(b);
    switch(operator){
        case "+":
            wynik = a + b;
            break;
        case "-":
            wynik = a - b;
            break;
        case "*":
            wynik = a * b;
            break;
        case "/":
            wynik = a / b;
            break;
        case "**":
            wynik = a ** b;
            break;
        default:
            wynik = "ERROR ...";
    }
    document.getElementById("wynik").innerHTML = wynik;
} 
/** zadanie 6 */


