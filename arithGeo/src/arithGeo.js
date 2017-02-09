//Program arithGeo

function arithGeo (d_array) {
  
  if (d_array.length < 1){
    return 0; // 0 is returned if the array is empty
  }
  //declaring variables 
  var arithmeticBaseComparison = d_array[1] - d_array[0];
  var geometricRatio = d_array[1] / d_array[0];
  var isArithmetricProgression;
  var isGeometricProgression;
  // iterating through the array
  for(var i = 0; i < d_array.length - 1; i++){
    if( d_array[i + 1] - d_array[i] === arithmeticBaseComparison ){ // condition statement to test if the array passed as an arguement is in arithmetic progression or not
      isArithmetricProgression = true;
    }
    else{
      isArithmetricProgression = false;
    }
    if(d_array[i + 1] / geometricRatio === d_array[i]){ // condition statement to test if the array passed as an arguement is in geometric progression or not
      isGeometricProgression = true;
    }
    else{
      isGeometricProgression = false;
    }
  }
  
  if(isArithmetricProgression){ 
    return "Arithmetic";// Arithmetic is returned if the array passed as an arguement is in arithmetic progression 
  }
  else if(isGeometricProgression){ 
    return "Geometric";// Geometric is returned if the array passed as an arguement is in geometric progression
  }
  else{ 
  return -1;//-1 is returned if the array passed as an arguement is neither arithmetic not geometric in progression
  }
}

module.exports = arithGeo;

