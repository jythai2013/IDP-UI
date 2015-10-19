// Template.main.rendered = function(){
  // var calendar = $('#calendar').fullCalendar({


// })

// }

Template.haha.helpers({
	options: function() {
			return {
					defaultView: 'agendaWeek',
					events: [
						{
								title  : 'event1',
								start  : '2015-10-19'
						},
						{
								title  : 'event2',
								start  : '2015-10-18T10:00:00',
								end		 : '2015-10-20T12:00:00',
								allDay : false 
						},
						{
								title  : 'event3',
								start  : '2015-10-25T12:30:00',
								allDay : false // will make the time show
						}
					]
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