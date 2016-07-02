/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #add */
    $(document).on("click", "#add", function(evt)
    {
        /* your code goes here */ 
        var num1=parseInt(document.getElementById("number1").value);
        var num2=parseInt(document.getElementById("number2").value);
        var rest= num1 + num2 ;
        document.getElementById("results").value = rest ;
        document.getElementById("number1").value = '' ;
        document.getElementById("number2").value = '' ;
        
        
         return false;
    });
    
        /* button  #sub */
    $(document).on("click", "#sub", function(evt)
    {
        /* your code goes here */ 
        var num1=parseInt(document.getElementById("number1").value);
        var num2=parseInt(document.getElementById("number2").value);
        var rest= num1 - num2 ;
        document.getElementById("results").value = rest ;
        document.getElementById("number1").value = '' ;
        document.getElementById("number2").value = '' ;
         return false;
    });
    
        /* button  #mult */
    $(document).on("click", "#mult", function(evt)
    {
        /* your code goes here */ 
        var num1=parseInt(document.getElementById("number1").value);
        var num2=parseInt(document.getElementById("number2").value);
        var rest= num1 * num2 ;
        document.getElementById("results").value = rest ;
        document.getElementById("number1").value = '' ;
        document.getElementById("number2").value = '' ;
         return false;
    });
    
        /* button  #div */
    $(document).on("click", "#div", function(evt)
    {
        /* your code goes here */ 
        var num1=parseInt(document.getElementById("number1").value);
        var num2=parseInt(document.getElementById("number2").value);
        var rest= num1 / num2 ;
        document.getElementById("results").value = rest ;
        document.getElementById("number1").value = '' ;
        document.getElementById("number2").value = '' ;
         return false;
    });
    
    
    
    
    $(document).on("click", "#view", function(evt)
    {
       // activate_subpage("#history");
         //return false;
        
	    var btn = $("#mainpage");
	    btn.click();
    });
    
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
