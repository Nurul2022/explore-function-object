  //*****/ Break in While loop **********************
  // যখন i- এর মান ৫ হবে তখন লুপ বন্ধ হয়ে যাবে। 
var i = 0;
while (i < 10) {
    console.log(i);
    if(i==5){    // i- এর মান ও শর্ত পরিবর্তন হতে পারে। 
        break;  // মান বলতে যে কোন সংখ্যা (0, 1, 2, 3, 4, 5, 6, 7, 8, 9) )বুঝায়।   
    }          // শর্ত বলতে (==, ===, <, <=, >, >=, ! etc) বুঝায়। 
    i++;
}
// Break in For loop  *****************
for (var i = 0; i <= 20; i++ ){
    console.log(i);
    if (i > 8){
        break;
    }
}
// Break in an Array ******************
var numbers = [54, 35, 21, 98, 90, 23, 101, 45, 67];
for (var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if (number > 90){
        break;
    }
    console.log(number);  // rs 54, 35, 21 (Vertical & Yellow color)
} 

// Continue (skip) ********************
var numbers = [54, 35, 21, 98, 90, 23, 101, 45, 67];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 90) {
        continue;
    }
    console.log(number); // rs 54, 35, 21, 90, 23, 45, 67 (Vertical & Yellow color)
}
/* var numbers = [54, 35, 21, 98, 90, 23, 101, 45, 67];
Summay: (number > 90) শর্ত অনুযায়ী,

Break বলতে, 89 পর্যন্ত গিয়ে থেমে যাবে, ভিতরে যাবে না। এই জন্য 54, 35, 21 নিয়ে থেমে গেছে, 
ভিতরে যায়নি এবং 90, 23, 45, 67 এগুলোকে নেই নি।

Continue বলতে, 90 পর্যন্ত মান নিবে, 90 এর বেশি হলে স্কিপ করবে কিন্ত Array ভিতরে যাবে. 90 পর্যন্ত যত মান পাবে সবাইকে নিবে। 
54, 35, 21, 90, 23, 45, 67 এই জন্য সব গুলোকে নিয়েছে।
*/ 