Router.configure({
  layoutTemplate: 'layout',
});

Router.route('/', {name: 'mainDisplay'});

Router.map(function() {
	this.route('newAlarm', {
		path: '/new'
	})
});