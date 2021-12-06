"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculater = require("./calc");

function setup() { 
	let c =createCanvas(400, 400);
	strokeWeight(1);
	background(220)
	  
	  
  } 
  exports.draw=void 0;
  function draw(arrx, arry,gline,scale,color) { 	
	  if(gline==true){
	for(var i=0; i<height; i+=scale){
		line(0, i, width, i);
	}
	for(var j=0; j<height; j+=scale){
		line(j, 0, j, height);
	}
}
	for(i = 0;i < arrx.length;i++){
		noFill();
		strokeWeight(1);
		stroke(color)
		beginShape();
		for(j=0; j<arrx[i].length;j++){
			curveVertex(arrx[i][j],arry[i][j]);

		}
		endShape();
		  
	}
	
	//saveCanvas(c,'mycanvas', 'jpg')
	//saveCanvas(c,'mycanvas', 'png')
  }  
  exports.draw=draw;