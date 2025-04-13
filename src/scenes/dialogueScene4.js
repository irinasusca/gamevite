import DialogueScene from "./dialogueScene.js";
import TutorialScene from "./tutorialScene.js";

class DialogueScene4 extends Phaser.Scene {
    constructor() {
        super({key:"DialogueScene4"});
    }


    create() {
        

        let dialogueData = [

            { speaker: "samurai", side: "left",  text: "Trebuie să discutăm despre situația din Coreea." },
            { speaker: "samurai", side: "left",  text: "Refuză să-l recunoască pe Împăratul Meiji ca lider legitim al Japoniei!" },
            { speaker: "samurai", side: "left",  text: "Vă amintiți cum ne-au tratat emisarii atunci când am încercat să stabilim relații comerciale și diplomatice?" },
            { speaker: "samurai", side: "left",  text: "Este inadmisibil cum ni se adresează." },
            { speaker: "diplomat", side: "right",  text: "Și ce propui, Saigō?" },
            { speaker: "diplomat", side: "right",  text: "Să pornim un război doar pentru o chestiune de onoare?" },
            { speaker: "samurai", side: "left",  text: "Nu putem rămâne pasivi în fața unei asemenea insulte." },
            { speaker: "samurai", side: "left",  text: "În plus, acum că shogunatul s-a destrămat,  mii de samurai au rămas fără rol în societate." },
            { speaker: "samurai", side: "left",  text: "Un război e oportunitatea perfectă de a-i integra în noua Japonie -" },
            { speaker: "samurai", side: "left",  text: "De a le oferi un scop înainte ca frustrarea lor să se întoarcă împotriva statului." },
            { speaker: "samurai", side: "left",  text: "Vrei să-i lăsăm să piară în sărăcie?" },
            { speaker: "diplomat", side: "right",  text: "Într-adevăr, samuraii ar putea deveni o amenințare pentru stabilitate..." },
            { speaker: "diplomat", side: "right",  text: "Dar să nu uităm că și tu ești unul dintre ei, Saigō." },
            { speaker: "diplomat", side: "right",  text: "Poziția ta nu este tocmai obiectivă." },
            { speaker: "samurai", side: "left",  text: "Tocmai de aceea mă ofer să merg personal în Coreea, ca trimis special." },
            { speaker: "samurai", side: "left",  text: "Dacă voi fi atacat, guvernul va avea un motiv clar și justificat pentru a acționa." },
            { speaker: "diplomat", side: "right",  text: "Nu fi nechibzuit, Saigō." },
            { speaker: "diplomat", side: "right",  text: "Ai dreptate, avem suficiente motive să fim nemulțumiți, dar orice intervenție militară ar fi prematură." },
            { speaker: "diplomat", side: "right",  text: "Japonia este încă în plină modernizare, iar un război ar pune o povară mult prea mare pe umerii noștri." },
            { speaker: "samurai", side: "left",  text: "Așadar, nu vom face nimic?" },
            { speaker: "samurai", side: "left",  text: "Vom lăsa demnitatea Japoniei să fie călcată în picioare?" },
            { speaker: "samurai", side: "left",  text: "Un samurai adevărat nu ignoră o astfel de ofensă!" },
            { speaker: "diplomat", side: "right",  text: "Decizia a fost luată: nu vom interveni." },
            { speaker: "diplomat", side: "right",  text: "Și, mai mult, îți interzicem să pleci în Coreea cu intenția de a provoca un conflict." },
            { speaker: "samurai", side: "left",  text: "În acest caz, înseamnă că nu mai am ce căuta în acest guvern." },
            { speaker: "samurai", side: "left",  text: "Nu pot face parte dintr-o conducere care a uitat ce înseamnă onoarea japoneză." },
            { speaker: "samurai", side: "left",  text: "Îmi dau demisia." },

            
        ];

        let actTitle = "Birocrația Meiji";

        this.scene.start('DialogueScene', { dialogue: dialogueData, background: 'councilroom', nextScene:'DialogueScene5', actTitle: actTitle });


    }
}

export default DialogueScene4;