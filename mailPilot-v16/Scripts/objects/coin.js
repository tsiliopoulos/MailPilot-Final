var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../managers/asset.ts" />
/// <reference path="island.ts" />
var objects;
(function (objects) {
    var Coin = (function (_super) {
        __extends(Coin, _super);
        function Coin(island, game) {
            _super.call(this, "yellowCoin");
            this.onStage = true;
            this.game = game;
            this.game.addChild(this);
        }
        Coin.prototype.update = function () {
            // move the Coin with the island
            if (this.onStage == true) {
                this.x = island.image.x;
                this.y = island.image.y;
            } else {
                //position coin off stage
                this.y = -50;
            }

            // check if island has been reset
            if (island.image.y < 0) {
                this.onStage = true;
                this.alpha = 1;
            }
        };
        return Coin;
    })(objects.GameObject);
    objects.Coin = Coin;
})(objects || (objects = {}));
//# sourceMappingURL=coin.js.map
