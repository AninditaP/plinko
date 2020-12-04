const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var divisions=[];
var divisionHeight=300;
var balls=[];
var plinko=[];

function setup() {
  createCanvas(550,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground=new Ground(200,790,700,20);


  for (var k = 10; k <=width; k = k + 80)
  { 
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var m = 10; m <=width; m = m + 60)
  { 
    balls.push(new Ball(m,350,20));
  }

  for (var l = 30; l<=width; l = l + 70)
  { 
    balls.push(new Ball(l,270,20));
  }

  for (var c = 10; c<=width; c = c + 70)
  { 
    balls.push(new Ball(c,200,20));
  }

  for (var l = 30; l<=width; l = l + 70)
  { 
    balls.push(new Ball(l,130,20));
  }

}

function draw() {
    background("black");
    
    

    if(frameCount%60===0){
      plinko.push(new Particle(random(100,300),10,10))
    }

    /*if(frameCount%60===0){
      plinko.display();
    }
*/
    for (var x= 0; x< plinko.length; x++) 
    { 
      plinko[x].display();
    }
    for (var i= 0; i < divisions.length; i++) 
    { 
      divisions[i].display(); 
    }
    for (var m= 0; m< balls.length; m++) 
    { 
      balls[m].display(); 
    }
    
    ground.display();

}