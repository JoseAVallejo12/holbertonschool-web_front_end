function countPrimeNumbers() {
  let count = 0;
  let index = 2;
  setTimeout(() => {
    while (index <= 200) {
      if (index % 2 != 0) {
        count++;
      }
      index++;
    }
  }, 0);
  return count;
}

const t0 = performance.now();
for (let index = 0; index < 100; index++) {
  countPrimeNumbers();
}
const t1 = performance.now();
console.log(
  `Execution time of calculating prime numbers 100 times was ${t1 - t0} milliseconds.`
);
