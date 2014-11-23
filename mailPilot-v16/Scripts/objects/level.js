var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var LevelLabel = (function (_super) {
        __extends(LevelLabel, _super);
        function LevelLabel(levelText) {
            this.x = stage.canvas.width * 0.5;
            this.y = stage.canvas.height * 0.5;
            _super.call(this, this.x, this.y, levelText);
            this.dy = 2;
            this.height = this.getBounds().height;
            this.fontSize(50);
            game.addChild(this);
        }
        LevelLabel.prototype.update = function () {
            this.y += this.dy;
            if (this.y > (stage.canvas.height + this.height)) {
                this.dy = 0;
            }
        };
        return LevelLabel;
    })(objects.Label);
    objects.LevelLabel = LevelLabel;
})(objects || (objects = {}));
//# sourceMappingURL=level.js.map
