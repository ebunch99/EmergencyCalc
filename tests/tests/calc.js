"use strict"; 

Object.defineProperty(exports, "__esModule", { value: true });

  const lexer = (function() {
    function tokenize(input) {
      const chars = input.split("");
      const tokens = [];
  
      while (chars.length) {
    
        readWhile(chars, isWhitespace);
  
        if (!chars.length) {
          break;
        }
  
        const ch = chars.shift();
  
        if (isNum(ch)) {
          tokens.push({ type: "NUM", val: ch + readWhile(chars, isNum) });
        } else if (isOp(ch)) {
          tokens.push({ type: "OP", val: ch });
        }
        else if (isvar(ch)) {
          tokens.push({ type: "NUM", val: ch });
        }
        else if (islet(ch)) {
          tokens.push({ type: "OP", val: ch + readWhile(chars, islet) });
        }
      }
  
      return infixToReversePolish(tokens);
    }
  
    function readWhile(chars, predicate) {
      let str = "";
  
      while (chars.length && predicate(chars[0])) {
        str += chars.shift();
      }
  
      return str;
    }
  
    function isWhitespace(ch) {
      return /[\n\t\s]/.test(ch);
    }
  
    function isNum(ch) {
      return /[0-9.]/.test(ch);
    }

    function islet(ch) {
      return /[a-z]/.test(ch);
    }
    function isvar(ch) {
      return /[xπe]/.test(ch);
    }
  
    function isOp(ch) {
      return /[√()\-+\/*^%]/.test(ch);
    }
  
    return { tokenize };
  })();

  function infixToReversePolish(tokens) {
    const queue = [];
    const stack = [];
    const precedence = {
      "(": 10,
      "+": 20, "-": 20,
      "/": 30, "*": 30, "%": 30,
      "^": 40, 
      "sqrt": 50, "tan": 50, "cos":50, "sin": 50,  "ln": 50, "log": 50, "√":50,
      
    };
  
    while (tokens.length) {
      const token = tokens.shift();
      const tkPrec = precedence[token.val] || 0;
      let stPrec = stack.length ? precedence[stack[stack.length - 1].val] : 0;
  
      if (token.type == "OP" && token.val == ")") {
        let op = null;
  
        while ((op = stack.pop()).val != "(") {
          queue.push(op);
        }
      } else if (token.type == "NUM") {
        queue.push(token);
      } else if (token.type == "OP" && (!stack.length || token.val == "(" || tkPrec > stPrec)) {
        stack.push(token);
      } else {
        while (tkPrec <= stPrec) {
          queue.push(stack.pop());
          stPrec = stack.length ? precedence[stack[stack.length - 1].val] : 0;
        }
  
        stack.push(token);
      }
    }
  
    while (stack.length) {
      queue.push(stack.pop());
    }
  
    return queue;
  }
  
  
  function evaluate(tokens) {
    const stack = [];
    const rhs=0;
    const lhs=0;
  
    while (tokens.length) {
      const token = tokens.shift();
      if (token.type == "NUM" && token.val == "π") {
       
        stack.push(Math.PI);
        continue;
      }
      else if (token.type == "NUM" && token.val == "e") {
       
        stack.push(Math.E);
        continue;
      }
  
      else if (token.type == "NUM") {
       
        stack.push(parseFloat(token.val));
        continue;
      }
      if(token.val =="tan"|| token.val == "cos"||token.val == "sin"|| token.val == "sqrt" ||token.val == "√" ||token.val == "ln"||token.val == "log"){
        rhs = stack.pop;
      }
      else {
        rhs = stack.pop(); 
        lhs = stack.pop();
      }
  
      switch (token.val) {
        case "+": stack.push(lhs + rhs); break;
        case "-": stack.push(lhs - rhs); break;
        case "*": stack.push(lhs * rhs); break;
        case "/": stack.push(lhs / rhs); break;
        case "%": stack.push(lhs % rhs); break;
        case "^": stack.push(Math.pow(lhs, rhs)); break;
        case "tan": stack.push(Math.tan(rhs * Math.PI / 180)); break;
        case "sin": stack.push(Math.sin(rhs * Math.PI / 180)); break;
        case "cos": stack.push(Math.cos(rhs * Math.PI / 180)); break;
        case "sqrt": stack.push(Math.sqrt(rhs)); break;
        case "√": stack.push(Math.sqrt(rhs)); break;
        case "ln": stack.push(Math.log(rhs)); break;
        case "log": stack.push(Math.log(rhs)/Math.log(10)); break;
      }
    }
  
    return stack.pop();
  }
  
  exports.calculate = void 0;
  function calculate(expr){
    const tokens = lexer.tokenize(expr);
    const answer = evaluate(tokens);
    return answer;
  }
  exports.calculate = calculate;

  function evaluateg(tokens, v) {
    const stack = [];
    const rhs=0;
    const lhs=0;
  
    while (tokens.length) {
      const token = tokens.shift();
      if (token.type == "NUM" && token.val == "π") {
       
        stack.push(Math.PI);
        continue;
      }
      else if (token.type == "NUM" && token.val == "e") {
       
        stack.push(Math.E);
        continue;
      }
      else if (token.type == "NUM" && token.val == "x") {
       
        stack.push(v);
        continue;
      }
  
      else if (token.type == "NUM") {
       
        stack.push(parseFloat(token.val));
        continue;
      }
      if(token.val =="tan"|| token.val == "cos"||token.val == "sin"|| token.val == "sqrt" ||token.val == "√" ||token.val == "ln"||token.val == "log"){
        rhs = stack.pop;
      }
      else {
        rhs = stack.pop(); 
        lhs = stack.pop();
      }
  
      switch (token.val) {
        case "+": stack.push(lhs + rhs); break;
        case "-": stack.push(lhs - rhs); break;
        case "*": stack.push(lhs * rhs); break;
        case "/": stack.push(lhs / rhs); break;
        case "%": stack.push(lhs % rhs); break;
        case "^": stack.push(Math.pow(lhs, rhs)); break;
        case "tan": stack.push(Math.tan(rhs * Math.PI / 180)); break;
        case "sin": stack.push(Math.sin(rhs * Math.PI / 180)); break;
        case "cos": stack.push(Math.cos(rhs * Math.PI / 180)); break;
        case "sqrt": stack.push(Math.sqrt(rhs)); break;
        case "√": stack.push(Math.sqrt(rhs)); break;
        case "ln": stack.push(Math.log(rhs)); break;
        case "log": stack.push(Math.log(rhs)/Math.log(10)); break;
      }
    }
  
    return stack.pop();
  }
  exports.calculateg = void 0;
  function calculateg(expr, v){
    const tokens = lexer.tokenize(expr);
    const answer = evaluateg(tokens,v); 
    return answer;
  }
  exports.calculateg = calculateg
  exports.iscale=void 0;
  function iscale(scale){
    scale= scale +2;
    return scale;

  }
  exports.iscale=iscale;
  
  exports.dscale=void 0;
  function dscale(scale){
    scale= scale -2;
    return scale;

  }
  exports.dscale=dscale;
  exports.graphpoints=void 0;
  function graphpoints(eq,scale){
  let x=0;
	let y=0; 
	let arrx=[];
	let arry=[];
  let values= [];
  let limit = scale/2;
  let i = -limit;
  let gscale= 400/scale;
	for(i;i <= scale; i++){
	  x=i;
	  y= calculateg(eq, i);
	  x= 200 + x*gscale;
	  y= 200 + -y*gscale;
	  arrx.push(x);
	  arry.push(y);
	}
  values.push(arrx)
  values.push(arry)
  return values;
  }
  exports.graphpoints=graphpoints;