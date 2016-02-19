if (Meteor.isClient) {
	Meteor.startup(function() {
		setInterval(function() {
			//Creating format and application of time objects
			var currentTime = new Date();
			var currentHours = currentTime.getHours();
			var greeting = "";
			//Set greeting based on time of day.
			if (currentHours > 2 && currentHours < 12) {
				greeting = "Good Morning";
			} else if (currentHours > 11 && currentHours < 17) {
				greeting = "Good Afternoon";
			} else if (currentHours > 16 || currentHours < 3) {
				greeting = "Good Evening";
			}

			Session.set('greeting', greeting);
		}, 1000);
	});

	Template.sidebar.greeting = function() {
		return Session.get('greeting');
	};
};