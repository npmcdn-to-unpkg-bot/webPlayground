var webWorker;

function hireWorker() {
    if(typeof(Worker) !== "undefined") {
        if(typeof(webWorker) == "undefined") {
            webWorker = new Worker("fibGenerator.js");
        }
        webWorker.onmessage = function(event) {
            document.getElementById("result").innerHTML = event.data;
        };
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
    }
}

function killWorker() {
    webWorker.terminate();
    webWorker = undefined;
}
