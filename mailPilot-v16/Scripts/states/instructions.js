/// <reference path="../constants.ts" />
var states;
(function (states) {
    // Scene Variables
    states.backButton;
    var instructionsFont = constants.LABEL_FONT;
    var lineSpace = 45;
    var buttonPosition = 0.8;

    // Back Button Event Handler
    function backButtonClicked(event) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.MENU_STATE;
        changeState(currentState);
    }
    states.backButtonClicked = backButtonClicked;

    // Instruction State
    function instructionState() {
        ocean.update();
    }
    states.instructionState = instructionState;

    // Instructions Scene
    function Instructions() {
        var gameInstructions = [];
        var instructionsArray = [];

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(game);

        instructionsArray = [
            "Game Instructions",
            "You are a Mail Pilot, delivering mail",
            "to the islands. Fly over an island and",
            "pickup your pay but be careful not to fly",
            "too close to the clouds. Your plane",
            "will fall apart if it is hit by lighting",
            "too many times. Steer with the mouse",
            "or by touching the screen.",
            "Good Luck!"
        ];

        // Adjust Instructions for smaller screen size
        if (screenScale < 1) {
            instructionsFont = "14px Dock51";
            lineSpace = 30;
            buttonPosition = 0.5;
        }

        for (var line = 0; line < instructionsArray.length; line++) {
            gameInstructions[line] = new createjs.Text(instructionsArray[line], instructionsFont, constants.LABEL_COLOUR);
            gameInstructions[line].x = stage.canvas.width * 0.05;
            gameInstructions[line].y = 20 + (lineSpace * line);

            game.addChild(gameInstructions[line]);
        }

        // Display Back Button
        states.backButton = new objects.Button(stage.canvas.width * buttonPosition, 430, "backbutton");
        game.addChild(states.backButton);
        states.backButton.addEventListener("click", backButtonClicked);

        // Show Cursor
        stage.cursor = "default";

        // Add Scene to Game Container
        stage.addChild(game);
    }
    states.Instructions = Instructions;
})(states || (states = {}));
//# sourceMappingURL=instructions.js.map
