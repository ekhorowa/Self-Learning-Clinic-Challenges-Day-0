// This program returns the Minimumm and Maximum number in an array
module.exports = {
	min_max: function (d_array) {
  	var minimum = Math.min.apply(null, d_array); 
  	var maximum = Math.max.apply(null, d_array);
  	if (minimum === maximum) {
  		return [minimum]
  	}
  	return [minimum, maximum]
	}
}
