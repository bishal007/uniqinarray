let str = "Hello, World";

const reversed = (str) =>{
		let result = "";
		for(let c of str){
    	result = c + result
    }
    return result;
}

/* console.log(reversed(str)); */

let givenArray = [1, 9, 0, -7, 8];

const findMinMax = (givenArray) =>{
	let min = givenArray[0];
	let max = givenArray[0];
  for(let i=1; i<= givenArray.length; i++){
  	if(max<givenArray[i]){
    	max = givenArray[i]; 
    }
    if(min>givenArray[i]){
    	min = givenArray[i];
    }
  }
  return {min, max};
}

/* console.log(findMinMax(givenArray)); */


let givenNumber = [1, 9, 0, -7, 8];

/* console.log(givenNumber.sort(sortItOut)); */

function sortItOut(a,b){
	return a - b;
}

let givenNos = [1, 9, 0, -7, 8, 1, 9, 0];

let unq = [];

for(let i of givenNos){
	if(unq.indexOf(i) === -1){
  	unq.push(i);
  }
}

console.log(unq)

