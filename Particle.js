class Particle {
    constructor(x,y,r) {

        var options ={
            restitution:0.4,
            isStatic : false,
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }
    display() {

        var partipos = this.body.position;
        var angle = this.body.angle;
        //console.log("ok");
        push();
        translate(partipos.x, partipos.y);
	//console.log("ok");
    //console.log("from display "+ partipos.x);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

};