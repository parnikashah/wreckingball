const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function setup() {
  createCanvas(1500,600);
  engine=Engine.create();
  world=engine.world
  //createSprite(400, 200, 50, 50);
  
  
 ground1=new Ground(700,500,1500,20);
    // 1st pyramid , base
  box1=new Box(510,480,60,50);
  box2=new Box(510,430,60,50);
  box3=new Box(510,380,60,50);
  box4=new Box(510,330,60,50);
  box5=new Box(510,280,60,50);
  box6=new Box(510,230,60,50);
  box7=new Box(510,180,60,50);
// second
  box8=new Box(600,480,60,50);
  box9=new Box(600,430,60,50);
  box10=new Box(600,380,60,50);
  box11=new Box(600,330,60,50);
  box12=new Box(600,280,60,50);
// third
   box13=new Box(690,480,60,50);
   box14=new Box(690,430,60,50);
   box15=new Box(690,380,60,50);
   box16=new Box(690,330,60,50);
   box17=new Box(690,280,60,50);
   box18=new Box(690,230,60,50);
   box19=new Box(690,180,60,50);
   box20=new Box(690,130,60,50);

   ball1=new Ball(200,200,40);
   sling1=new SlingShot(ball1.body,{x:320,y:50})




}
   




function draw() {
  background("black");  
  Engine.update(engine)
ground1.display();
fill(73,233,255);
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
fill(255,184,206);
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
fill(103,255,211);
box13.display();
box14.display();
box15.display();
//fill(102,102,102);
box17.display();
box18.display();
box19.display();
box20.display();
box16.display();
ball1.display();
sling1.display();


}
function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}
// function mouseReleased(){
//   sling1.fly();
// }