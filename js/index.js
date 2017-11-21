$(document).ready(function(){
    //global variables//
    var player = 1;
    var random = Math.floor(Math.random() * 9) + 1;
    var rand = Math.floor(Math.random() * 9) + 1;
    var tag = ".sq" + rand.toString();
    
    $("#reload, #win, #lose").hide();
    
    $(".square").on("click", function(event){
        var squareSelected = $(this);
        if (squareSelected.hasClass("ex") || squareSelected.hasClass("oh")){
            alert("Already Selected!");
        } else {
            if (player === 1){
                squareSelected.addClass("ex").append("<i class = 'fa fa-times' aria-hidden = 'true'> </i>");
               if (isWin("ex")){
                   $("#gameboard").hide();
                   $("#reload").show();
                   $("#win").show();
                   $("#reload").click(function(){
                       location.reload();/*global location*/
                   });
               } else {
                   player = 2;
                   console.log(tag);
               }  
            } else {
               $(randomSquare(random)).addClass("oh").append("<i class = 'fa fa-circle-o' aria-hidden = 'true'> </i>");
               if (isWin("oh")){
                   $("#gameboard").hide();
                   $("#reload").show();
                   $("#lose").show();
                   $("#reload").click(function(){
                       location.reload();/*global location*/
                   });
               } else {
                   player = 1;
                   console.log(tag);
            }
        }
        }   
    });
    
    function randomSquare(rand) {
        while ($(tag).hasClass("ex") || $(tag).hasClass("oh")){
            rand = Math.floor(Math.random() * 9) + 1;
            tag = ".sq" + rand.toString(); //can add more detail for game 
        }
        return tag;
    };
    
    function isWin(symbol){
        if ( $(".sq1").hasClass(symbol) && $(".sq2").hasClass(symbol) && $(".sq3").hasClass(symbol)){
            return true;
        } else if ($(".sq1").hasClass(symbol) && $(".sq4").hasClass(symbol) && $(".sq7").hasClass(symbol)){
            return true;
        } else if ($(".sq1").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq9").hasClass(symbol)){
            return true;
        } else if ($(".sq2").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq8").hasClass(symbol)){
            return true;
        } else if ($(".sq3").hasClass(symbol) && $(".sq6").hasClass(symbol) && $(".sq9").hasClass(symbol)){
            return true;
        } else if ($(".sq3").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq7").hasClass(symbol)){
            return true;
        } else if ($(".sq4").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq6").hasClass(symbol)){
            return true;
        } else if ($(".sq7").hasClass(symbol) && $(".sq8").hasClass(symbol) && $(".sq9").hasClass(symbol)){
            return true;
        } else {
            return false;
        }
    }
    
    
    
})