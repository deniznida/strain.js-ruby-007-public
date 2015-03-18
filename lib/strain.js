'use strict';

var strain = {
  // add your solution here!
  keep: function(array, funktion){
  		var new_array = [];
  		array.forEach(function(element){
  			if (funktion(element)) {
  				new_array.push(element);
  			}
  		});
  		return new_array;
  },

  discard: function(array, funktion){
  		var new_array = [];
  		array.forEach(function(element){
  			if (!(funktion(element))) {
  				new_array.push(element);
  			}
  		});
  		return new_array;
  }

};