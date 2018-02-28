$("#startReset").click(function() {
            checkButton();           
            //console.log(numSeq);
        });
function checkButton()
{
  var intervalID = 0;
  var breakLength = $("#breakLen").val();
  var sessionLength = $("#sesLen").val();
    
  if (breakLength <= 0 || sessionLength <=0)
    {
      $("#infoPlace").html("Please input length");
      
    }
  else
    {
      startSession(breakLength, sessionLength);
    }
  
}

function startSession(bLength,sLength)
{
  var secBLength = bLength * 60;
  var secSLength = sLength * 60;
  
  if ($("#startReset").html() === "Start")
    {
      $("#startReset").html("Reset");
      $("#infoPlace").html("Session")
      intervalID = setInterval(updateAll,1000);
      //console.log(intervalID);
      
    }
  else
    {
      resetAll();
      
    }
  function resetAll()
  {
    //console.log(intervalID);
    clearInterval(intervalID);
    
    $("#startReset").html("Start");
    $("#infoPlace").html("Input length and push start");
    $("#timer").html("Timer");
    $("#breakLen").val(0);
    $("#sesLen").val(0);
    $("#pBar").width("0%");
    
  }
  
  
  function updateAll()
  {
    
    if (secSLength > 0)
      {
        secSLength --;
        updateTimer(secSLength);
        updatePBar(sLength,secSLength);
      }
    else if (secBLength > 0)
      {
        $("#infoPlace").html("Break!");
        secBLength --;
        updateTimer(secBLength);
        updatePBar(bLength,secBLength);
      }
    else
      {
        resetAll();
      }
      
    
    
  }
  
}

function updateTimer(sec)
{
  var minutes = Math.floor(sec/60);
  var seconds = Math.floor(sec%60);
  $("#timer").html(fullLength(minutes) + ":" + fullLength(seconds));
  
}

function fullLength(num)
{
  if (num <10) {num = '0' + num}
  return num;
}

function updatePBar(allLen,passLen)
{
  var secAllLen = allLen*60;
  var per = 100-Math.floor((passLen/secAllLen)*100) + "%";
  //console.log(per);
  $("#pBar").width(per);
}