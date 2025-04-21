import DialogueScene from "./dialogueScene.js";
import TutorialScene from "./tutorialScene.js";

class DialogueScene14 extends Phaser.Scene {
    constructor() {
        super({key:"DialogueScene14"});
    }


    create() {

        
        
        
        let dialogueData = [
            


            { speaker: "", side: "", text: "În 1868, s-a pus capăt shogunatului Tokugawa, împăratul Meiji a fost restaurat pe tron, și capitala fost mutată de la Kyoto la Edo, numită ulterior Tokyo." },
            { speaker: "", side: "",  text: "Aceasta a marcat începutul unei perioade de transformări profunde, cunoscută sub numele de Restaurația Meiji." },
            { speaker: "", side: "",  text: "În doar patru decenii, Japonia s-a transformat dintr-un stat feudal într-o putere modernă." },
            { speaker: "", side: "",  text: "Au fost adoptate reforme majore: sistemul feudal a fost desființat, iar armata modernă a fost organizată după model occidental." },
            { speaker: "", side: "",  text: "În 1889, Japonia a promulgat prima sa constituție, inspirată de modelul german." },
            { speaker: "", side: "",  text: "Astfel s-a instituit o monarhie constituțională, iar educația a devenit obligatorie. Industria a fost accelerată prin modernizarea infrastructurii și dezvoltarea fabricilor." },
            { speaker: "", side: "",  text: "Japonia a început rapid să concureze marile puteri ale lumii." },
            { speaker: "", side: "",  text: "În 1904-1905, Japonia a uimit lumea când a înfrânt Rusia în Războiul Ruso-Japonez." },
            { speaker: "", side: "",  text: "Era pentru prima dată când o națiune asiatică învingea o mare putere europeană - un adevărat șoc psihologic pentru Occident." },
            { speaker: "", side: "",  text: "Prin victoria sa, Japonia a demonstrat că este un stat modern și demn de respect pe scena internațională." },
            { speaker: "", side: "",  text: "Astfel s-a încheiat primul miracol japonez, o transformare spectaculoasă între 1868 și 1912." },
            { speaker: "", side: "",  text: "Iar spiritul lui Saigō Takamori, simbolul onoarei și loialității, a trăit mai departe în inima unei națiuni renăscute." },
            
            
        ];

        let actTitle = "Primul miracol japonez";

        this.scene.start('DialogueScene', { dialogue: dialogueData, background: 'emperor', nextScene:'MainMenu', actTitle: actTitle });


    }
}

export default DialogueScene14;