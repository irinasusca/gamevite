import DialogueScene from "./dialogueScene.js";
import TutorialScene from "./tutorialScene.js";

class DialogueScene5 extends Phaser.Scene {
    constructor() {
        super({key:"DialogueScene5"});
    }


    create() {
        
        

        let dialogueData = [
            { speaker: "woman", side: "right",  text: "Dragă, ai auzit știrile?" },
            { speaker: "samurai", side: "left",  text: "Nu… Ce s-a întâmplat?" },
            { speaker: "woman", side: "right",  text: "Guvernul a trimis o navă de război aici, în Kagoshima." },
            { speaker: "woman", side: "right",  text: "Vor să ne confişte armele din arsenal." },
            { speaker: "woman", side: "right",  text: "Se tem că veți porni o revoltă." },
            { speaker: "samurai", side: "left",  text: "O revoltă?" },
            { speaker: "samurai", side: "left",  text: "Tot ce am făcut de când m-am întors a fost să întemeiez Shi-gakkō, școala militară privată pentru samurai." },
            { speaker: "samurai", side: "left",  text: "Nu am încălcat nicio lege!" },
            { speaker: "woman", side: "right",  text: "Ei cred că școala este, de fapt, o organizație politică ostilă guvernului imperial." },
            { speaker: "woman", side: "right",  text: "Și se spune că aceasta nu va fi singura navă trimisă." },
            { speaker: "woman", side: "right",  text: "Trebuie să fii pregătit." },
            { speaker: "woman", side: "right",  text: "Nu cred că se vor opri aici." },
            { speaker: "samurai", side: "left",  text: "Trebuie să-i adun pe ceilalți lideri din Kagoshima." },
            { speaker: "samurai", side: "left",  text: "Cei mai mulți sunt foști elevi ai Shi-gakkō." },
            { speaker: "samurai", side: "left",  text: "Nu vor tolera faptul că guvernul ne tratează ca pe niște trădători." },
            { speaker: "woman", side: "right",  text: "Te rog… ai grijă de tine. Nu vreau să te pierd." },

        ];

        let actTitle = "5 ani mai târziu, în Kagoshima...";

        this.scene.start('DialogueScene', { dialogue: dialogueData, background: 'inside_house', nextScene:'DialogueScene6', actTitle: actTitle });


    }
}

export default DialogueScene5;