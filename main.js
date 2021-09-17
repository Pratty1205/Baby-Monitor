detection_status = "";
coco_model = "";

function setup() {
    canvas = createCanvas(600, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    coco_model = ml5.detect("cocossd", model_loaded);
    document.getElementById("status").innerHTML = "Detecting...";
}

function model_loaded() {
    console.log("Model is not loaded!!!!");
    detection_status = true;
}

function preload() {
    loadSound();
}

function draw() {
    image(video, 0, 0, 600, 450);
    coco_model.detect(video, getResult);
}

function getResult(result, error) {
    if (result) {
        console.log(result);
        document.getElementById("find_baby").innerHTML = "Baby Detected";
        document.getElementById("status").innerHTML = "Detected";
    } else {
        console.error(error);
        document.getElementById("find_baby").innerHTML = "Baby Not Detected";
    }
}