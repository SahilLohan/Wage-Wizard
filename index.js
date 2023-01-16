function NetDaobj(name,salary,da,dainc)
{
  this.name=name;
  this.salary=salary;
  this.da=da;
  this.dainc=dainc;
}
var arrayda=[];
document.querySelector("#addnxtbtnda").addEventListener("click",function ()
{
    var temp=new NetDaobj(document.getElementById("employeeNameda").value,document.getElementById("basicSalaryda").value,document.getElementById("currentDAda").value,document.getElementById("DAincrementda").value);
    arrayda.push(temp);

    for(var i=0;i<arrayda.length;i++)
    {
      alert(arrayda[i].name);
    }
    addRowDa();
    document.getElementById("resetbtn").click();


});

function addRowDa() {
// Get the table body element in which you want to add row
let table = document.getElementById("daTable");

// Create row element
let row = document.createElement("tr")

// Create cells
let c1 = document.createElement("td")
let c2 = document.createElement("td")
let c3 = document.createElement("td")
let c4 = document.createElement("td")

let lastIndex=arrayda.length-1;

// Insert data to cells
c1.innerText = arrayda[lastIndex].name;
c2.innerText = arrayda[lastIndex].salary;
c3.innerText = arrayda[lastIndex].da;
c4.innerText = arrayda[lastIndex].dainc;

// Append cells to row
row.appendChild(c1);
row.appendChild(c2);
row.appendChild(c3);
row.appendChild(c4);

// Append row to table body
table.appendChild(row)
}


// function SalIncObj(name,salary,inc)
// {
//   this.name=name;
//   this.salary=salary;
//   this.inc=inc;
// }
// var arrayinc;
//
// function NetDaobj(name,salary,da,dainc)
// {
//   this.name=name;
//   this.salary=salary;
//   this.da=da;
//   this.dainc=dainc;
// }
// var arrayboth;






document.querySelector("resetbtn").addEventListener("click",resetbtnfunc);

function resetbtnfunc(){
  // alert("Hello");
  var obj=document.getElementsByTagName("input");
  for(var i=0;i<obj.length;i++)
  {
    obj[i].value="";
  }

}
