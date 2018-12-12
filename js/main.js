$(document).ready(function(){
  //creo var momentanea
  // var numeroGiocaotori = 2
  //creao array giocatori
  var legaBasket = [];

  //var numeroGiocatori = 2;

  //eseguo la chiamata
  $.ajax({

    url: "https://www.boolean.careers/api/array/basket?n=10",
    method: "GET",
    success: function(data, stato) {
      var info = data.response;
      for (var i = 0; i < info.length; i++) {
      /*console.log(info[i]);
      console.log(info[i].playerCode);*/
      nuovoGiocatore = {
        //associo ogni valore
        codiceUnivoco: info[i].playerCode,
        puntiRealizzati: info[i].points,
        rimbalzi: info[i].rebounds,
        falli: info[i].fouls
      }
      //inserisco nell'array
      legaBasket.push(nuovoGiocatore);
    }

    },
    error: function(richiesta, stato, errori) {
      console.log("c'è stato un errore " + errori);
    }
  });

  console.log(legaBasket);
});
