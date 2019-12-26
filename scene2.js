class Scene2 extends Phaser.Scene {
	constructor() {
		
		super("playGame");
		
	}
    create() {
				
        // SETUP TŁA
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);
		
		
        this.add.text(20, 670, "MoherShOOter v0.2 alpha. Odpulaj mohery xD", { font: '32px Consolas', fill: '#00ffff' });
		
        // BABKA 1
        this.babka1 = this.add.sprite(1170, 490, "b1");

        this.babka1.setOrigin(0, 0);
        this.babka1.flipX = true;
        this.anims.create({

            key: "b1_anim",
            frames: this.anims.generateFrameNumbers("b1"),
            frameRate: 10,
            repeat: -1,

        });
        this.anims.create({

            key: "b1_kill_anim",
            frames: this.anims.generateFrameNumbers("b1_kill"),
            frameRate: 10,
            repeat: 0,
            hideOnComplete: true

        });
        this.babka1.play("b1_anim");
        this.babka1.setInteractive();
		
        // BABKA 2
        this.babka2 = this.add.sprite(1171, 480, "b2");

        this.babka2.flipX = true;
        this.anims.create({

            key: "b2_anim",
            frames: this.anims.generateFrameNumbers("b2"),
            frameRate: 10,
            repeat: -1,

        });
        this.anims.create({

            key: "b2_kill_anim",
            frames: this.anims.generateFrameNumbers("b2_kill"),
            frameRate: 10,
            repeat: 0,
            hideOnComplete: true

        });
        this.babka2.play("b2_anim");
        this.babka2.setInteractive();

        // WYSWIETLANIE SPRITE'U SAMOCHODU
        this.furka = this.add.image(387, 515, "car");
        this.furka.setOrigin(0, 0);

        // WYSWIETLANIE SPRITE'U WIELU SAMOCHODOW
        this.furki = this.add.image(0, 508, "cars");
        this.furki.setOrigin(0, 0);

        // WYSWIETLANIE SPRITE'U SMIETNIKA
        this.smietnik = this.add.image(550, 430, "bin");
        this.smietnik.setOrigin(0, 0);

        // EVENT ODPULANIA MOHERA
        let odpulony = false;
        if (odpulony == false) {
            this.input.on('gameobjectdown', this.killBot, this)
        }
        else {
            console.log("bot juz odpulony")
        }
        
        
		// SFX ODPULANIA MOHERA
		this.decapitationSound = this.sound.add("sfx_babka_decapitated");
		
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
		
		// GRAFICZNY BUTTON DO MUZYKI-PRZY KLIKNIECIU SIE SYPIE (GRYZIE SIE Z PODMIANA TEXTURY PRZY KLIKNIECIU NA BOTA)
		
		var musicStatus = false;

		/*this.musicButton = this.add.sprite(20, 20, 'musicbutton', 1).setInteractive();
		this.musicButton.setOrigin(0, 0);
		
		this.musicButton.on('pointerdown', () => {
			if (musicStatus == false)
			{
				this.music.play(musicConfig);
				musicStatus = true;
				this.musicButton.setFrame(0);
				//wlaczona muza
			}
			else
			{
				this.music.pause(musicConfig);
				musicStatus = false;
				this.musicButton.setFrame(1);
				//wylaczona muza
			}
		}, this);*/

		/*this.musicButton.on('pointerover', function () {

			this.setFrame(2);

		});

		this.musicButton.on('pointerout', function () {

			this.setFrame(1);

		});
		
 		this.musicButton.on('?', function () {

			this.setFrame(0);

		}); */
		
		
		// TEKSTOWY BUTTON DO MUZY - DZIALA OK
		
		var graphics = this.add.graphics();

        var color = 0x284f54;
        var alpha = 0.5 + ((10 / 10) * 0.5);
    
        graphics.fillStyle(color, alpha);
        graphics.fillRect(10, 12, 195, 80);
		
		var musicButton = this.add.text(20, 20, "MUSIC", { font: '64px Consolas', fill: '#ffffff' });
		
		musicButton.setInteractive();

		musicButton.on('pointerdown', () => {
			if (musicStatus == false)
			{
				this.music.play(musicConfig);
				musicStatus = true;
				musicButton = this.add.text(20, 20, "MUSIC", { font: '64px Consolas', fill: '#00ff00' });
			}
			else
			{
				this.music.pause(musicConfig);
				musicStatus = false;
				musicButton = this.add.text(20, 20, "MUSIC", { font: '64px Consolas', fill: '#ffffff' });
			}
		}, this);
		
		//ladne wyswietlanie statusow
		//https://labs.phaser.io/edit.html?src=src/components/data/set%20data%20event.js&v=3.21.0
		
	}
	
	// LEPSZA METODA ODPULANIA MOHERA
	killBot(pointer, gameObject) {
		
		var key = gameObject.texture.key;
		gameObject.setTexture(key + '_kill');
		gameObject.play(key + '_kill_anim');
		this.decapitationSound.play();
		babkaOdpulona = true;
		console.log("bot odpulony: " + babkaOdpulona);
	
    }
		
	// SZTYWNA SCIEZKA RUCHU BABKI1
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
	// SZTYWNA SCIEZKA RUCHU BABKI2
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
			
					}
					
				}
			
		}
				
	}

 	update() {
		
		
		// UKRYWANIE BABKI1 NA LEWO OD 374PX [KLATKA KOSAKA]
		if (this.babka1.x < 374) {
			
			//this.babka1.visible = false;
            this.babka1.x = 1170;
            this.babka1.y = 490;

		}
		
		// UKRYWANIE BABKI2 NA LEWO OD 374PX [KLATKA KOSAKA]
		if (this.babka2.x < 374) {
			
			//this.babka2.visible = false;
            this.babka2.x = 1170;
            this.babka2.y = 480;
			
		} else {
			
			// RUCH BABEK PO SCIEZKACH
			if (true) {
				
				this.path1(this.babka2, 1);
				this.path2(this.babka1, 1);
			
			}
			
		}
		
		//if (babkaOdpulona == true) {
			
			//this.babka1.setTexture(this.b1);
			//this.babka1.x = 1170;
            //this.babka1.y = 490;
			//this.path2(this.babka1, 2);
		
		//}
		
	}
	
}
