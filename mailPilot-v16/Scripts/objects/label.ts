/// <reference path="../constants.ts" />
/// <reference path="../managers/asset.ts" />
module objects {
    export class Label extends createjs.BitmapText {
        constructor(x:number,y:number,labelText:string) {
            super(labelText, managers.Assets.bitMapFont);
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
        }

        // Utility Method to change the default font size
        fontSize(size: number) {
            var scale: number = size / this.getBounds().height;
            
            this.scaleX = scale;
            this.scaleY = scale;
        }

    }
} 