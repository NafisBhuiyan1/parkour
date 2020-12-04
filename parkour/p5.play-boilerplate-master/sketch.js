var person, ground, wall, level, spike, enterbox1, portal1, portal2
var spike4, ground2, gravity
function setup() {
  createCanvas(windowWidth,windowHeight);
  person = createSprite(300, 500, 50, 50);
  wall = createSprite(0,300,50,1500)
  box = createSprite(500,550,50,50);
  box1 = createSprite(650,550,50,150);
  box2 = createSprite(800,550,50,300);
  box3 = createSprite(950,550,50,150);
  box4 = createSprite(1100,550,50,50);
  spike = createSprite(600,560,150,30);
  spike1 = createSprite(700,560,150,100);
  spike2 = createSprite(900,560,150,100);
  spike3 = createSprite(1050,560,150,30);
  spike4 = createSprite(350,174382,30,240)
  enterbox1 = createSprite(1350,300,50,1500);
  level = 1
  portal1 = createSprite(425,417239,20,270);
  portal2 = createSprite(425,42398,20,250)
  ground = createSprite(700, 600, 1500, 50);
  ground2 = createSprite(700, 10, 1500, 50);
  gravity = 1
}

function draw() {
  background(255,255,255);  
  drawSprites();

  portal1.shapeColor = "blue"
  portal2.shapeColor = "red"

  if(level === 1){
    text("AAAAAAAAAAAAAAAAAAA",500,spike.y-10)
    text("AAAAAAAAAAAAAAAAAAA",675,spike1.y-45)
    text("AAAAAAAAAAAAAAAAAAA",800,spike2.y-45)
    text("AAAAAAAAAAAAAAAAAAA",950,spike3.y-10)

    wall.velocityX = 3.5
    person.velocityX = 3.5
    if(enterbox1.isTouching(person)){
level = 2
wall.x = 0
person.x = 300
    }
  
  }


  if(level === 2){
box2.height= 50
box1.height = 50
box3.height = 50
box1.y = 450
box2.y = 400
box3.y = 450
box1.x = 675
box3.x = 925
wall.velocityX = 4
person.velocityX = 3.5
if(enterbox1.isTouching(person)){
  level = 3
  wall.x = 0
  person.x = 300
      }

if(box2.isTouching(person)){

  person.x = 300
  person.y = 500
  wall.x = 25
  wall.y = 300
    }
  }

  if(level === 3){
    box.y = 50
    box1.y = 125
    box2.y = 50
    box3.y = 125
    box4.y = 50
    spike.y = 25
    spike.x = 900
    spike.width = 600
    text("VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",550,spike.y+20)
    spike1.y = 21340
    spike2.y = 2482435
    spike3.y = 143556
    portal1.y = 560
    person.velocityX = 4
    portal2.y = 50
    spike4.y = 300
    if(portal1.isTouching(person)){
      person.x = 500
      person.y = 50
      gravity = -1;
    }

  }

  person.velocityY= person.velocityY + gravity;
  if(keyDown("space") && person.y>300){
    person.velocityY = -13 * gravity;
  }
  console.log(person.velocityY)
  if(keyDown("right")){
    person.x = person.x -5;
  }
  if(keyDown("left")){
    person.x = person.x -5;
  }

  if(keyDown("down")){
    person.velocityY = 8;
  }

  person.collide(ground)
  person.collide(box)
  person.collide(box1)
  person.collide(box2)
  person.collide(box3)
  person.collide(box4)
  person.collide(ground2)
  if(wall.isTouching(person)){
person.x = 300
person.y = 500
wall.x = 25
wall.y = 300
person.velocityY= person.velocityY + 1;
  }
if (spike.isTouching(person)||spike1.isTouching(person)||spike2.isTouching(person)||spike3.isTouching(person)||spike4.isTouching(person)){
  person.x = 300
  person.y = 500
  wall.x = 25
  wall.y = 300
   }
    
  }

  
  


