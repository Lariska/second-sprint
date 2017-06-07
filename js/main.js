
function initCanvas(){
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    var imageObj = new Image();
    context.clearRect ( 0 , 0 ,canvas.height , canvas.width );
    imageObj.onload = function(){
        context.globalCompositeOperation='destination-over';
        context.drawImage(imageObj, 0, 0);
        context.font = "30px Calibri";
        context.textAlign = "center";
    //  context.fillText("My TEXT!", canvas.width/2, 40);
    };
    imageObj.src = "assets/img/busy.jpeg";
    return [canvas, context];
}

window.onload = function(){
    initCanvas();
    document.querySelector('.myTextFirst').addEventListener('keyup', function(event){
        let [canvas, context] = initCanvas();
        context.fillText(event.target.value, canvas.width/2, 40);
        // context.fillText(event.target.value, canvas.width/2, canvas.height-140);
    },false);
    document.querySelector('.myTextSecond').addEventListener('keyup', function(event){
        let [canvas, context] = initCanvas();
        // context.fillText(event.target.value, canvas.width/2, 40);
        context.fillText(event.target.value, canvas.width/2, canvas.height-140);
    },false);


};
