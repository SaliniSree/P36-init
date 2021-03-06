var dog,dogImg,dogImg1;

var database;

var food_value,databaseRef


function preload(){
   dogImg=loadImage("images/dogImg.png");
   dogImg1=loadImage("images/dogImg1.png");
  }


function setup() {
  database=firebase.database();
  createCanvas(500,500);

  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;

 databaseRef=database.ref('Food');
 databaseRef.on("value",readStock);
  textSize(20); 
}

function draw() {
  background(25,40,250);
 
  if(keyWentDown(UP_ARROW)){
    dog.addImage(dogImg1);
    writeStock(food_value);
  }
 

  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+food_value,170,400);
  textSize(12);
  text("Press UP_ARROW to feed Milk to the Puppy!",130,480,300,20);

  textSize(25);
  text("Feed my Pip !",180,50);
}

// read values from database
function readStock(data){
  food_value=data.val();
  //console.log(food_value)
}

//write values in database
function writeStock(x){
  // if(x<=0){
  //   x=0;
  // }else{
  //   x=x-1;
  // } 
database.ref('/') .update({
    Food: x-1
  })
}