const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var ground;
var engine,world;
var box,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,
box24,box25
var superhero;
var rope;
var bgimage;
var monster,monsterimage;

function preload(){
    bgimage=loadImage("GamingBackground.png")
    monsterimage=loadImage("Monster-01.png")
}
function setup(){
    createCanvas(3000,800)
    engine=Engine.create()
    world=engine.world;
    ground=new Ground(600,700,1200,20);
   
    box=new Box(900,100,70,70)
    box2=new Box(900,100,70,70)
    box3=new Box(900,100,70,70)
    box4=new Box(900,100,70,70)
    box5=new Box(900,100,70,70)
    box6=new Box(900,100,70,70)
    box21=new Box(900,100,70,70)

    box7=new Box(800,100,70,70)
    box8=new Box(800,100,70,70)
    box9=new Box(800,100,70,70)
    box10=new Box(800,100,70,70)
    box11=new Box(800,100,70,70)
    box12=new Box(800,100,70,70)
    box22=new Box(800,100,70,70)
    
    box13=new Box(700,100,70,70)
    box14=new Box(700,100,70,70)
    box15=new Box(700,100,70,70)
    box16=new Box(700,100,70,70)
    box17=new Box(700,100,70,70)
    box18=new Box(700,100,70,70)
    box19=new Box(700,100,70,70)
    box20=new Box(700,100,70,70)
   
    superhero=new SuperHero(200,200,190,190)
    rope=new SlingShot(superhero.body,{x:500,y:50})
    monster=new Monster(1500,300,300,300)
}

function draw(){
     background(bgimage)
     Engine.update(engine);
     ground.display();
     box.display();
     box2.display();
     box3.display();
     box4.display();
     box5.display();
     box6.display();
     box7.display();
     box8.display();
     box9.display();
     box10.display();
     box11.display();
     box12.display();
     box13.display();
     box14.display();
     box15.display();
     box16.display();
     box17.display();
     box18.display();
     box19.display();
     box20.display();
     box21.display();
     box22.display();
    
     superhero.display();
     rope.display();
     monster.display();
}


function mouseDragged(){
    Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY})
    Matter.Body.setStatic(monster.body,false)
}