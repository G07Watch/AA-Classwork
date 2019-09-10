
// Phase


Array.prototype.bubbleSort = function () 
{
    let bubbleArray = this.map(function(num){return num});
    let sorted = false;
    while (!sorted){
        sorted = true;
        
        for (let i=0; i<this.length-1; i++)
        {
            for(let j=i+1; j<this.length;j++)
            {
                if (bubbleArray[i]>bubbleArray[j])
                {
                    let temp = bubbleArray[i];
                    bubbleArray[i]= bubbleArray[j];
                    bubbleArray[j]=temp;
                    sorted = false;
                }
            }
        }
        
    }
    console.log(bubbleArray);
    console.log(this);
    return bubbleArray;
};


[43,34,7,9,2,34,65,8,22].bubbleSort();

String.prototype.substrings = function() 
{
	const strings = [];

	for (let i = 0; i < this.length; i++) 
	{
		for (let j = i + 1; j <= this.length; j++)  
		{
			strings.push(this.slice(i, j));
		}
	}

	console.log(strings);
	return strings;
};

"Hello".substrings();

