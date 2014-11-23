var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../constants.ts" />
var objects;
(function (objects) {
    var Stats = (function (_super) {
        __extends(Stats, _super);
        function Stats(game) {
            _super.call(this, "-- fps", "14px Dock51", constants.LABEL_COLOUR);
            this.game = game;
            this.y = 460;
            this.game.addChild(this);
        }
        Stats.prototype.update = function () {
            this.text = Math.round(createjs.Ticker.getMeasuredFPS()) + " fps";
        };
        return Stats;
    })(createjs.Text);
    objects.Stats = Stats;
})(objects || (objects = {}));
//# sourceMappingURL=stats.js.map
