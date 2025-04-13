import DialogueScene from "./dialogueScene.js";
import TutorialScene from "./tutorialScene.js";

class DialogueScene0 extends Phaser.Scene {
    constructor() {
        super({key:"DialogueScene0"});
    }


    create() {
        
        this.sound.stopAll();
        this.music = this.sound.add('music_default', {volume: 0.4});
        this.music.setLoop(true);
        this.music.play();

        let dialogueData = [

            { speaker: "", side: "",  text: "Până în anul 1868, Japonia fusese condusă timp de secole de shogunat, cu shogunul ca lider suprem, în timp ce împăratul avea doar un rol simbolic." },
            { speaker: "", side: "",  text: "Deschiderea recentă a Japoniei către influențele occidentale, inițiată de shogunat, a dus la o criză economică." },
            { speaker: "", side: "",  text: "Această situație a stârnit nemulțumirea mai multor nobili și tineri samurai, care au format o alianță împotriva shogunului." },
            { speaker: "", side: "",  text: "Au preluat controlul curții imperiale și l-au convins pe împăratul Meiji să își revendice autoritatea." },
            { speaker: "", side: "",  text: "În cele din urmă, shogunul Yoshinobu a proclamat ca va renunța la putere, sperând că va putea face parte din noul guvern." },
            { speaker: "", side: "",  text: "Dar Saigō Takamori, un tânăr samurai, nu a fost convins de sinceritatea resemnării sale." },

        ];

        let actTitle = "Ultimul Samurai - Saigō Takamori";

        this.scene.start('DialogueScene', { dialogue: dialogueData, background: 'edoArt', nextScene:'DialogueScene1', actTitle: actTitle  });


    }
}

export default DialogueScene0;