(function () {
  'use srtict';
  angular.module('shared').controller('homeCtrl', homeCtrl);
  homeCtrl.$inject = ['$timeout', '$translate'];

  function homeCtrl($timeout, $translate) {
    var vm = this;

    vm.changeLanguage = function (langKey) {
      $translate.use(langKey);
    };

    vm.schedulerCalendar = [{appearTarget: '.events-list-block', effect: 'animated fadeInLeft'}, {appearTarget: '.event-calendar-block', effect: 'animated fadeInRight'}];
    vm.weekDays = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sábado', 'domingo']
    var date = new Date();
    vm.currentActiveDate = date.getDay() - 1;
    vm.selectedActiveIndex = vm.currentActiveDate;
    vm.daysActions = [{
        hours: ['8:30', '19:00', '20:00'],
        actions: ['Spinning', 'Aerobica', 'Circuito']
      },
      {
        hours: ['19:00', '20:00'],
        actions: ['G.A.P', 'Spinning']
      },
      {
        hours: ['8:30', '19:00', '20:00'],
        actions: ['Spinning', 'Circuito', 'Local Barra']
      },
      {
        hours: ['19:00', '20:00'],
        actions: ['AeroLocal', 'Spinning']
      },
      {
        hours: ['8:30', '19:00', '20:00'],
        actions: ['Sppining', 'StepLocal', 'Sppining']
      }];

    vm.getAmOrPm = getAmOrPm;
    vm.getHr = getHr;
    vm.getMinutes = getMinutes;
    

    function getAmOrPm(time) {
      return getHr(time) > 12 ? 'PM' : 'AM'
    }

    function getHr(time) {
      return time.split(':')[0];
    }
    function getMinutes(time) {
      return time.split(':')[1];
    }

    function init() {

    }

    $(".primary-navigation > .dropdown-menu").css({"display": "block", "position": "relative"});

    /* Set-up Animation Effect */


    /* Trainer Single Template - Loading Circle --/ */

    /* /-- Event - Window Load */
    /*$(window).load(function ()
     {
     $('.flexslider').flexslider(
     {
     animation: "fade",
     controlNav: "thumbnails"
     });
     
     });*/
    /* Event - Window Load --/ */

    /* /-- Event - Document Ready */
    $(document).ready(function ($)
    {
      $('.flexslider').flexslider(
      {
        animation: "fade",
        controlNav: "thumbnails"
      });

      /* $('.timeline-item.timeline-odd .timeline-panel').each(function ()
       {
       var $this = $(this);
       
       $this.appear(function ()
       {
       $('.timeline-odd .timeline-panel').addClass('animated fadeInLeft');
       $('.timeline-odd .program-rate').addClass('animated fadeInRight');
       });
       });
       
       $('.timeline-item.timeline-even .timeline-panel').each(function ()
       {
       var $this = $(this);
       
       $this.appear(function ()
       {
       $('.timeline-even .timeline-panel').addClass('animated fadeInRight');
       $('.timeline-even .program-rate').addClass('animated fadeInLeft');
       });
       });*/

      /* Home - Classes & Training Programs */
      /*$('.program-item').each(function ()
       {
       var $this = $(this);
       
       $this.appear(function ()
       {
       $('.training-programs .program-item').addClass('animated fadeIn');
       });
       });*/

      /* Home - Tweet Section */
      /*$('.tweets').each(function()
       {
       var $this = $(this);	
       
       $this.appear(function()
       {
       $('.tweets .section-header').addClass('animated fadeInLeft');
       $('.tweets .home-tweet-icon').addClass('animated fadeInDown');
       $('.tweets .tweets-detail').addClass('animated fadeInRight');
       });
       });*/

      /* Home - Contact Section */
      /*$('.contact .contact-center').each(function()
       {
       var $this = $(this);	
       
       $this.appear(function()
       {
       $('.contact-center').addClass('animated fadeInDown');
       });
       });
       $('.contact .contact-center').appear(function(){
       $('.contact-center').addClass('animated fadeInDown');
       });
       **/

      /* Footer 2 - Effects */
      /*$('.footer-2').each(function ()
       {
       var $this = $(this);
       
       $this.appear(function ()
       {
       $('.digit-class').animateNumber({number: 1235}, 2000);
       });
       });*/

      /* Footer 3 - Effects */
      /*$('.footer-3 .logo-set').each(function ()
       {
       var $this = $(this);
       
       $this.appear(function ()
       {
       $('.footer-3 .logo-set i').addClass('animated bounce');
       $('.digit-class').animateNumber({number: 1235}, 2000);
       });
       });*/

      /* Trainer Single Template - Skill Bar /- */
      /*$('.skillbar').each(function ()
       {
       var $this = $(this);
       
       $this.appear(function ()
       {
       var barwidth = $(this).attr('data-percent');
       
       $(this).find('.skillbar-bar').animate(
       {
       width: barwidth
       }, 2000);
       
       $(this).find('.skill-bar-percent').animate(
       {
       'left': barwidth,
       'margin-left': '-50px',
       'opacity': 1
       }, 2000);
       });
       });*/
      /* Trainer Single Template - Skill Bar /- */

      /*$('.trainer-achievements').each(function ()
       {
       var $this = $(this);
       var myVal = $(this).data("value");
       
       $this.appear(function ()
       {
       $(".skill-numbers span").slideUp().delay(2000).fadeIn();
       
       //Trainer Single Template - Loading Circle Numbers Animation
       $('#number-1').animateNumber({number: 12}, 2000);
       $('#number-2').animateNumber({number: 654}, 2000);
       $('#number-3').animateNumber({number: 3}, 2000);
       $('#number-4').animateNumber({number: 800}, 2000);
       });
       });*/

      /* /-- Trainer Single Template - Loading Circle /- */
      /*$('.dial').each(function ()
       {
       var $this = $(this);
       var myVal = $(this).data("value");
       
       $this.appear(function ()
       {
       $this.knob({});
       $({value: 0}).animate({value: myVal},
       {
       duration: 2000,
       easing: 'swing',
       step: function ()
       {
       $this.val(Math.ceil(this.value)).trigger('change');
       }
       });
       });
       });*/

      /* Header 1 - Parallax Scrolling */
      /*$('.header-1 .navbar-nav li a, .navbar-brand').bind('click', function (event)
       {
       var anchor = $(this);
       
       if (anchor == 'undefined' || anchor == null || anchor.attr('href') == '#') {
       return;
       }
       if (anchor.attr('href').indexOf('#') === 0)
       {
       if ($(anchor.attr('href')).length)
       {
       $('html, body').stop().animate({scrollTop: $(anchor.attr('href')).offset().top - 69}, 1500, 'easeInOutExpo');
       }
       event.preventDefault();
       }
       });*/

      /* Header 2 - Parallax Scrolling */
      /*$('.header-2 .navbar-nav li a, .header-2 .logo-block a').bind('click', function (event)
       {
       var anchor = $(this);
       
       if (anchor == 'undefined' || anchor == null || anchor.attr('href') == '#') {
       return;
       }
       if (anchor.attr('href').indexOf('#') === 0)
       {
       if ($(anchor.attr('href')).length)
       {
       $('html, body').stop().animate({scrollTop: $(anchor.attr('href')).offset().top - 69}, 1500, 'easeInOutExpo');
       }
       event.preventDefault();
       }
       });*/

      /* Header 3 - Parallax Scrolling */
      /*$('.header-3 .dropdown-menu li a, .logo-panel a').bind('click', function (event)
       {
       var anchor = $(this);
       
       if (anchor == 'undefined' || anchor == null || anchor.attr('href') == '#') {
       return;
       }
       if (anchor.attr('href').indexOf('#') === 0)
       {
       if ($(anchor.attr('href')).length)
       {
       $('html, body').stop().animate({scrollTop: $(anchor.attr('href')).offset().top - 89}, 1500, 'easeInOutExpo');
       }
       event.preventDefault();
       }
       });*/

      /* Header 4 - Parallax Scrolling */
      /*$('.header-4 .navbar-nav li a').bind('click', function (event)
       {
       var anchor = $(this);
       
       if (anchor == 'undefined' || anchor == null || anchor.attr('href') == '#') {
       return;
       }
       if (anchor.attr('href').indexOf('#') === 0)
       {
       if ($(anchor.attr('href')).length)
       {
       $('html, body').stop().animate({scrollTop: $(anchor.attr('href')).offset().top - 111}, 1500, 'easeInOutExpo');
       }
       event.preventDefault();
       }
       });*/

      /* Header 4 - Parallax Scrolling */
      /*$('.header-5 .navbar-nav li a').bind('click', function (event)
       {
       var anchor = $(this);
       
       if (anchor == 'undefined' || anchor == null || anchor.attr('href') == '#') {
       return;
       }
       if (anchor.attr('href').indexOf('#') === 0)
       {
       if ($(anchor.attr('href')).length)
       {
       $('html, body').stop().animate({scrollTop: $(anchor.attr('href')).offset().top - 69}, 1500, 'easeInOutExpo');
       }
       event.preventDefault();
       }
       });*/

      /* Header 5 - Parallax Scrolling */
      /*$('.page-scroll a').bind('click', function (event)
       {
       var anchor = $(this);
       
       if (anchor == 'undefined' || anchor == null || anchor.attr('href') == '#') {
       return;
       }
       if (anchor.attr('href').indexOf('#') === 0)
       {
       if ($(anchor.attr('href')).length)
       {
       $('html, body').stop().animate({scrollTop: $(anchor.attr('href')).offset().top - 70}, 1500, 'easeInOutExpo');
       }
       event.preventDefault();
       }
       });*/

      /*$('.header-4 .logo-left a,.header-5 .logo-left a').bind('click', function (event)
       {
       var anchor = $(this);
       
       if (anchor == 'undefined' || anchor == null || anchor.attr('href') == '#') {
       return;
       }
       if (anchor.attr('href').indexOf('#') === 0)
       {
       if ($(anchor.attr('href')).length)
       {
       $('html, body').stop().animate({scrollTop: $(anchor.attr('href')).offset().top - 70}, 1500, 'easeInOutExpo');
       }
       event.preventDefault();
       }
       });*/

      // Expand Panel
      /*$("#slideit").click(function ()
       {
       $("#slidepanel").slideDown("slow");
       });*/

      // Collapse Panel
      /*$("#closeit").click(function ()
       {
       $("#slidepanel").slideUp("slow");
       });*/

      // Switch buttons from "Log In | Register" to "Close Panel" on click
      /*$("#toggle a").click(function ()
       {
       $("#toggle a").toggle();
       });*/

      /* jQuery UI Controls */
      /*$(".responsive-calendar").responsiveCalendar(
       {
       // time: '2013-11',
       events:
       {
       "2014-12-14": {"url": "http://google.com"},
       "2014-12-10": {"url": "http://google.com"},
       "2014-11-10": {"url": "http://google.com"},
       "2015-01-12": {"url": "http://google.com"},
       "2015-02-10": {"url": "http://google.com"},
       "2015-02-04": {"url": "http://google.com"}
       },
       startFromSunday: 1,
       activateNonCurrentMonths: 1
       
       });*/
      /*
       var wow = new WOW({
       boxClass: 'wow', // animated element css class (default is wow)
       animateClass: 'animated', // animation css class (default is animated)
       offset: 100, // distance to the element when triggering the animation (default is 0)
       mobile: false        // trigger animations on mobile devices (true is default)
       });
       wow.init();
       
       $('.header-1-flex').flexslider({
       animation: "slide"
       });
       $(function () {
       var toggles = $('.toggle a'),
       codes = $('.code');
       
       toggles.on("click", function (event) {
       event.preventDefault();
       var $this = $(this);
       
       if (!$this.hasClass("active")) {
       toggles.removeClass("active");
       $this.addClass("active");
       codes.hide().filter(this.hash).show();
       }
       });
       toggles.first().click();
       });*/

      /* Content Box 1 */
      var owl_cntbox = $("#owl-cntbox");
      owl_cntbox.owlCarousel(
      {
        itemsCustom: [
          [0, 1],
          [450, 1],
          [600, 2],
          [700, 3],
          [1000, 4],
          [1200, 4],
          [1400, 4],
          [1600, 4],
          [1900, 4]
        ]
      });

      /* Training Programs */
      var owl_training_programs = $("#owl-training-programs");
      owl_training_programs.owlCarousel(
      {
        navigation: true, // Show next and prev buttons
        pagination: false,
        itemsCustom: [
          [0, 1],
          [450, 1],
          [600, 2],
          [700, 3],
          [1000, 4],
          [1200, 4],
          [1400, 4],
          [1600, 4],
          [1900, 4]
        ]
      });

      /* Css class in Menu */
      /*$('.primary-navigation .navbar-nav > li a, .primary-navigation .dropdown-menu li a').html(function (i, html)
       {
       return html = html.replace(/(\w+\s)/, '<span class="black">$1</span>');
       });*/
    });
    /* document.ready --/ */
  }


})();