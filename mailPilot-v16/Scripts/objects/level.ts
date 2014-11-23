module objects {
    export class LevelLabel extends objects.Label {
        private dy: number;
        private height: number;
        constructor(levelText: string) {
            this.x = stage.canvas.width * 0.5;
            this.y = stage.canvas.height * 0.5;
            super(this.x, this.y, levelText);
            this.dy = 2;
            this.height = this.getBounds().height;
            this.fontSize(50);
            game.addChild(this);
        }

        update() {
            this.y += this.dy
            if (this.y > (stage.canvas.height + this.height)) {
                this.dy = 0;
            }
        }
    }
} 