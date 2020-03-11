document.getElementById("one").onclick=display1
document.getElementById("two").onclick=display2
document.getElementById("three").onclick=display3
document.getElementById("four").onclick=display4
document.getElementById("five").onclick=display5
document.getElementById("six").onclick=display6
document.getElementById("seven").onclick=display7
document.getElementById("eight").onclick=display8
document.getElementById("nine").onclick=display9
document.getElementById("ten").onclick=display10
document.getElementById("eleven").onclick=display11
document.getElementById("twelve").onclick=display12
document.getElementById("thirteen").onclick=display13
document.getElementById("fourteen").onclick=display14
document.getElementById("fifteen").onclick=display15
document.getElementById("sixteen").onclick=display16
document.getElementById("seventeen").onclick=display17
document.getElementById("eighteen").onclick=display18
document.getElementById("nineteen").onclick=display19
document.getElementById("twenty").onclick=display20
function display1()
{
    document.getElementById("ev").value = " "
}
function display2()
{
   document.getElementById("ev").value+="-"
   
}
function display3()
{
   document.getElementById("ev").value+="%"
   
}
function display4()
{
   var value = document.getElementById("ev").value;
    document.getElementById("ev").value = value.substr(0, value.length - 1);
   
}


function display5()
{
   document.getElementById("ev").value+="7"
   
}
function display6()
{
    document.getElementById("ev").value+="8"
   
}
function display7()
{
   document.getElementById("ev").value+="9"
}
function display8()
{
   document.getElementById("ev").value+="/"
}
function display9()
{
 document.getElementById("ev").value+="4"
   
}
function display10()
{
   document.getElementById("ev").value+="5"
   
}
function display11()
{
   document.getElementById("ev").value+="6"
   
}
function display12()
{
  document.getElementById("ev").value+="*"
   
}
function display13()
{
   document.getElementById("ev").value+="1"
   
}
function display14()
{
  document.getElementById("ev").value+="2"
   
}
function display15()
{
   document.getElementById("ev").value+="3"
   
}
function display16()
{
   document.getElementById("ev").value+="-"
   
}
function display17()
{
  document.getElementById("ev").value+="0"
   
}
function display18()
{
   document.getElementById("ev").value+="."
   
}
function display20()
{
  document.getElementById("ev").value+="+"
   
}
function display19()
{
   let x = document.getElementById("ev").value
   let y = eval(x)
   document.getElementById("ev").value = y
   
}

