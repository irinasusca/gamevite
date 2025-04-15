import DialogueScene from "./dialogueScene.js";
import TutorialScene from "./tutorialScene.js";

class DialogueScene3 extends Phaser.Scene {
    constructor() {
        super({key:"DialogueScene3"});
    }


    create() {

        this.scene.stop('game-ui');
        this.scene.run('fan-ui');
        
        this.sound.stopAll();
        this.music = this.sound.add('music_default', {volume: 0.4});
        this.music.setLoop(true);
        this.music.play();

        let dialogueData = [
            { speaker: "samurai", side: "left",  text: "Cum a putut shogunul să trimită soldați cu puștile goale pe front?" },
            { speaker: "samurai", side: "left",  text: "Nu aveau nicio șansă împotriva noastră." },
            { speaker: "evil_samurai", side: "right",  text: "Shogunul... a fugit." },
            { speaker: "evil_samurai", side: "right",  text: "Toți liderii noștri s-au retras la Edo, ne-au abandonat în mijlocul bătăliei…" },
            { speaker: "evil_samurai", side: "right",  text: "Am rămas fără conducători și fără resurse, nu mai avem nimic pentru care să luptăm." },
            { speaker: "samurai", side: "left",  text: "Lupta nu s-a încheiat, iar voi veți putea să o continuați, atâta timp cât veți alege sa o faceți pentru împărat." },
            { speaker: "samurai", side: "left",  text: "Interesul lui nu este de a se răzbuna pe voi." },
            { speaker: "samurai", side: "left",  text: "Va începe o nouă eră în Japonia." },
            { speaker: "samurai", side: "left",  text: "Și nu vom alunga străinii, cum v-a făcut Shogunul să credeți." },
            { speaker: "samurai", side: "left",  text: "Împreună, putem construi un viitor bazat pe modernizare." },
            { speaker: "samurai", side: "left",  text: "Dar nu vom lasa Occidentul să profite de noi, cum le-a permits shogunul." },
            { speaker: "evil_samurai", side: "right",  text: "După tot ce s-a întâmplat… poate că nu o merităm, dar vă mulțumesc." },
            { speaker: "evil_samurai", side: "right",  text: "E o șansă să ne răscumpărăm greșelile și să fim din nou de folos Japoniei." },

            
        ];

        let actTitle = "După lupta de la Toba-Fushimi...";

        this.scene.start('DialogueScene', { dialogue: dialogueData, background: 'night', nextScene:'DialogueScene4', actTitle: actTitle });


    }
}

export default DialogueScene3;