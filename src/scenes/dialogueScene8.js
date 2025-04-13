import DialogueScene from "./dialogueScene.js";
import TutorialScene from "./tutorialScene.js";

class DialogueScene8 extends Phaser.Scene {
    constructor() {
        super({key:"DialogueScene8"});
    }


    create() {

        
        
        let dialogueData = [
            { speaker: "evil_samurai", side: "right",  text: "Saigō! Castelul Kumamoto a contraatacat în toiul nopții…" },     
            { speaker: "evil_samurai", side: "right",  text: "Ne-au luat complet prin surprindere." },     
            { speaker: "evil_samurai", side: "right",  text: "Au reușit să pătrundă până la garnizoană." },     
            { speaker: "evil_samurai", side: "right",  text: "Asediul e practic pierdut." },    
            { speaker: "samurai", side: "left",  text: "Ce vești avem de la samuraii trimiși la Tabarazuka?" },
            { speaker: "samurai", side: "left",  text: "Ei ce au raportat?" }, 
            { speaker: "evil_samurai", side: "right",  text: "Au numărat peste 90.000 de soldați imperiali." },  
            { speaker: "evil_samurai", side: "right",  text: "Ploaia torențială le-a distrus puștile, au fost forțați să lupte cu săbiile." },  
            { speaker: "evil_samurai", side: "right",  text: "N-au avut nicio șansă." },  
            { speaker: "evil_samurai", side: "right",  text: "Au fost zdrobiți…" },  
            { speaker: "evil_samurai", side: "right",  text: "Și acum cei ce au rămas se retrag în grabă." },  
            { speaker: "samurai", side: "left",  text: "Asta înseamnă că armata imperială vine direct spre noi." },
            { speaker: "samurai", side: "left",  text: "Nu mai avem timp." },
            { speaker: "samurai", side: "left",  text: "Trebuie să retragem toate forțele de la Kumamoto chiar acum." },
            { speaker: "samurai", side: "left",  text: "Nu are rost să mai sacrificăm oameni fără motiv." },
            { speaker: "evil_samurai", side: "right",  text: "Și unde să mergem?" },  
            { speaker: "samurai", side: "left",  text: "Ne întoarcem la Kagoshima." },
            { speaker: "samurai", side: "left",  text: "Acolo vom decide ce urmează." },
            { speaker: "samurai", side: "left",  text: "Doar acolo mai avem un avantaj." },
            
                   
        ];

        let actTitle = "Încheierea asediului de la Kumamoto";

        this.scene.start('DialogueScene', { dialogue: dialogueData, background: 'rain_bg', nextScene:'DialogueScene9', actTitle: actTitle });


    }
}

export default DialogueScene8;