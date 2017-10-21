 require(['ScrollMagic','debug','jquery','ScrollMagicJquery','TimelineMax','common','platform','ScrollMagicGSAP'], function(ScrollMagic,debug,$,ScrollMagicJquery,TimelineMax,common,platform){
        	//首页loading圈   document.querySelector('#app').innerHTML = MyApp.templates.Loading();

		//可以加载.hbs的其他模块   document.querySelector('#app').innerHTML = MyApp.templates.App();
		document.querySelector('#head').innerHTML = MyApp.templates.Head();
		platform.init();


        });