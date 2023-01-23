// netda.html ki Working

function NetDaobj(name,salary,da,dainc,totalDA,totalSalary)
{
  this.name=name;
  this.salary=salary;
  this.da=da;
  this.dainc=dainc;
  this.totalDA=totalDA;
  this.totalSalary=totalSalary;
}
var array=[];
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
      let totalDA=eval(eval(salary)*eval(eval(da)+eval(dainc))/100);
      let totalSalary=eval(eval(salary)+eval(totalDA));
      var temp=new NetDaobj(name,salary,da,dainc,totalDA,totalSalary);

      array.push(temp);

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
let c5 = document.createElement("td")
let c6 = document.createElement("td")

let lastIndex=array.length-1;

// Insert data to cells
c1.innerText = array[lastIndex].name;
c2.innerText = array[lastIndex].salary;
c3.innerText = array[lastIndex].da;
c4.innerText = array[lastIndex].dainc;
c5.innerText = array[lastIndex].totalDA;
c6.innerText = array[lastIndex].totalSalary;


// Append cells to row
row.appendChild(c1);
row.appendChild(c2);
row.appendChild(c3);
row.appendChild(c4);
row.appendChild(c5);
row.appendChild(c6);



// Append row to table body
table.appendChild(row);
}



function viewResultFunc() {
  alert("Please click save following ok");
    var divContents = document.getElementById("ResultToBeDownloaded").innerHTML;
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html><head>');
    a.document.write('<style>body{text-align: center;}h1{padding: 1.5em 0 1.5em 0;}</style></head>');
    a.document.write('<body > <h1>Employee Report <br>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
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
