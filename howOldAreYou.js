function readBox() {
	// change for the 3 different input boxes (instead of one)
	var day = parseInt(document.getElementById('day').value);
	var month = parseInt(document.getElementById('month').value);
	var year = parseInt(document.getElementById('year').value);

	// maybe use object literals (instead of new Object()) a bit more readable
	var now = new Date();
	// console.log(now);
	var today = {
		day: now.getDay(),
		month: now.getMonth(),
		year: now.getYear()
	}
	// console.log(getDay());

	var born = {
		day: day,
		month: month,
		year: year
	}

	if (day > 31 || month > 12) {
		document.getElementById("demo").innerHTML = "That is not a correct date!";
	} else {
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
