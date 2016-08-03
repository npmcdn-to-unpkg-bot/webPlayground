// webWorker variable.
var webWorker;

// Create the web worker.
function hireWorker() {
    // If we actually have web workers.
    if(typeof(Worker) !== "undefined") {
        if(typeof(webWorker) == "undefined") {
            webWorker = new Worker("fibGenerator.js");
        }
        webWorker.onmessage = function(event) {
            document.getElementById("result").innerHTML = event.data;
        };
    } else {
        // So sorry, no worker for you.
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
    }
}

// Fire the web worker. (we don't like severance packages)
function killWorker() {
    webWorker.terminate();
    webWorker = undefined;
}



function bearType(type, time) {
  var bear = type;
  var roar = function () {
    setTimeout(function() {
      console.log("The " + bear + " bear says raw!");
    }, time);
  };
  return roar;
}


function closuresAreFun() {
  var bears = ["Griz", "Black", "Blue?", "Brown", "Pappa"];
  var i = bears.length;

  while(i--) {
    bearType(bears[i], (i+1)*1000)();
  }
}

closuresAreFun();
