require('./../css/scrollmagic.scss');
import ScrollMagic from 'scrollmagic';
import $ from 'jquery';
var controller = new ScrollMagic.Controller({addIndicators: true});
var scene = new ScrollMagic.Scene({
									triggerElement: "#flag_1"
								})
								.setClassToggle(".box1", "zap")
								// .setTween("#animate1", 0.5, {backgroundColor: "green", scale: 2.5}) // trigger a TweenMax.to tween
								// .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
								.addTo(controller);
console.log($('#flag_1'));