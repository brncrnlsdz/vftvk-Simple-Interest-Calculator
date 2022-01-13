function compute()
{
    var principal =Number( document.getElementById("principal").value);
    if(principal<=0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return ;
    }
       
    var rate=Number(document.getElementById("rate").value);
    var year=Number(document.getElementById("Years").value);
    var interest=principal*rate*year/100.0;
   
    var noy=2021+year;
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,<br>at an interest rate of <mark>"+rate+"</mark>.<br>You will receive an amount of <mark>"+interest+"</mark>,<br>in the year <mark>"+noy+"</mark><br/>";
}

function calrange(){
    var current=Number(document.getElementById("rate").value);
    document.getElementById("disp").innerHTML=current.toString()+"%";
    
}