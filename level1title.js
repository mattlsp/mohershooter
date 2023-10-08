class Level1Title extends Phaser.Scene {
	constructor() {
		super("level1Title");
		
	}

	create() {
		this.gameOverMessage = this.add.text(640,250, 'LEVEL 1: PIASKI', { font: '64px Verdana', fill: '#00FF00', backgroundColor: '#0' });
		this.input.on('pointerup', function (pointer) {
        	this.scene.start("level1");
        }, this);
		
	}
	
}	