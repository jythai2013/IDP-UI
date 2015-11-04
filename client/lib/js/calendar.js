// Template.main.rendered = function(){
  // var calendar = $('#calendar').fullCalendar({


// })

// }

Template.adminDashboard.helpers({
	options: function() {
			return {
				header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
					defaultView: 'agendaWeek',
					events: [
						{
								title  : 'Workplace Literacy and Numeracy Fundamentals',
								start  : '2015-11-04T09:00:00',
								end		 : '2015-11-04T12:00:00',
								allDay : false
						},
						{
								title  : 'Workplace Health and Safety',
								start  : '2015-11-04T13:00:00',
								end		 : '2015-11-04T17:00:00',
								allDay : false 
						},
						{
								title  : 'Strategic Business Planning for Training Organizations (SBPTO)',
								start  : '2015-11-04T13:00:00',
								end		 : '2015-11-04T17:00:00',
								allDay : false
						},
						{
								title  : 'Workplace Trainer Programme ',
								start  : '2015-11-05T09:00:00',
								end		 : '2015-11-05T12:00:00',
								allDay : false 
						},						
						{
								title  : 'Managing Operations in Training Organisations',
								start  : '2015-11-05T09:00:00',
								end		 : '2015-11-05T12:00:00',
								allDay : false 
						},
						{
								title  : 'Strategic Business Planning for Training Organizations ',
								start  : '2015-11-06T13:00:00',
								end		 : '2015-11-06T17:00:00',
								allDay : false 
						}

					]
			};
	}
});

Template.adminDashboard.events({
	"click .fc-widget-content": function() {
		Modal.show('exampleModal')
	}
});

Template.homePage.events({
	"click #sendText": function() {
		Modal.show('textModal')
	}
});
