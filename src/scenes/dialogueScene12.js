import DialogueScene from "./dialogueScene.js";
import TutorialScene from "./tutorialScene.js";

class DialogueScene12 extends Phaser.Scene {
    constructor() {
        super({key:"DialogueScene12"});
    }


    create() {

        
        
        let dialogueData = [
            

            { speaker: "samurai", side: "left_hidden",  text: "Aceasta este sabia care m-a însoțit în nenumărate războaie..." },
            { speaker: "samurai", side: "left_hidden",  text: "Această sabie mi-a definit viața și tot ea va fi cea care mi-o va lua." },
            { speaker: "samurai", side: "left_hidden",  text: "Meiji a câștigat, dar oare Japonia va mai păstra amintirea celor care s-au jertfit pentru ea?" },
            { speaker: "samurai", side: "left_hidden",  text: "Poate că nu." },
            { speaker: "samurai", side: "left_hidden",  text: "Dar onoarea... onoare va dăinui, atâta timp cât există oameni care își amintesc." },
            
        ];

        let actTitle = "";

        this.scene.start('DialogueScene', { dialogue: dialogueData, background: 'cutscene2', nextScene:'DialogueScene13', actTitle: actTitle });


    }
}

export default DialogueScene12;