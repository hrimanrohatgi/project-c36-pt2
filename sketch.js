var pet;
var database,position;

function setup() {
	createCanvas(800, 700);
  database = firebase.database();  
  pet = createSprite(250,250,10,10);

var  petposref = database.ref("pet/position");
ballposref.on("value",redpetpos,showerror)
}

function draw() {  
  if(keyDown(UP_ARROW)){
    changePosition(0,-1);
}

  drawSprites();

}

function changePosition(x,y){
ball.x=ball.x;
ball.y=ball.y;
database.ref("ball/position").set({
  "x":position.x + x,
  "y": position.y + y
})
}

function readpetpos(data){
  position = data.val();
  ball.x = position.x;
  ball.y = position.y;
}

function showerror(){
  console.log("failed to hit database");
}