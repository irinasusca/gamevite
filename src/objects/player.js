

const HealthState = {
    Idle: "IDLE",
    Damage: "DAMAGE",
    Dead: "DEAD"
};

let gravelSound = false;
let gravelAudio = null;

class Player extends Phaser.Physics.Arcade.Sprite {
    healthState = HealthState.Idle;
    damageTime = 0;

    _health = 7;

    attackCooldown = false;
    defenseCooldown = false;

    

    get health()
    {
        return this._health;
    }

 

    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.anims.play('idle', true);
        this.setScale(3);

        
        // this.body.setSize(this.player.width, this.player.height);
    }



    static createAnimations(scene) {
        scene.anims.create({
            key: 'idle',
            frames: scene.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
            frameRate: 4,
            repeat: -1
        });


        scene.anims.create({
            key: 'right',
            frames: scene.anims.generateFrameNumbers('player', { start: 4, end: 7 }),
            frameRate: 10,
            repeat: -1
        });

        scene.anims.create({
            key: 'attack',
            frames: scene.anims.generateFrameNumbers('player', {start: 8, end: 13}),
            frameRate: 10
        });

        scene.anims.create({
            key:'defend',
            frames: scene.anims.generateFrameNumbers('player', {start: 14, end: 14}),
            frameRate: 1,
            repeat: -1
        });
     

        scene.anims.create({
            key:'faint',
            frames: scene.anims.generateFrameNumbers('player', {start: 15, end: 22}),
            frameRate: 10
        })
    }

    handleAttack()
    {
        if(this.attackCooldown) return;
        this.scene.sound.play('woosh', { volume: 1 });
        this.attacking = true; 
        this.anims.play('attack', true);
        console.log("attack");
        let closestEnemy = null;
        let closestDistance =200; // Adjust this for attack range

        this.scene.opps.children.iterate((enemy) => {
            const distance = Phaser.Math.Distance.Between(this.x, this.y, enemy.x, enemy.y);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestEnemy = enemy;
            }
        });

        if (closestEnemy) {
            console.log("Attack landed on enemy!");
            const dx = closestEnemy.x - this.x;
            const dy = closestEnemy.y - this.y;
            const dir = new Phaser.Math.Vector2(dx, dy).normalize();
            closestEnemy.takeDamage(dir);
            
        } else {
            console.log("No enemy in range.");
        }

        this.attackCooldown = true;
        this.scene.time.delayedCall(500, () => {
            this.attackCooldown = false; // Reset cooldown after 500ms

        });

        this.once('animationcomplete', () => {
            this.attacking = false;
        });
    }



    handleDamage(dir) {
        
        if (this._health<=0 || this.healthState === HealthState.Dead) return;

        if (this.healthState === HealthState.Damage) return;

        if (this.scene.input.activePointer.rightButtonDown() && !this.defendCooldown) {
            this.scene.sound.play('clash', {volume: 0.25});
            console.log("Defense successful! No damage taken.");
            this.defendCooldown = true; // Activate cooldown
            this.scene.time.delayedCall(4000, () => {
                this.defendCooldown = false; // Reset cooldown after 1 second
            });
            return; // Exit without taking damage
        }

        const knockbackStrength = 0.8;
        this.setVelocity(dir.x * knockbackStrength, dir.y * knockbackStrength);
        this.setTint(0xff0000);
        this.healthState = HealthState.Damage;

        --this._health;

        this.scene.time.delayedCall(250, () => {
            this.setVelocity(0, 0); // Stop after 250ms
            if(this._health > 0 ) this.healthState = HealthState.Idle;
            this.setTint(0xffffff);
        });

        
        

        console.log(this._health);
        if(this._health<=0)
        {
            //die
            console.log("BEFORE: healthState =", this.healthState);
            this.setVelocity(0, 0);
            this.healthState = HealthState.Dead;
            console.log("AFTER: healthState =", this.healthState);
            this.anims.play('faint');
            
           
        }
    }

    walkingSound(action)
    {
        
        if(action === 'start' && gravelSound && gravelAudio.isPlaying)
            return;

        if (action === 'start' && !gravelAudio) {
            gravelAudio = this.scene.sound.add('gravel', {
                loop: true,  // Loop the sound while moving
                volume: 0.1,  // Set the volume to 50%
                rate: 3  // Set the volume to 50%
            });
            gravelAudio.play();
        }
        

        if (action === 'stop' && gravelAudio && gravelAudio.isPlaying) {
            gravelAudio.stop();  // Stop the sound
            gravelAudio = null;  // Clear the reference
        }

        
    }

    update(cursors, pointer, wasd) {

       // console.log(`Update running: healthState = ${this.healthState}`);
        
        if (this.healthState === HealthState.Dead) 
            {
                this.setVelocity(0, 0);
                return;
            } 
        

        if (this.healthState === HealthState.Damage || this.attacking) return;
        

       

        this.setVelocity(0, 0);

        if (cursors.left.isDown || wasd.left.isDown) {
            this.setVelocityX(-160);
            this.anims.play('right', true);
            this.flipX = true;
        }

        else if (cursors.right.isDown || wasd.right.isDown) {
            this.setVelocityX(160);
            this.anims.play('right', true);
            this.flipX = false;
        }


        else if (cursors.up.isDown || wasd.up.isDown) {
            this.setVelocityY(-160);
            this.anims.play('right', true);
        }

        else if (cursors.down.isDown || wasd.down.isDown) {
            this.setVelocityY(160);
            this.anims.play('right', true);
        }

       

        if (this.body.velocity.x == 0 && this.body.velocity.y == 0) {
            this.anims.play('idle', true);
            
            
            this.walkingSound('stop');
            
            
        }
        else 
        {
            this.walkingSound('start');
            
        }

        

        if(pointer.rightButtonDown())
        {
            this.setVelocity(0, 0);
            this.anims.play('defend', true);
        }
        else if (pointer.leftButtonDown()) {
            this.setVelocity(0, 0);
            this.handleAttack();

        }

    }
}

export default Player;
