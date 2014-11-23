var constants;
(function (constants) {
    // Stage Size Constants
    constants.GAME_WIDTH = 640;
    constants.GAME_HEIGHT = 480;

    // State Machine Constants
    constants.MENU_STATE = 0;
    constants.PLAY_STATE = 1;
    constants.GAME_OVER_STATE = 2;
    constants.INSTRUCTIONS_STATE = 3;
    constants.LEVEL2_STATE = 4;

    // Game Constants
    constants.CLOUD_NUM = 3;
    constants.LABEL_FONT = "28px Dock51";
    constants.LABEL_COLOUR = "#C8CFF3";
    constants.PLANE_LIVES = 3;
    constants.ENEMY_NUM = 1;

    // Layer Constants
    constants.OCEAN_LEVEL = 0;
    constants.ISLAND_LEVEL = 1;
    constants.COIN_LEVEL = 2;
    constants.PLANE_LEVEL = 3;
    constants.CLOUD_LEVEL = [4, 5, 6];
    constants.SCOREBOARD_LEVEL = 7;
    constants.LEVEL_LABEL_LEVEL = 8;
})(constants || (constants = {}));
//# sourceMappingURL=constants.js.map
