var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["43d684db-0f6a-45b2-b613-608b96720d22"],"propsByKey":{"43d684db-0f6a-45b2-b613-608b96720d22":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"85m7NsrubjOcnpYqbMO158v3flf.R0q3","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/43d684db-0f6a-45b2-b613-608b96720d22.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

  var wall1 = createSprite(190,120,250,3);
  var wall2 = createSprite(190,260,250,3);
  var wall3 = createSprite(67,145,3,50);
  var wall4 = createSprite(67,235,3,50);
  var wall5 = createSprite(313,145,3,50);
  var wall6 = createSprite(313,235,3,50);
  var wall7 = createSprite(41,170,50,3);
  var wall8 = createSprite(41,210,50,3);
  var wall9 = createSprite(337,210,50,3);
  var wall10 = createSprite(337,170,50,3);
  var wall11 = createSprite(18,190,3,40);
  var wall12 = createSprite(361,190,3,40);
 var life=5;
 
  
  var ding = createSprite(40,190,13,13);
  
  
  ding.shapeColor = "green";
  
  var car1 = createSprite(100,130,10,10);

  
  car1.shapeColor = "red ";
  var car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  var car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  var car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  
  car1.velocityY = 7;
  car2.velocityY = 7;
  car3.velocityY = -7;
  car4.velocityY = -7;
  
  
  
  


function draw() {
  background("yellow");
  createEdgeSprites();
  ding.collide(car1);
  ding.collide(car2);
  ding.collide(car3);
  ding.collide(car4);
  ding.bounceOff(wall1);
  ding.bounceOff(wall2);
  ding.bounceOff(wall3);
  ding.bounceOff(wall4);
  ding.bounceOff(wall5);
  ding.bounceOff(wall6);
  ding.bounceOff(wall7);
  ding.bounceOff(wall8);
  ding.bounceOff(wall9);
  ding.bounceOff(wall10);
  ding.bounceOff(wall12);
  ding.bounceOff(wall12);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  car1.bounceOff(wall1);
  car1.bounceOff(wall2);
 car2.bounceOff(wall1);
  car2.bounceOff(wall2);
  car3.bounceOff(wall1);
  car3.bounceOff(wall2);
  car4.bounceOff(wall1);
  car4.bounceOff(wall2);
  
  textSize(15);
  stroke("blue");
  fill("blue");
  text("life :"+life,200,100);
  
  
 
    
  
  
  
  if(keyDown("right")){
    ding.x = ding.x + 2;
  }
  if(keyDown("left")){
    ding.x = ding.x - 2;
  }
  if(keyDown("down")){
    ding.y = ding.y + 2;
  }
  if(keyDown("up")){
    ding.y = ding.y-2;
  }
  
  
  
   if(ding.isTouching(car1)){
   life=life-1; 
    playSound("assets/default.mp3", false);
 ding.x=40;
 ding.y=200;
   }
 if(ding.isTouching(car2)){
    life=life-1;  
    playSound("assets/default.mp3", false);
 ding.x=40;
 ding.y=200;
   }  
   
 if(ding.isTouching(car3)){
    life=life-1; 
    playSound("assets/default.mp3", false);
 ding.x=40;
 ding.y=200;
   }  
   
   
 if(ding.isTouching(car4)){
    life=life-1;  
  playSound("assets/default.mp3", false);
     
 ding.x=40;
 ding.y=200;
   }  
   
  if(life==0 || life==0)
      {
        fill("black");
        textSize(18);
        text("Game Over!",170,160);
      }  
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
  
textSize(18);
   fill("maroon");
   text("GOAL",310,195);
  
   
  
  
  
  
  
  
  
  
  
  
   
   
   
   
   
   
   
   
   
 
  {
     
  }
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
