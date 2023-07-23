var brickRows = 5, brickColumns = 5, brickWidth = 75, brickHeight = 10, brickPadding = 10, brickOffsetLeft = 65, brickOffsetTop = 50;
var score=0, lives=3, paddle_w=90, paddle_h=20;
 

var bricks = [];
for(var c=0; c<brickColumns; c++) {
  bricks[c] = []
  for(var r=0; r<brickRows; r++) {
    bricks[c][r] ={x: 0, y: 0, hidden: 0}
  }

}
 

function createBricks() 
{
  for(var c=0; c<brickColumns; c++)
  {
    for(var r=0; r<brickRows; r++ )
    {
        //console.log(bricks[c][r]);
        if(bricks[c][r].hidden == 0)
        {
          const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
          const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
          bricks[c][r].x = brickX;
          bricks[c][r].y = brickY;
          
          if((c==0 || c==brickColumns-1) && r==0) fill("green");
          else fill("blue");
          rect(bricks[c][r].x, bricks[c][r].y, brickWidth, brickHeight);
        }
    }
  }
}


function setup() {
  createCanvas(600, 600);
  
  
  fill("blue");
  
  ball_x=20;
  ball_dx=3;
  ball_y=height/2+10;
  ball_dy=3;
  
  
  
  paddle_x=width/2-(paddle_w/2);
  paddle_dx=5;
  paddle_y=height-(paddle_h);
  
  
 }

  function draw(){``
    
    
    clear();
    background("pink");
    createBricks();
    
    circle(ball_x,ball_y, 25);
    rect(paddle_x, paddle_y, paddle_w, paddle_h);
    
    fill('black');
    textSize(25);
    text('Score: '+score, 10, 30);
    textSize(25);
    text('Lives remaining: '+lives, 385, 30);
  
    if(ball_x>= width-12.5) ball_dx=-1*ball_dx;
    if(ball_y>= height-12.5) 
    {
      
      lives--;
      ball_x= 20;
      ball_y=ball_y=height/2+10;
    }  
                  
                  
    
    if(ball_x<=12.5) ball_dx=-1*ball_dx;
    if(ball_y<=12.5) ball_dy= -1*ball_dy;
      
      if(lives<0 || score==(((brickRows*brickColumns-2)*5)+40)  )
        {
         
          noLoop();
          background("pink");
          fill('black');
          textSize(30);
          text('Game Over', width/2-60, height/2);
          text('Score: '+score, width/2-60, height/2+40);
          text('Lives remaining: '+lives, width/2-100, height/2+80);
          
        }
    
if((paddle_y-ball_y<=12.5   && ball_x-paddle_x>=0 && ball_x-paddle_x<=paddle_w )) 
{
  
  ball_dy= -ball_dy;
}  
    
       
if(  ((paddle_x-ball_x)<=12.5 && (paddle_x-ball_x)>=0 && (ball_y-paddle_y+8.34)>=0 &&  (ball_y-paddle_y)<=paddle_h))
    {
      ball_dx= -ball_dx;
      ball_dy= -ball_dy;
    }  
    
    
if((ball_x-paddle_x)>=0 && (ball_x-paddle_x)<=(paddle_w + 12.5) && (ball_y-paddle_y+8.34)>=0 &&  (ball_y-paddle_y)<=paddle_h ) 
    {
      ball_dx= -ball_dx;
      ball_dy= -ball_dy;
    }  
 
    
    ball_x= ball_x+ ball_dx;
    ball_y= ball_y+ ball_dy;
    

    if(keyIsDown(LEFT_ARROW))
    {
       paddle_x=paddle_x-5;
    }
    
    if(keyIsDown(RIGHT_ARROW))
    {
       paddle_x=paddle_x+5;
    }
    
    for(var c=0; c<brickColumns; c++)
    {
    for(var r=0; r<brickRows; r++ )
    {
        
    if(bricks[c][r].hidden==0)
         {

           
           if( (abs(bricks[c][r].y-ball_y)<=12.5 || abs(bricks[c][r].y+brickHeight-ball_y)<=12.5) && ball_x-bricks[c][r].x>=0 && ball_x-bricks[c][r].x<=brickWidth )
          {
          
            ball_dy= -ball_dy;
            bricks[c][r].hidden=1;
            if((c==0 || c==brickColumns-1) && r==0) score+=20;
            else score+=5;
          } 
           
           
         else if(  (bricks[c][r].x-ball_x)<=12.5 && (bricks[c][r].x-ball_x)>=0 && (ball_y-bricks[c][r].y+8.34)>=0 &&  (ball_y-bricks[c][r].y)<=brickHeight+8.34)
              {
                
                ball_dy= -ball_dy;
                bricks[c][r].hidden=1;
                if((c==0 || c==brickColumns-1) && r==0) score+=20;
            else score+=5;
              }  


         else if((ball_x-bricks[c][r].x)>=0 && (ball_x-bricks[c][r].x)<=(paddle_w + 12.5) && (ball_y-bricks[c][r].y+8.34)>=0 &&  (ball_y-bricks[c][r].y)<=brickHeight+8.34) 
                {
                
                ball_dy= -ball_dy;
                bricks[c][r].hidden=1;
                  if((c==0 || c==brickColumns-1) && r==0) score+=20;
            else score+=5;
              }
         }
    }
  }
}






