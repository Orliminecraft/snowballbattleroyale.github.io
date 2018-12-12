var myGamePiece;

function startGame() {
    myGamePiece = new component(30, 30, "red", 10, 120);
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = window.innerWidth - 10;
        this.canvas.height = window.innerHeight - 20;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('mousedown', function (e) {
            myGameArea.x = e.pageX-20;
            myGameArea.y = e.pageY-20;
        })
    }, 
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function updateGameArea() {
    myGameArea.clear();
    if (myGameArea.x && myGameArea.y) {
        for (var i = 0; i < myGameArea.x; i++)
        {
            myGamePiece.x++;
        }
        for (var i = 0; i < myGameArea.y; i++)
        {
            myGamePiece.y++;
        }
        //myGamePiece.x = myGameArea.x;
        //myGamePiece.y = myGameArea.y;        
    }
    myGamePiece.update();
}
