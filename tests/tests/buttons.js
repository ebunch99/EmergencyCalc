"use strict";
var calculator = require("./calc");
var sketcher= require("./sketch")
Object.defineProperty(exports, "__esModule", { value: true });
var xarr=[];
var yarr=[];
var carr=[];
var scale =20;
var gline=true;

function calcbutton(eq){
    var result =calculator.calculate(eq)
    return result;
}
function colorchoice(color){
    carr.push(color);
}
function dscale(){
    scale= scale -2;
    return scale;

  }
 
  function iscale(){
    scale= scale +2;
    return scale;

  }

  function graph(eq){
      var temp =calculator.graphpoints(eq,scale);
      xarr.push(temp[0])
      yarr.push(temp[1])
      sketcher.draw(xarr,yarr,gline,scale,carr);
    }

