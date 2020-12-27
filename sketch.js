const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(880,300,70,70);
    box2 = new Box(980,300,70,70);
    box3= new Box(880,200,70,70)
    box4= new Box(980,200,70,70)
    box5= new Box (930,100,70,70)
    ground = new Ground(600,height,1200,20)
    pig=new Pig (920,300)
    pig2=new Pig(920,200)
    log=new Log (940,200,260,PI/2)
    log2=new Log(940,100,260,PI/2)
log3=new Log(940,50,160,PI/7)
log4=new Log(1000,50,160,-PI/7)
    bird=new Bird (240,200,70,30)

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig.display();
    pig2.display();
    log.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}