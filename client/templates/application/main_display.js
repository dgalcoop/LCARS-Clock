Template.mainDisplay.rendered = function(e) {
	Session.set('pageTitle', 'currentTime');
};

//Objects for Months/Day reference
var year = {
	0: "JAN",
	1: "FEB",
	2: "MAR",
	3: "APR",
	4: "MAY",
	5: "JUN",
	6: "JUL",
	7: "AUG",
	8: "SEP",
	9: "OCT",
	10: "NOV",
	11: "DEC"
};

var week = {
	1: "MON",
	2: "TUE",
	3: "WED",
	4: "THU",
	5: "FRI",
	6: "SAT",
	7: "SUN"
};

if (Meteor.isClient) {
	Meteor.startup(function() {
		setInterval(function() {
			//Creating format and application of time objects
			var currentTime = new Date();
			var currentHours = currentTime.getHours();
	 		var currentMinutes = currentTime.getMinutes();
	 		var currentSeconds = currentTime.getSeconds();
	 		var currentYear = currentTime.getFullYear();
	 		var currentMonth = currentTime.getMonth();
	 		var currentDate = currentTime.getDate();
	 		var currentDay = currentTime.getDay();
	 		//Put a zero in front of single-digit minutes/seconds
 	 		currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
 	 		currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
 	 		// Choose either "AM" or "PM" as appropriate
 	 		var timeOfDay = (currentHours < 12) ? "AM" : "PM";
 	 		 // Convert the hours component to 12-hour format if needed
 	 		var ampm = (currentHours > 12) ? currentHours - 12 : currentHours;
 	 		// Convert an hours component of "0" to "12"
 	 		ampm = ( ampm == 0 ) ? 12 : ampm;

 	 		//Expressions of Time
 	 		var twentyfourTime = currentHours + ":" + currentMinutes + ":" + currentSeconds;
 	 		var twelveTime = ampm + ":" + currentMinutes + " " + timeOfDay;
 	 		var dateToday = week[currentDay] + " " + currentDate + " " + year[currentMonth] + " " + currentYear;
 	 		var starDate = currentSeconds + ":" + currentMinutes + ":" + currentHours + ":" + currentDate + ":" + (currentMonth + 1) + ":" + currentYear;
 	 		//Set and return timestamps
			Session.set('time', twelveTime);
			Session.set('date', dateToday);
			Session.set('milTime', twentyfourTime);
			Session.set('starDate', starDate);

			//Creating and setting animations
			function isSecondThird() {
				if (currentTime.getSeconds()%3 == 0) {
					return true;
				} else {
					return false;
				};
			};
			if (isSecondThird()) {
				$(".alarmInfo").css({"background-color": "black"});
			} else {
				$(".alarmInfo").css({"background-color": "#FF0000"});
			}

		}, 1000);
	});

	Template.mainDisplay.time = function() {
		return Session.get('time');
	};
	Template.mainDisplay.date = function() {
		return Session.get('date');
	};
	Template.mainDisplay.milTime = function() {
		return Session.get('milTime');
	};
	Template.mainDisplay.starDate = function() {
		return Session.get('starDate');
	};
};












