class polygon {
    constructor(x, y, r) {
      var options={
        restitution:0.8,
        friction:0.5,
        density:1.2

      }
      this.r=r
      this.body = Bodies.circle(x, y, r ,options);
      this.polImg=loadImage("polygon.png")
      World.add(world,this.body);
    }
      display(){
        
        var pos =this.body.position;
        push()
        translate(pos.x, pos.y);
        imageMode(CENTER);
        fill(255,0,255);
        image(this.polImg,0, 0,this.r,this.r);
        pop()
      }
    };
