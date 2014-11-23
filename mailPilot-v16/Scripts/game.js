/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/cloud.ts" />
/// <reference path="objects/island.ts" />
/// <reference path="objects/ocean.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="objects/coin.ts" />
/// <reference path="objects/explosion.ts" />
/// <reference path="objects/level.ts" />
/// <reference path="objects/lightning.ts" />
/// <reference path="objects/enemy.ts" />
/// <reference path="objects/bullet.ts" />
/// <reference path="objects/stats.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="managers/bulletmanager.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/level2.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/gameover.ts" />
/// <reference path="states/instructions.ts" />
// Mail Pilot Version 16 - FINAL VERSION FOR THIS SEMESTER
// game containers
var canvas;
var stage;
var game;

// game objects
var ocean;
var plane;
var island;
var coin;
var clouds = [];
var enemies = [];
var scoreboard;
var levelLabel;

// object managers
var collision;
var bulletManager;

var tryAgain;

// global game variables
var screenScale;
var currentState;
var currentStateFunction;
var gamePlaying = false;
var startButton;
var startScreen;
var mailPilotLabel;
var swirl;

// Preload function - Loads Assets and initializes game;
function preload() {
    managers.Assets.init();
    managers.Assets.loader.addEventListener("complete", init);

    canvas = document.getElementById('canvas');
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(30);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    optimizeForMobile();
    showStartScreen();
}

// Start Screen
function showStartScreen() {
    game = new createjs.Container();
    var screenFont = "100px Dock51";
    var introPlaneWidth = 447;
    var introPlaneHeight = 195;

    // Add Static Ocean Image
    var introOcean = new createjs.Bitmap("assets/images/introOcean.png");
    game.addChild(introOcean);

    // Add Swirl
    swirl = new createjs.Bitmap("assets/images/swirl.png");

    swirl.regX = 512;
    swirl.regY = 512;
    swirl.y = stage.canvas.height * 0.5;
    swirl.x = stage.canvas.width * 0.5;
    game.addChild(swirl);

    // Add Large Plane Image
    if (stage.canvas.width == constants.GAME_WIDTH) {
        var introPlane = new createjs.Bitmap("assets/images/introPlane640.png");
    } else {
        var introPlane = new createjs.Bitmap("assets/images/introPlane320.png");
        screenFont = "50px Dock51";
        introPlaneWidth = 224;
        introPlaneHeight = 98;
    }

    introPlane.regX = introPlaneWidth * 0.5;
    introPlane.regY = introPlaneHeight * 0.5;
    introPlane.x = stage.canvas.width * 0.5;
    introPlane.y = stage.canvas.height * 0.5;
    game.addChild(introPlane);

    // Add Mail Pilot Label
    var mailPilotLabel = new createjs.Text("Mail Pilot", screenFont, constants.LABEL_COLOUR);
    mailPilotLabel.regX = mailPilotLabel.getBounds().width * 0.5;
    mailPilotLabel.regY = mailPilotLabel.getBounds().height * 0.5;
    mailPilotLabel.x = stage.canvas.width * 0.5;
    mailPilotLabel.y = 120;
    game.addChild(mailPilotLabel);

    stage.addChild(game);
}

// init called after Assets have been loaded.
function init() {
    // Add Start Button after Loader is complete
    startButton = new objects.Button(stage.canvas.width * 0.5, 360, "startButton");
    game.addChild(startButton);

    currentState = constants.MENU_STATE;

    // Don't Start the game until startButton is pressed
    startButton.on("click", function (e) {
        gamePlaying = true;
        changeState(currentState);
    });
}

// Add touch support for mobile devices and initial Screen Size
function optimizeForMobile() {
    if (window.innerWidth < constants.GAME_WIDTH) {
        stage.canvas.width = 320;
    }
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }
    screenScale = stage.canvas.width / constants.GAME_WIDTH;

    stage.update();
}

// Game Loop
function gameLoop(event) {
    if (gamePlaying == true) {
        currentStateFunction();
    } else {
        swirl.rotation += 0.5;
    }

    stage.update();
}

function changeState(state) {
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            currentStateFunction = states.menuState;
            states.menu();
            break;

        case constants.PLAY_STATE:
            // instantiate play screen
            currentStateFunction = states.playState;
            states.play();
            break;

        case constants.LEVEL2_STATE:
            // instantiate play screen
            currentStateFunction = states.Level2State;
            states.Level2();
            break;

        case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;

            // instantiate game over screen
            states.gameOver();
            break;

        case constants.INSTRUCTIONS_STATE:
            currentStateFunction = states.instructionState;

            // instantiate game over screen
            states.Instructions();
            break;
    }
}
//# sourceMappingURL=game.js.map
