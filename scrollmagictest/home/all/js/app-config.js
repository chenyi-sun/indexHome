 require.config({
             paths: {
                 ScrollMagic: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min',
                 debug: 'js/res/debug.addIndicators',
                 jquery: 'js/res/jquery-1.8.1',
                 ScrollMagicJquery: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/jquery.ScrollMagic.min',
                 TweenLite: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenLite.min',
                 TweenMax: 'js/downTween/TweenMax.min',
                 TimelineMax: 'js/downTween/TimelineMax.min',
                 TweenLite: 'js/downTween/TweenLite.min',
                 ScrollMagicGSAP: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.min',
             },
             shim: {
                'jquery': {
                    exports: '$'
                },
                'ScrollMagic': {
                    exports: 'ScrollMagic'
                },
                'debug': {
                    exports: 'debug'
                }
             }
        });