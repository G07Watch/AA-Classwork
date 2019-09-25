// class Array

//     def uniq
//         new_array = []
//          self.each { |ele| new_array << ele unless new_array.include?(ele) }
//          return new_array

//     end

		// def twoSum
		// 	pos_pairs = []

		// 	(0...self.length-1).each do |i|
		// 		(i+1 .. self.length-1).each do |j|
		// 			if self[i] + self[j] == 0
		// 				pos_pairs.push( [i, j] ) 
		// 			end
		// 		end
		// 	end

		// 	return pos_pairs
        // end
        

        // def transpose
		// 	transposed = []
		// 	i = 0

		// 	while i < self.length
		// 		row  = []

		// 		self.each do |subarr|
        //             row.push( subarr[i] )  // [1,2] [3,4]
        //                                     // [1,3] [2,4]
		// 		end

		// 		transposed.push(row)
		// 		i += 1
		// 	end

		// 	return transposed
        // end




// end

Array.prototype.uniq = function (){
    const array = [];
    
	this.forEach (el => { 
        if ( !array.includes(el) ) {
            array.push(el);
		}	
	});
	console.log(array);
	return array;
};

([1, 2, 2, 3, 3, 3].uniq());

Array.prototype.twoSum = function () {
    const pairsIndices = [];

    for(let i=0; i<this.length-1; i++)
    {
        for (let j = i+1; j < this.length; j++)
        {
            if ( this[i]+this[j]===0 )
            {
                pairsIndices.push( [i,j] );
            }
        }
    }
    console.log( pairsIndices );
    return pairsIndices;

};

[-3,-2,-1,0,1,2,3].twoSum();

Array.prototype.transpose = function () {
    const self = this
	const transposed = [];
	let i = 0;

	while (i < self.length) {
		let row = [];

		self.forEach( subarr => {
			row.push(subarr[i]);
		});

		transposed.push(row);
		i++;
	}

	console.log(transposed);
	return transposed;
};

[[1,2], [3,4]].transpose();