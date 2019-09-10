
/*Comment

class Array 

    def myeach(&prc)
        i = 0;
        while i < self.length do |ele|
            prc.call(ele);
            i += 1;
        end
    end

end 

*/

// Array.prototype.myEach = function(callbackFunc){
//   whatever
// }

// const callbackFunc = function(ele) {
//   consolelogwhaever
// }

// console.log([324032842].myEach(callbackFunc)];


  

Array.prototype.myEach = function (eleCall) {
    
    let i = 0;
    while (i<this.length){
         eleCall(this[i]);
        i++;
    }
};


// const eleLog = function (ele) {
//     console.log(ele);
// };

// [1,2,3,4].myEach(eleLog);

Array.prototype.myMap = function(cb) {
    const newArray = [];

	let i = 0;
	while ( i < this.length ) {
		let ele = cb(this[i]);
		newArray.push(ele);
		i++;
	}
	console.log(newArray);
	return newArray;
};

[1, 2, 3, 4, 5].myMap( function(el) { return el + 1 });

Array.prototype.myReduce = function(callback, initialValue) {

    let accumulator = 0
	if (initialValue) {
		accumulator = initialValue;
	}
	else {
		accumulator = this[0];
		this.shift();
	}
	
	// can also use =>
	this.myEach( function(ele) {
        accumulator = accumulator + callback(ele)
	});
    console.log(accumulator);
	return accumulator;
};

const testCall = function(ele) {
	return ele;
};

[3, 4, 5].myReduce(testCall, 5);
