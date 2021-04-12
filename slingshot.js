class slingShot{
  constructor(body1,point2){
   var options={
       bodyA:body1,
       pointB:point2,
       length:10,
       stiffness:0.07
   }
   this.constraint=Matter.Constraint.create(options)
   World.add(world,this.constraint)
   this.pointB=point2
  }
  display(){
    if(this.constraint.bodyA){
  
    
      var pointA=this.constraint.bodyA.position;
      var pointB=this.pointB
      strokeWeight(3)
      line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
  }
  attach(body){
    this.constraint.bodyA = body;
}

  fly(){
    this.constraint.bodyA=null 
  }
}