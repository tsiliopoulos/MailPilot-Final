/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Island Class
    var Island = (function () {
        function Island(game) {
            this.game = game;

            this.reset();

            this.dy = 5;

            game.addChild(this.image);
        }
        Island.prototype.update = function () {
            this.image.y += this.dy;
            if (this.image.y > stage.canvas.height + this.height) {
                game.removeChildAt(1);
                this.reset();
            }
        };

        Island.prototype.pickImage = function () {
            switch (Math.floor(Math.random() * 2 + 1)) {
                case 1:
                    this.image = new createjs.Sprite(managers.Assets.atlas, "island1");
                    break;
                case 2:
                    this.image = new createjs.Sprite(managers.Assets.atlas, "island2");
                    break;
            }
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width * 0.5;
            this.image.regY = this.height * 0.5;
            game.addChildAt(this.image, 1);
        };

        Island.prototype.reset = function () {
            // Swap the image
            this.pickImage();

            // Reset the island image location
            this.image.x = Math.floor(Math.random() * stage.canvas.width);
            this.image.y = -this.height;
        };

        Island.prototype.destroy = function () {
            game.removeChildAt(1);
        };
        return Island;
    })();
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map
