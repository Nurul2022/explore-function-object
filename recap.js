// 01. variable 
var favoriteBook = '4 hour work week';

// 02. array
var bookList = ['positioning', 'hooked', 'start with why', 'shoe doh'];
var shoeDotIndex = bookList.indexOf('shoe dog');
bookList[1] = 'Story Brand';

bookList.push('Small Giants');
bookList.pop();
console.log(bookList);

// 03. conditionals 
if (bookList[1] == 'hooked') {
  console.log('I am hooked');
}
else {
  console.log('I am not hooked');
}

// 04. Loop
// while loop 
var i = 0;  // loop variable
while (i < 15) {
  console.log(i);
  console.log('looping looping looping');
  i++;
}

// for loop 
for (var i = 0; i < 15; i++) {
  console.log(i);
}