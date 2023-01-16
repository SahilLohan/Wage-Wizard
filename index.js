// netda.html ki Working

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
    let name=document.getElementById("employeeNameda").value;
    let salary=document.getElementById("basicSalaryda").value;
    let da=document.getElementById("currentDAda").value;
    let dainc=document.getElementById("DAincrementda").value;

    if(name.length==0 || salary.length==0 || da.length==0 || dainc.length==0)
    {
      alert("Please fill up all details");
    }
    else{
      var temp=new NetDaobj(name,salary,da,dainc);

      arrayda.push(temp);

      addRowDa();
      document.getElementById("resetbtn").click();

    }

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







// common in all files

document.querySelector("#resetbtn").addEventListener("click",function(){
  // alert("Hello");
  var obj=document.getElementsByTagName("input");
  for(var i=0;i<obj.length;i++)
  {
    obj[i].value="";
  }

});
