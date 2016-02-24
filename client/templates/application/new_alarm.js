Template.newAlarm.events ({
	'click .setAlarm':function(e) {
		e.preventDefault();

		Alarms.insert({

		});
		console.log("Bahbah");
	}
});







Template.newAlarm.events ({
		'click .cancelAlarm': function(e) {
		e.preventDefault();
		Router.go('/');
	}
});