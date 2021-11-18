function openLogin() {
    location.href = ("http://desktop-0cbjv6o:3000/login");
}

function openRegister(){
    location.href = ("http://desktop-0cbjv6o:3000/register");
}

function logout(){
    location.href = ("http://desktop-0cbjv6o:3000/logout");
}
function saveImage(){
  alert("p5 implementation of graph save")
}

function openNav() {
  document.getElementById("mySidebar").style.width = "500px";
  document.getElementById("main").style.marginLeft = "500px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}


function clearScreen() {
    document.getElementById("result").value = "";
   }
   

   function display(value) {
    document.getElementById("result").value += value;
   }

   function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
   }