/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/scoreboard.ts" />
var managers;
(function (managers) {
    // Collision Manager Class
    var Collision = (function () {
        function Collision(plane, coin, clouds, scoreboard, game, enemies, bullets) {
            this.clouds = [];
            this.enemies = [];
            this.bullets = [];
            this.plane = plane;
            this.coin = coin;
            this.clouds = clouds;
            this.enemies = enemies;
            this.bullets = bullets;
            this.scoreboard = scoreboard;

            this.game = game;
        }
        // Utility method - Distance calculation between two points
        Collision.prototype.distance = function (p1, p2) {
            var result = 0;
            var xPoints = 0;
            var yPoints = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        };

        // check collision between plane and any cloud object
        Collision.prototype.planeAndCloud = function (cloud) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.plane.x;
            p1.y = this.plane.y;
            p2.x = cloud.x;
            p2.y = cloud.y;
            if (this.distance(p1, p2) < ((this.plane.height * 0.5) + (cloud.height * 0.5))) {
                createjs.Sound.play("explosion");

                // show explosion animation
                var explosion = new objects.Explosion(game);
                explosion.x = this.plane.x;
                explosion.y = this.plane.y;
                explosion.on("animationend", function (e) {
                    explosion.remove();
                });
                this.plane.gotoAndPlay("flickerPlane");
                this.plane.onStage = false;
                setTimeout(function (e) {
                    this.plane.gotoAndPlay("plane");
                    this.plane.onStage = true;
                }, 2000);

                this.scoreboard.lives -= 1;
                cloud.reset();
            }
        };

        // check collision between plane and coin
        Collision.prototype.planeAndCoin = function () {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.plane.x;
            p1.y = this.plane.y;
            p2.x = this.coin.x;
            p2.y = this.coin.y;
            if (this.distance(p1, p2) < ((this.plane.height * 0.5) + (this.coin.height * 0.5))) {
                createjs.Sound.play("coin");
                this.scoreboard.score += 100;

                // increase player's lives every 1500 points
                if (this.scoreboard.score % 1500 == 0) {
                    createjs.Sound.play("lives");
                    this.scoreboard.lives++;
                }
                this.coin.onStage = false;
            }
        };

        // check collision between plane and enemy objects
        Collision.prototype.planeAndEnemy = function (enemy) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.plane.x;
            p1.y = this.plane.y;
            p2.x = enemy.x;
            p2.y = enemy.y;
            if (this.distance(p1, p2) < ((this.plane.height * 0.5) + (enemy.height * 0.5))) {
                createjs.Sound.play("explosion");

                // show explosion animation
                var explosion = new objects.Explosion(game);
                explosion.x = this.plane.x;
                explosion.y = this.plane.y;
                explosion.on("animationend", function (e) {
                    explosion.remove();
                });
                this.plane.gotoAndPlay("flickerPlane");
                this.plane.onStage = false;
                setTimeout(function (e) {
                    this.plane.gotoAndPlay("plane");
                    this.plane.onStage = true;
                }, 2000);

                this.scoreboard.lives -= 1;

                enemy.reset();
            }
        };

        // check collision between bullet and any enemy object
        Collision.prototype.bulletAndEnemy = function (bullet, enemy) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = bullet.x;
            p1.y = bullet.y;
            p2.x = enemy.x;
            p2.y = enemy.y;
            if (this.distance(p1, p2) < ((bullet.height * 0.5) + (enemy.height * 0.5))) {
                createjs.Sound.play("explosion");

                // show explosion animation
                var explosion = new objects.Explosion(game);
                explosion.x = enemy.x;
                explosion.y = enemy.y;
                explosion.on("animationend", function (e) {
                    explosion.remove();
                });

                this.scoreboard.score += 200;
                enemy.reset();
            }
        };

        // Utility Function to Check Collisions
        Collision.prototype.update = function () {
            if (plane.onStage == true) {
                for (var count = 0; count < constants.CLOUD_NUM; count++) {
                    this.planeAndCloud(this.clouds[count]);
                }
                this.planeAndCoin();

                if (typeof this.enemies != "undefined") {
                    this.planeAndEnemy(this.enemies[0]);

                    if (bulletManager.firing == true) {
                        var len = this.bullets.length;
                        for (var count = 0; count < len; count++) {
                            this.bulletAndEnemy(this.bullets[count], this.enemies[0]);
                        }
                    }
                }
            }
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map
