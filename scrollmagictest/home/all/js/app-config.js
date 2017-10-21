 require.config({
             paths: {
                //  ScrollMagic: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min',
                 ScrollMagic: 'js/ScrollMagic/ScrollMagic.min',
                 debug: 'js/ScrollMagic/debug.addIndicators',
                 jquery: 'js/res/jquery-1.8.1',
                //  ScrollMagicJquery: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/jquery.ScrollMagic.min',
                 ScrollMagicJquery: 'js/ScrollMagic/jquery.ScrollMagic.min',
                //  TweenLite: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenLite.min',
                 TweenLite: 'js/downTween/TweenLite.min',
                 TweenMax: 'js/downTween/TweenMax.min',
                 TimelineMax: 'js/downTween/TimelineMax.min',
                 TweenLite: 'js/downTween/TweenLite.min',
                //  ScrollMagicGSAP: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.min',
                 ScrollMagicGSAP: 'js/ScrollMagic/animation.gsap.min',
                 common: 'js/common',
                 /*self define*/
                 platform: 'js/common.platform',
                 ad: 'js/uitle/ad',
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