$(document).ready(function() {
    $("#martaBtn, #introBtn, #modelBtn, #modelBtn, #june14Btn, #intro, #june14, #model, #marta").hide();
    $("#martaBtn").slideToggle(150);
    $("#modelBtn").slideToggle(150);
    $("#introBtn").slideToggle(150);
    $("#june14Btn").slideToggle(150);
       $("#link").slideToggle(150);

 $(document).ready(function(){
  calculateDivs()
})

$( window ).resize(function() {
  calculateDivs()
})

function colorChange() {
var hue = (Math.floor((255)*Math.random())) + ','
 + (Math.floor((220)*Math.random())) + ','
 + (Math.floor((220)*Math.random()));
return hue;
}

var textarea = document.getElementsByTagName("textarea")[0];
var link = document.querySelector(".link, #martaBtn, #marta");
var marta = document.querySelector("#marta");

textarea.addEventListener("input", function(e) {
    colorChange();
    link.style.backgroundColor = "rgb(" + colorChange() + ")";
    marta.style.backgroundColor = "rgb(" + colorChange() + ")";
});

//Default height in pixels
var div_h = 108;

function calculateDivs(){
  //Get window height and substract default page margins
  var w_h = $(window).height() - 0

  //Get div quantity based on window heihgt and div default height
  var divs = Math.round(w_h / div_h);

  //Insert div in window (this case in the body directly)
  for(var i = 0; i < divs; i++){
    $(document.body).append($('<div class="link">'));
  }

  //Margins of the divs (if there is no margin set this to 0)
  var margin = 5

  //Set height to all appended divs
  $('.link').css('height', w_h / divs - margin)
}


        $(function() {
            $(".loading-bar").each(function() {
                colorChange();
        $(this).css("background-color", 'rgba(' + hue + 1 + ')');
        });
    });

        $(function() {
            $(".link").each(function() {
        var hue = (Math.floor((220)*Math.random()) + 15) + ','
         + (Math.floor((220)*Math.random()) + 15) + ','
         + (Math.floor((220)*Math.random()) + 15) + ',';
        $(this).css("background-color", 'rgba(' + hue + 1 + ')');
        });
    });

        $(function() {
            $("#martaBtn").each(function() {
        var hue = (Math.floor((220)*Math.random()) + 15) + ','
         + (Math.floor((220)*Math.random()) + 15) + ','
         + (Math.floor((220)*Math.random()) + 15) + ',';
        $(this).css("background-color", 'rgba(' + hue + 1 + ')');
        $("#marta").css("background-color", 'rgba(' + hue + 1 + ')');
        });
    });

        $(function() {
            $("#introBtn").each(function() {
        var hue = (Math.floor((220)*Math.random()) + 15) + ','
         + (Math.floor((220)*Math.random()) + 15) + ','
         + (Math.floor((220)*Math.random()) + 15) + ',';
        $(this).css("background-color", 'rgba(' + hue + 1 + ')');
        $("#intro").css("background-color", 'rgba(' + hue + 1 + ')');
        });
    });

        $(function() {
            $("#modelBtn").each(function() {
        var hue = (Math.floor((220)*Math.random()) + 15) + ','
         + (Math.floor((220)*Math.random()) + 15) + ','
         + (Math.floor((220)*Math.random()) + 15) + ',';
        $(this).css("background-color", 'rgba(' + hue + 1 + ')');
        $("#model").css("background-color", 'rgba(' + hue + 1 + ')');
        });
    });


    $( ".closeallBtn" ).click(function() {
    $("#photo, #marta, #intro").hide(0);
});


  $( "#martaBtn" ).click(function() {
    $( "#marta" ).slideToggle(100);
    // Animation complete.
  });

  $( "#introBtn" ).click(function() {
    $( "#intro" ).slideToggle(100);
    // Animation complete.
  });

  $( "#modelBtn" ).click(function() {
    $( "#model" ).slideToggle(100);
    // Animation complete.
  });

    $( "#june14Btn" ).click(function() {
    $( "#june14" ).slideToggle(100, function() {
    // Animation complete.
  });
});

});
