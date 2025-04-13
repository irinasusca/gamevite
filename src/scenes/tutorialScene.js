import BattleScene from "./battleScene.js";
import { LowClassOpp, MediumLowOpp, Opp,  } from "../objects/enemy.js";
import TutorialManager from "./tutorialManager.js";
import DialogueScene2 from "./dialogueScene2.js";

class TutorialScene extends BattleScene
{

    constructor()
    {
        super({ key: "TutorialScene" }); 
        this.enemySpawned1 = false;
        this.enemySpawned2 = false;
        this.bossSpawned = false;
        this.stageFinished = false;
    }



    preload()
    {
        super.preload();
        this.load.image('tip', '../../public/assets/tip.png');
        this.load.image('tipBox', '../../public/assets/tipBox.png');
        this.load.image('bg', '../../public/assets/meijiRain.jpg');
        this.load.spritesheet('buttons',
            '../../public/assets/buttonUI.png',
            {frameWidth: 16, frameHeight: 16 }
        );
    }

    create()
    {
        this.sound.stopAll();
        this.music = this.sound.add('music_battle', {volume: 0.12});
        this.music.setLoop(true);
        this.music.play();

        this.enemySpawned1 = false;
        this.enemySpawned2 = false;
        this.bossSpawned = false;
        this.stageFinished = false;

        let bg = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY, 'bg');
        bg.setDepth(0);
        bg.setScrollFactor(0);
        bg.setOrigin(0.5, 0.5);
        bg.setScale(2);

        console.log('Current active scene:', this.scene.key);
        super.create();
        
        this.tutorialManager = new TutorialManager(this);
        this.tutorialManager.startTutorial();


        this.physics.add.collider(this.player, this.opps, () => {
            if (!this.tutorialManager.isActive) {
                
            }
        });
    }

    update()
    {
        super.update();

        if (this.player._health <= 0 ) {
            this.showRestartScreen();
        }

        if (!this.tutorialManager.isActive && !this.enemySpawned1) {
            console.log("Tutorial complete! Spawning enemy...");
            this.tutorialEnemy = new LowClassOpp(this, 600, 300);
            this.opps.add(this.tutorialEnemy);
            this.enemySpawned1 = true; // Prevents duplicate spawns
        }

        if(this.enemySpawned1&&!this.enemySpawned2&& this.tutorialEnemy._hp <=0)
        {
            this.tutorialEnemy2 = new LowClassOpp(this, 600, 300);
            this.opps.add(this.tutorialEnemy2);

            this.tutorialEnemy3 = new LowClassOpp(this, 400, 600);
            this.opps.add(this.tutorialEnemy3);
            this.enemySpawned2 = true;
        }

        if(!this.bossSpawned && this.enemySpawned2 && this.tutorialEnemy3._hp <=0 && this.tutorialEnemy2._hp <=0)
        {
            this.tutorialBoss = new MediumLowOpp(this, 600, 300);
            this.opps.add(this.tutorialBoss);
            this.bossSpawned = true;
        }

        if(this.bossSpawned && this.tutorialBoss._hp <= 0 && !this.stageFinished)
        {
            this.stageFinished = true;
            this.onStageFinished();
        }
            
        ///Restart the stage if you die.



    }
    
    onStageFinished() {
        this.time.delayedCall(2000, () => { // Wait 2 seconds before showing the screen
            this.congratsScreen();
        });
        
    }

    nextStage()
    {
        this.cameras.main.fadeOut(500, 0, 0, 0);
        this.time.delayedCall(500, () => {
            this.scene.start('DialogueScene3');
        });
    }

    congratsScreen()
    {
        this.overlay = this.add.rectangle(
            this.cameras.main.centerX,  // Center it horizontally
            this.cameras.main.centerY,  // Center it vertically
            this.cameras.main.width,    // Make it cover the full width
            this.cameras.main.height,   // Make it cover the full height
            0xFFFFFF,                   // Black color
            0.6                         // 60% transparency
        )
        .setOrigin(0.5, 0.5) // Make sure it expands correctly
        .setDepth(100)       // Ensure it's on top
        .setScrollFactor(0);  // Prevent it from moving with the player
        
    
        // "Stage Failed" text
        this.add.text(
            this.cameras.main.centerX,  // Centered on screen
             this.cameras.main.centerY,
            "Misiune îndeplinită cu succes!",
            {
                fontSize: "48px",
                color: "#000000",
                fontFamily: "'IM Fell English SC', serif",
                align: "center",
                wordWrap: { width: this.cameras.main.width * 0.8 }
            }
        )
        .setOrigin(0.5, 0.5)
        .setScrollFactor(0)
        .setDepth(101);

        this.time.delayedCall(3000, () => { 
            this.nextStage();
        });

    }

    showRestartScreen() {

        this.player.walkingSound('stop');
        
        // Dark overlay
        this.overlay = this.add.rectangle(
            this.cameras.main.centerX,  // Center it horizontally
            this.cameras.main.centerY,  // Center it vertically
            this.cameras.main.width,    // Make it cover the full width
            this.cameras.main.height,   // Make it cover the full height
            0x000000,                   // Black color
            0.6                         // 60% transparency
        )
        .setOrigin(0.5, 0.5) // Make sure it expands correctly
        .setDepth(100)       // Ensure it's on top
        .setScrollFactor(0);  // Prevent it from moving with the player
        
    
        // "Stage Failed" text
        this.add.text(
            this.cameras.main.centerX,  // Centered on screen
             this.cameras.main.centerY - 100,
            "Stage Failed",
            {
                fontSize: "48px",
                color: "#FFFFFF",
                fontFamily: "'IM Fell English SC', serif",
                align: "center",
            }
        )
        .setOrigin(0.5, 0.5)
        .setScrollFactor(0)
        .setDepth(101);
    
        // Restart button (Extract from column 9, row 10)
        let restartButton = this.add.sprite(
            this.cameras.main.centerX,
            this.cameras.main.centerY + 50,
            'buttons', // Spritesheet key
            3  // Convert row/col to frame index
        )
        .setScale(5)
        .setOrigin(0.5, 0.5)
        .setDepth(101)
        .setScrollFactor(0)
        .setInteractive();
    
        // Restart the scene when clicked
        restartButton.on("pointerdown", () => {
            this.scene.restart();
        });
    
        // Optional: Button hover effect
        restartButton.on("pointerover", () => {
            restartButton.setScale(6).setDepth(102);
        });
        restartButton.on("pointerout", () => {
            restartButton.setScale(5).setDepth(101);
        });
    }
    
    
  

    
    
}

export default TutorialScene;