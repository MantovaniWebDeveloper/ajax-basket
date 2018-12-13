$(document).ready(function() {
  //creo var momentanea
  //creao array giocatori
  var legaBasket = [];
  //eseguo la chiamata
  $.ajax({

    url: "https://www.boolean.careers/api/array/basket?n=10" ,
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
            //console.log(legaBasket[i].codiceUnivoco);
            var templateBase = $('#elencoCodici').html();
            var templateCompilato = Handlebars.compile(templateBase);
            var context = {
              codiceUnivoco: legaBasket[i].codiceUnivoco,
            };
            var htmlStampato = templateCompilato(context);
            $('aside').append(htmlStampato);
          }

        }

      }

      $('.cardGiocatore p').click(function(){
         var thisCode = $(this).text();
         console.log(thisCode);

         var trovato = false ;
         var contatore = 0;
         while(!trovato){
           if(thisCode == legaBasket[contatore].codiceUnivoco){
             console.log("ok");
             var context = {
               puntiRealizzati: legaBasket[contatore].puntiRealizzati,
               rimbalzi: legaBasket[contatore].rimbalzi,
               falli: legaBasket[contatore].falli
             };
             console.log(context);
             var templateBaseMain = $('#focusGiocatore').html();
             var templateCompilatoMain = Handlebars.compile(templateBaseMain);
             var htmlStampatoMain = templateCompilatoMain(context);
             $('main').html(htmlStampatoMain);
             trovato = true;
           }
           else {
             console.log("no");
           }

           contatore ++;
         }

      })
    },
    error: function(richiesta, stato, errori) {
      console.log("c'è stato un errore " + errori);
    }
  });



});
