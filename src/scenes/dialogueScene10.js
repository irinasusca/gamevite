import DialogueScene from "./dialogueScene.js";
import TutorialScene from "./tutorialScene.js";

class DialogueScene10 extends Phaser.Scene {
    constructor() {
        super({key:"DialogueScene10"});
    }


    create() {

        
        
        let dialogueData = [
            { speaker: "evil_samurai", side: "left",  text: "Au ajuns… Armata imperială e aici!" },
            { speaker: "general", side: "right",  text: "Dacă ni-l predați pe Saigō, poate că vă vom cruța viețile." },
            { speaker: "general", side: "right",  text: "Altfel, sunteți cu toții condamnați pentru această revoltă!" },
            { speaker: "evil_samurai", side: "left",  text: "Niciodată!" },
            { speaker: "evil_samurai", side: "left",  text: "Poate că voi ați uitat ce înseamnă onoarea unui samurai, dar noi nu vom ceda niciodată!" },
            { speaker: "evil_samurai", side: "left",  text: "Luptăm unul pentru toți și toți pentru unul!" },
            { speaker: "general", side: "right",  text: "Fie!" },
            { speaker: "general", side: "right",  text: "V-ați ales singuri soarta…" },
            { speaker: "general", side: "right",  text: "Atacați!" },

            
        ];

        let actTitle = "Confruntarea finală";

        this.scene.start('DialogueScene', { dialogue: dialogueData, background: 'shiroyama', nextScene:'FinalBattleScene', actTitle: actTitle });


    }
}

export default DialogueScene10;