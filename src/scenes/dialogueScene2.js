import DialogueScene from "./dialogueScene.js";

class DialogueScene2 extends Phaser.Scene {
    constructor() {
        super({key:"DialogueScene2"});
    }


    create() {
        
        
        

        let dialogueData = [
            { speaker: "samurai", side: "left",  text: "Cum îndrăzniți să atacați Kyoto?" },
            { speaker: "samurai", side: "left",  text: "Drumul vostru se oprește aici!" },
            { speaker: "samurai", side: "left",  text: "De la început am știut că ceva nu este în regulă cu capitularea shogunului." },
            { speaker: "samurai", side: "left",  text: "Acțiunile voastre au început un război civil." },
            { speaker: "samurai", side: "left",  text: "Și luptați de partea greșită!" },
            { speaker: "evil_samurai", side: "right",  text: "Tu și întreaga voastră provincie Satsuma sunteți ridicoli!" },
            { speaker: "evil_samurai", side: "right",  text: "Crezi că aveți vreo șansă împotriva noastră?" },
            { speaker: "evil_samurai", side: "right",  text: "Suntem 15.000, iar voi sunteți de trei ori mai puțini decât noi!" },
            { speaker: "samurai", side: "left",  text: "Dar suntem de trei ori mai pregătiți." },
            { speaker: "samurai", side: "left",  text: "Satsuma nu va cădea în fața voastră!" },
            { speaker: "samurai", side: "left",  text: "Am fost instruiți de armata franceză, iar trupele noastre sunt echipate cu armament modern, nu doar cu săbii." },
            { speaker: "samurai", side: "left",  text: "Și, din câte observ, nu pare ca v-ați așteptat să vă blocăm calea." },
            { speaker: "evil_samurai", side: "right",  text: "Ajunge cu vorbele!" },
            { speaker: "evil_samurai", side: "right",  text: "Dacă nu ne lăsați să trecem, vom pătrunde cu forța!" },
            { speaker: "evil_samurai", side: "right",  text: "Atacați!" },
           
        ];

        let actTitle = "Bătălia de la Toba-Fushimi";

        this.scene.start('DialogueScene', { dialogue: dialogueData, background: 'night', nextScene:'TutorialScene', actTitle: actTitle });


    }
}

export default DialogueScene2;