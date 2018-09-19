var cheatCode = "";
var lastChar = "";
var bigText = null;
var topSmallText = null;
var bottomSmallText = null;

var speed = 1000;
var fastSpd = 1000; 

document.addEventListener("keydown", keyLog);

function keyLog(e) 
{
    lastChar = e.key;
    
    if (lastChar == "Enter")
    {
		bigText = "";
		topSmallText = "";
		bottomSmallText = "";
		
        switch(cheatCode)
        {
            case "gus":
            case "Gus":
                bigText = "Hey there";
                bottomSmallText = "Looks like it's working.";
                break;

            default:
                bigText = "Try again!";
        }

		setTimeout(function() {queueWrite("bigText", bigText, 1);}, 100);
		setTimeout(function() {queueWrite("topSmallText", topSmallText, 1);}, 100);
		setTimeout(function() {queueWrite("bottomSmallText", bottomSmallText, 1);}, 100);


        cheatCode = "";
    }
    else if (cheatCode.length > 50)
    {
        cheatCode = "";

        // document.getElementById("bottomSmallText").innerHTML = "";
        //console.log("we should start writing now");
        setTimeout(function() {queueWrite("bigText", "You're close", 1);}, 1000);
        setTimeout(function() {queueWrite("topSmallText", "Try pressing enter.", 1);}, 1000);
		setTimeout(function() {queueWrite("bottomSmallText", "", 1);}, 1000);
    }
    else
    {
        cheatCode += e.key;
    }
}

function queueWrite(id, str, first = 0) 
{
    //console.log("string is : " + str);
	console.log("Id at que is: " + id);
	if (first == 1)
	{
		dir = 1
	}
	else
	{
		dir = 0
	} 
	
	setTimeout(function() {typeWrite(str, id, dir);}, 50);
}

function typeWrite(str, id, dir)
{
    if (dir == 0)
    {
		first = 0;
		len = str.length;
		
		if (len > 0) 
		{
			//console.log("string before addition is: " + str);
			document.getElementById(id).innerHTML += str.charAt(0);
			str = str.substring(1, len);
			len = len - 1;
		}
		
		if (len < 1)
		{
			first = 1;
		}
    }
    else
    {
		first = 1;
		deleteStr = document.getElementById(id).innerHTML;
		console.log("deleteString is: " + deleteStr);
		console.log("id is: " + id);
		len = deleteStr.length - 1;
		console.log("len is: " + len);
        deleteStr = deleteStr.substring(0, len);
		console.log("deleteString is now: " + deleteStr);
        document.getElementById(id).innerHTML = deleteStr;
		
		if (len < 1)
		{
			first = 0;
		}
    }    

    if (len > 0 || first == 0)
    {
		console.log("we made it this far");
        //console.log("First is: " + first);
        queueWrite(id, str, first);
    }
}