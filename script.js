function alwaysHungry(arr) {
  // your code here
  var wordTracker = 0;
  for (var idx in arr) {
    if (arr[idx] == "food") {
      console.log("yummy");
      wordTracker += 1;
    }
  }
  if (wordTracker == 0) {
    console.log("I'm hungry");
  }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);

function highPass(arr, cutoff) {
  var filteredArr = [];
  for (var idx in arr) {
    if (arr[idx] > cutoff) {
      filteredArr.push(arr[idx]);
    }
  }
  return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]
function betterThanAverage(arr) {
  var sum = 0;
  // calculate the average
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  var avg = sum / arr.length;
  var count = 0;
  for (var i in arr) {
    if (arr[i] > avg) {
      count++;
    }
  }
  // count how many values are greated than the average
  return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
function reverse(arr) {
  var leftptr = 0;
  var rightptr = arr.length - 1;
  while (leftptr < rightptr) {
    var temp = arr[leftptr];
    arr[leftptr] = arr[rightptr];
    arr[rightptr] = temp;
    leftptr++;
    rightptr--;
  }
  return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
function fibonacciArray(n) {
  // the [0, 1] are the starting values of the array to calculate the rest from
  var fibArr = [0, 1];
  // your code here
  for (var i = 1; i < n - 1; i++) {
    fibArr.push(fibArr[i - 1] + fibArr[i]);
  }
  return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
