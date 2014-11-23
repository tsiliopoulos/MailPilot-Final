var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
// Explosion Class
var objects;
(function (objects) {
    var Explosion = (function (_super) {
        __extends(Explosion, _super);
        function Explosion(game) {
            _super.call(this, "bigexplosion");
            this.game = game;
            this.game.addChild(this);
        }
        Explosion.prototype.remove = function () {
            this.game.removeChild(this);
        };
        return Explosion;
    })(objects.GameObject);
    objects.Explosion = Explosion;
})(objects || (objects = {}));
//# sourceMappingURL=explosion.js.map
