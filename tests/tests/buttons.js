"use strict";
var calculator = require("./calc");
var sketcher= require("./sketch")
Object.defineProperty(exports, "__esModule", { value: true });
var xarr=[];
var yarr=[];
var carr=[];
var scale =20;
var gline=true;

exports.calcbutton = void 0;
function calcbutton(eq){
    var result =calculator.calculate(eq)
    return result;
}
exports.calcbutton = calcbutton;
exports.colorchoice = void 0;
function colorchoice(color){
    carr.push(color);
}
exports.colorchoice = colorchoice;
exports.dscale = void 0;
function dscale(){
    scale= scale -2;
    return scale;

  }
  exports.dscale = dscale;
  exports.iscale = void 0;
  function iscale(){
    scale= scale +2;
    return scale;

  }
  exports.iscale = iscale;

  exports.graph = void 0;
  function graph(eq){
      var temp =calculator.graphpoints(eq,scale);
      xarr.push(temp[0])
      yarr.push(temp[1])
      sketcher.draw(xarr,yarr,gline,scale,carr);
    }
  exports.graph = graph;

