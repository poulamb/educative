import "./styles.css";
import findMaxSlidingWindow from "./jsCode/slidingWindow";
import findMaxSlidingWindow2 from "./jsCode/slidingWindow2";
document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
var test = [1, 2, 3, 4, 3, 2, 1, 2, 5];
findMaxSlidingWindow2(test, 4);

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array = " + array);
console.log("Max = " + findMaxSlidingWindow(array, 3));
console.log("Max = " + findMaxSlidingWindow2(array, 3));

let array1 = [10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67];
console.log("Array = " + array1);
console.log("Max = " + findMaxSlidingWindow(array1, 3));
console.log("Max = " + findMaxSlidingWindow2(array1, 3));
