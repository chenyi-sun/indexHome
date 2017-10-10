 require(['ScrollMagic','debug','jquery','ScrollMagicJquery','TimelineMax','ScrollMagicGSAP'], function(ScrollMagic,debug,$,ScrollMagicJquery,TimelineMax){
           

            var controller = new ScrollMagic.Controller();

            var scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
                        .setClassToggle(".flag", "scale")
                        .addIndicators({name: "1 - add a class"})
                        .addTo(controller);



            ////////////////////////////////////////////////
            var animateElem = document.getElementById("animate2");
			var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 100})
							.on("enter", function () {
								// trigger animation by changing inline style.
                                console.log('ssss');
								animateElem.style.backgroundColor = "grey";
							})
							.on("leave", function () {
								// reset style
                                console.log('dddd');
								animateElem.style.backgroundColor = "";
							})
							.addIndicators({name: "2 - change inline style"}) // add indicators (requires plugin)
							.addTo(controller);

            ////////////////////////////////////////////////////
            var scene3 = new ScrollMagic.Scene({triggerElement: "#trigger3"})
                        .setTween(".flag3", 0.5, {backgroundColor: "green", scale: 2.5, opacity: 1})
                        .addIndicators({name: "3 (duration: 0)"})
                        .addTo(controller);

            ////////////////////////////////////////////////////
            var tween = TweenMax.fromTo(".flag4", 2,
										{left: -100},
										{left: 100, repeat: 1, yoyo: true, ease: Circ.easeInOut}
									);
            var scene4 = new ScrollMagic.Scene({triggerElement: "#trigger4", duration: 100, offset: -50})
							.setTween(tween)
							.addIndicators({name: "loop"}) // add indicators (requires plugin)
							.addTo(controller);
            /////////////////////////////////////////////////////
            var tweens = TweenMax.staggerFromTo(".flag5", 2, {left: 0}, {left: 800, ease: Back.easeOut}, 0.15);
            var scene = new ScrollMagic.Scene({triggerElement: "#trigger5", duration: 300, offset: -250})
							.setTween(tweens)
							.addIndicators({name: "staggering"}) // add indicators (requires plugin)
							.addTo(controller);
            //////////////////////////////////////////////////////
            var tween = new TimelineMax()
				.to(".flag6", 1, {top: "+=200",
						onStart: function () {$('.flag6').html("This");},
						onReverseComplete: function () {$('.flag6').html("Let's draw!");}
					}
				)
				.to(".flag6", 1, {top: "+=200", left: "+=200",
						onStart: function () {$('.flag6').html("is");},
						onReverseComplete: function () {$('.flag6').html("This");}
					}
				)
                .to(".flag6", 1, {top: "-=200",
						onStart: function () {$('.flag6').html("the");},
						onReverseComplete: function () {$('.flag6').html("is");}
					}
				)
                .to(".flag6", 1, {left: "-=200",
						onStart: function () {$('.flag6').html("house");},
						onReverseComplete: function () {$('.flag6').html("the");}
					}
				)
                .to(".flag6", 1, {top: "-=100", left: "+=100",
						onStart: function () {$('.flag6').html("of");},
						onReverseComplete: function () {$('.flag6').html("house");}
					}
				)
                .to(".flag6", 1, {top: "+=100", left: "+=100",
						onStart: function () {$('.flag6').html("San...");},
						onReverseComplete: function () {$('.flag6').html("of");}
					}
				)
                .to(".flag6", 1, {top: "+=200", left: "-=200",
						onStart: function () {$('.flag6').html("...ta");},
						onReverseComplete: function () {$('.flag6').html("San...");}
					}
				)
                .to(".flag6", 1, {left: "+=200",
						onStart: function () {$('.flag6').html("Clause.");},
						onReverseComplete: function () {$('.flag6').html("...ta");}
					}
				);
                var scene6 = new ScrollMagic.Scene({triggerElement: "#trigger6"})
							.setTween(tween)
							.addIndicators({name: "timeline"}) // add indicators (requires plugin)
							.addTo(controller);
        });