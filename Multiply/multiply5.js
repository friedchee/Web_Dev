// JavaScript Document

var i = 1;

while( i < 21) {
	document.getElementById( "numbers" ).innerHTML +=
	"<li>" + i + " x 5 = " + (i * 5) +"</li>";
	i++;
}