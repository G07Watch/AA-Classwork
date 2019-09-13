function sumOne() {
    let array = Array.from(arguments);
    let sum = 0;
    array.forEach((ele) => {sum += parseInt(ele)})
    return sum
}

function sumTwo(...args) {
    let sum = 0;
    args.forEach((ele) => { sum += parseInt(ele) })
    console.log(this);
    return sum
}

// console.log(sumOne(1, 2, 3, 4, 5));
// console.log(sumTwo(1, 2, 3, 4, 5));


Function.prototype.myBind = function (ctx) {
    const argArray = Array.from(arguments);
    argArray.shift();
    let that = this; 
    const x = function () { 
        if (arguments) {
            let callArgsFixed = Array.from(arguments)
            that.apply(ctx, argArray.concat(callArgsFixed));
        } else {
            that.apply(ctx, argArray);
        }

    };
    return x;
}

// markov.says.myBind(pavlov)("meow", "a tree");


// Function.prototype.myBind = function (ctx, ...bindArgs) {
//     return (...callArgs) => {
//         return this.apply(ctx, bindArgs.concat(callArgs));
//     };
// };


class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true


// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true


// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// true

curriedSum = function(targetLength) {
    let nums = [];
    
    let _curriedSum = function(num) {
        nums.push(num);     

        if (nums.length === targetLength) {
            const numSum = nums => nums.reduce((a, b) => a + b, 0);
            return numSum(nums)

        } else {
            return _curriedSum;
        };
    };
    
    return _curriedSum;
}

// console.log(curriedSum(5)(1)(2)(3)(20)(100));


Function.prototype.curry = function (numArgs) {
    let args = [];
    let that = this;

    let _curriedFunc = function (arg) {
        args.push(arg);

        if (args.length === numArgs) {
            
            return that.apply(null, args);
        } else {
            return _curriedFunc;
        };
    };

    return _curriedFunc;
}


let z = sumTwo.curry(5);
z(1);
z(5);
z(8);
z(3);
console.log(z(60));

// [1, 2, 3].sum(); // this = [1,2,3]
// sum.apply([1, 2, 3])
// function.apply(context, [args]);
// function.call(context, arg1, arg2, etc.);