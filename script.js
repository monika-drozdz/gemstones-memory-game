var start = ["chrysoprase.jpg", "quartz.jpg", "lapis_lazuli.jpg", "amazonite.jpg", "pyrite.jpg", "opal.jpg", "quartz.jpg", "lapis_lazuli.jpg", "pyrite.jpg", "chrysoprase.jpg", "opal.jpg", "amazonite.jpg"];
var gemstones = []

function Start() {

  var c0 = document.getElementById('c0'),
      c1 = document.getElementById('c1'),
      c2 = document.getElementById('c2'),
      c3 = document.getElementById('c3'),
      c4 = document.getElementById('c4'),
      c5 = document.getElementById('c5'),
      c6 = document.getElementById('c6'),
      c7 = document.getElementById('c7'),
      c8 = document.getElementById('c8'),
      c9 = document.getElementById('c9'),
      c10 = document.getElementById('c10'),
      c11 = document.getElementById('c11');


  c0.addEventListener("click", function() {revealCard(0); });
  c1.addEventListener("click", function() {revealCard(1); });
  c2.addEventListener("click", function() {revealCard(2); });
  c3.addEventListener("click", function() {revealCard(3); });
  c4.addEventListener("click", function() {revealCard(4); });
  c5.addEventListener("click", function() {revealCard(5); });
  c6.addEventListener("click", function() {revealCard(6); });
  c7.addEventListener("click", function() {revealCard(7); });
  c8.addEventListener("click", function() {revealCard(8); });
  c9.addEventListener("click", function() {revealCard(9); });
  c10.addEventListener("click", function() {revealCard(10); });
  c11.addEventListener("click", function() {revealCard(11); });

    for (i = 0; i < (start.length + i); i++)
      {
        var randomIndex = Math.floor(Math.random()*start.length);
        gemstones.push(start[randomIndex]);
        start.splice(randomIndex, 1);
      }
}

Start();

var counter = 0,
    visible_card = false,
    lock = false,
    visible_nr,
    pairsLeft = 6;

function revealCard(nr) {
  var opacityVal = $("#c" + nr).css('opacity');

  if (opacityVal != 0 && lock == false) {
    lock = true;
    var gem = "url(img/" + gemstones[nr]+')';
    $('#c' + nr).css('background-image', gem);
    $('#c' + nr).addClass('cardA');
    $('#c' + nr).removeClass('card');

    if (visible_card == false) {
      visible_card = true;
      visible_nr = nr;
      lock = false;
    }

    else {
        if(gemstones[visible_nr] == gemstones[nr] && visible_nr != nr)
        {
          setTimeout(function(){ hide2Cards(nr,visible_nr) }, 750);
        }
        else
        {
          setTimeout(function(){ show2Cards(nr,visible_nr) }, 1000);
        }
        counter++;
        $('.counter').html("Moves:" + " " + counter);
        visible_card = false;
    }
  }
}

function hide2Cards(nr1,nr2) {
  $("#c" + nr1).css('opacity', '0');
  $("#c" + nr2).css('opacity', '0');
  pairsLeft--;

  if (pairsLeft == 0) {
    setTimeout(function(){$('.btn').css('display', 'inline-block')}, 500);
  }
  
  lock = false;
}

function show2Cards(nr1,nr2) {
  $('#c' + nr1).css('backgroundImage', 'url(img/card.svg)');
  $('#c' + nr1).addClass('card');
  $('#c' + nr1).removeClass('cardA');

  $("#c"+ nr2).css('backgroundImage', 'url(img/card.svg)');
  $('#c' + nr2).addClass('card');
  $('#c' + nr2).removeClass('cardA');

  lock = false;
}
