 require(['ScrollMagic','debug','jquery','ScrollMagicJquery','TimelineMax','ScrollMagicGSAP'], function(ScrollMagic,debug,$,ScrollMagicJquery,TimelineMax){
    var controller = new ScrollMagic.Controller();
	var wipeAnimation = new TimelineMax()
		.to("#slideContainer", 0.5, {z: -150})
		.to("#slideContainer", 1,   {x: "-25%"})
		.to("#slideContainer", 0.5, {z: 0})
		
		.to("#slideContainer", 0.5, {z: -150, delay: 1})
		.to("#slideContainer", 1,   {x: "-50%"})
		.to("#slideContainer", 0.5, {z: 0})
		
		.to("#slideContainer", 0.5, {z: -150, delay: 1})
		.to("#slideContainer", 1,   {x: "-75%"})
		.to("#slideContainer", 0.5, {z: 0});

	new ScrollMagic.Scene({
		triggerElement: "#pinContainer",
		triggerHook: "onLeave",
		duration: "500%"
	})
	.setPin("#pinContainer")
	.setTween(wipeAnimation)
	.addIndicators()
	.addTo(controller);
});