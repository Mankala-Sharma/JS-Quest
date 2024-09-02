//Q1. Check if a number is odd or even in JavaScript

function isEvenOrOdd(num){
     if(num%2===0){
      console.log("Evene Number");
     }else{
      console.log("Odd Number");
     }
}

isEvenOrOdd(4591);
isEvenOrOdd(4500);

//Q2. Find the largest of two number
function findLargest(num1,num2){
   if(num1==num2){
      console.log("Both numbers are equal");
   } else if(num1>num2){
      console.log("Largest Number is- "+ num1 );

   }else{
      console.log("Largest Number is- "+ num2);
   }
}

findLargest(100,1009);
findLargest(100,100);
findLargest(1010,1009);

//Q3. Find the largest of three number.

function findLargest(n1,n2,n3){

   if (n1>n2 && n1>n3){
      console.log("Largest Number is: "+ n1);
   }else if(n2>n1 && n2>n3){
      console.log("Largest Number is: "+ n2);
   }else{
      console.log("Largest Number is: "+ n3);
   }

}

findLargest(100,20,800);
findLargest(100,20,8);
findLargest(100,200,8);

//Q4. Perform arithmetic operations on two numbers

function evalNumbers(number1,number2,operations){
   switch(true){
      case (operations=="add"):
         console.log(number1+number2);
         break;
      case (operations=="subtract"):
            console.log(number1-number2);
            break;

      case (operations=="multiply"):
         console.log(number1*number2);
         break;

      case (operations=="divide"):
         console.log(number1/number2);
         break;
      case (operations=="modulus"):
            console.log(number1%number2);
            break;
      
      default:
                  console.log("Invalid Input");
                  break;
   }

   
}

evalNumbers(15,10,"add");
evalNumbers(15,10,"subtract");
evalNumbers(15,10,"multiply");
evalNumbers(15,10,"divide");
evalNumbers(15,10,"modulus");
evalNumbers(15,10,"square");

// Q5.Find check if a year is leap year or not

function checkLeapYear(year){
   if(year%4==0 && year%100!=0){
      console.log(year +" is a leap year");
   }else if(year%400==0){
      console.log(year +" is a leap year");
   }else{
      console.log(year +" is not a leap year");
   }
}

checkLeapYear(2012);
checkLeapYear(1900);
checkLeapYear(2000);
checkLeapYear(2011);