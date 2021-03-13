class Bot {
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    display(){
        fill("blue");
        rect(this.x,this.y,20,50);
    }
}