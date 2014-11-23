/// <reference path="../objects/button.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/stats.ts" />
/// <reference path="../managers/collision.ts" />
var states;
(function (states) {
    function playState() {
        ocean.update();
        island.update();
        coin.update();
        plane.update();

        for (var count = 0; count < constants.CLOUD_NUM; count++) {
            clouds[count].update();
        }

        collision.update();
        scoreboard.update();
        levelLabel.update();

        // Change to Game Over State if the player has no lives left
        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            plane.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }

        // Change to Level 2 State if player hits 1000 points
        if (scoreboard.score >= 1000) {
            stage.removeChild(game);
            plane.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.LEVEL2_STATE;
            changeState(currentState);
        }
    }
    states.playState = playState;

    // play state Function
    function play() {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(game);
        island = new objects.Island(game);
        coin = new objects.Coin(island, game);
        plane = new objects.Plane(game);

        // Display the Level Label
        levelLabel = new objects.LevelLabel("level 1");
        createjs.Sound.play("level1");

        // Show Cursor
        stage.cursor = "none";

        for (var count = 0; count < constants.CLOUD_NUM; count++) {
            clouds[count] = new objects.Cloud(game);
        }

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(game);

        // Instantiate Collision Manager
        collision = new managers.Collision(plane, coin, clouds, scoreboard, game);

        stage.addChild(game);
    }
    states.play = play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map
