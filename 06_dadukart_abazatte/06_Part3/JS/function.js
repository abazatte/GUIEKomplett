
var dice1text = document.querySelector('td#dice1text');
var dice2text = document.querySelector('td#dice2text');
var meier = document.querySelector('td#meier');

var dice1img = document.querySelector('img#dice1');
var dice2img = document.querySelector('img#dice2');

function rollTheDice() {
  console.log('rollTheDice');

  var randDice1 = Math.floor((Math.random() * 6)+1);
  var randDice2 = Math.floor((Math.random() * 6)+1);

  if(randDice2 > randDice1)
  {
    var diceTauscher = randDice1;
    randDice1 = randDice2;
    randDice2 = diceTauscher;
  }

  dice1text.innerHTML = randDice1;
  dice2text.innerHTML = randDice2;
  if(randDice1 == 2 && randDice2 == 1)
  {
    meier.innerHTML = "MEIER";
  }
  else
  {
    meier.innerHTML = "&nbsp";
  }

  dice1img.src = "./IMG/w"+randDice1+".png";
  dice2img.src = "./IMG/w"+randDice2+".png";
}
