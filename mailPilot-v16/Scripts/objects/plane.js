var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Plane Class
    var Plane = (function (_super) {
        __extends(Plane, _super);
        function Plane(game) {
            _super.call(this, "plane");
            this.onStage = true;
            this.game = game;
            this.y = 430;
            game.addChild(this);
            this.engineSound = createjs.Sound.play('engine', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 0.1, 0);
        }
        Plane.prototype.update = function () {
            // Change plane position with some easing on update
            this.x += (stage.mouseX - this.x) * 0.3;
        };

        Plane.prototype.destroy = function () {
            this.engineSound.stop();
            game.removeChildAt(constants.PLANE_LEVEL);
        };
        return Plane;
    })(objects.GameObject);
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map
