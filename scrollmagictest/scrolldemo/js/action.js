 require(['ScrollMagic','debug','jquery','ScrollMagicJquery','TimelineMax','ScrollMagicGSAP'], function(ScrollMagic,debug,$,ScrollMagicJquery,TimelineMax){
	var controller = new ScrollMagic.Controller();
	var height = $(window).height();
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: height, tweenChanges: true})
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller)
					.on("update", function (e) {
						console.log('update');
					})
					.on("enter leave", function (e) {
						// $("#state").text(e.type == "enter" ? "inside" : "outside");
						if(e.type == "enter"){
							console.log('inside');
						}
						else{
							console.log('outside');
						}
					})
					.on("start end", function (e) {
						if(e.type == "start"){
							console.log('top');
						}
						else{
							console.log('bottom');
						}
						// $("#lastHit").text(e.type == "start" ? "top" : "bottom");
					})
					.on("progress", function (e) {
						// $("#progress").text(e.progress.toFixed(3));
						console.log('progress');
						console.log(e.progress.toFixed(3));
					});;
});