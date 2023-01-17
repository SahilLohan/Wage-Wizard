//mix calculation Working

function MixObj(name, basicSal, currDa, daInc, salInc) {
  this.name = name;
  this.basicSal = basicSal;
  this.currDa = currDa;
  this.daInc = daInc;
  this.salInc = salInc;
}
var arraymix = [];
document.querySelector("#addnxbtnmix").addEventListener("click", function() {
  let name = document.getElementById("employeeName").value;
  let basicSal = document.getElementById("basicSalary").value;
  let currDa = document.getElementById("currentDA").value;
  let daInc = document.getElementById("DAincrement").value;
  let salInc = document.getElementById("Salincrement").value;

  if (name.length == 0 || basicSal.length == 0 || currDa.length == 0 || daInc.length == 0 || salInc.length == 0) {
    alert("Please fill up all details");
  } else {
    var temp = new MixObj(name, basicSal, currDa, daInc, salInc);
    arraymix.push(temp);
    addRowMix();
    document.getElementById("resetbtn").click();
  }
});


function addRowMix() {
  // Get the table body element in which you want to add row
  let table = document.getElementById("mixTable");

  // Create row element
  let row = document.createElement("tr");

  // Create cells
  let c1 = document.createElement("td");
  let c2 = document.createElement("td");
  let c3 = document.createElement("td");
  let c4 = document.createElement("td");
  let c5 = document.createElement('td');
  let lastIndex = arraymix.length - 1;

  // Insert data to cells
  c1.innerText = arraymix[lastIndex].name;
  c2.innerText = arraymix[lastIndex].basicSal;
  c3.innerText = arraymix[lastIndex].currDa;
  c4.innerText = arraymix[lastIndex].daInc;
  c5.innerText = arraymix[lastIndex].salInc;

  // Append cells to row
  row.appendChild(c1);
  row.appendChild(c2);
  row.appendChild(c3);
  row.appendChild(c4);
  row.appendChild(c5);

  // Append row to table body
  table.appendChild(row)
}


// common in all files

document.querySelector("#resetbtn").addEventListener("click", function() {
  // alert("Hello");
  var obj = document.getElementsByTagName("input");
  for (var i = 0; i < obj.length; i++) {
    obj[i].value = "";
  }

});
