let output = document.getElementById('display')

function display(val){
    output.value += val;
}

function calculate(){
    output.value = eval(output.value)
}
function clr(){
    output.value = '';
}

function sin()
 {
     output.value=Math.sin(output.value);
 }

function cos()
{
     output.value=Math.cos(output.value);
}

function tan()
{
    output.value=Math.tan(output.value);
}

function pow()
{
    output.value=Math.pow(output.value,2);
}

function sqrt()
{
    output.value=Math.sqrt(output.value,2);
}

function log()
{
     output.value=Math.log(output.value);
}

function pi()
{
    output.value= 3.14159265359;
}

function e()
{
    output.value=2.71828182846;
}

function del()
{
    output.value=output.value.substr(0,output.value.length-1);
}