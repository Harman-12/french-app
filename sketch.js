const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup(){
    var canvas = createCanvas(720,1280);
    engine = Engine.create();
    world = engine.world;

    

}

function draw(){
    background(162, 233, 255);
    Engine.update(engine);
    
}
