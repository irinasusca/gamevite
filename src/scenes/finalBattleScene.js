import BattleScene from "./battleScene.js";
import { LowClassOpp, MediumLowOpp, Opp,  MediumOpp, BossOpp} from "../objects/enemy.js";
import TutorialManager from "./tutorialManager.js";

class FinalBattleScene extends BattleScene
{

    constructor()
    {
        super({ key: "FinalBattleScene" }); 
        this.enemySpawned1 = false;
        this.enemySpawned2 = false;
        this.bossSpawned = false;
        this.stageFinished = false;
        this.transitioningToNext = false;
    }



    preload()
    {
        super.preload();
        this.load.image('tip', 'assets/tip.png');
        this.load.image('tipBox', 'assets/tipBox.png');
        this.load.image('bgFinalBattle', 'assets/ShiroyamaBattle.jpg');
        this.load.spritesheet('buttons',
            'assets/buttonUI.png',
            {frameWidth: 16, frameHeight: 16 }
        );
        //this.load.audio('music_battle', 'assets/audio/warmusic.mp3');
    }

    create()
    {
        
        
            // Stop any currently playing track
            this.sound.stopAll();

            this.music = this.sound.add('music_battle', {volume: 0.12});
            this.music.setLoop(true);
            this.music.play();


        

        this.enemySpawned1 = false;
        this.enemySpawned2 = false;
        this.bossSpawned = false;
        this.stageFinished = false;

        let bg = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY, 'bgFinalBattle');
        bg.setDepth(0);
        bg.setScrollFactor(0);
        bg.setOrigin(0.5, 0.5);
        bg.setScale(2);

        console.log('Current active scene:', this.scene.key);
        super.create();
        
       
    }

    update()
    {
        super.update();

        if (this.player._health <= 0 && !this.stageFinished ) {
            this.showRestartScreen();
        }
        else if(this.stageFinished)
        {
            this.onStageFinished();
        }

        if (!this.enemySpawned1) {
            this.enemy1 = new MediumLowOpp(this, 600, 300);
            this.opps.add(this.enemy1);

            this.enemy2 = new MediumLowOpp(this, 700, 400);
            this.opps.add(this.enemy2);

            this.enemySpawned1 = true; // Prevents duplicate spawns
        }

        if(this.enemySpawned1&&!this.enemySpawned2&& this.enemy1._hp <=0 && this.enemy2._hp <= 0)
        {
            this.enemy3 = new MediumOpp(this, 500, 500);
            this.opps.add(this.enemy3);
            this.enemySpawned2 = true;
        }

        if(!this.bossSpawned && this.enemySpawned2 && this.enemy3._hp <= 0)
        {
            this.boss = new BossOpp(this, 400, 300);
            this.boss2 = new BossOpp(this, 650, 450);
            this.boss3 = new BossOpp(this,  500, 600);
            this.boss4 = new BossOpp(this, 650, 750);


            this.opps.add(this.boss);
            this.opps.add(this.boss2);
            this.opps.add(this.boss3);
            this.opps.add(this.boss4);
    
            this.bossSpawned = true;
            this.stageFinished = true;
        }

    }
    
    onStageFinished() {
       
        if (this.transitioningToNext) return; // Prevent re-triggering
            this.transitioningToNext = true;


            this.time.delayedCall(1000, () => {
                this.nextStage();
            });
        
        
    }

    nextStage()
    {
        this.cameras.main.fadeOut(1000, 0, 0, 0);
        this.cameras.main.once('camerafadeoutcomplete', () => {
            this.scene.start('DialogueScene11');
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

export default FinalBattleScene;