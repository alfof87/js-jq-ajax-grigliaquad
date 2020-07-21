// Griglia 6x6, ad ogni click parte una
// richiesta AJAX che prende un
// numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro
// del quadrato

  var griglia = $(".griglia");
  function ajaxTest(){
    $(document).on("click", griglia, function(){
      $.ajax({
        url: "https://flynn.boolean.careers/exercises/api/random/int",
        method: "GET",
        success: function (data, state){
          var success = data["success"];
          console.log(data);

        },
        error: function(request, state, error){
          console.log("request", request);
          console.log("state", state);
          console.log("error", error);
        }
      })

     });
    }
 //
 //     var parola = prompt("inserisci una parola");
 //     var paroleCont = $("#parole");
 //
 //     for (var i = 0; i < 5; i++) {
 //
 //       parola.append(paroleCont);
 //     }
 //
 //     }
 //
 // });


function init(){
ajaxTest();
}
$(document).ready(init);
