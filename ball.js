class Ball{

    constructor (x, y, r)  {
        var options = {
            isStatic:false,
            restitution:0,
            friction:0.8,
            density:1    
        }
        this.r=r;
        this.x=x;
        this.y=y;
        
        this.body=Bodies.circle(this.x, this.y,this.r,options);
        World.add(world, this.body);

        
    }
    display(){
        var pos=this.body.position;
        
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        ellipse( 0, 0, this.r, this.r);

        pop();

    }




}
