"use strict";$(document).ready(function(){var i=$(".ppl img"),r=$(".banner-left"),m=$(".banner .banner-right"),t=$(".banner-title"),n=$("section.event-2018-may");$(window).on("load",function(){$("section.event-2018-may, .banner-left, .banner-right, .ppl img, .banner-title").addClass("active"),setTimeout(function(){r.removeClass("active"),r.addClass("static"),t.removeClass("active"),t.addClass("static"),i.removeClass("active"),i.addClass("static"),n.removeClass("active"),n.addClass("static"),m.removeClass("active"),m.addClass("static");var e=$(window).width();function a(e){var a=$(window).width()/5,t=$(window).height()/2,n=e.pageX/a-2.5,s=(e.pageY,10*n),o=2.5*n;r.css("transform","translateX("+s+"px)"),m.css("transform","translateX("+-s+"px)"),i.css("transform","translateX("+o+"px)")}992<=e?$(".event-2018-may").on("mousemove",a):$(".event-2018-may").off("mousemove",a),$(window).on("resize",function(){992<=(e=$(window).width())?$(".event-2018-may").on("mousemove",a):$(".event-2018-may").off("mousemove",a)})},4500)})});
//# sourceMappingURL=app.js.map
