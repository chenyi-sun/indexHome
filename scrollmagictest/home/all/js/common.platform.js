define(function(){
    var init = function(){
        // var COMPONENT_NAME = 'platform';
    var ua = window.navigator.userAgent.toLowerCase();
    var html = document.getElementsByTagName('html')[0];
    var body = document.getElementsByTagName('body')[0];
    var screenWidth = screen.width;
    
    var Playform = {
         isiPad: ua.match(/ipad/i) !== null,
         isNexus7: ua.match(/Nexus 7/gi) !== null,
         isMobile: ua.match(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile/i) !== null && ua.match(/Mobile/i) !== null,
         isiPhone: ua.match(/iphone/i) !== null,
         isiPhone5: ua.match(/iphone/i) !== null&&screenWidth==320,
         isiPhone6: ua.match(/iphone/i) !== null&&screenWidth==375,
         isiPhone6s: ua.match(/iphone/i) !== null&&screenWidth==414,
         isAndroid: ua.match(/android/i) !== null,
         isS4: ua.match(/(gt\-i95)|(sph\-l720)/i) !== null,
         isS5: ua.match(/sm\-g900/i) !== null,
         isS6: ua.match(/sm\-g9250/i) !== null,
         isS7: (ua.match(/sm\-g930p/i) !== null) || (ua.match(/sm\-g9300/i) !== null),
         isIE: ua.match(/(msie|trident)/i) !==null, // /(msie|trident)/i.test(navigator.userAgent),
         isIE11: ua.match(/Trident\/7\.0/i) !== null,
         isEdge: ua.match(/edge/i) !== null,
         isChrome: ua.match(/Chrome/gi) !== null,
         isFirefox: ua.match(/firefox/gi) !== null,
         hasTouch: ('ontouchstart' in window),
         isMac: ua.match('mac') !== null,
         isWindows: ua.match('windows') !== null,
     }

     Playform.isAndroidPad = Playform.isAndroid && !Playform.isMobile;
     Playform.isTablet = Playform.isiPad || Playform.isAndroidPad;
     Playform.isDesktop = !(Playform.isMobile || Playform.isTablet);
     Playform.isIOS = Playform.isiPad || Playform.isiPhone;
     Playform.isSafari = Playform.isDesktop && (!Playform.isIE) && (!Playform.isChrome) && (!Playform.isFirefox);

     html.classList.remove('desktop');
     html.classList.remove('mobile');

     Object.keys(Playform).forEach(function(key){
         var className = key.toLowerCase().replace('is','');
         if(className.indexOf('has') === 0){
            className = className.replace('has', 'has-');
         }
         if(!Playform[key]){
            if(className.indexOf('has') === 0){
                className = className.replace('has', 'no');
            }else{
                className = 'not-' + className;
            }
         }
         html.classList.add(className);
     });
     
    //  if(window[COMPONENT_NAME] === undefined){
    //     window[COMPONENT_NAME] = Playform;
    //  }
    //  else{
    //     console.log("======================");
    //     console.log("!!!platform is defined");
    //  }

        return 0;
    }
    return {
        init: init //platrform.init;
    };
});