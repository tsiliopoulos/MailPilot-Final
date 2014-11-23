/// <reference path="cloud.ts" />
/// <reference path="../managers/asset.ts" />
module objects {
    export class Lightning extends createjs.Sprite {
        cloud: createjs.Sprite;
        width: number;
        height: number;
        constructor(cloud: createjs.Sprite) {
            super(managers.Assets.lightningAtlas, "lightning");
            this.cloud = cloud;

            if (screenScale < 1) {
                // Adjust lightning to Screen Scale
                this.scaleX = screenScale;
                this.scaleY = screenScale;
                this.setBounds(this.regX, this.regY, this.scaleX * this.getBounds().width, this.scaleY * this.getBounds().height);
            }
            else {
                this.scaleX = 2;
                this.scaleY = 2;
            }
            
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.x = this.cloud.x;
            this.y = this.cloud.y;
             
        }

        update() {
            this.x = this.cloud.x;
            this.y = this.cloud.y;
        }

    }
} 