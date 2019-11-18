class Scene2 extends Phaser.Scene {
	constructor() {
		super("playGame");
		
	}
	create() {

		this.background = this.add.image(0,0,"background");
		this.background.setOrigin(0,0);
		
		this.add.text(20, 670, "MUSIC: OFF");
		this.add.text(20, 700, "MoherShooter v0.1 alpha. USTRZEL KONFITURE");
		
		// BABKA 1
		this.babka1 = this.add.sprite(1170, 490, "b1");
		this.babka1.setOrigin(0,0);
		this.babka1.flipX = true;
		// this.babka1.setScale(1);
		this.anims.create({
			key: "b1_anim",
			frames: this.anims.generateFrameNumbers("b1"),
			frameRate: 10,
			repeat: -1,

			
		});
		this.anims.create({
			key: "b1_kill_anim",
			frames: this.anims.generateFrameNumbers("b1kill"),
			frameRate: 10,
			repeat: 0,
			hideOnComplete: true
			
		});
		this.babka1.play("b1_anim");
		this.babka1.setInteractive();
		
		// BABKA 2
		this.babka2 = this.add.sprite(1171, 480, "b2");
		this.babka2.flipX = true;
		// this.babka2.setScale(1);
		this.anims.create({
			key: "b2_anim",
			frames: this.anims.generateFrameNumbers("b2"),
			frameRate: 10,
			repeat: -1,

			
		});
		this.anims.create({
			key: "b2_kill_anim",
			frames: this.anims.generateFrameNumbers("b2kill"),
			frameRate: 10,
			repeat: 0,
			hideOnComplete: true
			
		});
		this.babka2.play("b2_anim");
		this.babka2.setInteractive();
		
		// this.tweens.add({
			// targets: babka1,
			// duration: 2000,
			// angle: 360,
			// ease: 'Quad.easeInOut',
			// repeat: -1,
			// yoyo: true
			
		// });
		
		this.furka = this.add.image(387, 515, "car");
		this.furka.setOrigin(0,0);
		
		this.furki = this.add.image(0, 508, "cars");
		this.furki.setOrigin(0,0);
		
		this.smietnik = this.add.image(550, 430, "bin");
		this.smietnik.setOrigin(0,0);
		
		this.input.on('gameobjectdown', this.killBabkaOld, this);
		
		this.decapitationSound = this.sound.add("sfx_babka_decapitated");
		
		this.music = this.sound.add("music");	
		
		var musicConfig = {
			mute: false,
			volume: 0.2,
			rate: 1,
			detune: 0,
			seek: 0,
			loop: false,
			delay: 0
			
		}
		//this.music.play(musicConfig);
	
	}
	killBabka2(pointer, gameObject) {
		var key = gameObject.texture.key;
		gameObject.setTexture(key + 'kill');
		gameObject.play(key + '_anim');
		//this.decapitationSound.play();
		console.log('ZATLUKLES MOHERA!');
	
	}
	killBabkaOld(pointer, gameObject) {
		gameObject.setTexture('b1kill');
		gameObject.play('b1_kill_anim');
		this.decapitationSound.play();
		console.log('ZATLUKLES MOHERA!');
	
	}
	path1(babka, speed){
		babka.x -= 2.5*speed; 
		babka.y += 0.7*speed; 
		if (babka.x < 964) {
			babka.x -= speed;
			babka.y -= 0.7*speed;
				if (babka.x < 608) {
					babka.x -= 1.2*speed;
					babka.y -= 0.2*speed;
			
				}
			
		}
				
	}
	path2(babka, speed){
		babka.x -= 2*speed; 
		babka.y += 1.5*speed; 
		if (babka.x < 1095) {
			babka.x -= 0.5*speed;
			babka.y -= 1.5*speed;
				if (babka.x < 850) {
					babka.x -= 1.2*speed;
					babka.y -= 0.5*speed;
					if (babka.x < 625) {
						babka.x -= 1*speed;
						babka.y -= 0.1*speed;
						//babka1.rotate = true;
			
					}
				}
			
		}
				
	}
	randomIntFromInterval(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
		
	}
 	update() {
		// console.log('start: ' + pathNumber);
		if (pathNumber == "x") {
			pathNumber = this.randomIntFromInterval(0, 1);
			
		}
		if (this.babka2.x < 374) {
			this.babka2.visible = false;
			
		}
		if (this.babka1.x < 374) {
			this.babka1.visible = false;
			
		} else {
			
			//console.log('po losowaniu: ' + pathNumber);
			if (pathNumber == 0) {
				this.path1(this.babka2, 1);
				this.path2(this.babka1, 1);
				//console.log('wybrany path 1');
				
			} else {
				this.path2(this.babka1, 1);
				this.path1(this.babka2, 1);
				//console.log('wybrany path 2');
			
			}
			
		}
		
	}
	
}
