// Init var as zero.
var count = 0;

// Define fib sequence generator function.
function fibSeq(n) {
  if(n <= 2) {
    return 1;
  } else {
    return this.fibSeq(n - 1) + this.fibSeq(n - 2);
  }
}
// Run the fibS sequence using an incrementing value.
// But wait, if this is being called multiple times and each function has
// recursion.... How's it working?
// http://9gag.com/gag/anYZ9Eo/my-code-works-but-i-don-t-know-why
function runFib() {
    postMessage(fibSeq(++count));
    // setTimeout("runFib()",500);
}

runFib();
