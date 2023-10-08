class Level1Title extends Phaser.Scene {
	constructor() {
		super("level1Title");
		
	}

	create() {
		this.gameOverMessage = this.add.text(640,350, 'LEVEL 1: PIASKI', { font: '64px Verdana', fill: '#00FF00', backgroundColor: '#0' });
		this.input.on('pointerup', function (pointer) {
			//this.scale.setGameSize(window.innerWidth, window.innerHeight);
			//this.scale.startFullscreen();
        	this.scene.start("level1");
        }, this);
		
	}
	
}	