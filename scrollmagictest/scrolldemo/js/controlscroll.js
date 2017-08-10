 require(['ScrollMagic','debug','jquery','ScrollMagicJquery','TimelineMax','ScrollMagicGSAP'], function(ScrollMagic,debug,$,ScrollMagicJquery,TimelineMax){
            var controller = new ScrollMagic.Controller();
            // var scene = new ScrollMagic.Scene({triggerElement: ".flag1"})
            // .setClassToggle(".demo1", "scale")
            // .addIndicators({name: "1 - add a class"})
            // .addTo(controller);
            function updateBox(){
                
            }
            var wipeAnimation1 = new TimelineMax()
            .fromTo(".demo1", 1, {x: "0%",top: '0%'}, {x: "0%",top:'0%', ease: Linear.easeNone});
            var scene1 = new ScrollMagic.Scene({
                triggerElement: ".flag1",
                duration: "300%",
                triggerHook: "onLeave",
            })
            .setPin('.demo1')
            // .on("enter leave", updateBox)
            // .setClassToggle(".demo1", "scale")
            .addIndicators({name: "1 name ssss"})
            .setTween(wipeAnimation1)
            .addTo(controller);

             var wipeAnimation3 = new TimelineMax()
            .fromTo(".demo3", 1, {top: '-100%'}, {top:'48.5%', ease: Linear.easeNone});
            var scene1 = new ScrollMagic.Scene({
                triggerElement: ".flag1",
                duration: "300%",
                triggerHook: "onLeave",
            })
            .setPin('.demo3')
            // .on("enter leave", updateBox)
            // .setClassToggle(".demo1", "scale")
            .addIndicators({name: "3 name ssss"})
            .setTween(wipeAnimation3)
            .addTo(controller);
        });