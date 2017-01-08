'use strict'

module.exports = {
   dataTypes: function(thing){
      if (typeof thing === "string"){
         return (thing.length);
      }

      else if (typeof thing === "boolean"){
         return (thing);
      }

      else if (typeof thing === "number"){
         if (thing < 100){
            return ("less than 100");
         }
         else if(thing > 100){
            return ("more than 100");
         }
         else {
            return ("equal to 100");
         }
      }

       else if (typeof thing === "object"){
         return ("no value");
      } 

      else if (typeof thing === Array.isArray(thing)){
         if (thing === [] ){
            return ("undefined");
         }
         if (thing.length < 2){
            return ("undefined");
         }
         else {
            return (thing[3]);
         }
      }



      else if (typeof thing === "undefined"){
         return ("no value");
      }
   }
} 
