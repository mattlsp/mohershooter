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
	scene: [Scene1, Scene2]
		
}

var game = new Phaser.Game(config);

var babkaOdpulona = "false";

//var button;