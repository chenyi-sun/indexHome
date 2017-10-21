 require(['ScrollMagic','debug','jquery','ScrollMagicJquery','TimelineMax','common','platform','ScrollMagicGSAP'], function(ScrollMagic,debug,$,ScrollMagicJquery,TimelineMax,common,platform){
        	document.querySelector('#app').innerHTML = MyApp.templates.Loading();
			//   document.querySelector('#app').innerHTML = MyApp.templates.App();
		platform.init();
		// console.log($('.not-tablet'));
		// console.log('ssssssssss');
        });