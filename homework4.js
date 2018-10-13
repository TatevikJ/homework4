//triangleStars

const triangleStars = function(height) {
  const star = '*';
  const space = ' ';
  let a = 0;
  let b = height*2 - 1; 
   while(a < height) {
   console.log(space.repeat(a) + star.repeat(b));
   a = a + 1;
   b = b - 2;
   }
};
console.log(triangleStars(5)) 

//multiToSingle

const multiToSingle = function(array) {
  let k = array[0].length;
  let m = 0;
  while(k < array[0].length + array[1].length , m < array[1].length) {
    array[0][k] = array[1][m];
    k = k + 1;
    m = m + 1;
  }
  return array[0];
}

//minmax
const findMinMax = function(array, argument) {
	if (argument === true) {
		let max = array[0];
		let i = 1;
		while(i < array.length) {
			if(array[i] > max) {
			 max = array[i];
			}
	    i = i + 1;
        }
	return max;
    }
if (argument === false) {
	    let min = array[0];
	    let w = 1;
	    while(w < array.length) {
	    	if(array[w] < min) {
	    	min = array[w];
	    	}
          w = w + 1;
        }
     return min;
}
}

  console.log(findMinMax([1,2,4,666],true))



//forEach

const f = function(val) {
  return val;
};
const forEach = function(array, f) {
let i = 0;
while(i < array.length) {
    console.log(f(array[i]));
	i = i + 1;
}
}

//sum

const sum = function(array) {
	let i = 0;
	let sumofnum = 0;
	while(i < array.length) {
    sumofnum = sumofnum + array[i];
      i = i + 1;
	}
	return sumofnum;
  } 

//reverse

const reverse = function(str) {
	let a = str.length - 1;
    let sum = '';
    while(a >= 0) {
	sum = sum + str[a];
	a = a - 1;
	}
	return sum;
} 

//8. Create a function called checkerboard using While loop which, given a size argument, will draw an n by n checkerboard on the screen.  

const checkerboard = function(num) {
  const star = '*';
  const space = ' ';
  let k = 1;
  while(k < num) {
  console.log(space.repeat(k % 2) + star.repeat(num));
  k = k + 1;
  }
}