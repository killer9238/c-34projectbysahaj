class Box{
    constructor(x,y,width,height){
           var option={
               restituition:0.8,
               friction:1,
               density:0.04
           }
           this.body=Bodies.rectangle(x,y,width,height,option)
           this.width=width;
           this.height=height;
           World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        fill("green")
        rect(0,0,this.width,this.height)
        pop()
    }
}