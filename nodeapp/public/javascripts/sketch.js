function setup() { 
	let c =createCanvas(400, 400);
	strokeWeight(1);
	background(220)
	  for(var i=0; i<height; i+=20){
		  line(0, i, width, i);
	  }
	  for(var j=0; j<height; j+=20){
		  line(j, 0, j, height);
	  }
  } 
  
  function draw() { 
	
	
	noFill();
	let x=0;
	let y=0;
	let arrx=[];
	let arry=[];
	for(i =-10;i <= 10; i++){
	  x=i;
	  y=x*x;
	  x= 200 + x*20;
	  y= 200 + -y*20;
	  arrx.push(x);
	  arry.push(y);
	}
	strokeWeight(1);
	beginShape();
	for(i = 0;i < arrx.length;i++){
		  curveVertex(arrx[i],arry[i]);
	}
	endShape();
	//saveCanvas(c,'mycanvas', 'jpg')
	//saveCanvas(c,'mycanvas', 'png')
  }  
