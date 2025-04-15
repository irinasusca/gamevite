import DialogueScene from "./dialogueScene.js";
import TutorialScene from "./tutorialScene.js";

class DialogueScene6 extends Phaser.Scene {
    constructor() {
        super({key:"DialogueScene6"});
    }


    create() {

        this.scene.run('fan-ui');
        
        let dialogueData = [
            { speaker: "samurai", side: "left",  text: "Presupun că toată lumea a aflat deja ce a făcut guvernul imperial." },
            { speaker: "samurai", side: "left",  text: "Trebuie să calculăm cu grijă pașii pe care îi vom face de acum înainte." },
            { speaker: "evil_samurai", side: "right",  text: "Ce rost are să mai chibzuim?" },
            { speaker: "evil_samurai", side: "right",  text: "E limpede ce trebuie făcut!" },
            { speaker: "evil_samurai", side: "right",  text: "Dacă vor o revoltă, atunci haideți să le oferim una!" },
            { speaker: "samurai", side: "left",  text: "Nu vă grăbiți." },
            { speaker: "samurai", side: "left",  text: "Armata imperială nu e o glumă." },
            { speaker: "samurai", side: "left",  text: "Am văzut-o cu ochii mei… și eu însumi am ajutat la formarea ei." },
            { speaker: "samurai", side: "left",  text: "O confruntare directă ar fi aproape imposibil de câștigat." },
            { speaker: "evil_samurai", side: "right",  text: "Nu te recunosc, Saigō!" },
            { speaker: "evil_samurai", side: "right",  text: "Nu tu erai cel care spunea că un samurai adevărat nu întoarce privirea când onoarea îi este călcată în picioare?" },
            { speaker: "evil_samurai", side: "right",  text: "Ne-au tăiat salariile, statutul social, ne-au lăsat fără nimic!" },
            { speaker: "evil_samurai", side: "right",  text: "După o viață dedicată Japoniei, asta e răsplata?" },
            { speaker: "evil_samurai", side: "right",  text: "Sărăcie și dispreț?" },
            { speaker: "evil_samurai", side: "right",  text: "Și acum cuteză să vină și să ne confiște până și armele?" },
            { speaker: "samurai", side: "left",  text: "Nu spun că e drept ceea ce fac…" },
            { speaker: "samurai", side: "left",  text: "Dar o revoltă împotriva lor e un drum fără întoarcere." },
            { speaker: "samurai", side: "left",  text: "Aproape sinucigaș." },
            { speaker: "samurai", side: "left",  text: "Ne-am putea pierde totul - viața, familiile, viitorul…" },
            { speaker: "evil_samurai", side: "right",  text: "Tocmai de aceea avem nevoie de tine." },
            { speaker: "evil_samurai", side: "right",  text: "Fără tine, nu avem nicio șansă." },
            { speaker: "evil_samurai", side: "right",  text: "Ai câștigat respectul tuturor din această sală." },
            { speaker: "evil_samurai", side: "right",  text: "Dacă cineva ne poate aduce victoria, acela ești tu." },
            { speaker: "evil_samurai", side: "right",  text: "Și știi bine că ți-am fi loiali până la moarte." },
            { speaker: "evil_samurai", side: "right",  text: "Gândește-te, Saigō -" },
            { speaker: "evil_samurai", side: "right",  text: "Gândește-te la cât de multe am putea face, nu doar pentru noi, ci pentru întreaga Japonie!" },
            { speaker: "samurai", side: "left",  text: "Nu știu ce să spun..." },
            { speaker: "samurai", side: "left",  text: " Dacă pornim pe drumul acesta, va fi nevoie de o pregătire cum Japonia n-a mai cunoscut vreodată." },
            { speaker: "evil_samurai", side: "right",  text: "..." },
            { speaker: "samurai", side: "left",  text: "Onoarea nu se negociază…" },
            { speaker: "samurai", side: "left",  text: "Ne pregătim de război." },

            
        ];

        let actTitle = "Actul II: Rebeliunea Satsuma (1877)";

        this.scene.start('DialogueScene', { dialogue: dialogueData, background: 'councilroom_kagoshima', nextScene:'DialogueScene7', actTitle: actTitle });


    }
}

export default DialogueScene6;