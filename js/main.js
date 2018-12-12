$(document).ready(function() {
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

        if (legaBasket.length == 10) {
          for (var i = 0; i < legaBasket.length; i++) {
            console.log(legaBasket[i].codiceUnivoco);
            var templateBase = $('#elencoCodici').html();
            var templateCompilato = Handlebars.compile(templateBase);
            var context = {
              codiceUnivoco: legaBasket[i].codiceUnivoco,
              puntiRealizzati: legaBasket[i].puntiRealizzati,
              rimbalzi: legaBasket[i].rimbalzi,
              falli: legaBasket[i].falli,
            };
            var htmlStampato = templateCompilato(context);
            $('aside').append(htmlStampato);
          }

        }

      }
      $('.cardGiocatore').click(function(){
        var indiceCardGiocatore = $(this).index();
        console.log(indiceCardGiocatore);
        if(legaBasket.indexOf(indiceCardGiocatore)){
          console.log("ok");
          console.log(context);
          var templateBaseMain = $('#focusGiocatore').html();
          var templateCompilatoMain = Handlebars.compile(templateBaseMain);
          var htmlStampatoMain = templateCompilatoMain(context);
          $('main').html(htmlStampatoMain);
        }
      })
    },
    error: function(richiesta, stato, errori) {
      console.log("c'è stato un errore " + errori);
    }
  });



});
