import Phaser from 'phaser';


import BattleScene from "./scenes/battleScene.js";

import TutorialScene from "./scenes/tutorialScene.js";
import FinalBattleScene from "./scenes/finalBattleScene.js";

import BattleSceneUI from "./scenes/battleSceneUI.js";
import fanUI from './scenes/fanUI.js';

import DialogueScene13 from "./scenes/dialogueScene13.js";
import DialogueScene12 from "./scenes/dialogueScene12.js";
import DialogueScene11 from "./scenes/dialogueScene11.js";
import DialogueScene10 from "./scenes/dialogueScene10.js";
import DialogueScene9 from "./scenes/dialogueScene9.js";
import DialogueScene8 from "./scenes/dialogueScene8.js";
import DialogueScene7 from "./scenes/dialogueScene7.js";
import DialogueScene6 from "./scenes/dialogueScene6.js";
import DialogueScene5 from "./scenes/dialogueScene5.js";
import DialogueScene4 from "./scenes/dialogueScene4.js";
import DialogueScene3 from "./scenes/dialogueScene3.js";
import DialogueScene2 from "./scenes/dialogueScene2.js";
import DialogueScene1 from "./scenes/dialogueScene1.js";
import DialogueScene0 from "./scenes/dialogueScene0.js";

import DialogueScene from "./scenes/dialogueScene.js";

import MainMenu from "./scenes/mainMenu.js";


///config
let config = {
    type: Phaser.WEBGL,
    width: 1200,
    height: 800,
    //pixelArt: true, // Ensures crisp pixels
    render: {
        antialias: false,
        pixelArt: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y:0},
            debug: false
        }
    },
    scene: [MainMenu,  DialogueScene1,FinalBattleScene,  DialogueScene9, DialogueScene7, DialogueScene8,   DialogueScene6, DialogueScene3, TutorialScene,  fanUI,  BattleSceneUI, DialogueScene, BattleScene, DialogueScene0, DialogueScene2, DialogueScene4, DialogueScene5, DialogueScene10, DialogueScene11, DialogueScene12, DialogueScene13],
};

//create new game <- config
let game = new Phaser.Game(config);

