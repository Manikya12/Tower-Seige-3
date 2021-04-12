class box{
    constructor(x, y,width,height,form) {
      var options = {
        restitution:0.8,
        friction:1.0,
        density:1.0
       
    }
    this.image=loadImage(form)
    this.visibility = 225;
    this.body = Bodies.rectangle(x, y, width, height, options,form);
    this.width = width;
    this.height = height;

    World.add(world, this.body);
      }
      display(){

        if(this.body.speed>7){
          push()
          World.remove(world,this.body)
          this.visibility=this.visibility-7
          tint(255,this.visibility); 
          image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
          pop()
        } 
        else{
          push()
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width, this.height);
        pop()
        }      
      }
       score(){
         if(this.visibility<0 && this.visibility>-105){
           score++; 

         }
       }
}; 