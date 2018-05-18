$(document).ready(function() {
 $("#contact, #about, .girls, .actors, .menu, .sed, .boys, #people, .arrow, #casting, #apply, .dropmenu, .dropmenu2").hide();
 $("#sed1001,#sed1002,#sed1, #sed2,#sed3,#sed4,#sed5,#sed6,#sed7,#sed8,#sed9,#sed10,#sed11,#sed12,#sed13,#sed14,#sed15,#sed16,#sed17,#sed18,#sed19,#sed20,#sed21,#sed22,#sed23,#sed24,#sed25,#sed26,#sed27,#sed28,#sed29,#sed30,#sed31,#sed32,#sed33").hide();

 $('#startBtn').click(function(){
  $(".sed").hide();
  $('iframe').attr('src', $('iframe').attr('src'));
  $("#contact, #about, #people, #casting, .dropmenu, .dropmenu2").hide(50);
  $("#start, .menu").fadeIn(250);
});

 $('.peopleBtn').click(function(){
  $(".sed").hide();
  $('iframe').attr('src', $('iframe').attr('src'));
  $("#contact, #about, #casting, #start, .dropmenu2, .actors, .girls, .boys, .arrow").hide(50);
  $(".dropmenu, .menu, .all").show(150);
  $('#people, .grl, .boy').fadeIn(250);
});

 $('.castingBtn').click(function(){
  $(".sed").hide();
  $('iframe').attr('src', $('iframe').attr('src'));
  $("#contact, #about, #people, #apply, #start, .dropmenu, .dropmenu2, .arrow").hide(50);
  $("#casting, .menu").fadeIn(250);
});

 $('.aboutBtn').click(function(){
  $(".sed").hide();
  $('iframe').attr('src', $('iframe').attr('src'));
  $("#contact, #casting, #people, #apply, #start, .dropmenu, .dropmenu2").hide(50);
  $("#about").fadeIn(250);
});

 $('.contactBtn').click(function(){
  $(".sed").hide();
  $('iframe').attr('src', $('iframe').attr('src'));
  $("#about, #people, #casting, #start, .dropmenu, .dropmenu2").hide(50);
  $("#contact").fadeIn(250);
});

 $('.grlBtn').click(function(){
  $(".sed").hide();
  $('.boy, .boys, .actors, .arrow').hide();
  $('.grl, .all, .girls, .arrow').show(150);
});

 $('.boyBtn').click(function(){
  $(".sed").hide();
  $('.grl, .girls, .actors, .arrow').hide();
  $('.boy, .all, .boys, .arrow').show(150);
});

 $('.actorBtn').click(function(){
  $(".sed").hide();
  $('.noact, .girls, .boys, .arrow, .all, #casting').hide(150);
  $("#people, .dropmenu, .dropmenu2, .actors, .acgrl, .acboy").show(250);
});

 $('.actgrlBtn').click(function(){
  $(".sed").hide();
  $('.acboy, .boys, .arrow').hide();
  $('.acgrl, .girls, .arrow').show(150);
});

 $('.goodworkBtn').click(function(){
  $(".sed").hide();
  $('#casting').hide();
  $('#contact').show(150);
});

 $('.actboyBtn').click(function(){
  $(".sed").hide();
  $('.acgrl, .girls, .arrow').hide();
  $('.acboy, .boys, .arrow').show(150);
});

 $('.sedClick').bind("click", showStuff);

 function showStuff(event) {
  event.preventDefault();
  var amountOfSeds = 1002;
  var seds = "";

  $(".sed").show(200);

  for (i=0;i<amountOfSeds;i++) {
    seds += "#sed" + (i+1) +",";
  }
  seds = seds.slice(0, -1);

  $(seds).hide();

  var clickDiv = "#" + event.currentTarget.id;
  var targetDiv = clickDiv.replace('Btn','');

  $(targetDiv).show(200);
};


$('.closesedBtn').click(function(){
  $(".sed").hide();
});



});