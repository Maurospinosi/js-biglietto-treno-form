// imposto il bottone "genera" per creare il biglietto in base i dati inseriti
var bottoneGenera = document.getElementById("genera");
bottoneGenera.addEventListener("click",
 function () {
   // creo e collego le variabili : età, km e fascia di età
   var nome = document.getElementById("name").value;
   console.log(nome);
   var km = document.getElementById("km").value;
   console.log(km);
   var fasciaEta = document.getElementById("fascia-eta").value ;
   console.log(fasciaEta);
   // creo e collego le variabili : età, km e fascia di età/

   // creo la variabile prezzo
   var prezzo = 0.21 * km;
   console.log(prezzo);
   // creo la variabile prezzo/

   // creo la variabile carroza che genera un numero casuale tra 1 e 9
   var carrozza = Math.floor(Math.random() * 10) + 1;
   // creo la variabile carroza che genera un numero casuale tra 1 e 9/

   // creo la variabile codiceCp che genera un numero casuale tra 900000 e 999999
   var codiceCp = Math.floor(Math.random() * 100000) + 900000;
   // creo la variabile codiceCp che genera un numero casuale tra 900000 e 999999/

   // imposto gli sconti in base alle fasce di età
   if (fasciaEta == "minorenne") {
    var sconto = ((prezzo * 20) / 100);
    tipoOfferta = "Sconto Silver -20%";
   } else if (fasciaEta == "over 65") {
    var sconto = ((prezzo * 40) / 100);
    tipoOfferta = "Sconto Gold -40%";
   } else {
    var sconto = 0;
    tipoOfferta = "no-Sconto";
   }
   console.log(sconto);
   // imposto gli sconti in base alle fasce di età/

   // creo la variabilità totale (prezzo intero - gli sconti)
   var prezzoScontato = (prezzo - sconto);
   var totale = prezzoScontato.toFixed(2);
   console.log(prezzo - sconto);
   // creo la variabilità totale (prezzo intero - gli sconti)/

   // inserisco le variabili: nome, totale, tipo di offerta e codice cp all'interno della parte "crea il biglietto"
   document.getElementById("nome").innerHTML = nome;
   document.getElementById("costo-biglietto").innerHTML = totale + "€";
   document.getElementById("offerta").innerHTML = tipoOfferta;
   document.getElementById("carrozza").innerHTML = carrozza;
   document.getElementById("codice-cp").innerHTML = codiceCp;
   // inserisco le variabili: nome, totale, tipo di offerta e codice cp all'interno della parte "crea il biglietto"/

   // mostra il biglietto quando si clicca il puslante "genera"
   document.getElementById('ticket').classList.add("show");
   // mostra il biglietto quando si clicca il puslante "genera"/
 }
);
// imposto il bottone "genera" per creare il biglietto in base i dati inseriti/

// imposto il bottone "annulla" per fra sparire "crea il tuo biglietto" e per svuotare i campi .nome, km e fascia di età
var bottoneAnnulla = document.getElementById("annulla");
bottoneAnnulla.addEventListener("click",
 function () {
   document.getElementById('ticket').classList.remove("show");
   var nome = document.getElementById("name").value = "";
   var km = document.getElementById("km").value = "";
   var fasciaEta = document.getElementById("fascia-eta").value = "";
 }
);
// imposto il bottone "annulla" per fra sparire "crea il tuo biglietto" e per svuotare i campi .nome, km e fascia di età/
