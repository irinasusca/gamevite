class fanUI extends Phaser.Scene {


    constructor()
    {
        super({ key: 'fan-ui'})
    }

    preload()
    {
        this.load.spritesheet('fan',
            'assets/fanSpritesheet.png',
            {frameWidth: 367 , frameHeight: 274  }
            );
    }

    create()
    {
        
        const fanMenu = this.add.sprite(this.cameras.main.width, 0, 'fan', 3)
            .setOrigin(1, 0)
            .setDepth(105)
            .setScale(0.7)
            .setInteractive();


        this.anims.create({
            key: 'fanOpen',
            frames: this.anims.generateFrameNumbers('fan', {start: 3, end: 0}),
            frameRate:15,
            repeat: 0
        });

        this.anims.create({
            key: 'fanClose',
            frames: this.anims.generateFrameNumbers('fan', {start: 0, end: 3}),
            frameRate:15,
            repeat: 0
        });

        fanMenu.on('pointerover', () => {
            fanMenu.anims.play('fanOpen', true);
            this.sound.play('fan-open', {volume: 0.4});
        });
        
        fanMenu.on('pointerout', () => {
            fanMenu.anims.play('fanClose', true);
        });
        
        fanMenu.on('pointerdown', (pointer) => {
            const bounds = fanMenu.getBounds();
            const localY = pointer.y - bounds.y;
            const third = bounds.height / 3;
        
            if (localY < third) {
                this.game.events.emit('switch-scene', 'DialogueScene1');
            } else if (localY < third * 2) {
                this.game.events.emit('switch-scene', 'DialogueScene6');
            } else {
                this.game.events.emit('switch-scene', 'MainMenu');
            }
        });

    }

   


}

export default fanUI;