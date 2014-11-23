/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/bullet.ts" />
var managers;
(function (managers) {
    var BulletManager = (function () {
        function BulletManager(plane, game) {
            this.bullets = [];
            this.bulletCount = 0;
            this.firing = false;
            this.game = game;
            this.plane = plane;
        }
        BulletManager.prototype.fire = function () {
            // create two bullets on either side of  plane
            var leftBullet = new objects.Bullet(this.game);
            var rightBullet = new objects.Bullet(this.game);

            this.game.addChild(leftBullet);
            leftBullet.x = this.plane.x - 10;
            leftBullet.y = 400;
            this.bullets.push(leftBullet);

            this.game.addChild(rightBullet);
            rightBullet.x = this.plane.x + 10;
            rightBullet.y = 400;
            this.bullets.push(rightBullet);

            // Play Bullet Sound
            createjs.Sound.play("bullet");
        };

        BulletManager.prototype.update = function () {
            var len = this.bullets.length;
            var bullet;

            for (var count = len - 1; count >= 0; count--) {
                bullet = this.bullets[count];

                // move current bullet up stage
                bullet.y -= 25;

                // check to see if the bullet has left the stage
                if (bullet.y < 0) {
                    this.destroyBullet(bullet);
                }
            }

            // fire bullet if mouse button is clicked or game container is tapped
            if ((this.firing == true) && (this.bulletCount % 10 == 0)) {
                if (this.plane.onStage == true) {
                    this.fire();
                }
            }

            //increment bullet count to limit number of bullets being fired
            this.bulletCount++;
        };

        BulletManager.prototype.destroyBullet = function (bullet) {
            var len = this.bullets.length;

            for (var count = 0; count < len; count++) {
                if (this.bullets[count] == bullet) {
                    this.bullets.splice(count, 1);
                    this.game.removeChild(bullet);
                }
            }
        };
        return BulletManager;
    })();
    managers.BulletManager = BulletManager;
})(managers || (managers = {}));
//# sourceMappingURL=bulletmanager.js.map
