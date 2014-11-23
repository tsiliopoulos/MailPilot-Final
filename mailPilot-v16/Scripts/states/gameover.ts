/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/scoreboard.ts" />
module states {
    export function gameOverState() {
        ocean.update();
    }

    // Restart Game when Try Again Button is clicked
    export function tryAgainClicked(event: MouseEvent) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }

    // Read High Score from File
    export function readHighScore(){
        var xhr: XMLHttpRequest = new XMLHttpRequest();

        xhr.open("post", "Scripts/scores.txt", false);
        xhr.send(null);
        scoreboard.highScore = parseInt(xhr.responseText);
    }

    // Write High Score to File via PHP
    export function writeHighScore() {
        var hiScore = new FormData();

        hiScore.append("data", scoreboard.score.toString());
        scoreboard.highScore = scoreboard.score;
        var xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("post", "Scripts/writeScore.php", true);
        xhr.send(hiScore);
    }


    // Game Over Scene
    export function gameOver() {
        var gameOverLabel: objects.Label;
        var finalScoreLabel: objects.Label;
        var finalScore: objects.Label;
        var highScoreLabel: objects.Label;
        var highScore: objects.Label;
        var highScoreString: string = "";

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(game);

        // Show Cursor
        stage.cursor = "default";

        // Check if player beat high score
        readHighScore();
        if (scoreboard.score > scoreboard.highScore) {
            writeHighScore();
        }
        highScoreString = scoreboard.highScore.toString();

        // Display Game Over
        gameOverLabel = new objects.Label(stage.canvas.width * 0.5 , 40, "game over");
        gameOverLabel.fontSize(50);
        game.addChild(gameOverLabel);

        // Display Final Score Label
        finalScoreLabel = new objects.Label(stage.canvas.width * 0.5, 120, "your score");
        finalScoreLabel.fontSize(40);
        game.addChild(finalScoreLabel);

        // Display Final Score
        finalScore = new objects.Label(stage.canvas.width * 0.5, 180, scoreboard.score.toString());
        finalScore.fontSize(40);
        game.addChild(finalScore);

        // Display High Score Label
        highScoreLabel = new objects.Label(stage.canvas.width * 0.5, 240, "high score");
        highScoreLabel.fontSize(40);
        game.addChild(highScoreLabel);

        // Display High Score
        highScore = new objects.Label(stage.canvas.width * 0.5, 300, highScoreString);
        highScore.fontSize(40);
        game.addChild(highScore);

        // Display Try Again Button
        tryAgain = new objects.Button(stage.canvas.width * 0.5, 360, "tryAgainButton");
        game.addChild(tryAgain);
        tryAgain.addEventListener("click", tryAgainClicked);


        // Adjust Display for Screen Size
        if (screenScale < 1) {
           gameOverLabel.fontSize(32);
            finalScoreLabel.fontSize(32);
            finalScore.fontSize(32);
            highScoreLabel.fontSize(32);
            highScore.fontSize(32);
        }

        stage.addChild(game);

    }
}