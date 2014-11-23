var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Cloud class
    var Cloud = (function (_super) {
        __extends(Cloud, _super);
        function Cloud(game) {
            this.game = game;
            _super.call(this, "cloud");

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

            this.lightning = new objects.Lightning(this);

            game.addChild(this.lightning);

            game.addChild(this);
        }
        Cloud.prototype.update = function () {
            this.y += this.dy;
            this.x += this.dx;
            this.lightning.update();
            if (this.y > stage.canvas.height + this.height) {
                this.reset();
            }
        };

        Cloud.prototype.reset = function () {
            this.x = Math.floor(Math.random() * stage.canvas.width);
            this.dy = Math.floor(Math.random() * 5 + 5);
            this.dx = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            this.y = -this.height;
        };

        Cloud.prototype.destroy = function () {
            game.removeChild(this);
        };
        return Cloud;
    })(objects.GameObject);
    objects.Cloud = Cloud;
})(objects || (objects = {}));
//# sourceMappingURL=cloud.js.map
