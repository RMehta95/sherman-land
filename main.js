// DOCTYPE JAVASCRIPT

//Initial variables
var canvas; // Linked to canvas on index.html page
var stage; // EaselJS variable that holds all objects; must add "children".
var queue; // Loading queue

var main; // Main background on loading screen
var startB; // Start button in main menu
var credits; // Text

var titleView; // Loading page

var selectPlayersView; // Screen to select number of players
var playbutton1, playbutton2, playbutton3, playbutton4;
var selectPlayers; // Container

var bg; // Background graphic
var board; // Container
var square; // Color shape, rounded square
var buttonListener; // Button listener

// Array of all spaces on track
var pointArray = [{x:70, y:500},
    {x:120, y:500},
    {x:150, y:500},
    {x:178, y:488},
    {x:193, y:465},
    {x:205, y:440},
    {x:228, y:418},
    {x:255, y:408},
    {x:286, y:405},
    {x:317, y:410},
    {x:345, y:422},
    {x:372, y:438},
    {x:393, y:460},
    {x:413, y:482},
    {x:438, y:498},
    {x:467, y:508},
    {x:498, y:510},
    {x:528, y:508},
    {x:558, y:505},
    {x:585, y:488},
    {x:593, y:460},
    {x:581, y:440},
    {x:552, y:430},
    {x:522, y:428},
    {x:490, y:430},
    {x:458, y:430},
    {x:427, y:425},
    {x:400, y:415},
    {x:380, y:390},
    {x:375, y:362},
    {x:398, y:338},
    {x:430, y:340},
    {x:461, y:350},
    {x:488, y:364},
    {x:515, y:380},
    {x:542, y:390},
    {x:572, y:400},
    {x:603, y:394},
    {x:630, y:380},
    {x:645, y:355},
    {x:647, y:325},
    {x:635, y:300},
    {x:608, y:282},
    {x:578, y:284},
    {x:551, y:296},
    {x:520, y:305},
    {x:490, y:303},
    {x:460, y:289},
    {x:434, y:273},
    {x:408, y:256},
    {x:378, y:243},
    {x:350, y:238},
    {x:318, y:242},
    {x:288, y:252},
    {x:262, y:268},
    {x:240, y:290},
    {x:220, y:318},
    {x:204, y:341},
    {x:185, y:362},
    {x:160, y:380},
    {x:131, y:388},
    {x:102, y:388},
    {x:73, y:382},
    {x:45, y:374},
    {x:22, y:355},
    {x:10, y:327},
    {x:8, y:297},
    {x:24, y:272},
    {x:50, y:264},
    {x:80, y:268},
    {x:106, y:277},
    {x:135, y:284},
    {x:166, y:288},
    {x:192, y:276},
    {x:198, y:246},
    {x:179, y:223},
    {x:150, y:208},
    {x:130, y:184},
    {x:132, y:153},
    {x:155, y:134},
    {x:184, y:125},
    {x:214, y:128},
    {x:244, y:135},
    {x:271, y:150},
    {x:300, y:164},
    {x:328, y:180},
    {x:356, y:193},
    {x:384, y:208},
    {x:415, y:215},
    {x:445, y:223},
    {x:476, y:228},
    {x:507, y:232},
    {x:540, y:234},
    {x:572, y:230},
    {x:601, y:224},
    {x:630, y:210},
    {x:648, y:189},
    {x:654, y:158},
    {x:646, y:130},
    {x:620, y:110},
    {x:596, y:93},
    {x:584, y:62},
    {x:572, y:36},
    {x:543, y:23},
    {x:513, y:30},
    {x:490, y:54},
    {x:476, y:82},
    {x:462, y:110},
    {x:446, y:136},
    {x:420, y:152},
    {x:387, y:157},
    {x:355, y:148},
    {x:330, y:132},
    {x:305, y:115},
    {x:278, y:96},
    {x:249, y:87},
    {x:218, y:85},
    {x:187, y:88},
    {x:158, y:93},
    {x:128, y:98},
    {x:98, y:100},
    {x:70, y:92},
    {x:47, y:75},
    {x:32, y:50},
    {x:28, y:20},
    {x:38, y:-9},
    {x:60, y:-30},
    {x:90, y:-40},
    {x:118, y:-38},
    {x:148, y:-30},
    {x:172, y:-17},
    {x:196, y:2},
    {x:222, y:18},
    {x:248, y:32},
    {x:276, y:42},
    {x:310, y:48}]; 
// Listing of pieces by color
var orange = [pointArray[1],pointArray[7],pointArray[14],pointArray[21],pointArray[27],pointArray[33],pointArray[39],pointArray[46],pointArray[52],pointArray[58],pointArray[64],pointArray[71],pointArray[77],pointArray[83],pointArray[89],pointArray[96],pointArray[103],pointArray[109],pointArray[115],pointArray[121],pointArray[127],pointArray[133]];
var purple = [pointArray[2],pointArray[8],pointArray[15],pointArray[22],pointArray[28],pointArray[34],pointArray[49],pointArray[47],pointArray[53],pointArray[59],pointArray[65],pointArray[72],pointArray[78],pointArray[84],pointArray[90],pointArray[97],pointArray[104],pointArray[110],pointArray[116],pointArray[122],pointArray[128]];
var pink = [pointArray[9],pointArray[20],pointArray[42],pointArray[69],pointArray[92],pointArray[102]];
var yellow = [pointArray[3],pointArray[10],pointArray[16],pointArray[23],pointArray[29],pointArray[35],pointArray[41],pointArray[48],pointArray[54],pointArray[60],pointArray[66],pointArray[73],pointArray[79],pointArray[85],pointArray[91],pointArray[98],pointArray[105],pointArray[111],pointArray[117],pointArray[123],pointArray[129]];
var blue = [pointArray[4],pointArray[11],pointArray[17],pointArray[24],pointArray[30],pointArray[36],pointArray[43],pointArray[49],pointArray[55],pointArray[61],pointArray[67],pointArray[74],pointArray[80],pointArray[86],pointArray[93],pointArray[99],pointArray[106],pointArray[113],pointArray[119],pointArray[124],pointArray[130]];
var gold = [pointArray[5],pointArray[12],pointArray[18],pointArray[25],pointArray[31],pointArray[37],pointArray[44],pointArray[50],pointArray[56],pointArray[62],pointArray[68],pointArray[75],pointArray[81],pointArray[87],pointArray[94],pointArray[100],pointArray[107],pointArray[114],pointArray[120],pointArray[125],pointArray[131]];
var turquoise = [pointArray[6],pointArray[13],pointArray[19],pointArray[26],pointArray[32],pointArray[38],pointArray[45],pointArray[51],pointArray[57],pointArray[63],pointArray[70],pointArray[76],pointArray[82],pointArray[88],pointArray[95],pointArray[101],pointArray[108],pointArray[115],pointArray[121],pointArray[126],pointArray[132]];

// Game pieces
var player1, player2, player3, player4;

// Score keeping
var drink;
var finish;

// Drinks
var beer;
var shot;
var wine;
var ice;

var colorArray = ["#FE7B62","#CB2DD3","#FBB4ED","#F1FD66","#004CE8","#FFD068", "#02A97E"];
var displayColor;
var counter = 0;
// var i=0, j=0, m=0, n=0;
var currentPos, dest;
var match;
var timer = false;


function init() {
    canvas = document.getElementById("canvas");

    stage = new createjs.Stage("canvas");
    queue = new createjs.LoadQueue(false);
	//false allows images to load locally
    createjs.Touch.enable(stage);

    queue.installPlugin(createjs.Sound);
    createjs.MotionGuidePlugin.install();
    queue.on("complete", handleComplete, this);
    queue.loadManifest([
    			{id:"main", src:"titleview2.jpg"},
    			{id:"startB", src:"startbutton.png"},
                {id:"selectPlayersView", src:"selectplayersview.jpg"},
                {id:"playbutton1", src:"playbutton1.png"},
                {id:"playbutton2", src:"playbutton2.png"},
                {id:"playbutton3", src:"playbutton3.png"},
                {id:"playbutton4", src:"playbutton4.png"},
                {id:"bgImg", src:"shermanlandboard.jpg"},
                {id:"player1", src:"willie.png"},
    			{id:"pushbutton", src:"pushbutton.png"}
    		]);

}

function handleComplete(event) {
    main = new createjs.Bitmap(queue.getResult("main"));
    startB = new createjs.Bitmap(queue.getResult("startB"));
    startB.y = 100;
    startB.x = 100;
    startB.addEventListener("click",loadBoard);
    credits = new createjs.Text("©2014 Sherman Ave. Created by Rohan Mehta.", "14px Arial", "#fff");
    credits.x = 650;
    credits.y = 550;

    titleView = new createjs.Container();
    titleView.addChild(main, startB, credits);
	
    stage.addChild(titleView);
    stage.update();
}

// function requestPlayers(event) {
//     selectPlayersView = new createjs.Bitmap(queue.getResult("selectPlayersView"));
//     playbutton1 = new createjs.Bitmap(queue.getResult("playbutton1"));
//     playbutton2 = new createjs.Bitmap(queue.getResult("playbutton2"));
//     playbutton3 = new createjs.Bitmap(queue.getResult("playbutton3"));
//     playbutton4 = new createjs.Bitmap(queue.getResult("playbutton4"));
    
//     selectPlayers = new createjs.Container();
//     selectPlayers.addChild(selectPlayersView, playbutton1, playbutton2, playbutton3, playbutton4);

//     stage.removeChild(titleView);
//     stage.addChild(selectPlayers);
//     stage.update();

//     playbutton1.addEventListener("click", loadBoard);
//     playbutton2.addEventListener("click", loadBoard);
//     playbutton3.addEventListener("click", loadBoard);
//     playbutton4.addEventListener("click", loadBoard);
// }

function loadBoard() {
    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;

    bg = new createjs.Bitmap(queue.getResult("bgImg"));
    bg.scaleX = 0.5;
    bg.scaleY = 0.5;

    player1 = new createjs.Bitmap(queue.getResult("player1"));
    player1.scaleX = 0.25;
    player1.scaleY = 0.25;
    player1.y = 500;
    player1.shadow = new createjs.Shadow("#000000", 5, 5, 5);

    pushbutton = new createjs.Bitmap(queue.getResult("pushbutton"));
    pushbutton.scaleX = 0.4;
    pushbutton.scaleY = 0.4;
    pushbutton.x = 840;
    pushbutton.y = 300;
    pushbutton.on("click",pushButton);

    square = new createjs.Shape();
    square.graphics.beginFill("#000").drawRoundRect(850, 50, 100, 100, 20);

    board = new createjs.Container();
    board.addChild(bg, player1, pushbutton, square);
    
    stage.removeAllChildren(titleView);
    stage.addChild(board);

    createjs.Tween.get(player1)
        .wait(500)
        .to(pointArray[0], 1000, createjs.Ease.elasticIn);
}

function handleTick() {
    stage.update();
}

function pushButton() {
    if (timer === false) {
        animate = setInterval(animateColor, 200);
        timer = true;
    }
}

function animateColor() {
    square.graphics.clear();
    displayColor = colorArray[Math.floor(Math.random()*colorArray.length)];
    square.graphics.beginFill(displayColor).drawRoundRect(850, 50, 100, 100, 20);
    counter++;
    if (counter===15) {
        clearInterval(animate);
        counter=0;
        translateColor(displayColor);
        timer = false;
        return;
    }
}

function translateColor() {
    switch (displayColor) {
        case "#FE7B62":
            findPoint(orange);
            break;
        case "#CB2DD3":
            findPoint(purple);
            break;
        case "#FBB4ED":
            findPoint(pink);
            break;
        case "#F1FD66":
            findPoint(yellow);
            break;
        case "#004CE8":
            findPoint(blue);
            break;
        case "#FFD068":
            findPoint(gold);
            break;
        case "#02A97E":
            findPoint(turquoise);
            break;
        default:
            console.log("Not a real color.");
    }
}

function findPoint(color) {

for (var i=0; i < pointArray.length; i++) {
    if (player1.x === pointArray[i].x && player1.y === pointArray[i].y) {
        currentPos = i;
        break;
    }
}
console.log("currentPos is " + currentPos);
var m = currentPos + 1;

for(m; m<pointArray.length; m++) {
    for(var n=0; n<color.length; n++){
        if (color[n].x === pointArray[m].x && color[n].y === pointArray[m].y) {
            console.log("color[n].x is " + color[n].x);
            console.log("color[n].y is " + color[n].y);
            console.log("pointArray[m].x is " + pointArray[m].x);
            console.log("pointArray[m].y is " + pointArray[m].y);
            dest = n;
            break;   
        }
    break;
    }
}

console.log("n is " + n);

createjs.Tween.get(player1)
    .wait(500)
    .to({x:color[dest].x,y:color[dest].y}, 1000, createjs.Ease.quadIn);

return;

}


