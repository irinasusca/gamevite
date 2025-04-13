import { sceneEvents } from "../eventsCenter.js";

class BattleSceneUI extends Phaser.Scene {


    constructor()
    {
        super({ key: 'game-ui'})
    }

    create()
    {
        this.hearts = this.add.group({
            classType: Phaser.GameObjects.Image,
        });

        

        this.hearts.createMultiple({
            key: 'ui-heart-full',
            setXY: {
                x: 30,
                y: 800 - 40, //bagpl aicea trb inaltimea laecran
                stepX: 48
            },
            quantity: 7,
           
        });

        this.hearts.children.iterate((heart) => {
            heart.setScale(4); // Adjust scale (1 = original size, 2 = double)
            heart.setOrigin(0, 1); // Align bottom-left
        });

        sceneEvents.on('player-health-changed', this.handlePlayerHealthChange, this);
        this.events.on(Phaser.Scenes.Events.SHUTDOWN, () =>
        {
            sceneEvents.off('player-health-changed', this.handlePlayerHealthChange, this);
        })

    }

    handlePlayerHealthChange(health)
    {
        this.hearts.children.each((go, idx) => {
            const heart = go;
            if(idx < health)
            {
                heart.setTexture('ui-heart-full');
            }
            else 
            {
                heart.setTexture('ui-heart-empty');
            }

        })
    }


}

export default BattleSceneUI;