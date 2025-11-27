function findKthPositive(arr, k) {
  let missingCount = 0;
  let current = 1;

  for (let num of arr) {
    while (current < num) {
      missingCount++;
      if (missingCount === k) return current;
      current++;
    }
    current = num + 1;
  }

  return current + (k - missingCount - 1);
}
console.log(findKthPositive([2,3,4,7,11],5));
