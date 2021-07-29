var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 var particle;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score = 0;
var turn;
var turnsLeft = 5
var gameState = 0;
var succesSound, permanentSound, failSound;
function preload(){
  /*permanentSound = loadSound('full.wav')*/
}
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  //particle = new Particle(200,10,10);
  
  succesSound = loadSound('point.wav');
  failSound = loadSound('fail.wav');
  

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 55; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 30; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 55; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 30; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    particle = new Particle(400, -500000, 15);
    turn=0;
}
 


function draw() {
  //permanentSound.play();
  ground.display();
  console.log(particle.velocityY)
  console.log(gameState)
  background("black");
  //console.log(particle.body.position.y);
  textSize(20)
  console.log(turn)
  //text("Turns left : "+turn-5, 200, 50)
  text("50", 30, 550);
  text("30", 110, 550);
  text("30", 185, 550);
  text("20", 270, 550);
  text("10", 345, 550);
  text("10", 430, 550);
  text("20", 505, 550);
  text("30", 590, 550);
  text("30", 675, 550);
  text("50", 750, 550);

  Engine.update(engine);

  //console.log(particle.body.position.y)
   if(gameState===0){
    text("Score : "+score,620,30);
     for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   particle.display();
   text("Turns taken = " + turn, 100, 30)
   text("Turns Left = " + turnsLeft, 100, 60)
  }
  if(gameState===1){
    textSize(50);
    text("GAME OVER", 250, 200);
    textSize(20);
    text("Your Score = "+score, 275, 300);
    if(score===250){
      textSize(35);
      text("UNBEATABLE", 230, 400);
    }
    if(score>199 && score<249){
      textSize(35);
      text("PLINKOTASTIC", 230, 400);
    }
    if(score>149 && score<199){
      textSize(35);
      text("YOU WERE AMAZING", 230, 400);
    }
    if(score>101 && score<149){
      textSize(35);
      text("INCREDIBLE", 230, 400);
    }
    if(score<101 && score>51){
      textSize(35);
      text("NICE JOB", 330, 400);
    }
    if(score<51){
      textSize(35);
      text("NOT BAD, BUT YOU CAN DO BETTER", 150, 400);
    }
  }
  
   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     
     score++;
   }*/
 
  /*for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   particle.display();
  //}
   if(particle.body.position.y>400){
    console.log(">350")
    giveScore();
  }
   //mousePressed();
   /*if(mousePressed()){
     spawnPlinko();
   }*/
   console.log(turn + "yo thee")
   /*if(particle.body.position.y>0){
     permanentSound.stop();
   }*/
}
function mousePressed(){
  console.log("hi")
  if(gameState === 0){
    particle = new Particle(mouseX, 10, 10);
    //particle.visible = true;
    console.log(particle.body.position.x);
    console.log(particle.body.position.y);
    //gameState = "play"
    //giveScore();
  }
}
function giveScore(){
  /*if(particle !== null){
    particle.display();*/
  if(gameState===0)
  if(particle.body.position.y>730 && particle.body.position.y<740){
    if(particle.body.position.x>0 && particle.body.position.x<80){
      score = score + 50;
      //particle = null
      turn = turn+1;
      turnsLeft = turnsLeft - 1
      if(turn===5){
        gameState = 1;
        console.log("state ism1")
    }
    succesSound.play();
  }
    if(particle.body.position.x>80 && particle.body.position.x<160){
      score = score + 30;
      //particle = null
      turn = turn+1;
      turnsLeft = turnsLeft - 1
      if(turn===5){
        gameState = 1;
    }
    succesSound.play();
  }
    if(particle.body.position.x>160 && particle.body.position.x<240){
      score = score + 30;
      //particle = null
      turn = turn+1;
      turnsLeft = turnsLeft - 1
      if(turn===5){
        gameState = 1;
    }
    succesSound.play();
  }
    if(particle.body.position.x>240 && particle.body.position.x<320){
      score = score + 20;
      //particle = null
      turn = turn+1;
      turnsLeft = turnsLeft - 1
      if(turn===5){
        gameState = 1;
    }
    succesSound.play();
  }
    if(particle.body.position.x>320 && particle.body.position.x<400){
      score = score + 10;
      //particle = null
      turn = turn+1;
      turnsLeft = turnsLeft - 1
      if(turn===5){
        gameState = 1;
    }
    succesSound.play();
  }
    if(particle.body.position.x>400 && particle.body.position.x<480){
      score = score + 10;
      //particle = null
      turn = turn+1;
      turnsLeft = turnsLeft - 1
      if(turn===5){
        gameState = 1;
    }
    succesSound.play();
  }
    if(particle.body.position.x>480 && particle.body.position.x<560){
      score = score + 20;
      //particle = null
      turn = turn+1;
      turnsLeft = turnsLeft - 1
      if(turn===5){
        gameState = 1;
    }
    succesSound.play();
  }
    if(particle.body.position.x>560 && particle.body.position.x<640){
      score = score + 30;
      //particle = null
      turn = turn+1;
      turnsLeft = turnsLeft - 1
      if(turn===5){
        gameState = 1;
    }
    succesSound.play();
  }
    if(particle.body.position.x>640 && particle.body.position.x<720){
      score = score + 30;
      //particle = null
      turn = turn+1;
      turnsLeft = turnsLeft - 1
      if(turn===5){
        gameState = 1;
    }
    succesSound.play();
  }
    if(particle.body.position.x>720 && particle.body.position.x<800){
      score = score + 50;
      //particle = null
      turn = turn+1;
      turnsLeft = turnsLeft - 1
      if(turn===5){
        gameState = 1;
    }
    succesSound.play();
  }
  if(particle.body.position.x<0){
    turn = turn+1;
    turnsLeft = turnsLeft - 1
    if(turn===5){
      gameState = 1;
  }
  failSound.play();
  }
  if(particle.body.position.x>800){
    turn = turn+1;
    turnsLeft = turnsLeft - 1
    if(turn===5){
      gameState = 1;
  }
  failSound.play();
  }
    }
  //}
}
