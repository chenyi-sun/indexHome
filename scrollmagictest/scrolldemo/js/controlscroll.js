 require(['ScrollMagic','debug','jquery','ScrollMagicJquery','TweenLite'], function(ScrollMagic,debug,$,ScrollMagicJquery,TweenLite){
            var controller = new ScrollMagic.Controller();
            var scene = new ScrollMagic.Scene({triggerElement: ".flag1"})
            .setClassToggle(".demo1", "scale")
            .addIndicators({name: "1 - add a class"})
            .addTo(controller);
        });