//mix calculation Working

function MixObj(name, basicSal, currDa, daInc, salInc,incSal,totalDa,totalSal) {
  this.name = name;
  this.basicSal = basicSal;
  this.currDa = currDa;
  this.daInc = daInc;
  this.salInc = salInc;
  this.incSal = incSal;
  this.totalDA = totalDa;
  this.totalSal = totalSal;

}
var arraymix = [];

document.querySelector("#addnxtbtnmix").addEventListener("click",function ()
{
  let name = document.getElementById("employeeName").value;
  let basicSal = document.getElementById("basicSalary").value;
  let currDa = document.getElementById("currentDA").value;
  let daInc = document.getElementById("DAincrement").value;
  let salInc = document.getElementById("Salincrement").value;

  if (name.length == 0 || basicSal.length == 0 || currDa.length == 0 || daInc.length == 0 || salInc.length == 0) {
    alert("Please fill up all details");
  }
  else {
     //calculation part:-
     let incSal = eval(eval(basicSal)*eval(salInc))/100;
     let salainc = eval(eval(basicSal)+eval(incSal));
     let tempDA = eval(currDa) + eval(daInc);
     let totalDA = eval(eval(tempDA)*eval(salainc))/100;
     let totalSal = eval(eval(salainc)+eval(totalDA));

    var temp = new MixObj(name, basicSal, currDa, daInc, salInc,incSal,totalDA,totalSal);
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
  let c6 = document.createElement('td');
  let c7 = document.createElement('td');
  let c8 = document.createElement('td');

  let lastIndex = arraymix.length - 1;

  // Insert data to cells
  c1.innerText = arraymix[lastIndex].name;
  c2.innerText = arraymix[lastIndex].basicSal;
  c3.innerText = arraymix[lastIndex].currDa;
  c4.innerText = arraymix[lastIndex].daInc;
  c5.innerText = arraymix[lastIndex].salInc;
  c6.innerText = arraymix[lastIndex].incSal;
  c7.innerText = arraymix[lastIndex].totalDA;
  c8.innerText = arraymix[lastIndex].totalSal;

  // Append cells to row
  row.appendChild(c1);
  row.appendChild(c2);
  row.appendChild(c3);
  row.appendChild(c4);
  row.appendChild(c5);
  row.appendChild(c6);
  row.appendChild(c7);
  row.appendChild(c8);
  // Append row to table body
  table.appendChild(row)
}


function viewResultFunc() {
  alert("Please click save following ok");
    var divContents = document.getElementById("ResultToBeDownloaded").innerHTML;
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html><head><title>EmployeeReport'+new Date().toLocaleString()+'</title>');
    a.document.write('<style>body{text-align: center;}h1{padding: 1.5em 0 1.5em 0;}</style></head>');
    a.document.write('<body > <h1>Employee Report <br>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}




// common in all files

document.querySelector("#resetbtn").addEventListener("click", function() {
  // alert("Hello");
  var obj = document.getElementsByTagName("input");
  for (var i = 0; i < obj.length; i++) {
    obj[i].value = "";
  }

});
