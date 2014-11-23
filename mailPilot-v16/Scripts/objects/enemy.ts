/// <reference path="../managers/asset.ts" />
module objects {
    export class Enemy extends objects.GameObject {
        game: createjs.Container;
        dy: number;
        engineSound: createjs.SoundInstance;
        private enginePlay: boolean;
        constructor(game: createjs.Container) {
            super("enemy");
            this.game = game;
            this.dy = 7;
            this.enginePlay = false;
            this.engineSound = createjs.Sound.play("enemyEngine");
            this.reset();
            this.game.addChild(this);
        }

        update() {
            this.y += this.dy;
            if (this.y > -stage.canvas.height) {
                 this.enginePlay = true;
            }

            if (this.y > stage.canvas.height * 2) {
                this.reset();
            }
            this.checkEngine();
        }

        reset() {
            this.engineSound.stop();
            this.enginePlay = false;
            // Reset the island image location
            this.x = Math.floor(Math.random() * stage.canvas.width);
            this.y = -stage.canvas.height * 5;
        }

        checkEngine() {
            if ((this.enginePlay == true) && (this.engineSound.playState != "playSucceeded")) {
                this.engineSound.play();
            }
            else if(this.enginePlay == false) {
                this.engineSound.stop();
            }

        }

    }
} 