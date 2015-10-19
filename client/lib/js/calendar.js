// Template.main.rendered = function(){
  // var calendar = $('#calendar').fullCalendar({


// })

// }

Template.haha.helpers({
	options: function() {
			return {
					defaultView: 'agendaWeek'
			};
	}
});

Template.haha.events({
	"click .fc-widget-content": function() {
		Modal.show('exampleModal')
	}
});




Meteor.startup(function(){
    // Show the example modal 3 seconds after startup.
    // setTimeout(function(){
        
    // }, 1500)
})