var config = {
	type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1280,
        height: 720
    },
    backgroundColor: 0x000000,
	scene: [LoaderDonVito, GameTitle, Level1Title, Level1]
		
}

var game = new Phaser.Game(config);


