class GroundObj{
    constructor(x,y,width,height){
        this.width = width
        this.height = height
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
    }
    display(){
        push()
       rectMode(CENTER)
        fill("yellow")
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        pop()
    }
}