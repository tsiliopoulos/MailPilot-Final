/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
module states {
    export var playButton: objects.Button;
    export var instructionsButton: objects.Button;
    var soundtrack: createjs.SoundInstance;

    // Button Event Handlers
    export function instructionsButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        plane.destroy();
        soundtrack.stop();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.INSTRUCTIONS_STATE;
        changeState(currentState);
    }

    export function playButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        plane.destroy();
        soundtrack.stop();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }

    // State function
    export function menuState() {
        ocean.update();
        plane.update();
    }

    // Body of Menu Scene
    export function menu() {
        
        var gameNameLabel: objects.Label;

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
        instructionsButton = new objects.Button(stage.canvas.width / 2, 230, "instructionsButton");
        game.addChild(instructionsButton);
        instructionsButton.addEventListener("click", instructionsButtonClicked);

        // Display Play Button
        playButton = new objects.Button(stage.canvas.width / 2, 330, "playButton");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        stage.addChild(game);
    }
} 