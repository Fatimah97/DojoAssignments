
var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

if(PERIOD == "AM")
{
	var ampm=" Morning"
}
else if(PERIOD == "PM")
{
	var ampm=" Evening"
}


if(MINUTE > 30 && HOUR == 12 ){
	console.log ("It's almost 1 in the" + ampm);
}

else if(MINUTE < 30)
{
	console.log("It's just after " + HOUR + " in the " + ampm );
}
else if(MINUTE > 30)
{
	console.log("It's almost " + (HOUR + 1) + " in the " + ampm );
}
else if(MINUTE = 30)
{
	console.log("It's half past " + HOUR + " in the " + ampm );
}




Challenge:
If minutes less than 30, "just after" the hour, more than 30, "almost" the next hour.
AM / PM, "in the morning", "in the evening",

Bonus (Only If You Have Time):
Add functionality for "quarter after", "half past", "5 after" ...
Distinguish between "in the afternoon", "at night", "noon", "midnight" ...