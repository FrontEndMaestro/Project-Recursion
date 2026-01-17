function merge(left, right) {
  let length = left.length > right.length ? left.length : right.length;
  let merged = [];
  for (i = 0; i <= length; i++) {
    if (left[0] > right[0]) {
      merged.push(right[0]);
      right.shift();
    }
    if (right[0] > left[0]) {
      merged.push(left[0]);
      left.shift();
    }
    if (right[0] == left[0]) {
      merged.push(right[0]);
      left.shift();
      right.shift();
    }
    if (left.length === 0) {
      right.forEach((element) => merged.push(element));
      break;
    }
    if (right.length === 0) {
      left.forEach((element) => merged.push(element));
      break;
    }
  }
  console.log("result is now", merged);
  return merged;
}
function mergeSort(arr, index = 0) {
  if (arr.length == 0 || arr.length == 1) return arr;
  let left = mergeSort(arr.slice(0, Math.round(arr.length / 2)));
  let right = mergeSort(arr.slice(Math.round(arr.length / 2), arr.length));
  let result = [];
  console.log("left", left, "right", right);
  result = merge(left, right);
  console.log("result is", result);
  return result;
}
