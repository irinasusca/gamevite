import DialogueScene from "./dialogueScene.js";
import TutorialScene from "./tutorialScene.js";

class DialogueScene1 extends Phaser.Scene {
    constructor() {
        super({key:"DialogueScene1"});
    }


    create() {

        if (!this.scene.isActive('fan-ui')) {
            this.scene.run('fan-ui');
        }

        
        
        let dialogueData = [
            
            { speaker: "samurai", side: "left",  text: "Trebuie să acționăm." },
            { speaker: "samurai", side: "left",  text: "După cum am prezis..." },
            { speaker: "samurai", side: "left",  text: "Shogunul nu a acceptat să vină la Kyoto fără gărzi, ca să-și predea oficial puterea Împăratului." },
            { speaker: "samurai", side: "left",  text: "Și acum că am anunțat decretul care îi va confisca terenurile și desființa poziția, își mobilizează armata!" },
            { speaker: "diplomat", side: "right",  text: "Saigō-san… știm amândoi că shogunul Yoshinobu a cedat autoritatea." },
            { speaker: "diplomat", side: "right",  text: "Nu putem fi siguri că plănuiește un atac împotriva noastră." },
            { speaker: "diplomat", side: "right",  text: "Putem construi o tranziție pașnică, cu sprijinul curții imperiale." },
            { speaker: "samurai", side: "left",  text: "Cuvintele nu dizolvă puterea, diplomatule." },
            { speaker: "samurai", side: "left",  text: "Shogunatul nu e doar un titlu - " },
            { speaker: "samurai", side: "left",  text: "E o rețea de clanuri, funcționari și comandanți care controlează Japonia de peste două sute de ani." },
            { speaker: "samurai", side: "left",  text: "Crezi că o simplă proclamație rostită la Kyoto îi va face să se retragă?" },
            { speaker: "diplomat", side: "right",  text: "Shogunatul a oferit stabilitate până acum." },
            { speaker: "diplomat", side: "right",  text: "Dacă ne pastram cumpătul, avem șansa de a evita un război între Imperiu și shogunat." },
            { speaker: "samurai", side: "left",  text: "Stabilitate? Poate. Dar cu ce preț?" },
            { speaker: "samurai", side: "left",  text: "Un împărat redus la o umbră, în timp ce adevărata putere trona la Edo." },
            { speaker: "samurai", side: "left",  text: "E timpul ca Japonia să meargă înainte cu o armată unificată și o conducere legitimă, sub împărat." },
            { speaker: "diplomat", side: "right",  text: "Și ce facem cu Yoshinobu? " },
            { speaker: "diplomat", side: "right",  text: "Încă deține influență. Dar a dat înapoi." },
            { speaker: "diplomat", side: "right",  text: "Să nu-l împingem în război…" },
            { speaker: "samurai", side: "left",  text: "Predarea lui e o fațadă." },
            { speaker: "samurai", side: "left",  text: "Încă deține armata, pământuri și alianțe." },
            { speaker: "samurai", side: "left",  text: "I-am oferit șansa să vină la Kyoto fără gărzi. A refuzat." },
            { speaker: "samurai", side: "left",  text: "Iar acum… își mobilizează trupele." },
            { speaker: "samurai", side: "left",  text: "Ce altă dovadă mai vrei?" },
            { speaker: "diplomat", side: "right",  text: "Nu vrem un război civil, Saigō-san." },
            { speaker: "diplomat", side: "right",  text: "Nu vrem să distrugem țara în numele schimbării." },
            { speaker: "diplomat", side: "right",  text: "Dacă forțăm schimbarea cu sabia, cu ce suntem mai buni decât ei?" },
            { speaker: "samurai", side: "left",  text: "Pacea moare sub mâna corupției." },
            { speaker: "samurai", side: "left",  text: "Nu poate exista câtă vreme umbrele shogunatului bântuie peste hotărârile împăratului." },
            { speaker: "samurai", side: "left",  text: "O țară nu poate merge înainte dacă nu lasă în urmă ceea ce o ține pe loc." },
            { speaker: "samurai", side: "left",  text: "Doar așa putem construi o țară demnă de viitorul care ne așteaptă." },
            
        ];

        let actTitle = "Actul I: Războiul Boshin (1868-1869)";

        this.scene.start('DialogueScene', { dialogue: dialogueData, background: 'councilroom', nextScene:'DialogueScene2', actTitle: actTitle });


    }
}

export default DialogueScene1;