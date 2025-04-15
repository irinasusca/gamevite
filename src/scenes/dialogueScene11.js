import DialogueScene from "./dialogueScene.js";
import TutorialScene from "./tutorialScene.js";

class DialogueScene11 extends Phaser.Scene {
    constructor() {
        super({key:"DialogueScene11"});
    }


    create() {

        this.scene.run('fan-ui');
        
        
        let dialogueData = [
            
            { speaker: "general", side: "right_hidden",  text: "Renunță, Saigō. Nu mai ai nimic!" },
            { speaker: "general", side: "right_hidden",  text: "Rebeliunea Satsuma se încheie acum!" },
            { speaker: "general", side: "right_hidden",  text: "Ești încolțit, nu mai ai nicio cale de ieșire!" },
            { speaker: "samurai", side: "left_hidden",  text: "Greșești… Chiar și în moarte, onoarea unui samurai adevărat dăinuie." },
            { speaker: "samurai", side: "left_hidden",  text: "Onoarea este tot ce mi-a rămas -" },
            { speaker: "samurai", side: "left_hidden",  text: "Și este singurul lucru pe care nu-l veți putea lua niciodată." },
            { speaker: "general", side: "right_hidden",  text: "Și totuși, moartea nu-ți va aduce victoria." },
            { speaker: "general", side: "right_hidden",  text: "E doar un final tăcut, fără glorie." },
            { speaker: "samurai", side: "left_hidden",  text: "Nu pentru un samurai." },
            { speaker: "samurai", side: "left_hidden",  text: "Harakiri... o moarte prin propria sabie." },
            { speaker: "samurai", side: "left_hidden",  text: "Este ultima noastră dovadă de curaj și loialitate." },
            { speaker: "samurai", side: "left_hidden",  text: "Mai bine o moarte cu onoare decât o viață în rușine." },
            { speaker: "general", side: "right_hidden",  text: "Cum îndrăznești?" },
            { speaker: "general", side: "right_hidden",  text: "Ești un nebun!" },
            { speaker: "general", side: "right_hidden",  text: "Vino ca prizonier și plătește pentru tot ce ai făcut." },
            { speaker: "general", side: "right_hidden",  text: "Răspunde pentru trădare și umilință, și dacă vei coopera, poate vei trăi până la execuția ta." },
            { speaker: "samurai", side: "left_hidden",  text: "Prea târziu. N-o să-mi scrieți voi sfârșitul." },
            
        ];

        let actTitle = "";

        this.scene.start('DialogueScene', { dialogue: dialogueData, background: 'cutscene1', nextScene:'DialogueScene12', actTitle: actTitle });


    }
}

export default DialogueScene11;