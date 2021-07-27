var bananaImage, bans, ban, obs, obss, obstacleImage, obstacleGroup, bg, bgI, score, MM, ground, mon;

function preload() {
  bg = loadImage("jungle.jpg");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
  
  MM = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
}

function setup() {
  createCanvas(400, 400);
  
  bgI = createSprite (200,65,0,0);
  bgI.addImage(bg);
  bgI.scale = 7/8;
  bgI.velocityX = 0;
  
  ground = createSprite(200,385,400,20);
  ground.x = ground.width /2;
  ground.visible = false;

  mon = createSprite(100, 300);
  mon.addAnimation("Moving Monkey", MM);
  mon.scale = 1/7;
  
  score = 0;
  
  bans = createGroup();
  obss = createGroup();
}

function draw() {
  background(220);
  if (bgI.x === 100) {
    bgI.x = bgI.width/2;
  }
  
  
  if(bans.isTouching(mon)){
    score = score + 2;
    ban.remove();
  }
  
  switch(score){
    case 10: mon.scale = 2/7;
    break;
    case 20: mon.scale = 3/7;
    break;
    case 30: mon.scale = 4/7;
    break;
    case 40: mon.scale = 5/7;
    break;
    default: break;
  }
  
  if(obss.isTouching(mon)){
    mon.scale = 1/7;
    obs.remove();
  }
  
  if(keyDown("space")){
    mon.velocityY = -10;
  }
  
  mon.velocityY = mon.velocityY + 1;
  mon.collide(ground);
  
  spawnFood();
  spawnObstacle();
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white")
  text("Score: " + score, 275, 100);
  
}

function spawnFood() {
  if (World.frameCount % 80 === 0) {
    ban = createSprite(400,320,40,10);
    ban.y = random(180, 250);
    ban.addImage(bananaImage);
    ban.scale = 0.05;
    ban.velocityX = -5;
    
    ban.lifetime = 134;
    
    bans.add(ban);
  }
  
}

function spawnObstacle() {
  if (World.frameCount % 300 === 0) {
    obs = createSprite(400,310,40,10);
    obs.y =360;
    obs.addImage(obstacleImage);
    obs.scale = 0.15;
    obs.velocityX = -5;

    obs.lifetime = 134;
    
    obss.add(obs);
  }
  
}
