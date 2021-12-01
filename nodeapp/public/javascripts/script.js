function openLogin() {
    location.href = ("http://desktop-0cbjv6o:3000/login");
}

function openRegister(){
    location.href = ("http://desktop-0cbjv6o:3000/register");
}

function openCalc(){
  location.href = ("http://desktop-0cbjv6o:3000/loadcalc");
}

function logout(){
    location.href = ("http://desktop-0cbjv6o:3000/logout");
}
function returnHome(){
  location.href = ("http://desktop-0cbjv6o:3000/");
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

   function highlight_row() {
    var table = document.getElementById('display-table');
    var cells = table.getElementsByTagName('td');

    for (var i = 0; i < cells.length; i++) {
        // Take each cell
        var cell = cells[i];
        // do something on onclick event for cell
        cell.onclick = function () {
            // Get the row id where the cell exists
            var rowId = this.parentNode.rowIndex;

            var rowsNotSelected = table.getElementsByTagName('tr');
            for (var row = 0; row < rowsNotSelected.length; row++) {
                rowsNotSelected[row].style.backgroundColor = "";
                rowsNotSelected[row].classList.remove('selected');
            }
            var rowSelected = table.getElementsByTagName('tr')[rowId];
            rowSelected.style.backgroundColor = "#64278f";
            rowSelected.className += " selected";

            calculation = rowSelected.cells[1].innerHTML;
            graphfunction = rowSelected.cells[2].innerHTML;

            localStorage.setItem("calc", rowSelected.cells[1].innerHTML);
            localStorage.setItem("graph",rowSelected.cells[2].innerHTML);
        }
    }
}
function importData(){
console.log("Calculation: " + localStorage.getItem("calc")+" Graph Function: "+localStorage.getItem("graph"));
}