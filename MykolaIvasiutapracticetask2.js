let t11 = 2;
let t12 = 3;
let t13 = t11 + t12;
console.log('Sum of ' + t11 + ' and ' + t12 + ' is: ' + t13);

let t21 = 'Test_';
let t22 = ' in front of a given string';
let t23 = t21 + t22;
var t24 = t21.concat(t22);
console.log(t23);

console.log('Mykola Ivasiuta, age 34');

let t41 = 100
if (t41>100) {console.log(t41+' is bigger then 100');
    
} else {
    console.log(t41+' is NOT bigger then 100');
}

let t51=2
let t52=3
if (t51>t52) {console.log(t51+' is larger then '+t52);
    
} else {
    console.log(t51+' is NOT larger then '+t52);
}
let t61=40
let t62=20
if (t61>50 || t62>50) {console.log('One of the numbers is bigger then 50');
    
} else {if (t61+t62>50) {console.log('Sum of the numbers is bigger then 50');
    
} else {
    console.log('Niether of the numbers or their sum is bigger then 50');
}    
}

let t71=52
if (t71 % 3 == 0 || t71 % 7 == 0) 
  {
    console.log('given positive number is a multiple of 3 or a multiple of 7');
  } 
  else {
    console.log('given positive number is NOT a multiple of 3 or a multiple of 7');
  }