// Setup FullCalendar
// http://qtip2.com/v/stable/jquery.qtip.js
// http://cdn.jsdelivr.net/qtip2/2.2.1/jquery.qtip.min.js
// http://cdn.jsdelivr.net/qtip2/2.2.1/jquery.qtip.min.css

// $(".admin-page-header").addClass("works");


// Template.main.rendered = function(){
  // var calendar = $('#calendar').fullCalendar({


// })

// }

Template.adminDashboard.helpers({
	
	
	options: function() {
	
	jQuery.loadScript = function (url, callback) {
			jQuery.ajax({
					url: url,
					dataType: 'script',
					success: callback
			});
	}

	// $.getScript('http://qtip2.com/v/stable/jquery.qtip.js');
	$.loadScript('http://qtip2.com/v/stable/jquery.qtip.js', function(){
		(function() {
			var date = new Date();
			var d = date.getDate();
			var m = date.getMonth();
			var y = date.getFullYear();

			tooltip = $('<div/>').qtip({
				id: 'fullcalendar',
				prerender: true,
				content: {
					text: ' ',
					title: {
						button: true
					}
				},
				position: {
					my: 'bottom center',
					at: 'top center',
					target: 'mouse',
					viewport: $('#fullcalendar'),
					adjust: {
						mouse: false,
						scroll: false
					}
				},
				show: false,
				hide: false,
				style: 'qtip-light'
			}).qtip('api');
		}());
	});
	
	
			return {
				id:"fullcalendar",
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

				],
				// eventMouseover: function(data, event, view) {
				// 	var content = '<h3>'+data.title+'</h3>' + 
				// 		'<p><b>Start:</b> '+data.start+'<br />' + 
				// 		(data.end && '<p><b>End:</b> '+data.end+'</p>' || '');

				// 	tooltip.set({
				// 		'content.text': content
				// 	})
				// 	.reposition(event).show(event);
				// 	console.log(tooltip);
				// },
				//eventMouseout: function() {tooltip.hide()},
				dayClick: function() { tooltip.hide() },
				eventResizeStart: function() { tooltip.hide() },
				eventDragStart: function() { tooltip.hide() },
				viewDisplay: function() { tooltip.hide() },
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
