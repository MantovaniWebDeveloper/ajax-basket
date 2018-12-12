$(document).ready(function(){
  //creo var momentanea
  //var numeroGiocatori = 2;

  //eseguo la chiamata
  $.ajax({

    url: "https://www.boolean.careers/api/array/basket?n=10",
    method: "GET",
    success: function(data, stato) {
      var info = data.response;
      for (var i = 0; i < info.length; i++) {
      console.log(info[i]);
      console.log(info[i].playerCode);
    }

    },
    error: function(richiesta, stato, errori) {
      console.log("c'è stato un errore " + errori);
    }
  });
});
