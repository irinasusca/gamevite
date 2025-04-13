import DialogueScene from "./dialogueScene.js";
import TutorialScene from "./tutorialScene.js";

class DialogueScene7 extends Phaser.Scene {
    constructor() {
        super({key:"DialogueScene7"});
    }

    create() {

        this.scene.stop('game-ui');

        

        let dialogueData = [
            { speaker: "samurai", side: "left",  text: "Cum evoluează atacul asupra Castelului Kumamoto?" },
            { speaker: "evil_samurai", side: "right",  text: "Saigō, nu cred că vom reuși să-l cucerim." },
            { speaker: "evil_samurai", side: "right",  text: "Până acum l-am ținut sub asediu, așa cum ai ordonat, dar nu pare că vom reuși mai mult de-atât." },
            { speaker: "samurai", side: "left",  text: "Va trebui să ne mulțumim cu asta, cel puțin pentru moment." },
            { speaker: "samurai", side: "left",  text: "Le-am subestimat apărarea..." },
            { speaker: "samurai", side: "left",  text: "Ar fi trebuit să fie o victorie ușoară." },
            { speaker: "samurai", side: "left",  text: "Nu-mi dau seama cum vom mai ajunge la Tokyo în ritmul ăsta." },
            { speaker: "samurai", side: "left",  text: "Kumamoto este abia la jumatatea drumului." },
            { speaker: "evil_samurai", side: "right",  text: "Și acum? Ce facem?" },
            { speaker: "evil_samurai", side: "right",  text: "Imperiul a trimis deja întăriri." },
            { speaker: "evil_samurai", side: "right",  text: "Soldații noștri nu-i mai pot ține pe loc… " },
            { speaker: "evil_samurai", side: "right",  text: "Nu mai durează mult până ajung aici, la Kumamoto, și atunci ofensiva noastră va fi complet înăbușită." },
            { speaker: "samurai", side: "left",  text: "Dacă luăm în calcul samuraii care ni s-au alăturat de la începutul atacului, avem în jur de 20.000 de oameni." },
            { speaker: "samurai", side: "left",  text: "Putem trimite 15.000 spre Tabarazuka, să intercepteze întăririle imperiale." },
            { speaker: "samurai", side: "left",  text: "Ceilalți 5.000 vor rămâne aici, să mențină asediul asupra castelului." },
            { speaker: "samurai", side: "left",  text: "Ar trebui să fie suficient." },
            { speaker: "evil_samurai", side: "right",  text: "Situația e din ce în ce mai dificilă…" },
            { speaker: "evil_samurai", side: "right",  text: "Cerul se închide, pare că vine ploaia." },
            { speaker: "evil_samurai", side: "right",  text: "Dar este prea târziu să renunțăm acum." },


           
            
        ];

        let actTitle = "Atacul asupra Castelului Kumamoto";

                this.scene.start('DialogueScene', { 
                    dialogue: dialogueData, 
                    background: 'war_prep', 
                    nextScene: 'DialogueScene8', 
                    actTitle: actTitle 
                    });
            

    }
}

export default DialogueScene7;