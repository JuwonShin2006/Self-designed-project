class Player {
    constructor(x,y){
        this.x=x;
        this.y=y;

    }
    display(){
        fill("red");
        rect(this.x,this.y,20,50);
    }
}