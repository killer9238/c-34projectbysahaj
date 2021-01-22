class SlingShot{
    constructor(bodyA,point1){
        var option={
            bodyA:bodyA,
            pointB:point1,
            stiffness:1.2,
            length:250
        }
        this.pointB=point1
        this.sling=Constraint.create(option)
        World.add(world,this.sling)
    }
    display(){
        push();
        strokeWeight(0)
        stroke("white")
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
        pop();
    }
    
}