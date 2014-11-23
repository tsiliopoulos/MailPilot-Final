/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/explosion.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/level.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/stats.ts" />
/// <reference path="../managers/collision.ts" />
/// <reference path="../managers/bulletmanager.ts" />

module states {
    export function Level2State() {
        ocean.update();
        island.update();
        coin.update();
        plane.update();

        // One Enemy for now
        enemies[0].update();

        for (var count = 0; count < constants.CLOUD_NUM; count++) {
            clouds[count].update();
        }

        bulletManager.update();

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
    }

    // Fire the bullet when the mouse is clicked
    function mouseDown() {
        bulletManager.firing = true;
    }

    function mouseUp() {
        bulletManager.firing = false;
    }

    export function Level2() {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(game);
        island = new objects.Island(game);
        coin = new objects.Coin(island, game);
        plane = new objects.Plane(game);

        enemies[0] = new objects.Enemy(game);

        // Display the Level Label
        levelLabel = new objects.LevelLabel("level 2");
        createjs.Sound.play("level2");

        // Show Cursor
        stage.cursor = "none";

        // Create multiple clouds
        for (var count = 0; count < constants.CLOUD_NUM; count++) {
            clouds[count] = new objects.Cloud(game);
        }

        // Show the Scoreboard
        scoreboard.showScoreBoard();

        // Instantiate Bullet Manager
        bulletManager = new managers.BulletManager(plane, game);

        // Instantiate Collision Manager
        collision = new managers.Collision(plane, coin, clouds, scoreboard, game, enemies, bulletManager.bullets);

        game.addEventListener("mousedown", mouseDown);
        game.addEventListener("pressup", mouseUp);

        stage.addChild(game);
    }
} 