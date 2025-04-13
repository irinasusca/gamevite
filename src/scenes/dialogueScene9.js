import DialogueScene from "./dialogueScene.js";
import TutorialScene from "./tutorialScene.js";

class DialogueScene9 extends Phaser.Scene {
    constructor() {
        super({key:"DialogueScene9"});
    }


    create() {

        
        
        let dialogueData = [
            { speaker: "samurai", side: "left",  text: "În sfârșit… aproape am ajuns în Kagoshima." },
            { speaker: "samurai", side: "left",  text: "Haideți să facem un popas aici, pe dealul Shiroyama." },
            { speaker: "samurai", side: "left",  text: "Câți am mai rămas?" },
            { speaker: "evil_samurai", side: "right",  text: "Doar 500, Saigō…" },
            { speaker: "evil_samurai", side: "right",  text: "Dar ți-am spus, vom rămâne loiali până la capăt." },
            { speaker: "evil_samurai", side: "right",  text: "Satsuma nu se predă ușor..." },
            { speaker: "samurai", side: "left",  text: "Privește… în depărtare se văd forțele imperiale." },
            { speaker: "samurai", side: "left",  text: "Ne vor ajunge din urmă în curând." },
            { speaker: "samurai", side: "left",  text: "Par să fie… cel puțin 30.000." },
            { speaker: "samurai", side: "left",  text: "Suntem înconjurați." },
            { speaker: "samurai", side: "left",  text: "Nu mai are sens să fugim." },
            { speaker: "evil_samurai", side: "right",  text: "Și atunci, ce ordine ne dai?" },
            { speaker: "samurai", side: "left",  text: "Ne luptăm." },
            { speaker: "samurai", side: "left",  text: "Până la ultimul om." },
            { speaker: "samurai", side: "left",  text: "Moartea ne așteaptă, dar onoarea ne va supraviețui." },
            { speaker: "evil_samurai", side: "right",  text: "Așa să fie!" },
            
        ];

        let actTitle = "Bătălia de la Shiroyama";

        this.scene.start('DialogueScene', { dialogue: dialogueData, background: 'shiroyama', nextScene:'DialogueScene10', actTitle: actTitle });


    }
}

export default DialogueScene9;