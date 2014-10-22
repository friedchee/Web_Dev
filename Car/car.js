// JavaScript Document

var taxi = {
	make:"Webville Motors",
	model: "Taxi",
	year: 1955,
	color: "yellow",
	passengers: 4,
	convertible: false,
	mileage: 281341
};

var cadi = {
	make: "GM",
	model: "Cadillac",
	year: 1955,
	color: "tan",
	passengers: 5,
	convertible: false,
	mileage: 8922
	
}

function prequal(car) {
	if (car.mileage > 10000)  {
		return false;
	}  else if (car.year > 1960)  {
		return false;
		
	}
	 return true;
	 
}


var worthALook = prequal(cadi);

if (worthALook)   {
	console.log("You gotta check this out " + cadi.make + " "  + cadi.model);
}else {
	console.log("You should really pass on the " + cadi.make + " " + cadi.model);
}