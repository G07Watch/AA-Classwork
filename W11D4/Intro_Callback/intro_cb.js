const readline = require('readline');

class Clock {
    constructor() {
        // 1. Create a Date object.
        let date = new Date();

        // 2. Store the hours, minutes, and seconds.

        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
        

        // 3. Call printTime.
        this.printTime();


        // 4. Schedule the tick at 1 second intervals.
        setInterval(this._tick.bind(this),1000);


    }

    printTime() {
        // Format the time in HH:MM:SS
            let time = `${this.hours}:${this.minutes}:${this.seconds}`

        // Use console.log to print it.
        console.log(time);
    }

    _tick() {
        // 1. Increment the time by one second.
        if (this.seconds === 59){
            this.minutes += 1;
            this.seconds = 0;
        }   

        if (this.minutes === 60){
            this.hours += 1;
            this.minutes = 0;
        }

        if (this.hours === 24){
            this.hours = 0;
        }

        this.seconds += 1;
        // 2. Call printTime.
        this.printTime();
    }
}

// const clock = new Clock();

const reader = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
        reader.question("Please input a number:",(response) => {
            sum += parseInt(response);
            console.log(sum);
            // console.log(this.keys[0]);
            addNumbers(sum, numsLeft - 1, completionCallback);
        })
    } else if (numsLeft === 0) {
        completionCallback(sum);
        reader.close();
    }
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

function askIfGreaterThan (el1, el2, callback){
    reader.question(`Is ${el1} greater than ${el2}? `, (response) => {
        if ( response === 'yes'){
            callback(true);
        }
        else if ( response === 'no'){
            callback(false);
        }
    }) 
}

// askIfGreaterThan(1, 2, response => console.log(response))

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){

    if ( i < arr.length-1 ){

        askIfGreaterThan(arr[i],arr[i+1],(isGreaterThan)=>{
            if (isGreaterThan===true){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                madeAnySwaps = true;

            }
            innerBubbleSortLoop(arr,i+1, madeAnySwaps, outerBubbleSortLoop);
        })
    } else if (i === arr.length-1){
        outerBubbleSortLoop(madeAnySwaps);
    }

}

// innerBubbleSortLoop( [1,2], 0, false, madeAnySwaps=> console.log('Arrived at OuterBubble') );


function absurdBubbleSort(arr, sortCCB){
    function outerBubbleSortLoop(madeAnySwaps) {
        if (madeAnySwaps === true) {
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
        } else {
            sortCCB(arr);
        }
    }
    outerBubbleSortLoop(true);
}

// absurdBubbleSort([3, 2, 1], function (arr) {
//     console.log("Sorted array: " + JSON.stringify(arr));
//     reader.close();
// });

Function.prototype.myBind = function(context){
    // console.log(context, '1');
    // let self = context
    // console.log(self, '2');
    return () => {
        this.apply(context);
        // console.log(context, '3'); 
    }
    
};


// setInterval(this._tick.bind(this), 1000)
// //           clock           clock    
// this._tick.myBind(this)


class Lamp {
    constructor() {
        this.name = "a lamp";
    }
}

const turnOn = function () {
    console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"