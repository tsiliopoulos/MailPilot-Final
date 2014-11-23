/// <reference path="../managers/asset.ts" />
/// <reference path="island.ts" />
module objects {
    export class Coin extends objects.GameObject {
        private game: createjs.Container;
        private island: objects.Island;
        onStage: boolean = true;
        constructor(island: objects.Island, game: createjs.Container) {
            super("yellowCoin");
            this.game = game;
            this.game.addChild(this);
        }

        update() {
            // move the Coin with the island
            if (this.onStage == true) {
                this.x = island.image.x;
                this.y = island.image.y;
            }
            else {
                //position coin off stage
                this.y = -50;
            }

            // check if island has been reset
            if (island.image.y < 0) {
                this.onStage = true;
                this.alpha = 1;
            }
        }
    }
} 