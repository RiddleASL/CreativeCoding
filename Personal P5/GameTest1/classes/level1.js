function Level1(player, canvasH, canvasW){
    this.player = player;
    this.canvasH = canvasH;
    this.canvasW = canvasW;

    this.halfH = player.h / 2;

    this.blocks = [
        new Block(0,75,75, canvasW),
        new Block(0,250,75, 300),
    ];

    this.draw = function(){

        this.blocks.forEach(block => {
            block.draw();
        });

        this.test = new spinDanger(300,300,100,5)

    }
}