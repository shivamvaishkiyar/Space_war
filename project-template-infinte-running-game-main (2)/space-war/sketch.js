    var skyImg,sky;

    var playerCraftImg,playerCraft;
    var playerBallImg,playerBall;
    
    var obstacleImg,obstacle,obstacleGroup;
    var gameOverImg,gameOver;
    var coinImg,coin=0;
    var resetImg,reset;


    var enemyImg,enemy;
    var enemy2Img,enemy2;
    var enemy3Img,enemy3;
    var enemy4Img,enemy4;
    var enemy5Img,enemy5;
    var enemy6Img,enemy6;
    var enemyBlastImg,enemyBlast;
    var enemy2BlastImg,enemy2Blast;
    var enemy3BlastImg,enemy3Blast;
    var enemy4BlastImg,enemy4Blast;
    var enemy5BlastImg,enemy5Blast;
    var enemy6BlastImg,enemy6Blast;

    
    var enemyBallImg,enemyBall,enemyBallGroup;


    var craftBlastImg;

    var enemyBossImg,enemyBoss;

    var BossBlastImg,BossBlast;

    var Ground;
     
    var Ground2

    var   StartImg,Start

    var score = 0
    //game states<==============================================|:|:|====================================================>

     var PLAY=1;
     var END=0;
     var gameState=1;

     

     function preload(){

        skyImg = loadImage("sky.png");

        StartImg = loadImage("Start.png")

     enemyImg = loadImage("enemy.png");
     enemy2Img = loadImage("enemy2.png");
     enemy3Img= loadImage("enemy3.png");
     enemy4Img = loadImage("enemy4.png");
     enemy5Img = loadImage("enemy5.png");
     enemy6Img = loadImage("enemy6.png");

     playerCraftImg = loadImage("playerCraft.png");

     

     coinImg = loadImage("coin.png");

     obstacleImg = loadImage("obstacle.png");

     gameOverImg = loadImage("gameOver.png");

     playerBallImg = loadImage("playerBall.png");

     resetImg= loadImage("reset.png");

     enemyBlastImg  = loadImage("enemyBlast.png");
     enemy2BlastImg = loadImage("enemy2Blast.png");
     enemy3BlastImg = loadImage("enemy3Blast.png");
     enemy4BlastImg = loadImage("enemy4Blast.png");
     enemy5BlastImg = loadImage("enemy5Blast.png");
     enemy6BlastImg = loadImage("enemy6Blast.png");

     craftBlastImg = loadAnimation("craftBlast1.png","craftBlast2.png","craftBlast3.png","craftBlast4.png","craftBlast5.png")

     enemyBossImg  = loadImage("enemyBoss.png")

    
     enemyBallImg  = loadImage("enemyBall.png")

     BossBlastImg = loadAnimation("BossBlast1.png","BossBlast2.png","BossBlast3.png","BossBlast4.png","BossBlast5.png","BossBlast6.png",)
     
     BlastSound = loadSound("bombSound.mp3")
     
     skySound  =loadSound("space.mp3")

      pickCoin = loadSound("pickCoin.mp3")


    };

     function setup() {

    createCanvas(windowWidth,windowHeight);

    sky = createSprite(width/2,height/2);
    sky.addImage(skyImg);
    sky.velocityY= +8
    skySound.loop()

    Start = createSprite(700,300,0,0)
    Start.addImage("BHARAT",StartImg)
    Start.scale=0.3

    Ground= createSprite(700,400,1500,20)
    Ground.visible=false

    Ground2 = createSprite(800,0,1600,20)
    Ground2.visible=false
   

    playerCraft = createSprite(700,530,70,80);
    playerCraft.addImage("?", playerCraftImg);
    playerCraft.scale=0.4;
    playerCraft.setCollider("circle",-20,30,195)
    playerCraft.debug=true
    
    

    playerBall = createSprite(700,420,0,0);
    playerBall.addImage("SHIVAM",playerBallImg);
    playerBall.scale = 0.07;
    playerBall.visible=false
    playerBall.setCollider("circle",-15,30,210)
    playerBall.debug=true

    enemy = createSprite(150,80,0,0);
    enemy.addImage("VAISHYAKIYAR",enemyImg);
    enemy.scale=0.2;
    enemy.velocityY = +4
   
    enemy.setCollider("circle",-20,10,210);
    enemy.debug=true;

    enemy2 = createSprite(380,80,0,0);
    enemy2.addImage("SHEKHPURA",enemy2Img);
    enemy2.scale= 0.3;
    enemy2.velocityY= +4
    enemy2.setCollider("circle",-20,30,130)
    enemy2.debug=true
    enemy2.setCollider.visible=false

    enemy3 = createSprite(600,80,0,0);
    enemy3.addImage("BARBIGHA",enemy3Img);
    enemy3.scale= 0.3;
    enemy3.velocityY=+5
    enemy3.setCollider("circle",-20,30,130)
    enemy3.debug=true

    enemy4 = createSprite(800,80,0,0);
    enemy4.addImage("SAMACHAK",enemy4Img);
    enemy4.scale= 0.2;
    enemy4.velocityY=+3
    enemy4.setCollider("circle",-20,30,210)
    enemy4.debug=true

    enemy5 = createSprite(1000,80,0,0);
    enemy5.addImage("TRIMUHANI MOD",enemy5Img);
    enemy5.scale= 0.4;
    enemy5.velocityY=+4
    enemy5.setCollider("circle",-8,30,75)
    enemy5.debug=true

    enemy6 = createSprite(1200,80,0,0);
    enemy6.addImage("LEFT SIDE ",enemy6Img);
    enemy6.scale= 0.2;
    enemy6.velocityY=+3
    enemy6.setCollider("circle",-20,30,210)
    enemy6.debug=true

    enemyBoss = createSprite(680,90,0,0)
    enemyBoss.addImage("COMPUTER CENTER",enemyBossImg)
    enemyBoss.scale=0.6
    enemyBoss.rotation=90
    enemyBoss.velocityX=4
    
    
    
    

    coinGroup=new Group();
    obstacleGroup = new Group();

    
    enemyBallGroup = new Group()
    

    gameOver = createSprite(700,300,0,0);
    gameOver.addImage("over",gameOverImg);
    gameOver.scale=0.2;
    gameOver.visible=false;

    reset = createSprite(550,300,0,0)
    reset.addImage("back",resetImg)
    reset.scale=0.4;

    enemyBlast = createSprite(150,80,0,0)
    enemyBlast.addImage("boom",enemyBlastImg)
    enemyBlast.scale=0.3
    enemyBlast.visible=false

    enemy2Blast = createSprite(380,80,0,0);
    enemy2Blast.addImage("blast",enemy2BlastImg)
    enemy2Blast.scale=0.5
    enemy2Blast.visible=false

    enemy3Blast= createSprite(600,80,0,0);
    enemy3Blast.addImage("LOL",enemy3BlastImg)
    enemy3Blast.scale=0.3
    enemy3Blast.visible=false

    enemy4Blast = createSprite(800,80,0,0);
    enemy4Blast.addImage("vaishyakiyar",enemy4BlastImg)
    enemy4Blast.scale=0.5
    enemy4Blast.visible=false


    enemy5Blast= createSprite(1000,80,0,0);
    enemy5Blast.addImage("Magadh",enemy5BlastImg)
    enemy5Blast.scale=0.5
    enemy5Blast.visible=false

    
    enemy6Blast = createSprite(1170,72,0,0);
    enemy6Blast.addImage("INDIAN ARMY",enemy6BlastImg)
    enemy6Blast.scale=0.5
    enemy6Blast.visible=false

    craftBlast = createSprite(700,530,70,80);
    craftBlast.addAnimation("INDIAN",craftBlastImg)
    craftBlast.scale=0.5
    craftBlast.visible=false

    BossBlast = createSprite(680,90,70,80)
    BossBlast.addAnimation("BIHARI",BossBlastImg)
    BossBlast.scale=0.5
    BossBlast.visible=false

    }

    function draw() {

   // MOVEMENT FOR SKY<==============================================|:|:|==============================================>
    
        if(sky.y >400 ){
            sky.y = 300
           } ;
        
    
    if(gameState===PLAY){

    // TO COLLIDE SIDES<==============================================|:|:|==============================================>
    


    edges= createEdgeSprites();
    
    playerCraft.collide(edges);

    // TO CALL AFETR DRAW FUNCTION<==================================|:|:|===============================================>

    createCoin();
    createObstacle(); 
    createBall()

   

    enemy.bounceOff(edges)
    enemy2.bounceOff(edges)
    enemy3.bounceOff(edges)
    enemy4.bounceOff(edges)
    enemy5.bounceOff(edges)
    enemy6.bounceOff(edges)

    enemyBoss.bounceOff(edges)

    enemyBoss.x=playerCraft.x
    
 
    

    reset.visible=false

    // PRESS KEY TO MOVE <=====================================|:|:|==================================================>

    //LEFT ARROW OR A KEY TO MOVE RIGHT SIDE<=================================|:|:|====================================>

    if(keyDown("left_arrow")|| keyCode === 65){
        playerCraft.x = playerCraft.x - 7
    
    };
    //RIGHT ARROW OR L KEY TO MOVE LEFT SIDE<=================================|:|:|=================================>

    if( (touches.length > 0 )||keyDown("right_arrow") ||keyCode === 76){
    
          playerCraft.x = playerCraft.x + 7
    };
    //DOWN ARROW OR V KEY TO MOVE DOWN SIDE<==================================|:|:|==================================>

    if(keyDown("down_arrow") || keyCode === 86){
        playerCraft.velocityY = +10
    };
    //UP ARROW OR T KEY TO MOVE UP SIDE<======================================|:|:|====================================>

    if( keyDown("up_arrow") || keyCode === 84){
         playerCraft.velocityY = -10
        };
    //ENTER KEY TO SHOOT BALL <==========================================|:|:|===========================================>

        if(keyDown("space")){
            playerBall.position.x=playerCraft.x;
            playerBall.position.y=playerCraft.y;
            playerBall.velocityY=-8
            playerBall.visible=true
        };

        

        if(playerBall.isTouching(enemy )){
            enemy.destroy()
            BlastSound.play()
           enemyBlast.visible=true
           enemyBlast.lifetime=11
           score= score+10
          
        };

        if(playerBall.isTouching(enemy2 )){
            enemy2.destroy()
            BlastSound.play()
            enemy2Blast.visible=true
            enemy2Blast.lifetime=11
            score= score+10
        };

        if(playerBall.isTouching(enemy3 )){
            enemy3.destroy()
            BlastSound.play()
            enemy3Blast.visible=true
            enemy3Blast.lifetime=11
            score=score+15
        };

        if(playerBall.isTouching(enemy4 )){
            enemy4.destroy()
            BlastSound.play()
            enemy4Blast.visible=true
            enemy4Blast.lifetime=11
            score= score+20
        };

        if(playerBall.isTouching(enemy5)){
            enemy5.destroy()
            BlastSound.play()
            enemy5Blast.visible=true
            enemy5Blast.lifetime=11
            score=score+15
        };

        if(playerBall.isTouching(enemy6 )){
            enemy6.destroy()
            BlastSound.play()
            enemy6Blast.visible=true
            enemy6Blast.lifetime=11
            score=score+20
        };

        if(playerBall.isTouching(enemyBoss)){
             enemyBoss.destroy()
             BlastSound.play()
             BossBlast.visible=true;
             BossBlast.lifetime=15
             
             score=score+50
           
        };

        //BounceOff enemys

        if(enemy.isTouching(Ground)){
             enemy.velocityY=-4
             enemy.velocityX=4
        }

        if(enemy.isTouching(Ground2)){
            enemy.velocityY=+4
            enemy.velocityX=-4
       }



        if(enemy2.isTouching(Ground)){
            enemy2.velocityY=-6
            enemy2.velocityX=5
         }

         if(enemy2.isTouching(Ground2)){
            enemy2.velocityY=+6
            enemy2.velocityX=-5
       }




        if(enemy3.isTouching(Ground)){
          enemy3.velocityY=-6
          enemy3.velocityX=-5
           }

           if(enemy3.isTouching(Ground2)){
            enemy3.velocityY=+6
            enemy3.velocityX=+5
       }




        if(enemy4.isTouching(Ground)){
           enemy4.velocityY=-6
           enemy4.velocityX=+5
         }

         if(enemy4.isTouching(Ground2)){
            enemy4.velocityY=+6
            enemy4.velocityX=-5
       }



        if(enemy5.isTouching(Ground)){
           enemy5.velocityY=-6
           enemy5.velocityX=5
        }

        if(enemy5.isTouching(Ground2)){
            enemy5.velocityY=+6
            enemy5.velocityX=-5
       }

        if(enemy6.isTouching(Ground)){
         enemy6 .velocityY=-6
         enemy6.velocityX=-5
         }
 
         if(enemy6.isTouching(Ground2)){
            enemy6.velocityY=+6
            enemy6.velocityX=+5
       }
 
       
 //INCREASEING POINT <=============================================|:|:|==============================================>
       if (coinGroup.isTouching(playerCraft)) {
        coinGroup.destroyEach();
        coin=coin+1;
        pickCoin.play()

        
   

         
    //game State End <===============================================|:|:|===============================================>

        }else{
            if(obstacleGroup.isTouching(playerCraft)) {
              gameState=END
              gameOver.visible=true;
              reset.visible= true;
              craftBlast.visible=true
              craftBlast.lifetime=15
              
              textSize(20)
              fill("green")
              text("𝓞𝓟𝓟𝓢 𝓨𝓞𝓤 𝓦𝓔𝓡𝓔 𝓚𝓘𝓛𝓛𝓔𝓓",580,300)

              sky.velocityY=0

              playerCraft.destroy()
              BlastSound.play()

              

              enemy.destroy()
              enemy2.destroy()
              enemy3.destroy()
              enemy4.destroy()
              enemy5.destroy()
              enemy6.destroy()

              enemyBoss.destroy()

              obstacleGroup.destroyEach()

              enemyBallGroup.destroyEach()
              
              coinGroup.destroyEach()
             
              
            };
           
        }
        if(enemyBallGroup.isTouching(playerCraft)){
            gameState =END
            gameOver.visible=true;
            reset.visible= true;

            playerCraft.destroy()
            BlastSound.play()
            craftBlast.x=playerCraft.x;
            craftBlast.y=playerCraft.y;
            craftBlast.visible=true;
            craftBlast.lifetime=15
            playerBall.lifetime=1

            sky.velocityY=0

            enemy.destroy()
            enemy2.destroy()
            enemy3.destroy()
            enemy4.destroy()
            enemy5.destroy()
            enemy6.destroy()

            enemyBoss.destroy()


            obstacleGroup.destroyEach()

              enemyBallGroup.destroyEach()
              
              coinGroup.destroyEach()
      };

            if (playerCraft.isTouching(enemy)){
                gameState = END

                playerCraft.destroy()
                BlastSound.play()
                craftBlast.visible=true
                craftBlast.lifetime=20
                craftBlast.x=playerCraft.x;
                craftBlast.y=playerCraft.y;
                enemy.visible=false
                enemyBlast.visible=true
                enemyBlast.lifetime=14
                playerBall.lifetime=1
                gameOver.visible=true
                reset.visible= true
                sky.velocityY=0

                enemy.destroy()
                enemy2.destroy()
                enemy3.destroy()
                enemy4.destroy()
                enemy5.destroy()
                enemy6.destroy()

                enemyBoss.destroy()

              obstacleGroup.destroyEach()

              enemyBallGroup.destroyEach()
              
              coinGroup.destroyEach()
            }
            
            if (playerCraft.isTouching(enemy2)){
                gameState = END
                playerCraft.destroy()
                BlastSound.play()
                craftBlast.visible=true
                craftBlast.lifetime=20
                craftBlast.x=playerCraft.x;
                craftBlast.y=playerCraft.y;
                enemy2.visible=false
                enemy2Blast.visible=true
                enemy2Blast.lifetime=14
                playerBall.lifetime=1
                gameOver.visible= true
                reset.visible=true
                sky.velocityY=0

                enemy.destroy()
                enemy2.destroy()
                enemy3.destroy()
                enemy4.destroy()
                enemy5.destroy()
                enemy6.destroy()

                enemyBoss.destroy()

                obstacleGroup.destroyEach()

                enemyBallGroup.destroyEach()
                
                coinGroup.destroyEach()
            }

            if (playerCraft.isTouching(enemy3)){
                gameState = END
                playerCraft.destroy()
                BlastSound.play()
                craftBlast.visible=true
                craftBlast.lifetime=20
                craftBlast.x=playerCraft.x;
                craftBlast.y=playerCraft.y;
                enemyBallGroup.destroyEach()
                enemy3.visible=false
                enemy3Blast.visible=true
                enemy3Blast.lifetime=14
                playerBall.lifetime=1
                gameOver.visible= true
                reset.visible=true
                sky.velocityY=0
                enemy.destroy()
                enemy2.destroy()
                enemy3.destroy()
                enemy4.destroy()
                enemy5.destroy()
                enemy6.destroy()

                enemyBoss.destroy()

                obstacleGroup.destroyEach()

               
                
                coinGroup.destroyEach()
            }

            if (playerCraft.isTouching(enemy4)){
                gameState = END
                playerCraft.destroy()
                BlastSound.play()
                craftBlast.visible=true
                craftBlast.lifetime=20
                craftBlast.x=playerCraft.x;
                craftBlast.y=playerCraft.y;
                enemy4.visible=false
                enemy4Blast.visible=true
                enemy4Blast.lifetime=14
                playerBall.lifetime=1
                gameOver.visible= true
                reset.visible=true
                sky.velocityY=0
                enemy.destroy()
                enemy2.destroy()
                enemy3.destroy()
                enemy4.destroy()
                enemy5.destroy()
                enemy6.destroy()

                enemyBoss.destroy()

                obstacleGroup.destroyEach()

                enemyBallGroup.destroyEach()
                
                coinGroup.destroyEach()
            }

            if (playerCraft.isTouching(enemy5)){
                gameState = END
                playerCraft.destroy()
                BlastSound.play()
                craftBlast.visible=true
                craftBlast.lifetime=20
                craftBlast.x=playerCraft.x;
                craftBlast.y=playerCraft.y;
                enemy5.visible=false
                enemy5Blast.visible=true
                enemy5Blast.lifetime=14
                playerBall.lifetime=1
                gameOver.visible= true
                reset.visible=true
                sky.velocityY=0
                enemy.destroy()
                enemy2.destroy()
                enemy3.destroy()
                enemy4.destroy()
                enemy5.destroy()
                enemy6.destroy()

                enemyBoss.destroy()

                obstacleGroup.destroyEach()

                enemyBallGroup.destroyEach()
                
                coinGroup.destroyEach()
            }

            if (playerCraft.isTouching(enemy6)){
                gameState = END
                playerCraft.destroy()
                BlastSound.play()
                craftBlast.visible=true
                craftBlast.lifetime=20
                craftBlast.x=playerCraft.x;
                craftBlast.y=playerCraft.y;
                enemy6.visible=false
                enemy6Blast.visible=true
                enemy6Blast.lifetime=14
                playerBall.lifetime=1
                gameOver.visible= true
                reset.visible=true
                sky.velocityY=0
                enemy.destroy()
                enemy2.destroy()
                enemy3.destroy()
                enemy4.destroy()
                enemy5.destroy()
                enemy6.destroy()

                enemyBoss.destroy()

                obstacleGroup.destroyEach()

                enemyBallGroup.destroyEach()
                
                coinGroup.destroyEach()
            }

            if(playerCraft.isTouching(enemyBoss)){
                gameState = END
                playerCraft.destroy()
                BlastSound.play()
                craftBlast.visible=true
                craftBlast.lifetime=20
                craftBlast.x=playerCraft.x;
                craftBlast.y=playerCraft.y;
                enemyBoss.destroy()
                BossBlast.visible=true;
                BossBlast.lifetime=14
                playerBall.lifetime=1
                gameOver.visible= true
                reset.visible=true
                sky.velocityY=0
                enemy.destroy()
                enemy2.destroy()
                enemy3.destroy()
                enemy4.destroy()
                enemy5.destroy()
                enemy6.destroy()

                enemyBoss.destroy()

                obstacleGroup.destroyEach()

                enemyBallGroup.destroyEach()
                
                coinGroup.destroyEach()
             }


            
           if(keyCode==82){
            gameState=PLAY
            reset.visible=false
            gameOver.visible=true
            
            score=0


           }

          
           
         }
              

              


              
      //TO DRAW EVERY OBJECT<=========================================|:|:|=============================================>


     
    drawSprites()
    textSize(20);
    fill("red");
    text("𝓑𝓘𝓣𝓒𝓞𝓘𝓝: "+ coin,10,600);

    textSize(20)
    fill("red")
    text("𝓢𝓒𝓞𝓡𝓔:"   + score,10,550);

    
    
        }
    
    
    
     

    
    ;
    //  REPEATING COIN<============================================|:|:|================================================>

    function createCoin() {
        if (World.frameCount % 260 == 0) {
        var coin = createSprite(Math.round(random(800, 350),100, 10, 10));
        coin.addImage(coinImg);
        coin.scale=0.09;
        coin.velocityY = 3;
        coin.lifetime=1000
        coinGroup.add(coin);
        };
     };
    // REPEATING OBSTACLE<=============================================|:|:|============================================>

    function createObstacle() {
        if (World.frameCount % 360 == 0) {
        var obstacle = createSprite(Math.round(random(200,800),40, 10, 10));
        obstacle.addImage(obstacleImg);
        obstacle.scale=0.3;
        obstacle.velocityY = 3;
        obstacleGroup.add(obstacle);
        };
     };
    
     function createBall() {
        if (World.frameCount % 80 == 0) {
        var enemyBall = createSprite(700,90, 10, 10);
        enemyBall.addImage(enemyBallImg);
        enemyBall.scale=0.1;
        enemyBall.velocityY = 3;
        enemyBallGroup.add(enemyBall);
        enemyBall.lifetime=200
        enemyBall.x=enemyBoss.x
        enemyBall.y=enemyBoss.y
        };
     };

