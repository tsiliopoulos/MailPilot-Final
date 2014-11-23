/// <reference path="../managers/asset.ts" />
module objects {
    // Cloud class
    export class Cloud extends objects.GameObject {
        game: createjs.Container;
        lightning: objects.Lightning;
        dy: number;
        dx: number;
        constructor(game: createjs.Container) {
            this.game = game;
            super("cloud");

            // Adjust Image Scale for Screen Width
            if (screenScale < 1) {
                this.scaleX = screenScale;
                this.scaleY = screenScale;
                this.setBounds(this.regX, this.regY, this.scaleX * this.getBounds().width, this.scaleY * this.getBounds().height);
            }

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            
            this.reset();

            this.lightning = new Lightning(this);

            
            game.addChild(this.lightning);

            game.addChild(this);
            
        }

        update() {
            this.y += this.dy;
            this.x += this.dx;
            this.lightning.update();
            if (this.y > stage.canvas.height + this.height) {
                this.reset();
            }
        }

        reset() {
            this.x = Math.floor(Math.random() * stage.canvas.width);
            this.dy = Math.floor(Math.random() * 5 + 5);
            this.dx = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            this.y = -this.height;
        }

        destroy() {
            game.removeChild(this);
        }
    }

}