//006 - Practical Tasks Assignment

//1. Write a JavaScript function to get the last element of anarray

lastelement = function (arr1) {
    return arr1.slice(arr1.length-1);
}
console.log(lastelement([1,2,3,4,5,'last element']));


//2. Write a simple JavaScript program to join all elements of the following array into a string
array2string = function (arr2, s) {
    return arr2.join(s);
}
console.log(array2string([1,,' ',2,3,'T'], ));
//without using separator or function:
//console.log(([1,,' ',2,3,'F']).join());
//or
//console.log([1,,' ',2,3,'R'].toString());

//3. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays and save them to third array

//for case where arrays have different length and for smaller arrays that lacks elements missing elements are considered equal 0
arr31 = [1,0,2,3,4,5,6,7,8];
arr32 = [1,0,0,22,99,-11,-6,0,0];
arr33 = [];

for (let i30 = 0; i30 < arr31.length; i30++) {
    arr33.push(arr31[i30]+arr32[i30]);
}

console.log(arr33);


//4. Write a JavaScript program to calculate the area and perimeter of a rectangle. Rectangle should be an object with properties width and height and methods getArea() and getPerimeter();
let Rectangle = {
    width:20,
    height:10,
    getArea: function () {
        return this.width*this.height;
    },
    getPerimeter: function () {
        return this.width*2+this.height*2;
    }
    };
console.log('Area of rectangle object with ' + Rectangle.width + ' and height ' + Rectangle.height + ' = ' + Rectangle.getArea());
console.log('Perimeter of rectangle object with ' + Rectangle.width + ' and height ' + Rectangle.height + ' = ' + Rectangle.getPerimeter());