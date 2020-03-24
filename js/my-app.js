// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'examen 2 dw', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
        {
		path: '/ukelele/',
    	url: 'ukelele.html',
    	name: 'ukelele',
  		},
        {
		path: '/piano/',
    	url: 'piano.html',
    	name: 'piano',
  		},
        {
		path: '/info productos/',
    	url: 'info productos.html',
    	name: 'info productos',
  		},
        {
		path: '/espresso/',
    	url: 'espresso.html',
    	name: 'espresso',
  		},
        {
		path: '/espresso-tabs/',
    	url: 'espresso-tabs.html',
    	name: 'espresso-tabs',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;





 

