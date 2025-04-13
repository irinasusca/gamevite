import { Opp, LowClassOpp, MediumLowOpp, MediumOpp, BossOpp } from "../objects/enemy.js";
import Player from "../objects/player.js";

import { sceneEvents } from "../eventsCenter.js";



Phaser.GameObjects.GameObjectFactory.register('player', function(x, y, texture, frame)
{

    const sprite = new Player(this.scene, x, y, texture, frame);
    // Add to the scene
    this.scene.add.existing(sprite);
    this.scene.physics.add.existing(sprite);
    
    return sprite;
});


class BattleScene extends Phaser.Scene {
    constructor(key)
    {
        super(key);
    }

    preload()
    {
        
        this.load.image('arena', '../../public/assets/arena2.png');        
        

        this.load.spritesheet('player',
        '../../public/assets/PlayerAnims.png',
        {frameWidth: 42 , frameHeight: 42  }
        );

        this.load.spritesheet('opp',
            '../../public/assets/opp.png',
            {frameWidth: 42, frameHeight: 42 }
        );

        this.load.spritesheet('opp-green',
            '../../public/assets/opp-green.png',
            {frameWidth: 42, frameHeight: 42 }
        );

        this.load.spritesheet('opp-blue',
            '../../public/assets/opp-blue.png',
            {frameWidth: 42, frameHeight: 42 }
        );

        this.load.spritesheet('opp-grey',
            '../../public/assets/opp-grey.png',
            {frameWidth: 42, frameHeight: 42 }
        );

        this.load.spritesheet('opp-orange',
            '../../public/assets/opp-orange.png',
            {frameWidth: 42, frameHeight: 42 }
        );

        

        this.load.image('ui-heart-empty', '../../public/assets/heartEmpty.png');
        this.load.image('ui-heart-full', '../../public/assets/heartFull.png');
        this.load.image('ui-heart-half', '../../public/assets/heartHalf.png');

        console.log("k");
    }

    create()
    {

        

        this.scene.run('game-ui');
        this.cursors = this.input.keyboard.createCursorKeys();
        this.pointer = this.input.activePointer;

        this.wasd = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            right: Phaser.Input.Keyboard.KeyCodes.D
        });


        let arena = this.add.sprite(0, 0, 'arena');
    
        arena.setOrigin(0, 0);
        arena.setScale(0.9);
        console.log(arena);

        
    
        
        Player.createAnimations(this);
        Opp.createAnimations(this);
    
        this.player = this.add.player(300, 300, 'player');
        this.physics.add.existing(this.player);
        this.player.setCollideWorldBounds(true);
    
        this.cameras.main.startFollow(this.player, true);
    

        this.opps = this.physics.add.group();


    
        this.handlePlayerOppCollision = (player, enemy) => {

            if(enemy.attackCooldown)
            {
                return;
            }
            
    
            const dx = player.x - enemy.x;
            const dy = player.y - enemy.y; 
    
            const dir = new Phaser.Math.Vector2(dx, dy).normalize().scale(300);
            
            player.handleDamage(dir);
            
            enemy.handleAttack();
            ///functie de handle attack pt opp.

            sceneEvents.emit('player-health-changed', this.player.health);
    
        };
    
        this.physics.add.collider(this.player, this.opps, this.handlePlayerOppCollision, undefined, this);


                
    }

    

    update()
    {
        
  
    
        if(this.player)
        {
            this.player.update(this.cursors, this.pointer, this.wasd);
            this.restrictToCircle(this.player, 530, 500, 400);
        }
    
       
        this.opps.children.iterate(opp => {
            opp.moveTowardPlayer(this.player);
            this.restrictToCircle(opp, 400, 400, 400); 
        });

    }

    restrictToCircle(sprite, centerX, centerY, radius) {
        const dx = sprite.x - centerX;
        const dy = sprite.y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);
    
        if (distance > radius) {
            const angle = Math.atan2(dy, dx);
            sprite.x = centerX + Math.cos(angle) * radius;
            sprite.y = centerY + Math.sin(angle) * radius;
        }
    }
}

export default BattleScene;