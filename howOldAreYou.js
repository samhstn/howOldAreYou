function readBox() {
	// changed for the 3 different input boxes (instead of one)
	// used these so if no dates in boxes the 'not correct date' message appears
	var dayVal = document.getElementById('day').value;
	var monthVal = document.getElementById('month').value;
	var yearVal = document.getElementById('year').value;

	// also don't use capitals for first letter of variables unless you're making an object constructor (it's a naming convention so we don't confuse variables and functions to make new objects)
	var day = parseInt(dayVal);
	var month = parseInt(monthVal);
	var year = parseInt(yearVal);

	// used new Date to get current time
	var now = new Date();

	var today = {
		day: now.getDay(),
		month: now.getMonth(),
		// apparently getYear() is being dropped from JS because of the 'year 2000 problem' getFullYear() is its replacement
		year: now.getFullYear()
	}

	// maybe use object literals (instead of new Object()) a bit more readable
	var born = {
		day: day,
		month: month,
		year: year
	}

	function invalidDate() {
		document.getElementById("demo").innerHTML = "That is not a correct date! Try again";
	}

	// first line checks for no input
	if (dayVal === '' || monthVal === '' || yearVal === '') invalidDate()
	else if (day > 31 || month > 12) invalidDate()
	else {
		if (today.day >= born.day && today.month >= born.month) {
			var days = today.day - born.day;
			var months = today.month - born.month;
			var years = today.year - born.year;
		} else if (today.day >= born.day && today.month < born.month) {
			var days = today.day - born.day;
			var months = 12 + today.month - born.month;
			var years = today.year - born.year - 1;
		} else if (today.day < born.day && today.month <= born.month) {
			var days = 30 + today.day - born.day;
			var months = 12 + today.month - born.month - 1;
			var years = today.year - born.year - 1;
		} else if (today.day < born.day && today.month > born.month) {
			var days = 30 + today.day - born.day;
			var months = today.month - born.month - 1;
			var years = today.year - born.year;
		}
		document.getElementById("demo").innerHTML = "You are: " + days + " days, " + months + " months, and " + years + " years old";
	}
}
