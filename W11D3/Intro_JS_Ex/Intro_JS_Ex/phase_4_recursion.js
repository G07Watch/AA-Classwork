const range = function(start, end){
    if (start === end){ return [end]}

    let rangeArr = [start]

    return rangeArr.concat( range(start+1,end) )
}


const sumRec = function(arr){
    if (arr.length === 0){ return 0}

    let sum = arr.shift(1)  
    return sum + sumRec(arr)
}

// console.log(`\n========\n`)
// let test1 = sumRec([1,2,3])
// console.log(test1)

const exponent = function(base, exp) {
    if (exp === 0) { return 1 }

    return base * exponent(base, exp - 1)
}

// console.log(`\n========\n`)
// test1 = exponent(2, 3)
// console.log(test1)

const isEven = function(num) { return ( (num % 2) === 0 ) }

const exponentTwo = function(base, exp) {
  if (exp === 0) { return 1 }
  if (exp === 1) { return base }

  if (isEven(exp)) 
  { 
    return exponentTwo(base, (exp / 2)) * exponentTwo(base, (exp / 2))
  } 
  else 
  {
    return base * exponentTwo(base, ((exp - 1) / 2)) * exponentTwo(base, ((exp - 1) / 2))
  }
}

// console.log(`\n========\n`)
// test1 = exponentTwo(2, 5)
// console.log(test1)

// console.log(`\n========\n`)
// test1 = exponentTwo(2, 4)
// console.log(test1)


const fibonacci = function(n){   
    if (n===0) { return [] }
    if (n===1) { return [0] } 
    if (n===2) { return [0,1] }
    // if (n===3) { return [0,1,1] }
                                        // 3  [0, 1]  
    let previous = fibonacci(n-1)
    let fibPrevious = previous.length - 1
    let fibPreviousTwo = previous.length - 2
    let result = [ previous[fibPrevious] + previous[fibPreviousTwo] ]
    return previous.concat( result )
}

// console.log(`\n========\n`)
// test1 = fibonacci(16)
// console.log(test1)

const deepDup = function(arr) {
    if ( !Array.isArray(arr) ) { return [arr] }
    
    let arrDuplicate = []

    arrDuplicate = arr.map ( function (el) {
    if ( Array.isArray(el) ) 
    {
      return deepDup(el)
    }
    else
    {
      return el
    }
    });

    return  arrDuplicate

	
}


// console.log(`\n========\n`)
// origArr = [[[1], [2, 7]]]

// test1 = deepDup(origArr)
// console.log(test1)
// console.log(origArr)
// console.log(test1 === origArr)

const deepDupEach = function (arr) {
	if (!Array.isArray(arr)) { return [arr] }

	let arrDuplicate = []

	arr.forEach(function (el) {
		if (Array.isArray(el)) {
			arrDuplicate.push( deepDupEach(el) )
		}
		else {
			arrDuplicate.push ( el )
		}
	});

	return arrDuplicate

}

// console.log(`\n========\n`)
// origArr = [[[1], [2, 7, 5]]]

// test1 = deepDupEach(origArr)
// console.log(test1)
// console.log(origArr)
// console.log(test1 === origArr)

const bsearch = function(arr, target){
	
	//if (arr.length === 1 && arr[0]!= target) {return false}
	if (arr.length === 0 ){ return -1 }

    let midpoint = Math.floor(arr.length/2)
    let midEle = arr[midpoint]
    let firstHalf = arr.slice(0, midpoint)
    let lastHalf = arr.slice(midpoint, arr.length)

	console.log(arr)

    if (midEle === target) {return midpoint}

    else if (midEle > target) {return (bsearch(firstHalf, target)) }

    else { 
        let lastcheck = bsearch(lastHalf, target);

        if (lastcheck) { return ( bsearch(lastHalf, target) + midpoint) }
        else {return lastcheck}
    
    }

}
// Hint: look up some JS Math methods!
// Math.abs
// 	var.abs
// 	Math.abs(midpoint)
// 	var.floor
// 	Math.floor(midpoint)

// console.log(`\n========\n`)
// origArr = [1, 4, 3, 2, 6, 7, 5, 8, 9].sort()
// test1 = bsearch(origArr, 7)
// console.log(test1)

// This is probably quicksort
const quickSort = function(arr) {

	let midpoint = Math.floor(arr.length / 2)
	let leftArr  = arr.slice(0, midpoint)
	let rightArr = arr.slice(midpoint + 1, arr.length)

	return mergeSort(leftArr).concat([midpoint]).concat(mergeSort(rightArr))
};

//

const mergeSort = function (arr) {
	if (arr.length <= 1) return arr 

	let midpoint = Math.floor(arr.length / 2)
	let leftArr = mergeSort(arr.slice(0, midpoint))
	let rightArr = mergeSort(arr.slice(midpoint, arr.length))

	return merge(leftArr, rightArr)
};

const merge = function(left, right) {
	let mergedArr = [];

	while ( left.length != 0 && right.length != 0  )
	{
		let num1 = left[0]
		let num2 = right[0]
		if ( num1 > num2 )
		{
			mergedArr.push(right.shift(1))
		}
		else if ( num1 <= num2 )
		{
			mergedArr.push(left.shift(1))
		}
	}
	mergedArr = mergedArr.concat(left).concat(right)
    return mergedArr
};

console.log(`\n========\n`)
origArr = [1, 4, 3, 2, 6, 7, 5, 8, 9]
test1 = mergeSort(origArr)
console.log(test1)

const subsets = function(arr){
    if (arr.length === 0) { return [arr] }

    // let subs = []   
    let first = [arr[0]]
    let subs = subsets(arr.slice(1, arr.length))   


    subs = subs.concat( subs.map (el =>{

         return el.concat(first)
    }));

    return subs

}

console.log(`\n========\n`)
origArr = [4, 3, 1]
test1 = subsets(origArr)
console.log(test1)
console.log(test1.length)


//  {},{1},{4},{ 3},{1,4},{1, 3},{4, 3},{1,4, 3}
//  number of subsets 8
/* def subsets(arr) 
	return [[]] if arr.empty?

	subs = subsets(arr[1..-1])
    subs.concat(subs.map {
		|el| el += [arr.first]	
		
	})
    end
*/

// def subsets(arr)
// return [[]] if arr.empty ?

// 	subs = subsets(arr[0..- 2])
//   subs.concat(subs.map{| el | el +=[arr.last]})
// end
