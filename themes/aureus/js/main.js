$(document).ready(function(){open=!1,$("#dropdown-1").mouseenter(function(){$("#dropdown-content-1").show(),$("#dropdown-1").addClass("dropdown-hover"),open=!0}),$(document).mousemove(function(){open&&($("#dropdown-1").filter(function(){return $(this).is(":hover")}).length||$("#dropdown-content-1").filter(function(){return $(this).is(":hover")}).length||($("#dropdown-content-1").hide(),$("#dropdown-1").removeClass("dropdown-hover")))}),$("#login-button").click(function(){$("#login").fadeIn(),$("#body").addClass("login-disable-scrolling")}),$("#login-close").click(function(){$("#login").fadeOut(),$("#body").removeClass("login-disable-scrolling")}),$("#login-mobile-button").click(function(){$("#login-mobile-button").addClass("login-mobile"),$("#body").addClass("login-disable-scrolling")}),$("#login-mobile-close").click(function(){$("#body").removeClass("login-disable-scrolling")}),$(".menue-mobile-hamburg").click(function(){$(".menue-mobile-hamburg").toggleClass("checked"),$("#dropdown-mobile").toggleClass("menue-mobile-content-open")}),$(window).scroll(function(){setTimeout(function(){$(this).scrollTop()>=100?($("#sticky").addClass("menue-scroll"),$("#dropdown-content-1").addClass("dropdown-height")):($("#sticky").removeClass("menue-scroll"),$("#dropdown-content-1").removeClass("dropdown-height"))},100)}),$(".slick-header").slick({dots:!0,dotsClass:"slick-dots header-dots",arrows:!1,infinite:!0,lazyLoad:"ondemand",responsive:[{breakpoint:576,settings:{dots:!1,arrows:!0,nextArrow:'<i class="nextArrowBtn"></i>',prevArrow:'<i class="prevArrowBtn"></i>'}}]})});