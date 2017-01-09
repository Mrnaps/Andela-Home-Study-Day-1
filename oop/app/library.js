'use strict'

 var Computer = function(brand, model, year, color, weight, speed, connected, gaming, portable, powered){
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.color = color;
      this.weight = weight;
      this.speed = speed;
      this.connected = false;
      this.gaming = false;
      this.portable = true;
      this.powered = true;
   }
module.exports = Computer;
