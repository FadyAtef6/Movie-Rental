var output="";
var counter=0;
var total=0;
var counter1=3;
var counter2=3;
var counter3=3;
var counter4=3;
var counter5=3;
var counter6=3;
var counter7=3;
var counter8=3;
var counter9=3;
var counter10=3;
var counter11=3;
var counter12=3;


function antman()
{	counter1--;
	counter++;
	var movie="Antman";
	var price=35;
	
	if(counter<=3)
	{
		total=total+price;
	output= output+"<tr><td>"+movie+"</td><td>"+price+"</td></tr>";
	}
	else{
		window.alert("You can't rent more than three movies");
	}
	if(counter1<0)
	{
		window.alert("There is no copies")
	}
	
}
function birdbox()
{
	var movie="Birdbox";
	counter2--;
	counter++;
	var price=51;
	
	if(counter<=3)
	{
		total=total+price;
	output= output+"<tr><td>"+movie+"</td><td>"+price+"</td></tr>";
	}
	else{
		window.alert("You can't rent more than three movies");
	}
	if(counter2<0)
	{
		window.alert("There is no copies")
	}
}
function glass()
{
	counter++;
	counter3--;
	var movie="Glass";
	var price=29;
	if(counter<=3)
	{
	total=total+price;
	output= output+"<tr><td>"+movie+"</td><td>"+price+"</td></tr>";
	}
	else{
		window.alert("You can't rent more than three movies");
	}
	if(counter3<0)
	{
		window.alert("There is no copies")
	}
}
function aquaman()
{
	counter++;
	counter4--;
	var movie="AQuaman";
	
	var price=60;
	if(counter<=3)
	{
	total=total+price;
	output= output+"<tr><td>"+movie+"</td><td>"+price+"</td></tr>";
	}
	else{
		window.alert("You can't rent more than three movies");
	}
	if(counter4<0)
	{
		window.alert("There is no copies")
	}
	
}
function robin()
{
	counter++;
	counter5--;
	var movie="RobinHood";
	var price=28;
	if(counter<=3)
	{
	total=total+price;
	output= output+"<tr><td>"+movie+"</td><td>"+price+"</td></tr>";
	}
	else{
		window.alert("You can't rent more than three movies");
	}
	if(counter5<0)
	{
		window.alert("There is no copies")
	}
}
function captain()
{
	counter++;
	counter6--;
	var movie="Captain Marvel";
	var price=81;
	if(counter<=3)
	{
	total=total+price;
	output= output+"<tr><td>"+movie+"</td><td>"+price+"</td></tr>";
	}
	else{
		window.alert("You can't rent more than three movies");
	}
	if(counter6<0)
	{
		window.alert("There is no copies")
	}
}
function host()
{
	counter++;
	counter7--;
	var movie="Host";
	var price=67;
	if(counter<=3)
	{
	total=total+price;
	output= output+"<tr><td>"+movie+"</td><td>"+price+"</td></tr>";
	}
	else{
		window.alert("You can't rent more than three movies");
	}
	if(counter7<0)
	{
		window.alert("There is no copies")
	}
}
function ender()
{
	counter++;
	counter8--;
	var movie="Ender games";
	var price=53;
	if(counter<=3)
	{
		total=total+price;
	output= output+"<tr><td>"+movie+"</td><td>"+price+"</td></tr>";
	}
	else{
		window.alert("You can't rent more than three movies");
	}
	if(counter8<0)
	{
		window.alert("There is no copies")
	}
}
function robo()
{
	counter++;
	counter9--;
	var movie="Robocop";
	var price=89;
	if(counter<=3)
	{
	total=total+price;
	output= output+"<tr><td>"+movie+"</td><td>"+price+"</td></tr>";
	}
	else{
		window.alert("You can't rent more than three movies");
	}
	if(counter9<0)
	{
		window.alert("There is no copies")
	}
	
}
function ride()
{
	counter++;
	counter10--;
	var movie="Ride along";
	var price=76;
	if(counter<=3)
	{
	total=total+price;
	output= output+"<tr><td>"+movie+"</td><td>"+price+"</td></tr>";
	}
	else{
		window.alert("You can't rent more than three movies");
	}
	if(counter10<0)
	{
		window.alert("There is no copies")
	}
}
function shoot()
{
	counter++;
	counter11--;
	var movie="Shooter";
	var price=43;
	if(counter<=3)
	{
	total=total+price;
	output= output+"<tr><td>"+movie+"</td><td>"+price+"</td></tr>";
	}
	else{
		window.alert("You can't rent more than three movies");
	}
	if(counter11<0)
	{
		window.alert("There is no copies")
	}
}
function frank()
{
	counter++;
	counter12--;
	var movie="Frankensten";
	var price=38;
	if(counter<=3)
	{
	total=total+price;
	output= output+"<tr><td>"+movie+"</td><td>"+price+"</td></tr>";
	}
	else{
		window.alert("You can't rent more than three movies");
	}
	if(counter12<0)
	{
		window.alert("There is no copies")
	}
	
}


function pepe()
{
	document.getElementById("lole").innerHTML="<tr><th>Movie Name</th><th>Price</th></tr>"+output+"<tr><td>Total price is</td><td>"+total+"</td></tr>";
}