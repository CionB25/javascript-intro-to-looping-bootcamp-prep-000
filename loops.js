function forLoop(array) {
for (let i = 0; i < 25; i++) {
  // how do we add to an array;
  array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
}
return array
}

function whileLoop(n) { // n is a number that's given to us by the test when the test calls your function
  // let countdown = 100;
  while (n > 0) {
    console.log(--n)
  }
  return 'done'
}


function doWhileLoop(array) {
 function maybeTrue(){
   return array.pop()
 }
 do {
    maybeTrue()
 } while (array.length > 0 && maybeTrue());
 return array
}
