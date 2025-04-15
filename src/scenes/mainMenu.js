import DialogueScene1 from "./dialogueScene1.js";
import DialogueScene0 from "./dialogueScene0.js";

class MainMenu extends Phaser.Scene {
    constructor() {
        super({key:'MainMenu'});
    }

    preload() {
        this.load.image('playButton', 'assets/dialogue.png');  // Replace with your button images
        this.load.image('biblioButton', 'assets/dialogue.png');
        this.load.image('textBoxy', 'assets/dialogue.png');
        this.load.image('bgMain', 'assets/statuePainting.jpg');
        this.load.audio('music_default', 'assets/audio/tradJap.mp3');
        this.load.audio('music_battle', 'assets/audio/warmusic.mp3');
        this.load.audio('woosh', 'assets/audio/woosh.wav');
        this.load.audio('clash', 'assets/audio/clash.wav');
        this.load.audio('gravel', 'assets/audio/gravel.wav');
        this.load.audio('dialogueClick', 'assets/audio/poate3.wav');
        this.load.audio('harakiri', 'assets/audio/sword_slash.mp3');
        this.load.audio('fan-open', 'assets/audio/fanOpen.mp3');
    }

    create() {
        this.sound.stopAll();
        this.scene.stop('game-ui');
        this.scene.stop('fan-ui');
       
        
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
            window.location.href = import.meta.env.BASE_URL + 'bibliografie.html';  // or use window.open() for a new tab
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
