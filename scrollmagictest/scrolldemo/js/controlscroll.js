 require(['ScrollMagic','debug','jquery','ScrollMagicJquery','TimelineMax','ScrollMagicGSAP'], function(ScrollMagic,debug,$,ScrollMagicJquery,TimelineMax){
            var controller = new ScrollMagic.Controller();
            // var scene = new ScrollMagic.Scene({triggerElement: ".flag1"})
            // .setClassToggle(".demo1", "scale")
            // .addIndicators({name: "1 - add a class"})
            // .addTo(controller);
            function updateBox(){
                console.log('sssssss');
            }
            var wipeAnimation = new TimelineMax()
            .fromTo(".demo2", 1, {x: "-100%",top: '0%'}, {x: "0%", ease: Linear.easeNone});
           

            var scene = new ScrollMagic.Scene({
                triggerElement: ".flag1",
                duration: "100%",
                triggerHook: "onEnter",
            })
            .setPin('.demo1')
            .setPin('.demo2')
            // .on("enter leave", updateBox)
            // .setClassToggle(".demo1", "scale")
            .addIndicators({name: "1 name ssss"})
            .setTween(wipeAnimation)
            .addTo(controller);
        });