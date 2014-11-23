module constants {
    // Stage Size Constants
    export var GAME_WIDTH: number = 640;
    export var GAME_HEIGHT: number = 480;

    // State Machine Constants
    export var MENU_STATE: number = 0;
    export var PLAY_STATE: number = 1;
    export var GAME_OVER_STATE: number = 2;
    export var INSTRUCTIONS_STATE: number = 3;
    export var LEVEL2_STATE: number = 4;

    // Game Constants
    export var CLOUD_NUM: number = 3;
    export var LABEL_FONT = "28px Dock51";
    export var LABEL_COLOUR = "#C8CFF3";
    export var PLANE_LIVES = 3;
    export var ENEMY_NUM: number = 1;

    // Layer Constants
    export var OCEAN_LEVEL: number = 0;
    export var ISLAND_LEVEL: number = 1;
    export var COIN_LEVEL: number = 2;
    export var PLANE_LEVEL: number = 3;
    export var CLOUD_LEVEL = [4, 5, 6];
    export var SCOREBOARD_LEVEL = 7;
    export var LEVEL_LABEL_LEVEL: number = 8;
}