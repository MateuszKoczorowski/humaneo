function myFunction() {
    document.getElementById("myLinks").style.display = "flex";
    document.getElementById("menu").style.display = "none";
}

const btnNumber = document.getElementById('btnNumber') /**zadanie 1 */
const button = document.getElementById("buttonParagraf") /**zadanie 2 */


/** zadanie 1  */
function exchange () {
    let p1 = document.getElementById('pargarf')
    
    
    p1.textContent = "Witaj śiwcie"
    button.remove()
}

/** zadanie 2  */
function numbers (){
    let number1 = prompt("podaj liczbe","12")
    if (number != null){
        btnNumber.remove()
        document.getElementById('number').innerHTML="twoja liczba to"+number1
    }
    
}
btnNumber.addEventListener('click', numbers)/**zadanie 2 */
button.addEventListener('click', exchange)/**zadanie 1 */

    /** zadanie 3  */

const btnPentla = document.getElementById('btnPentla')
function pentla (){
let pentla1 = document.getElementById('pentla1')
let kodHtml = ''
for(let i = 1 ; i<=100 ; i++ ) {     
    
    kodHtml=kodHtml + i + '; '
}
pentla1.innerHTML = kodHtml
btnPentla.remove()

}
btnPentla.addEventListener('click',pentla )


/** zadanie 4  */

const btnJezeli = document.getElementById('btnJezeli')

function Jezeli () {
    let liczbaDO = prompt('Podaj liczbe do sprawdzenia','0')
    let liczba = document.getElementById('liczbaJ')
    
    
    if(liczbaDO>0) {
        liczba.textContent = liczbaDO + " Liczba wieksza od zera" 
        liczba.style.color = "green"
        btnJezeli.remove()
    }
     else if(liczbaDO == 0) {
        liczba.textContent = liczbaDO + " Liczba jest równa zero"
        btnJezeli.remove()
    }

    else {
        liczba.textContent = liczbaDO + " Liczba jest miejsza od zera "
        liczba.style.color = "red"
        btnJezeli.remove()
    }
}
btnJezeli.addEventListener('click', Jezeli)

/** zadanie 5  */

const btnOcena = document.getElementById('btnOcena')

function zmianaOceny () {
let ocena = prompt('podaj ocene')
let wynik = ' '
switch(ocena){
    case "1":
        wynik = 'niedostateczny';
        break;
    case "2":
        wynik = 'dopuszczajacy';
        break;
    case "3":
        wynik = "dostateczny";
        break;
    case "4":
        wynik ="dobry";
        break;
    case "5":
        wynik = "bardzo dobry";
        break;
    case "6":
        wynik = "celujacy";
        break;
    default:
        wynik = "ERROR podaj ocene w liczbie";
}
 document.getElementById('ocena').innerHTML = wynik


}

btnOcena.addEventListener('click', zmianaOceny)

/** zadanie 6 */

const suwak = document.getElementById('wartoscSuwaka')
let output = document.getElementById('wartosc')
let wartosc
output.innerHTML = suwak.value

suwak.oninput = function(){

    wartosc = this.value
    document.getElementById('wartosc').innerHTML = "wynik:" + wartosc

}

/** zadanie 7 */

const btn1 = document.getElementById("1")
const btn2 = document.getElementById("2")
const btn3 = document.getElementById("3") 
let wynikbtn1 = document.getElementById("wynikBtn")

   function click1 (){
 wynikbtn1.innerHTML = 'Kliknieto przycisk 1'
   }       
   function click2 (){
    wynikbtn1.innerHTML = 'Kliknieto przycisk 2'
      }
      function click3 (){
        wynikbtn1.innerHTML = 'Kliknieto przycisk 3'
          }
    btn1.addEventListener('click',click1)
    btn2.addEventListener('click', click2)
    btn3.addEventListener('click', click3)


