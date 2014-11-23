var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="cloud.ts" />
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    var Lightning = (function (_super) {
        __extends(Lightning, _super);
        function Lightning(cloud) {
            _super.call(this, managers.Assets.lightningAtlas, "lightning");
            this.cloud = cloud;

            if (screenScale < 1) {
                // Adjust lightning to Screen Scale
                this.scaleX = screenScale;
                this.scaleY = screenScale;
                this.setBounds(this.regX, this.regY, this.scaleX * this.getBounds().width, this.scaleY * this.getBounds().height);
            } else {
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
        Lightning.prototype.update = function () {
            this.x = this.cloud.x;
            this.y = this.cloud.y;
        };
        return Lightning;
    })(createjs.Sprite);
    objects.Lightning = Lightning;
})(objects || (objects = {}));
//# sourceMappingURL=lightning.js.map
