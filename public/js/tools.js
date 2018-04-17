var totalScore = document.querySelector("#total-score");
var good_total_score = document.querySelector("#good_total_score");
var bad_total_score = document.querySelector("#bad_total_score");
var finalScore = document.querySelector("#finalScore");

var rad_val_total=50;
var bad_rad_val_total;
var rad_val;

function getRadioValue()
{
for (var i=0; i < document.goodscore1.bueno.length; i++)
  {
  if (document.goodscore1.bueno[i].checked)
      {
      var rad_val1 = document.goodscore1.bueno[i].value;
      }
  }
  for (var i=0; i < document.goodscore2.bueno.length; i++)
  {
  if (document.goodscore2.bueno[i].checked)
      {
      var rad_val2 = document.goodscore2.bueno[i].value;
      }
  }
  for (var i=0; i < document.goodscore3.bueno.length; i++)
  {
  if (document.goodscore3.bueno[i].checked)
      {
      var rad_val3 = document.goodscore3.bueno[i].value;
      }
  }
  for (var i=0; i < document.goodscore4.bueno.length; i++)
  {
  if (document.goodscore4.bueno[i].checked)
      {
      var rad_val4 = document.goodscore4.bueno[i].value;
      }
  }
  for (var i=0; i < document.goodscore5.bueno.length; i++)
  {
  if (document.goodscore5.bueno[i].checked)
      {
      var rad_val5 = document.goodscore5.bueno[i].value;
      }
  }
  for (var i=0; i < document.goodscore6.bueno.length; i++)
  {
  if (document.goodscore6.bueno[i].checked)
      {
      var rad_val6 = document.goodscore6.bueno[i].value;
      }
  }
  for (var i=0; i < document.goodscore7.bueno.length; i++)
  {
  if (document.goodscore7.bueno[i].checked)
      {
      var rad_val7 = document.goodscore7.bueno[i].value;
      }
  }
  for (var i=0; i < document.goodscore8.bueno.length; i++)
  {
  if (document.goodscore8.bueno[i].checked)
      {
      var rad_val8 = document.goodscore8.bueno[i].value;
      }
  }
  var rad_val_total = parseInt(rad_val1) + parseInt(rad_val2) + parseInt(rad_val3) + parseInt(rad_val4) + parseInt(rad_val5) + parseInt(rad_val6) + parseInt(rad_val7) + parseInt(rad_val8);
  good_total_score.textContent = rad_val_total;
}

///////////////// NOW FOR THE BAD POINTS FUNCTION ////////////////////

function getBadRadioValue()
{
for (var i=0; i < document.badscore1.malo.length; i++)
  {
  if (document.badscore1.malo[i].checked)
      {
      var bad_rad_val1 = document.badscore1.malo[i].value;
      }
  }
  for (var i=0; i < document.badscore2.malo.length; i++)
  {
  if (document.badscore2.malo[i].checked)
      {
      var bad_rad_val2 = document.badscore2.malo[i].value;
      }
  }
  for (var i=0; i < document.badscore3.malo.length; i++)
  {
  if (document.badscore3.malo[i].checked)
      {
      var bad_rad_val3 = document.badscore3.malo[i].value;
      }
  }
  for (var i=0; i < document.badscore4.malo.length; i++)
  {
  if (document.badscore4.malo[i].checked)
      {
      var bad_rad_val4 = document.badscore4.malo[i].value;
      }
  }
  for (var i=0; i < document.badscore5.malo.length; i++)
  {
  if (document.badscore5.malo[i].checked)
      {
      var bad_rad_val5 = document.badscore5.malo[i].value;
      }
  }
  for (var i=0; i < document.badscore6.malo.length; i++)
  {
  if (document.badscore6.malo[i].checked)
      {
      var bad_rad_val6 = document.badscore6.malo[i].value;
      }
  }
  for (var i=0; i < document.badscore7.malo.length; i++)
  {
  if (document.badscore7.malo[i].checked)
      {
      var bad_rad_val7 = document.badscore7.malo[i].value;
      }
  }
  
  var bad_rad_val_total = parseInt(bad_rad_val1) + parseInt(bad_rad_val2) + parseInt(bad_rad_val3) + parseInt(bad_rad_val4) + parseInt(bad_rad_val5) + parseInt(bad_rad_val6) + parseInt(bad_rad_val7);
  bad_total_score.textContent = bad_rad_val_total;
}


function getFinalScore () {
    finalScore.textContent = parseInt(bad_total_score.textContent) + parseInt(good_total_score.textContent) + 50;
}

function results() {
    getRadioValue();
    getBadRadioValue();
    getFinalScore();
}
