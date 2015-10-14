Router.configure({
    layoutTemplate: 'layout'
});

/*
Router.map(function(){
	this.route('publicIndex', {
		path: '/index.html',
		template: 'homepage',
	  	layoutTemplate: 'layout',
	  	yieldTemplates: {
	    	'navigation': {to: 'header'},
	    	'carousel': {to: 'asideTop'},
	    	'contactUs': {to: 'asideBottom'}	    
	    }
	});
*/

Router.map(function() {
    /*this.route('Sterling Traing Hub', {
        path:'/index.html',
        template: 'intro',
        layoutTemplate: "layout",
		onAfterAction: function() {
	        document.title = this.route.getName();
	    }
    });*/

    this.route('admin', {
        path:'/',
        template: 'adminDashboard',
        layoutTemplate: "layoutAdmin"
    });

    this.route('profile', {
        path:'/profile.html',
        template: 'profile',
        layoutTemplate: "layoutAdmin"
    });

    // Registration 
    this.route('registerAdmin', {
        path:'/registerAdmin',
        template: 'registerAdmin',
        layoutTemplate: "layoutAdmin"
    });

    this.route('registerCorporation', {
        path:'/registerCorporation',
        template: 'registerCorporation',
        layoutTemplate: "layoutAdmin"
    });

    this.route('registerLearner', {
        path:'/registerLearner',
        template: 'registerLearner',
        layoutTemplate: "layoutAdmin"
    });

    this.route('registerTrainer', {
        path:'/registerTrainer',
        template: 'registerTrainer',
        layoutTemplate: "layoutAdmin"
    });


    this.route('classHomepage', {
        path:'/classHomePage',
        template: 'homePage',
        layoutTemplate: "layoutAdmin"
    });


    this.route('facilityManagement', {
        path:'/facilityManagement',
        template: 'facilityManagement',
        layoutTemplate: "layoutAdmin"
    });
    
    this.route('equipmentyManagement', {
        path:'/equipmentyManagement',
        template: 'equipmentyManagement',
        layoutTemplate: "layoutAdmin"
    });
    
});