var sum = 0;
var oldInt = 1;
var newInt = 1;
var nextInt = 0;

while(nextInt < 4000000) {
  nextInt = oldInt + newInt;
  oldInt = newInt;
  newInt = nextInt;
  if(nextInt % 2 === 0) {
    sum += nextInt;
  }
}
console.log(sum)
