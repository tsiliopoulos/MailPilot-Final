/// <reference path="../constants.ts" />
module objects {
    export class Stats extends createjs.Text {
        game: createjs.Container;
        constructor(game: createjs.Container) {
            super("-- fps", "14px Dock51", constants.LABEL_COLOUR);
            this.game = game;
            this.y = 460;
            this.game.addChild(this);
            
        }

        update() {
            this.text = Math.round(createjs.Ticker.getMeasuredFPS()) + " fps";
        }
    }
} 