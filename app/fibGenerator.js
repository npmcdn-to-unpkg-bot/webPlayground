var count = 0;

function fibSeq(n) {
  if(n <= 2) {
    return 1;
  } else {
    return this.fibSeq(n - 1) + this.fibSeq(n - 2);
  }
}
function runFib() {
    postMessage(fibSeq(++count));
    setTimeout("runFib()",500);
}

runFib();
