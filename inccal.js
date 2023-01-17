// inccal ka behaviour

function Incobj(name,salary,inc,salInc,totalSal)
{
  this.name=name;
  this.salary=salary;
  this.inc=inc;
  this.salInc=salInc;
  this.totalSal=totalSal;
}
var array=[];

document.querySelector("#addnxtbtninc").addEventListener("click",function ()
{
    let name=document.querySelector("#employeeNameinc").value;
    let salary=document.querySelector("#basicSalaryinc").value;
    let inc=document.querySelector("#salinc").value;
    console.log(name + " " + salary + " " + inc);

      if(name.length==0 || salary.length==0 || inc.length==0)
      {
        alert("Please fill up all details");
      }
      else{
        let salInc = eval(eval(salary)*eval(inc))/100;
        let totalSal = eval(eval(salary)+eval(salInc));

        var temp=new Incobj(name,salary,inc,salInc,totalSal);

        array.push(temp);

        addRowInc();
        document.getElementById("resetbtn").click();

      }

});

function addRowInc() {
// Get the table body element in which you want to add row
let table = document.getElementById("incTable");

// Create row element
let row = document.createElement("tr")

// Create cells
let c1 = document.createElement("td")
let c2 = document.createElement("td")
let c3 = document.createElement("td")
let c4 = document.createElement("td")
let c5 = document.createElement("td")
let lastIndex=array.length-1;

// Insert data to cells
c1.innerText = array[lastIndex].name;
c2.innerText = array[lastIndex].salary;
c3.innerText = array[lastIndex].inc;
c4.innerText = array[lastIndex].salInc;
c5.innerText = array[lastIndex].totalSal;

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

document.querySelector("#resetbtn").addEventListener("click",function(){
  // alert("Hello");
  var obj=document.getElementsByTagName("input");
  for(var i=0;i<obj.length;i++)
  {
    obj[i].value="";
  }

});
