//Practical task for 005 lecture JavaScript - Language Basics. Part 2.
//1.Write a JavaScript function to check if given string includes given symbol

let str11 = "Write a JavaScript function to check if given string includes given symbol";
let givensymbol11 = "W"
if (str11.indexOf(givensymbol11) != -1) {
  console.log(givensymbol11 + ' is present in a string')
} else {
  console.log(givensymbol11 + ' is NOT present in a string')
}
//2. Write a JavaScript function to check whether a string is blank or not (string with spaces should be also blank).

let str21 = "string";
let str22 = str21.replace(' ','');
if (str22.length > 0 && str21.indexOf(' ') == -1) {
  console.log('String is not blank')
} else {console.log('String is blank')
  
}

//3. Write a JavaScript function to convert a string in abbreviated form. console.log(abbrev (“Name Surname")) – should be “N.S.” (should convert lower case names to upper)

//let NameSurname
//let abbrev

let abbrev = function (string) {
    let abbr = string.split(' '),
      In = abbr[0].substring(0, 1).toUpperCase()+'.';
  
  if (abbr.length > 1) {
      In += abbr[abbr.length - 1].substring(0, 1).toUpperCase()+'.';
  }
  return In;
};

console.log(abbrev('FirstName MiddleName LastName'));

//4. Write a JavaScript function that accept two integers and display the larger.

let LargerInteger = function (a41,a42) {
  if(a41>=0 && a42>=0)
  {
      if(a41!=a42)
      {
          console.log(Math.max(a41,a42) +' is larger number');
      }
      else
      {
        console.log('Numbers are equal, can not display larger')
      }
  } else {
    console.log("Please use integers, not integers are not accepted");
  }
}

LargerInteger(12,12);

//5. Write a JavaScript function with conditional statement to sort three numbers

let x51= 21;
let y51= -21;
let z51= 5;
if (x51>=y51 && x51>=z51)
{
        if (y51>=z51)
        {
            console.log('From bigger to smaller: ' +x51 + ", " + y51 + ", " +z51);
        }
        else
        {
            console.log('From bigger to smaller: ' +x51 + ", " + z51 + ", " +y51);
        }
}
else if (y51>=x51 && y51 >=z51)
{
        if (x51>=z51)
        {
             console.log('From bigger to smaller: ' +y51 + ", " + x51 + ", " +z51);
        }
        else
        {
             console.log('From bigger to smaller: ' +y51 + ", " + z51 + ", " +x51);
        }
}
else if (z51>=x51 && z51>=y51)
{
        if (x51>=y51)
        {
            console.log('From bigger to smaller: ' +z51 + ", " + x51 + ", " +y51);
        }
        else
        {
            console.log('From bigger to smaller: ' +z51 + ", " + y51 + ", " +x51);
        }
}        
if (x51==z51) {console.log('by the way first and last given numbers are equal and share same rank');
  
} else { 
    if (x51==y51) {
    console.log('by the way first and second given numbers are equal and share same rank')
    } 
  else { 
      if (y51==z51) {
      console.log('by the way second and last given numbers are equal and share same rank')
      }
  
    }
  
}
