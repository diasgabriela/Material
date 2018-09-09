$(document).ready(function(){
    $("#button").click(function(){
        $("#description").fadeToggle();
    });
});

$(document).ready(function(){

    $("#spotify").css('display', 'none');
    $("#btnspotify").click(function(){
        $("#spotify").fadeToggle();
        
    });
});


M.AutoInit();
