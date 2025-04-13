import DialogueScene1 from "./dialogueScene1.js";
import DialogueScene0 from "./dialogueScene0.js";

class MainMenu extends Phaser.Scene {
    constructor() {
        super({key:'MainMenu'});
    }

    preload() {
        this.load.image('playButton', '../../public/assets/dialogue.png');  // Replace with your button images
        this.load.image('biblioButton', '../../public/assets/dialogue.png');
        this.load.image('textBoxy', '../../public/assets/dialogue.png');
        this.load.image('bgMain', '../../public/assets/statuePainting.jpg');
        this.load.audio('music_default', '../../public/assets/audio/tradJap.mp3');
        this.load.audio('music_battle', '../../public/assets/audio/warmusic.mp3');
        this.load.audio('woosh', '../../public/assets/audio/woosh.wav');
        this.load.audio('clash', '../../public/assets/audio/clash.wav');
        this.load.audio('gravel', '../../public/assets/audio/gravel.wav');
        this.load.audio('dialogueClick', '../../public/assets/audio/poate3.wav');
        this.load.audio('harakiri', '../../public/assets/audio/sword_slash.mp3');
    }

    create() {

        this.scene.stop('game-ui');
        
        let bg = this.add.image(0, 0, 'bgMain')
                .setDepth(100)
                .setOrigin(0, 0)
                .setDepth(-1000);
        
            let scale = Math.max(1200 / bg.width, 800 / bg.height); // Scale to fill 1200 width while keeping aspect ratio
            bg.setScale(scale);
       
            bg.setX(this.cameras.main.centerX - bg.displayWidth / 2);

        // Play Button
        let playButton = this.add.image(600, 300, 'playButton').setInteractive().setOrigin(0.5);
        playButton.on('pointerdown', () => this.transitionTo('DialogueScene0'));

        this.dialogueText = this.add.text(600, 300, 'Start', { 
            fontFamily: "'IM Fell English SC', serif",
            fontSize: '45px',
            color: '#302d2a',
            wordWrap: { width: 560 } 
        }).setOrigin(0.5).setDepth(101);

        // Bibliografie Button
        let biblioButton = this.add.image(600, 500, 'biblioButton').setInteractive().setOrigin(0.5);
        biblioButton.on('pointerdown', () => {
            window.location.href = '../bibliografie.html';  // or use window.open() for a new tab
        });

        this.dialogueText = this.add.text(600, 500, 'Bibliografie', { 
            fontFamily: "'IM Fell English SC', serif",
            fontSize: '45px',
            color: '#302d2a',
            wordWrap: { width: 560 } 
        }).setOrigin(0.5).setDepth(101);

        // Fade in effect
        this.cameras.main.fadeIn(500);
    }

    transitionTo(sceneKey) {
        this.cameras.main.fadeOut(500, 0, 0, 0);
        this.time.delayedCall(500, () => {
            this.scene.start(sceneKey);
        });
    }
}

export default MainMenu;
