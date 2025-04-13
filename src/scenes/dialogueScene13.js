import DialogueScene from "./dialogueScene.js";
import TutorialScene from "./tutorialScene.js";

class DialogueScene13 extends Phaser.Scene {
    constructor() {
        super({key:"DialogueScene13"});
    }


    create() {

        this.sound.stopAll();
        this.sound.play('harakiri');
        
        
        let dialogueData = [
            

            { speaker: "", side: "",  text: "La treizeci de ani după moartea sa, Saigō Takamori a fost onorat cu o statuie." },
            { speaker: "", side: "",  text: "Deși guvernul l-a considerat un trădător, poporul Japoniei l-a recunoscut pentru cine era cu adevărat:" },
            { speaker: "", side: "",  text: "Un erou." },
            { speaker: "", side: "",  text: "Aceasta se află astăzi în inima orașului Tokyo, în Parcul Ueno." },
            { speaker: "", side: "",  text: "Statuia nu îl înfățișează ca pe un războinic, ci ca pe un om simplu, cu o demnitate tăcută, ce reflectă valorile și onoarea sa." },
            { speaker: "", side: "",  text: "El este Saigō Takamori." },
            { speaker: "", side: "",  text: "Ultimul samurai, prins între trecut și viitor." },
            { speaker: "", side: "",  text: "Saigō Takamori (1828 – 1877)" },
            { speaker: "", side: "",  text: "Onoarea lui trăiește în istorie." },

            
        ];

        let actTitle = "Moștenirea lui Saigō Takamori";

        this.scene.start('DialogueScene', { dialogue: dialogueData, background: 'statue', nextScene:'MainMenu', actTitle: actTitle });


    }
}

export default DialogueScene13;