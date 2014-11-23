var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
// Bullet Class
var objects;
(function (objects) {
    var Bullet = (function (_super) {
        __extends(Bullet, _super);
        function Bullet(game) {
            _super.call(this, "bigbullet");
            this.game = game;
            this.game.addChild(this);
        }
        return Bullet;
    })(objects.GameObject);
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map
