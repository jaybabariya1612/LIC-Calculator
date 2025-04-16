let premium_amount = document.getElementById("premium-amount");
let premium_amount_total = document.getElementById("premium-amount-total");
let premium_total_amount = document.getElementById("premium-total-amount");


let premium_time = document.getElementById("Premium-time");
let premium_amount_output = document.getElementById("premium-amount-output");
let total_bouns = document.getElementById("total-bouns");
let Premimum_paid = document.getElementById("Premimum-paid");
let Maturity_amount = document.getElementById("Maturity-amount");
let year_loop = document.getElementById("year-loop");


function calculate(event) {
  event.preventDefault();
  let sum_ensured = parseInt($("#sum-ensured").val()) || 0;
  let policy_term = parseInt($("#policy-term").val()) || 0;
  let bouns_rate = parseInt($("#bouns-rate").val()) || 0;
  let premium_amount = parseInt($("#premium-amount").val()) || 0;
  let loops = Math.round(sum_ensured / policy_term);

  let payment_mode = $("#Payment-mode").val();

  let total_bouns_value = policy_term * bouns_rate;
  total_bouns.innerText = total_bouns_value;
  Maturity_amount.innerText = sum_ensured + total_bouns_value;
  Premimum_paid.innerText = sum_ensured;

  if (payment_mode === "Monthly") {
    premium_time.innerText = "Monthly Premium:";
    premium_amount_output.innerText =
      Math.round(sum_ensured / policy_term / 12) || 0;
    premium_amount_total = premium_amount;
    premium_total_amount = premium_amount_total * policy_term;
    document.getElementById("premium-total-amount").innerHTML =
      premium_total_amount;
  } 
  
  else if (payment_mode === "Half-Year") {
    premium_time.innerText = "Half-Year Premium:";
    premium_amount_output.innerText =
    Math.round(sum_ensured / policy_term / 2) || 0;
    premium_amount_total = premium_amount * 12/2;
    premium_total_amount = premium_amount_total * policy_term;
    document.getElementById("premium-total-amount").innerHTML =
      premium_total_amount;
  
  } 
  
  else if (payment_mode === "Yearly") {
    premium_time.innerText = "Yearly Premium:";
    premium_amount_output.innerText =
      Math.round(sum_ensured / policy_term) || 0;
    premium_amount_total = premium_amount * 12;
    premium_total_amount = premium_amount_total * policy_term;
    document.getElementById("premium-total-amount").innerHTML =
      premium_total_amount;
    }
    $("#InnerLoop").html("");

  for (let i = 1; i <= policy_term; i++) {
    $("#InnerLoop").append(`
      <tr>
        <td>${i}</td>
        <td>${loops}</td>
        <td>${bouns_rate}</td>
        <td>${premium_total_amount}</td>
      </tr>
    `);
  }
}
