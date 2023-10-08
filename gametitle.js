class GameTitle extends Phaser.Scene {
	constructor() {
		super("gameTitle");
		
	}
	
	create() {
		this.background = this.add.image(0, 0, "titlescreen");
		this.background.setOrigin(0, 0);
		
		// SETUP MUZYKI
		this.music = this.sound.add("music");	
		
		var musicConfig = {
			
			mute: false,
			volume: 0.2,
			rate: 1,
			detune: 0,
			seek: 0,
			loop: true,
			delay: 0
			
		}
		
		this.input.on('pointerup', function (pointer) {
			this.music.play(musicConfig);
            this.scene.start("level1Title");

        }, this);
		
	}
	
}