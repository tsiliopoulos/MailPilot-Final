/// <reference path="../managers/asset.ts" />
module objects {
    // Plane Class
    export class Plane extends objects.GameObject {
        private game: createjs.Container;
        engineSound: createjs.SoundInstance;
        onStage: boolean = true;
        constructor(game: createjs.Container) {
            super("plane");
            this.game = game;
            this.y = 430;
            game.addChild(this);
            this.engineSound = createjs.Sound.play('engine', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 0.1, 0);
        }

        update() {
            // Change plane position with some easing on update
            this.x += (stage.mouseX - this.x) * 0.3;
        }

        destroy() {
            this.engineSound.stop();
            game.removeChildAt(constants.PLANE_LEVEL);
        }
    }
} 