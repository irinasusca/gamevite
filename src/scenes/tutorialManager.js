class TutorialManager {
    constructor(scene) {
        this.scene = scene;
        this.isActive = false;
        this.currentStep = 0;
        this.tutorialSteps = [
            {
                text: "Ține click-dreapta apăsat ca să aperi!",
                condition: () => this.checkRightClickHeld(1000), // 2 seconds
                duration: 0
            },
            {
                text: "Bun! Acum atacă cu click-stânga!",
                condition: () => this.scene.input.activePointer.leftButtonDown(),
                duration: 0
            },
            {
                text: "Folosește săgețile sau w,a,s,d ca să te deplasezi!",
                condition: () =>
                    this.scene.cursors.left.isDown ||
                    this.scene.cursors.right.isDown ||
                    this.scene.cursors.up.isDown ||
                    this.scene.cursors.down.isDown||
                    this.scene.wasd.left.isDown ||
                    this.scene.wasd.right.isDown ||
                    this.scene.wasd.up.isDown ||
                    this.scene.wasd.down.isDown,
                duration: 0
            },
            {
                text: "Bravo! Acum, învinge armata inamică! Când ești pregătit, lovește (click-stânga).",
                condition: () => this.scene.input.activePointer.leftButtonDown(),
                duration: 0
            }
        ];

        this.createOverlay();
    }

    checkRightClickHeld(duration) {
        const pointer = this.scene.input.activePointer;
        if (pointer.rightButtonDown()) {
            if (!this.rightClickStartTime) {
                this.rightClickStartTime = this.scene.time.now; // Start timer
            }
            return this.scene.time.now - this.rightClickStartTime >= duration;
        } else {
            this.rightClickStartTime = null; // Reset if released early
            return false;
        }
    }

    createOverlay() {
        // Dark overlay
        this.overlay = this.scene.add.rectangle(-300, -100, this.scene.scale.width, this.scene.scale.height, 0x000000, 0.6)
            .setOrigin(0, 0)
            .setDepth(100)
            .setVisible(false);

        this.tutorialUI = this.scene.add.container(0, 0).setDepth(200).setScrollFactor(0);

            // Add the tip icon (100px size)
            this.tipIcon = this.scene.add.image(50, 30, 'tip')
                .setOrigin(0, 0)
                .setScale(0.5) // Ensure correct size
                .setVisible(false);
               
                this.scene.textures.get('tip').setFilter(Phaser.Textures.FilterMode.LINEAR);
            // Add the tip text box (200px wide)
            this.tipBox = this.scene.add.image(250, 60, 'tipBox')
                .setOrigin(0, 0)
                .setScale(0.8)
                .setVisible(false);
            
            // Add them to the tutorial UI container
            this.tipText = this.scene.add.text(
                this.tipBox.x + this.tipBox.displayWidth / 2 + 16, // Centered X
                this.tipBox.y + this.tipBox.displayHeight / 2, // Centered Y
                "", 
                {
                fontFamily: "'IM Fell English SC', serif",
                fontSize: "26px",
                fill: "#302d2a",
                align: "center",
                wordWrap: { width: this.tipBox.displayWidth - 70 } // Keep within box
                }
            )
            .setOrigin(0.5, 0.5) // Center text in box
            .setDepth(102)
            .setVisible(false);

        this.tutorialUI.add([this.tipIcon, this.tipBox, this.tipText]);
    }

    startTutorial() {
        if (this.isActive) return;

        this.isActive = true;
        this.scene.physics.pause(); // Pause game
        this.overlay.setVisible(true);
        this.tipIcon.setVisible(true);
        this.tipBox.setVisible(true);
        this.tipText.setVisible(true);

        this.runStep();
    }

    runStep() {
        if (this.currentStep >= this.tutorialSteps.length) {
            this.endTutorial();
            return;
        }

        let step = this.tutorialSteps[this.currentStep];
        this.tipText.setText(step.text);

        this.waitForCondition(step.condition);
    }

    waitForCondition(condition) {
        let checkInterval = this.scene.time.addEvent({
            delay: 100,
            callback: () => {
                if (condition()) {
                    checkInterval.remove(); // Stop checking once condition is met
                    this.currentStep++;
                    this.runStep();
                }
            },
            loop: true
        });
    }

    endTutorial() {
        this.isActive = false;
        this.scene.physics.resume();
        this.overlay.setVisible(false);
        this.tipIcon.setVisible(false);
        this.tipBox.setVisible(false);
        this.tipText.setVisible(false);
    }
}

export default TutorialManager;
