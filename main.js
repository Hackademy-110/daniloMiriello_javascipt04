//ESERCIZIO 1

//Rincorri la decina
//Scrivi un programma che stampi i numeri da 1 a 100 andando a capo ogni 10.
//Esempio: for (let i=1; i<=10; i++) {

  //Output: 

    //  1 2 3 4 5 6 7 8 9 10

      //    11 12 13 14 15 16 17 18 19 20
        //  21 22 23 24 25 26 27 28 29 30
          //31 32 33 34 35 36 37 38 39 40
          //41 42 43 44 45 46 47 48 49 50
          //51 52 53 54 55 56 57 58 59 60
          //61 62 63 64 65 66 67 68 69 70
          //71 72 73 74 75 76 77 78 79 80
          //81 82 83 84 85 86 87 88 89 90 
          //91 92 93 94 95 96 97 98 99 100

//Per andare a capo usa ‘\n'

let aCapo = '';


for (let i = 1; i <=100; i++) {
    aCapo += i + '';
    
 if (i % 10  == 0) aCapo += '‘\n';
    
 }   
 console.log(aCapo);

 //ESERCIZIO 2

//  
// Scrivi una FUNZIONE che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE  se non lo è.
//  Nel controllo scarta gli spazi e i segni di punteggiatura.

//   Esempio:
//     Input: i topi non avevano nipoti
//     Output: TRUE

//   Consigli:
//   Puoi eliminare spazi e segni di punteggiatura usando :
//      str.replace(/\s/g, "").



function ispalindrom(string) {

    let stringaSenzaSpazi = string.replace(/\s/g, '');
    console.log(stringaSenzaSpazi)
    let splitted = stringaSenzaSpazi.split('').reverse().join('');
    console.log(splitted)
    if(stringaSenzaSpazi == splitted){

             return true;
        }else{
             return false;
        }

}
console.log(ispalindrom("i topi non avevano nipoti"))

//ESERCIZIO 3

// Provate a usare la funzione
// Scrivi un programma che dati:
// - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
// - il tipo di operazione aritmetica da effettuare, una delle seguenti:
//   addizione
//   sottrazione
//   moltiplicazione
//   divisione
//  Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array d’appoggio.
// Esempio:
//   Input: a= [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b= [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
//   Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]


let array1=randomNumbers(10);
let array2=randomNumbers(10);


function somma (operazione,arr1,arr2) {
       let arr3=[];


    for (let i = 0; i < arr1.length; i++) {
          
       

        if (operazione==`addizione`) {
            arr3.push(arr1[i] + arr2[i]); 
        }else if(operazione==`sottrazione`){
            arr3.push(arr1[i] - arr2[i]);  
        }else if(operazione==`moltiplicazione`){
            arr3.push(arr1[i] * arr2[i]);  
        }else if (operazione==`divisione`){
            arr3.push(arr1[i] / arr2[i]);  
        }
        
        
    }
     return arr3;
}
   console.log(somma(`addizione`,array1,array2));
function randomNumbers(n){
    let arr1=[];
    for (let i = 0; i < n; i++) {
        arr1.push(Math.floor(Math.random() * (10 - 1 + 1) + 1));    
    }
      return arr1;

}

console.log(array2);
console.log(array1);

//ESERCIZIO4

// dato questo array:

// let stringa = ['Ciao', 'sono', ',' , 'piacere'];

// Utilizzando il metodo .splice( ) inserire prima della virgola il tuo nome e trasformare l'array in una stringa (modificato)

let stringa = ['Ciao', 'sono', ',' , 'piacere'];
stringa.splice(2, 0, `Danilo`);

stringa=stringa.join(' ');
console.log(stringa);



