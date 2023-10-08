class LoaderDonVito extends Phaser.Scene {
	constructor() {
		super("loaderDonVito");
		
	}

	preload() {
		this.load.image("background", "assets/images/background1280x723.jpg");
		this.load.image("donvito", "assets/images/donvito.jpg");
		this.load.image("titlescreen", "assets/images/moher-title.jpg");
		this.load.image("car", "assets/images/car_118x117.png");
		this.load.image("cars", "assets/images/cars_394x113.png");
		this.load.image("bin", "assets/images/bin37x175.png");
		
		this.load.spritesheet("b1", "assets/images/babka1.png",{
			frameWidth: 43,
			frameHeight: 79,
			
		});
		
		this.load.spritesheet("b1_kill", "assets/images/babka1_kill.png",{
			frameWidth: 43,
			frameHeight: 79
			
		});
		
		this.load.spritesheet("b2", "assets/images/babka2.png",{
			frameWidth: 50,
			frameHeight: 98
			
		});	

		this.load.spritesheet("b2_kill", "assets/images/babka2_kill.png",{
			frameWidth: 50,
			frameHeight: 98
			
		});
		
		this.load.audio("sfx_babka_decapitated", ["assets/sounds/pyk.mp3", "assets/sounds/pyk.ogg"]);
		this.load.audio("music", ["assets/sounds/music.mp3", "assets/sounds/music.ogg"]);
		
	}
	
	create() {
		this.background = this.add.image(0, 0, "donvito");
		this.background.setOrigin(0, 0);
		this.input.on('pointerup', function (pointer) {
            this.scene.start("gameTitle");
			
        }, this);
		
	}
	
}