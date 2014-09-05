/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_UP}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play();
         // Play the audio track.
         sym.$("button-162")[0].play();
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();
         sym.getSymbol("EARTHformation").stop("start");// Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_DOWN}", "click", function(sym, e) {
         sym.playReverse();
         sym.$("button-162")[0].play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         $("body").css("background-color","#000000");
         //////////
         
         //////////
         //Sample One
         //Append Video
         //////////
            //  var vid = $("<video width='352' height='155' controls='controls'>" +
            //  "<source src='http://www.w3schools.com/html5/movie.mp4' type='video/mp4' />" +
            //  "<source src='http://www.w3schools.com/html5/movie.ogg' type='video/ogg' />" +
            //  "This browser is not compatible with HTML 5" +
            //  "</video>");
         
            // sym.$("vcontainer").append(vid);
            // vid.attr('autoplay','autoplay');
            // vid.attr('preload','auto');
         
         //////////
         //Sample Two
         //Append Youtube Video
         //////////
         
          var youtubevid = $("<iframe/>"); 
          sym.$("vcontainer1").append(youtubevid);
         
          youtubevid.attr('type','text/html');
          youtubevid.attr('width','240');
          youtubevid.attr('height','168');	 
          youtubevid.attr('src','http://www.youtube.com/embed/PAWsu45sHhM');  // url/Video_Id
          youtubevid.attr('frameborder','1');	   // 1 | 0	
          youtubevid.attr('allowfullscreen','0');   // 1 | 0
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_section1chapter}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("Section1");
         sym.play();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_section2chapter}", "click", function(sym, e) {
         sym.play("Section2");
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_section3chapter}", "click", function(sym, e) {
         sym.play("Section3");
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_section4chapter}", "click", function(sym, e) {
         sym.play("Section4");
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_section5chapter}", "click", function(sym, e) {
         sym.play("Section5");
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_section6chapter}", "click", function(sym, e) {
         sym.play("Section6");
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_section7chapter}", "click", function(sym, e) {
         sym.play("Section7");
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_section7chapter}", "mouseover", function(sym, e) {
         // Show an Element.
         sym.$("TIMELINE_TEXT7").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_audioicon}", "click", function(sym, e) {
         
         
         
         sym.$("BacteriaAudio1")[0].play();
         	

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.getSymbol("EARTHformation").play("start");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TEXT_BTN_PRELIFE1}", "click", function(sym, e) {
         // Show an Element.
         sym.$("POPUP_PRELIFE1").show();
         sym.$("EXIT_BUTTON").show();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.$("POPUP_PRELIFE1").hide();
         sym.$("POPUP_PRELIFE2").hide();
         sym.$("POPUP_PRELIFE3").hide();
         sym.$("POPUP_PRELIFE4").hide();
         sym.$("POPUP_ORGANISMS").hide();
         sym.$("POPUP_THEPLANET").hide();
         sym.$("POPUP_LIFEONEARTH").hide();
         sym.$("POPUP_BRANCHING").hide();
         sym.$("POPUP_LGT").hide();
         sym.$("POPUP_LITTLETREE").hide();
         sym.$("POPUP_ARCHAEABEGINS").hide();
         sym.$("POPUP_EUKARYABEGIN").hide();
         sym.$("POPUP_SPONGEFUNGI").hide();
         sym.$("POPUP_ICEAGE").hide();
         sym.$("POPUP_OXYGEN").hide();
         sym.$("POPUP_EXPLOSION").hide();
         sym.$("POPUP_LANDPLANTS").hide();
         sym.$("POPUP_CONTINENTS").hide();
         sym.$("POPUP_GREATDYING").hide();
         sym.$("POPUP_LANDEXTINCTION").hide();
         sym.$("POPUP_HUMANCHIMP").hide();
         sym.$("POPUP_MODERNHUMAN").hide();
         sym.$("POPUP_HELPBAR").hide();
         sym.$("HELPEXIT_BUTTON2").hide();
         sym.$("EXIT_BUTTON").hide();
         sym.$("TIMELINE_TEXT1").hide();
         sym.$("TIMELINE_TEXT2").hide();
         sym.$("TIMELINE_TEXT3").hide();
         sym.$("TIMELINE_TEXT4").hide();
         sym.$("TIMELINE_TEXT5").hide();
         sym.$("TIMELINE_TEXT6").hide();
         sym.$("TIMELINE_TEXT7").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TEXT_BTN_PRELIFE2}", "click", function(sym, e) {
         sym.$("POPUP_PRELIFE2").show();
         sym.$("EXIT_BUTTON").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TEXT_BTN_PRELIFE3}", "click", function(sym, e) {
         sym.$("POPUP_PRELIFE3").show();
         sym.$("EXIT_BUTTON").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TEXT_BTN_PRELIFE4}", "click", function(sym, e) {
         sym.$("POPUP_PRELIFE4").show();
         sym.$("EXIT_BUTTON").show();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_TEXT_BTN_ORGANISMS}", "click", function(sym, e) {
         sym.$("POPUP_ORGANISMS").show();
         sym.$("EXIT_BUTTON").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ORIGIN}", "click", function(sym, e) {
         sym.$("POPUP_LIFEONEARTH").show();
         sym.$("EXIT_BUTTON").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TEXT_BTN_BRANCHING}", "click", function(sym, e) {
         sym.$("POPUP_BRANCHING").show();
         sym.$("EXIT_BUTTON").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TEXT_BTN_LGT}", "click", function(sym, e) {
         sym.$("POPUP_LGT").show();
         sym.$("EXIT_BUTTON").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TEXT_BTN_TREE}", "click", function(sym, e) {
         sym.$("POPUP_LITTLETREE").show();
         sym.$("EXIT_BUTTON").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TEXT_BTN_ARCHAEABEGIN}", "click", function(sym, e) {
         sym.$("POPUP_ARCHAEABEGINS").show();
         sym.$("EXIT_BUTTON").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TEXT_BTN_EUKARYABEGIN}", "click", function(sym, e) {
         sym.$("POPUP_EUKARYABEGIN").show();
         sym.$("EXIT_BUTTON").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TEXT_BTN_EUKARYABEGINCopy}", "click", function(sym, e) {
         sym.$("POPUP_SPONGEFUNGI").show();
         sym.$("EXIT_BUTTON").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TEXT_BTN_ICEAGE}", "click", function(sym, e) {
         sym.$("POPUP_ICEAGE").show();
         sym.$("EXIT_BUTTON").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TEXT_BTN_EUKARYABEGINCopy3}", "click", function(sym, e) {
         sym.$("POPUP_OXYGEN").show();
         sym.$("EXIT_BUTTON").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TEXT_BTN_EUKARYABEGINCopy4}", "click", function(sym, e) {
         sym.$("POPUP_EXPLOSION").show();
         sym.$("EXIT_BUTTON").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TEXT_BTN_EUKARYABEGINCopy5}", "click", function(sym, e) {
         sym.$("POPUP_LANDPLANTS").show();
         sym.$("EXIT_BUTTON").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TEXT_BTN_EUKARYABEGINCopy6}", "click", function(sym, e) {
         sym.$("POPUP_CONTINENTS").show();
         sym.$("EXIT_BUTTON").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TEXT_BTN_EUKARYABEGINCopy7}", "click", function(sym, e) {
         sym.$("POPUP_GREATDYING").show();
         sym.$("EXIT_BUTTON").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TEXT_BTN_EUKARYABEGINCopy8}", "click", function(sym, e) {
         sym.$("POPUP_LANDEXTINCTION").show();
         sym.$("EXIT_BUTTON").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TEXT_BTN_EUKARYABEGINCopy9}", "click", function(sym, e) {
         sym.$("POPUP_EUKARYABEGIN").show();
         sym.$("EXIT_BUTTON").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TEXT_BTN_EUKARYABEGINCopy10}", "click", function(sym, e) {
         sym.$("POPUP_HUMANCHIMP").show();
         sym.$("EXIT_BUTTON").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TEXT_BTN_EUKARYABEGINCopy11}", "click", function(sym, e) {
         sym.$("POPUP_MODERNHUMAN").show();
         sym.$("EXIT_BUTTON").show();

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${_help_button}", "click", function(sym, e) {
         sym.$("POPUP_HELPBAR").show();
         sym.$("HELPEXIT_BUTTON2").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_HELPEXIT_BUTTON2}", "click", function(sym, e) {
         sym.$("POPUP_PRELIFE1").hide();
         sym.$("POPUP_PRELIFE2").hide();
         sym.$("POPUP_PRELIFE3").hide();
         sym.$("POPUP_PRELIFE4").hide();
         sym.$("POPUP_THEPLANET").hide();
         sym.$("POPUP_ORGANISMS").hide();
         sym.$("POPUP_LIFEONEARTH").hide();
         sym.$("POPUP_LGT").hide();
         sym.$("POPUP_HELPBAR").hide();
         sym.$("POPUP_LITTLETREE").hide();
         sym.$("POPUP_BRANCHING").hide();
         sym.$("POPUP_ARCHAEABEGIN").hide();
         sym.$("POPUP_EUKARYABEGIN").hide();
         sym.$("POPUP_SPONGEFUNGI").hide();
         sym.$("POPUP_ICEAGE").hide();
         sym.$("POPUP_OXYGEN").hide();
         sym.$("POPUP_EXPLOSION").hide();
         sym.$("POPUP_LANDPLANTS").hide();
         sym.$("POPUP_CONTINENTS").hide();
         sym.$("POPUP_GREATDYING").hide();
         sym.$("POPUP_LANDEXTINCTION").hide();
         sym.$("POPUP_HUMANCHIMP").hide();
         sym.$("POPUP_MODERNHUMAN").hide();
         sym.$("EXIT_BUTTON").hide();
         sym.$("HELPEXIT_BUTTON2").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_EXIT_BUTTON}", "click", function(sym, e) {
         sym.$("POPUP_PRELIFE1").hide();
         sym.$("POPUP_PRELIFE2").hide();
         sym.$("POPUP_PRELIFE3").hide();
         sym.$("POPUP_PRELIFE4").hide();
         sym.$("POPUP_THEPLANET").hide();
         sym.$("POPUP_ORGANISMS").hide();
         sym.$("POPUP_LIFEONEARTH").hide();
         sym.$("POPUP_LGT").hide();
         sym.$("POPUP_LITTLETREE").hide();
         sym.$("POPUP_BRANCHING").hide();
         sym.$("POPUP_ARCHAEABEGINS").hide();
         sym.$("POPUP_EUKARYABEGIN").hide();
         sym.$("POPUP_SPONGEFUNGI").hide();
         sym.$("POPUP_ICEAGE").hide();
         sym.$("POPUP_OXYGEN").hide();
         sym.$("POPUP_EXPLOSION").hide();
         sym.$("POPUP_LANDPLANTS").hide();
         sym.$("POPUP_CONTINENTS").hide();
         sym.$("POPUP_GREATDYING").hide();
         sym.$("POPUP_LANDEXTINCTION").hide();
         sym.$("POPUP_HUMANCHIMP").hide();
         sym.$("POPUP_MODERNHUMAN").hide();
         sym.$("EXIT_BUTTON").hide();
         // insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_section1chapter}", "mouseover", function(sym, e) {
         // Show an Element.
         sym.$("TIMELINE_TEXT1").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_section1chapter}", "mouseout", function(sym, e) {
         // Hide an Element.
         sym.$("TIMELINE_TEXT1").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_section2chapter}", "mouseover", function(sym, e) {
         // Show an Element.
         sym.$("TIMELINE_TEXT2").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_section2chapter}", "mouseout", function(sym, e) {
         // Hide an Element.
         sym.$("TIMELINE_TEXT2").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_section3chapter}", "mouseover", function(sym, e) {
         // Show an Element.
         sym.$("TIMELINE_TEXT3").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_section3chapter}", "mouseout", function(sym, e) {
         // Hide an Element.
         sym.$("TIMELINE_TEXT3").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_section4chapter}", "mouseover", function(sym, e) {
         // Hide an Element.
         sym.$("TIMELINE_TEXT4").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_section4chapter}", "mouseout", function(sym, e) {
         // Hide an Element.
         sym.$("TIMELINE_TEXT4").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_section5chapter}", "mouseover", function(sym, e) {
         // Show an Element.
         sym.$("TIMELINE_TEXT5").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_section5chapter}", "mouseout", function(sym, e) {
         // Hide an Element.
         sym.$("TIMELINE_TEXT5").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_section6chapter}", "mouseover", function(sym, e) {
         // Show an Element.
         sym.$("TIMELINE_TEXT6").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_section6chapter}", "mouseout", function(sym, e) {
         // Hide an Element.
         sym.$("TIMELINE_TEXT6").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_section7chapter}", "mouseout", function(sym, e) {
         // Hide an Element.
         sym.$("TIMELINE_TEXT7").hide();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'UP'
   (function(symbolName) {   
   
   })("UP");
   //Edge symbol end:'UP'

   //=========================================================
   
   //Edge symbol: 'DOWN'
   (function(symbolName) {   
   
   })("DOWN");
   //Edge symbol end:'DOWN'

   //=========================================================
   
   //Edge symbol: 'SLIDER'
   (function(symbolName) {   
   
   })("SLIDER");
   //Edge symbol end:'SLIDER'

   //=========================================================
   
   //Edge symbol: 'scrollup'
   (function(symbolName) {   
   
   })("scrollup");
   //Edge symbol end:'scrollup'

   //=========================================================
   
   //Edge symbol: 'whatisthetreeoflife'
   (function(symbolName) {   
   
   })("whatisthetreeoflife");
   //Edge symbol end:'whatisthetreeoflife'

   //=========================================================
   
   //Edge symbol: 'LongTree'
   (function(symbolName) {   
   
   })("LongTree");
   //Edge symbol end:'LongTree'

   //=========================================================
   
   //Edge symbol: 'navlife'
   (function(symbolName) {   
   
   })("navlife");
   //Edge symbol end:'navlife'

   //=========================================================
   
   //Edge symbol: 'extinctdomains'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hitbox}", "mouseover", function(sym, e) {
         sym.play("rollover");
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hitbox}", "mouseout", function(sym, e) {
         sym.playReverse("rollover2");

      });
      //Edge binding end

   })("extinctdomains");
   //Edge symbol end:'extinctdomains'

   //=========================================================
   
   //Edge symbol: 'extinctdomains_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hitbox}", "mouseover", function(sym, e) {
         sym.play("rollover");
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hitbox}", "mouseout", function(sym, e) {
         sym.playReverse("rollover2");
         

      });
      //Edge binding end

   })("bacteriapopup");
   //Edge symbol end:'bacteriapopup'

   //=========================================================
   
   //Edge symbol: 'bacteriapopup_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hitbox}", "mouseover", function(sym, e) {
         sym.play("rollover");
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hitbox}", "mouseout", function(sym, e) {
         sym.playReverse("rollover2");

      });
      //Edge binding end

   })("archaeapopup");
   //Edge symbol end:'archaeapopup'

   //=========================================================
   
   //Edge symbol: 'archaeapopup_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hitbox}", "mouseover", function(sym, e) {
         sym.play("rollover");
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hitbox}", "mouseout", function(sym, e) {
         sym.playReverse("rollover2");

      });
      //Edge binding end

   })("eukaryapopup");
   //Edge symbol end:'eukaryapopup'

   //=========================================================
   
   //Edge symbol: 'extinction_event'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hitbox}", "mouseover", function(sym, e) {
         sym.play("start");
         sym.play();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hitbox}", "mouseout", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

   })("extinction_event");
   //Edge symbol end:'extinction_event'

   //=========================================================
   
   //Edge symbol: 'EARTHformation'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("EARTHformation");
   //Edge symbol end:'EARTHformation'

   //=========================================================
   
   //Edge symbol: 'extinctdomains_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_hitbox}", "mouseover", function(sym, e) {
         sym.play("rollover");
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hitbox}", "mouseout", function(sym, e) {
         sym.playReverse("rollover2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("extinctdomains_1");
   //Edge symbol end:'extinctdomains_1'

   //=========================================================
   
   //Edge symbol: 'TEXTBUTTONPARENT'
   (function(symbolName) {   
   
   })("TEXTBUTTONPARENT");
   //Edge symbol end:'TEXTBUTTONPARENT'

   //=========================================================
   
   //Edge symbol: 'POPUP_PRELIFE1'
   (function(symbolName) {   
   
   })("POPUP_PRELIFE1");
   //Edge symbol end:'POPUP_PRELIFE1'

   //=========================================================
   
   //Edge symbol: 'POPUP_PRELIFE1_1'
   (function(symbolName) {   
   
      })("POPUP_PRELIFE2");
   //Edge symbol end:'POPUP_PRELIFE2'

   //=========================================================
   
   //Edge symbol: 'POPUP_PRELIFE2_1'
   (function(symbolName) {   
   
      })("POPUP_PRELIFE3");
   //Edge symbol end:'POPUP_PRELIFE3'

   //=========================================================
   
   //Edge symbol: 'POPUP_PRELIFE3_1'
   (function(symbolName) {   
   
      })("POPUP_PRELIFE4");
   //Edge symbol end:'POPUP_PRELIFE4'

   //=========================================================
   
   //Edge symbol: 'POPUP_PRELIFE4_1'
   (function(symbolName) {   
   
      })("POPUP_THEPLANET");
   //Edge symbol end:'POPUP_THEPLANET'

   //=========================================================
   
   //Edge symbol: 'POPUP_THEPLANET_1'
   (function(symbolName) {   
   
      })("POPUP_ORGANISMS");
   //Edge symbol end:'POPUP_ORGANISMS'

   //=========================================================
   
   //Edge symbol: 'POPUP_ORGANISMS_1'
   (function(symbolName) {   
   
      })("POPUP_LIFEONEARTH");
   //Edge symbol end:'POPUP_LIFEONEARTH'

   //=========================================================
   
   //Edge symbol: 'POPUP_LIFEONEARTH_1'
   (function(symbolName) {   
   
      })("POPUP_BRANCHING");
   //Edge symbol end:'POPUP_BRANCHING'

   //=========================================================
   
   //Edge symbol: 'POPUP_BRANCHING_1'
   (function(symbolName) {   
   
      })("POPUP_LGT");
   //Edge symbol end:'POPUP_LGT'

   //=========================================================
   
   //Edge symbol: 'POPUP_LGT_1'
   (function(symbolName) {   
   
      })("POPUP_LITTLETREE");
   //Edge symbol end:'POPUP_LITTLETREE'

   //=========================================================
   
   //Edge symbol: 'POPUP_BRANCHING_1'
   (function(symbolName) {   
   
         })("POPUP_ARCHAEABEGINS");
   //Edge symbol end:'POPUP_ARCHAEABEGINS'

   //=========================================================
   
   //Edge symbol: 'extinctdomains_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hitbox}", "mouseover", function(sym, e) {
         sym.play("rollover");
         sym.play();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hitbox}", "mouseout", function(sym, e) {
         sym.playReverse("rollover2");

      });
         //Edge binding end

      })("Genetic_Drift_Popup");
   //Edge symbol end:'Genetic_Drift_Popup'

   //=========================================================
   
   //Edge symbol: 'POPUP_ARCHAEABEGINS_1'
   (function(symbolName) {   
   
            })("POPUP_EUKARYABEGINS");
   //Edge symbol end:'POPUP_EUKARYABEGINS'

   //=========================================================
   
   //Edge symbol: 'POPUP_EUKARYABEGINS_1'
   (function(symbolName) {   
   
               })("POPUP_SPONGEFUNGI");
   //Edge symbol end:'POPUP_SPONGEFUNGI'

   //=========================================================
   
   //Edge symbol: 'POPUP_SPONGEFUNGI_1'
   (function(symbolName) {   
   
               })("POPUP_ICEAGE");
   //Edge symbol end:'POPUP_ICEAGE'

   //=========================================================
   
   //Edge symbol: 'POPUP_ICEAGE_1'
   (function(symbolName) {   
   
               })("POPUP_OXYGEN");
   //Edge symbol end:'POPUP_OXYGEN'

   //=========================================================
   
   //Edge symbol: 'POPUP_OXYGEN_1'
   (function(symbolName) {   
   
               })("POPUP_EXPLOSION");
   //Edge symbol end:'POPUP_EXPLOSION'

   //=========================================================
   
   //Edge symbol: 'POPUP_EXPLOSION_1'
   (function(symbolName) {   
   
               })("POPUP_LANDPLANTS");
   //Edge symbol end:'POPUP_LANDPLANTS'

   //=========================================================
   
   //Edge symbol: 'POPUP_LANDPLANTS_1'
   (function(symbolName) {   
   
               })("POPUP_CONTINENTS");
   //Edge symbol end:'POPUP_CONTINENTS'

   //=========================================================
   
   //Edge symbol: 'POPUP_CONTINENTS_1'
   (function(symbolName) {   
   
               })("POPUP_GREATDYING");
   //Edge symbol end:'POPUP_GREATDYING'

   //=========================================================
   
   //Edge symbol: 'POPUP_GREATDYING_1'
   (function(symbolName) {   
   
               })("POPUP_LANDEXTINCTION");
   //Edge symbol end:'POPUP_LANDEXTINCTION'

   //=========================================================
   
   //Edge symbol: 'POPUP_LANDEXTINCTION_1'
   (function(symbolName) {   
   
               })("POPUP_HUMANCHIMP");
   //Edge symbol end:'POPUP_HUMANCHIMP'

   //=========================================================
   
   //Edge symbol: 'POPUP_HUMANCHIMP_1'
   (function(symbolName) {   
   
               })("POPUP_MODERNHUMAN");
   //Edge symbol end:'POPUP_MODERNHUMAN'

   //=========================================================
   
   //Edge symbol: 'whatisthetreeoflife_1'
   (function(symbolName) {   
   
      })("whatisthetreeoflife_subtext");
   //Edge symbol end:'whatisthetreeoflife_subtext'

   //=========================================================
   
   //Edge symbol: 'help_button'
   (function(symbolName) {   
   
   })("help_button");
   //Edge symbol end:'help_button'

   //=========================================================
   
   //Edge symbol: 'HELPEXIT_BUTTON'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_HELPEXIT_BUTTON}", "click", function(sym, e) {
         

      });
         //Edge binding end

   })("HELPEXIT_BUTTON");
   //Edge symbol end:'HELPEXIT_BUTTON'

   //=========================================================
   
   //Edge symbol: 'EXIT_BUTTON'
   (function(symbolName) {   
   
   })("EXIT_BUTTON");
   //Edge symbol end:'EXIT_BUTTON'

   //=========================================================
   
   //Edge symbol: 'timeline_text1'
   (function(symbolName) {   
   
   })("timeline_text1");
   //Edge symbol end:'timeline_text1'

   //=========================================================
   
   //Edge symbol: 'timeline_text1_1'
   (function(symbolName) {   
   
   })("TIMELINE_TEXT2");
   //Edge symbol end:'TIMELINE_TEXT2'

   //=========================================================
   
   //Edge symbol: 'TIMELINE_TEXT2_1'
   (function(symbolName) {   
   
   })("TIMELINE_TEXT3");
   //Edge symbol end:'TIMELINE_TEXT3'

   //=========================================================
   
   //Edge symbol: 'TIMELINE_TEXT3_1'
   (function(symbolName) {   
   
   })("TIMELINE_TEXT4");
   //Edge symbol end:'TIMELINE_TEXT4'

   //=========================================================
   
   //Edge symbol: 'TIMELINE_TEXT4_1'
   (function(symbolName) {   
   
   })("TIMELINE_TEXT5");
   //Edge symbol end:'TIMELINE_TEXT5'

   //=========================================================
   
   //Edge symbol: 'TIMELINE_TEXT5_1'
   (function(symbolName) {   
   
   })("TIMELINE_TEXT6");
   //Edge symbol end:'TIMELINE_TEXT6'

   //=========================================================
   
   //Edge symbol: 'TIMELINE_TEXT6_1'
   (function(symbolName) {   
   
   })("TIMELINE_TEXT7");
   //Edge symbol end:'TIMELINE_TEXT7'

   //=========================================================
   
   //Edge symbol: 'POPUP_TEXTBOX'
   (function(symbolName) {   
   
   })("POPUP_TEXTBOX");
   //Edge symbol end:'POPUP_TEXTBOX'

})(jQuery, AdobeEdge, "EDGE-974726737");
