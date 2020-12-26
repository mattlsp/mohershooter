class TitleScreen extends Phaser.Scene {
	constructor() {
		super("titleScreen");
	}
	
	create() {
		this.background = this.add.image(0, 0, "titlescreen");
		this.background.setOrigin(0, 0);
		
		this.input.on('pointerup', function (pointer) {

            this.scene.start("playGame");

        }, this);
		
	}
	
}

	