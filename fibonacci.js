function fibs(n) {
  let arr = [0];
  if (n == 0) return arr;

  for (let i = 1; i < n; i++) {
    if (i == 1) arr.push(1);
    else arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}

function fibsRec(n) {
  if (n == 1) return [0];
  if (n == 2) return [0, 1];
  let arr = fibsRec(n - 1);
  arr.push(arr.at(-1) + arr.at(-2));
  return arr;
}

console.log("fibunacci", fibs(8));
console.log("fibunacci recursive", fibsRec(4));
