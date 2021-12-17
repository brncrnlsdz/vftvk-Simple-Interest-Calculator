function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var year = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    result_years = new Date().getFullYear() + Number(years);
    result_interest = Number((principal*years*rate)/100);
    document.getElementById('result_principal').innerHTML = principal;
    document.getElementById('result_rate').innerHTML = rate;
    document.getElementById('result_years').innerHTML = result_years;
    document.getElementById('result_interest').innerHTML = result_interest;
}
function check()
{
  var principal = document.getElementById('principal');

    if (principal.value <= 0){
        alert("Enter a positive number");
        principal.focus();
        return false;
    }
}
function listen ()
{
  document.querySelector('button').addEventListener('click', () => {
      check ();
      compute();
});
}
document.addEventListener('DOMContentLoaded', listen);
