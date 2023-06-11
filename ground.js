class Ground {
    //construção do objeto
    constructor(x, y, w, h) {

        //propriedade para ficar parado
        var options = {
            isStatic: true
        };

        //criando o corpo
        this.body = Bodies.rectangle(x, y, w, h, options);

        //pegando duas medidas separadas para usar em outro momento

        this.w = w; //largura
        this.h = h; //altura

        //adicionando o corpo no mundo
        World.add(world, this.body);
    }

    //método de exibição
    show() {
        //pegando as posições do corpo e adicionando nesta variável
        var pos = this.body.position;

        //algumas características deste corpo
        push();
        rectMode(CENTER);
        stroke("green");
        fill("lime");
        //exibição 
        rect(pos.x, pos.y, this.w, this.h);
        pop();
    }

}







