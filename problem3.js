var number = 600851475143;
var i = 2;

while (number > i) {
  if (number % i === 0) {
    number /= i;
  }
  i++;
}

console.log(i)
