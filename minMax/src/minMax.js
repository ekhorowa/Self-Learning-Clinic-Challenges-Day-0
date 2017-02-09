// This program returns the Minimumm and Maximum number in an array
	function min_max (d_array) {
	//variable declaration
  	var minimum = Math.min.apply(null, d_array); 
  	var maximum = Math.max.apply(null, d_array);
  	if (minimum === maximum) {
  		return [minimum]
  	}
  	return [minimum, maximum]
	}

module.exports = min_max;