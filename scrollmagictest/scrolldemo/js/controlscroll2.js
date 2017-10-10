 require(['ScrollMagic','debug','jquery','ScrollMagicJquery','TimelineMax','ScrollMagicGSAP'], function(ScrollMagic,debug,$,ScrollMagicJquery,TimelineMax){
           

            var controller = new ScrollMagic.Controller();

            // var scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
            //             .setClassToggle(".flag", "scale")
            //             .addIndicators({name: "1 - add a class"})
            //             .addTo(controller);
			var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 300})
						.setPin(".flag")
						.addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
						.addTo(controller);
            ////////////////////////////////////////////////
			var scene = new ScrollMagic.Scene({triggerElement: ".flag2"})
						.setPin(".flag2")
						.addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
						.addTo(controller);
			////////////////////////////////////////////////

        });