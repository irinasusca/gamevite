
class Opp extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, texture, frame, speed, attackSpeed, hp, scale) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.colorVariant = texture;
        this.anims.play(`${this.colorVariant}-idle`, true);
        this.setScale(scale);

        this._speed = speed ?? Phaser.Math.Between(50, 150);
        this._attackSpeed = attackSpeed ?? 1000;
        this._hp = hp ?? 3;
        this._maxHp = this._hp;

        this.healthBar = scene.add.graphics();
        this.drawHealthBar();

        this.attackCooldown = false;
        this.isKnockedBack = false;
    }

    set speed(value)
    {  
        this._speed = value;
    }

    set attackSpeed(value) {
        this._attackSpeed = value;
    }

    set hp(value)
    {
        this._hp = value;
    }

    drawHealthBar() {
        this.healthBar.clear();

        // Background (Red - missing health)
        this.healthBar.fillStyle(0xff0000);
        this.healthBar.fillRect(this.x - 10, this.y - 45, 30, 5);

        // Foreground (Green - current health)
        this.healthBar.fillStyle(0x00ff00);
        this.healthBar.fillRect(this.x - 10, this.y - 45, (30 * (this._hp / this._maxHp)), 5);
    }

    updateHealthBarPosition() {
        this.healthBar.clear();
        this.drawHealthBar();
    }

    preUpdate(time, delta)
    {
        super.preUpdate(time, delta);
        this.updateHealthBarPosition();
    }

    

    static createAnimations(scene) {
        const colors = ['opp', 'opp-blue', 'opp-green', 'opp-grey', 'opp-orange'];
    
        colors.forEach(color => {
            scene.anims.create({
                key: `${color}-idle`,
                frames: scene.anims.generateFrameNames(color, { start: 0, end: 0 }),
                frameRate: 5,
                repeat: -1
            });
    
            scene.anims.create({
                key: `${color}-run`,
                frames: scene.anims.generateFrameNames(color, { start: 9, end: 12 }),
                frameRate: 10,
                repeat: -1
            });
    
            scene.anims.create({
                key: `${color}-atk`,
                frames: scene.anims.generateFrameNames(color, { start: 1, end: 8 }),
                frameRate: 10,
            });
        });
    }

    handleAttack() {
        ///ataca jucatorul
        ///se opreste 3 secunde
        if(this.attackCooldown) return;
        this.scene.sound.play('woosh', { volume: 1.5 });
        this.setVelocity(0, 0);
        this.anims.play(`${this.colorVariant}-atk`, true);
        this.attackCooldown = true; 

        this.scene.time.delayedCall(this._attackSpeed, () => {
        console.log("Cooldown reset");
        this.attackCooldown = false; // Allow attack again
        });

    }

    takeDamage(dir)
    {
        if (this.isKnockedBack) return;
        this._hp -=1;
        this.drawHealthBar();
        console.log(`Opponent HP: ${this._hp}`);
        if (this._hp <= 0) {
            this.healthBar.destroy();
            this.destroy(); // Remove if HP is 0
        }
        else
        {
            this.isKnockedBack = true;
            const knockbackStrength = 10;
            this.setVelocity(dir.x * knockbackStrength, dir.y * knockbackStrength);
            this.setTint(0xff0000);
            this.scene.time.delayedCall(250, () => {
                this.setTint(0xffffff);
                this.setVelocity(0, 0);
                this.isKnockedBack = false;
            });
        }
        
    }

    moveTowardPlayer(player) {
        

        if(this.isKnockedBack)
            return;

        if (this.attackCooldown) {
            this.setVelocity(0, 0); // Ensure the enemy stays stopped
            return; // Don't move while in cooldown
        }

        const dx = player.x - this.x;
        const dy = player.y - this.y;

        const magnitude = Math.sqrt(dx * dx + dy * dy);
        
        if (magnitude === 0) return;

        const normalizedX = dx / magnitude;
        const normalizedY = dy / magnitude;

        this.setVelocity(normalizedX * this._speed, normalizedY * this._speed);

        if (normalizedX < 0) {
            this.flipX = true; // Face left
        } else {
            this.flipX = false; // Face right
        }

        if (this.anims.currentAnim.key !== 'opp-run') this.anims.play(`${this.colorVariant}-run`, true);


    }
}

class LowClassOpp extends Opp {
    constructor(scene, x, y) {
        const textures = ['opp', 'opp-blue', 'opp-green', 'opp-grey', 'opp-orange'];
        Phaser.Math.RND.seed = Date.now(); // Force a new seed every time
        const randomTexture = Phaser.Utils.Array.GetRandom(textures);

        super(scene, x, y, randomTexture, null, 40, 2000, 3, 3);
    }
}

class MediumLowOpp extends Opp
{
    constructor(scene, x, y)
    {
        const textures = ['opp', 'opp-blue', 'opp-green', 'opp-grey', 'opp-orange'];
        Phaser.Math.RND.seed = Date.now(); // Force a new seed every time
        const randomTexture = Phaser.Utils.Array.GetRandom(textures);

        super(scene, x, y, randomTexture, null, 60, 1500, 4, 3.5);
    }
}

class MediumOpp extends Opp {
    constructor(scene, x, y) {
        super(scene, x, y, 'opp', null, 70, 2500, 7, 4);
    }
}

class BossOpp extends Opp {
    constructor(scene, x, y) {
        super(scene, x, y, 'opp', null, 100, 1500, 7, 3); // Same attack speed as player
    }
}


export { Opp, LowClassOpp, MediumLowOpp, MediumOpp, BossOpp };