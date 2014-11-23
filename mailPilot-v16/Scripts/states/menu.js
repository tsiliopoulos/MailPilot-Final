/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
var states;
(function (states) {
    states.playButton;
    states.instructionsButton;
    var soundtrack;

    // Button Event Handlers
    function instructionsButtonClicked(event) {
        stage.removeChild(game);
        plane.destroy();
        soundtrack.stop();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.INSTRUCTIONS_STATE;
        changeState(currentState);
    }
    states.instructionsButtonClicked = instructionsButtonClicked;

    function playButtonClicked(event) {
        stage.removeChild(game);
        plane.destroy();
        soundtrack.stop();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    states.playButtonClicked = playButtonClicked;

    // State function
    function menuState() {
        ocean.update();
        plane.update();
    }
    states.menuState = menuState;

    // Body of Menu Scene
    function menu() {
        var gameNameLabel;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(game);
        plane = new objects.Plane(game);

        soundtrack = createjs.Sound.play('soundtrack', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 40, "mail pilot");

        //Adjust Game Title for Screen Size
        if (screenScale < 1) {
            gameNameLabel.fontSize(40);
        }

        game.addChild(gameNameLabel);

        // Display Instructions Button
        states.instructionsButton = new objects.Button(stage.canvas.width / 2, 230, "instructionsButton");
        game.addChild(states.instructionsButton);
        states.instructionsButton.addEventListener("click", instructionsButtonClicked);

        // Display Play Button
        states.playButton = new objects.Button(stage.canvas.width / 2, 330, "playButton");
        game.addChild(states.playButton);
        states.playButton.addEventListener("click", playButtonClicked);

        stage.addChild(game);
    }
    states.menu = menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map
