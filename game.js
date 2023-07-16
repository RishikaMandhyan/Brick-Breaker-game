var rows = 5, cols = 5, brick_w = 75, brick_h = 20, brick_p = 20, offsetLeft = 70, offsetTop = 50;
var score=0, lives=3, paddle_w=90, paddle_h=20;
 
 

var bricks = [];
for(var c=0; c<cols; c++) {
  bricks[c] = []
  for(var r=0; r<rows; r++) {
    bricks[c][r] ={x: 0, y: 0, hidden: 0}
  }

}
 

function createBricks() 
{
  for(var c=0; c<cols; c++)
  {
    for(var r=0; r<rows; r++ )
    {
        if(bricks[c][r].hidden == 0)
        {
          const brick_x = c * (brick_w + brick_p) + offsetLeft;
          const brick_y = r * (brick_h + brick_p) + offsetTop;
          bricks[c][r].x = brick_x;
          bricks[c][r].y = brick_y;
          fill("blue");
          rect(bricks[c][r].x, bricks[c][r].y, brick_w, brick_h);
        }
    }
  }
}


function setup() 
{
  createCanvas(600, 600);
  
  
  fill("blue");
  ball_x=20;
  ball_dx=3;
  ball_y=height/2+10;
  ball_dy=3;
  paddle_x=width/2-(paddle_w/2);
  paddle_y=height-(paddle_h);
  
 }

  function draw()
  {

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
  
    //consition when ball strikes the right edge of the box
    if(ball_x>= width-12.5) ball_dx=-1*ball_dx;

    //condition when the ball strkes the bottom surface of the box
    if(ball_y>= height-12.5) 
    {
      lives--;
      ball_x= 20;
      ball_y=ball_y=height/2+10;
    }  
    
    //consition when ball strikes the left edge of the box
    if(ball_x<=12.5) ball_dx=-1*ball_dx;

    //consition when ball strikes the top edge of the box
    if(ball_y<=12.5) ball_dy= -1*ball_dy;
      
    if(lives<0 || score==(rows*cols*5)) 
    {
        noLoop();
        background("pink");
        fill('black');
        textSize(30);
        text('Game Over', width/2-60, height/2);
        text('Score: '+score, width/2-60, height/2+40);
        text('Lives remaining: '+lives, width/2-100, height/2+80);
        
    }

    ball_x= ball_x+ ball_dx;
    ball_y= ball_y+ ball_dy;
    
    if(paddle_y-ball_y<=12.5   && ball_x-paddle_x>=0 && ball_x-paddle_x<=paddle_w )
    {
        ball_dy= -ball_dy;
    }  
        
        
    if((paddle_x-ball_x)<=12.5 && (paddle_x-ball_x)>=0 && (ball_y-paddle_y+8.34)>=0 &&  (ball_y-paddle_y)<=paddle_h)
    {
        ball_dx= -ball_dx;
        ball_dy= -ball_dy;
    }  
        
        
    if((ball_x-paddle_x)>=0 && (ball_x-paddle_x)<=(paddle_w + 12.5) && (ball_y-paddle_y+8.34)>=0 &&  (ball_y-paddle_y)<=paddle_h ) 
    {
        ball_dx= -ball_dx;
        ball_dy= -ball_dy;
    }  
 
    if(keyIsDown(LEFT_ARROW))
    {
       paddle_x=paddle_x-5;
    }
    
    if(keyIsDown(RIGHT_ARROW))
    {
       paddle_x=paddle_x+5;
    }
    
    for(var c=0; c<cols; c++)
    {
    for(var r=0; r<rows; r++)
    {
        
        if(bricks[c][r].hidden==0)
        {
            if((abs(bricks[c][r].y-ball_y)<=12.5 || abs(bricks[c][r].y+brick_h-ball_y)<=12.5) && ball_x-bricks[c][r].x>=0 && ball_x-bricks[c][r].x<=brick_w )
            {
                ball_dy= -ball_dy;
                bricks[c][r].hidden=1;
                score+=5;
            } 
            
            
            else if((bricks[c][r].x-ball_x)<=12.5 && (bricks[c][r].x-ball_x)>=0 && (ball_y-bricks[c][r].y+8.34)>=0 &&  (ball_y-bricks[c][r].y)<=brick_h+8.34)
            {
                ball_dy= -ball_dy;
                bricks[c][r].hidden=1;
                score+=5;
            }  


            else if((ball_x-bricks[c][r].x)>=0 && (ball_x-bricks[c][r].x)<=(paddle_w + 12.5) && (ball_y-bricks[c][r].y+8.34)>=0 &&  (ball_y-bricks[c][r].y)<=brick_h+8.34) 
            {
                ball_dy= -ball_dy;
                bricks[c][r].hidden=1;
                score+=5;
            }
        }
    }
  }
}






