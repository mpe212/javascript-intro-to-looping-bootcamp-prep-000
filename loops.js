function forLoop(array) {
  for(let i=0; i<25; i++){
    if(i === 1){
<<<<<<< HEAD
      array.push("I am 1 strange loop");
    } else {
        array.push("I am ${i} strange loops");
=======
      array[i] = "I am 1 strange loop";
      // console.log("i is:" + i)
      console.log("array[i] is: " + array[i]);
      
    } else {
      array[i] = "I am " + i + " strange loops";
      // console.log("i is:" + i)
      console.log("array[i] is: " + array[i]);
>>>>>>> baf147f8c55e0a6caf9e084de230f96f094ceb3e
    }
  }
  return array;
}

<<<<<<< HEAD
function whileLoop(n){
  while(n > 0){
    console.log("number is equal to :" + n);
    n--;
  }
  return 'done';
=======
var a = [];
forLoop(a);

function whileLoop(n){
  while(n >= 0){
    console.log("number is equal to :" + n);
    n--;
  }
  return console.log('done');
>>>>>>> baf147f8c55e0a6caf9e084de230f96f094ceb3e
}

whileLoop(5);

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do {
    array.length = array.length - 1;
    console.log("array length is: " + array.length);
  } while (array.length > 0 && maybeTrue());
return array; 
}

var b = ["one", "two", "three", "four", "five", "six", "seven"];

doWhileLoop(b);