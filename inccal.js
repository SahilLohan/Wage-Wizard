// inccal ka behaviour

function NetDaobj(iname,isalary,inc)
{
  this.iname=iname;
  this.isalary=isalary;
  this.inc=inc;
}
var arrayinc=[];

document.querySelector("#addnxtbtninc").addEventListener("click",function ()
{
    let iname=document.querySelector("#employeeNameinc").value;
    let isalary=document.querySelector("#basicSalaryinc").value;
    let inc=document.querySelector("#salinc").value;
    console.log(iname + " " + isalary + " " + inc);
    if(iname.length==0 || isalary.length==0 || inc.length==0)
    {
      alert("Please fill up all details");
    }
    else{
      var temp=new NetDaobj(iname,isalary,inc);

      arrayinc.push(temp);

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

let lastIndex=arrayinc.length-1;

// Insert data to cells
c1.innerText = arrayinc[lastIndex].iname;
c2.innerText = arrayinc[lastIndex].isalary;
c3.innerText = arrayinc[lastIndex].inc;

// Append cells to row
row.appendChild(c1);
row.appendChild(c2);
row.appendChild(c3);

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
