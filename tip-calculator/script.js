const butEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");
const tipAmount = document.getElementById("tip_amount")
const programmerToggle = document.getElementById("toggleProgrammer");


function calculateTotal() {
    const billValue = billInput.value;
    const tipValue = programmerToggle.checked ? 0 : tipInput.value;
    const tip = tipValue * billValue / 100;
    const totalValue = billValue * (1 + tipValue / 100);
    totalSpan.innerText = totalValue.toFixed(2);
    tipAmount.innerText = tip.toFixed(2);
}

butEl.addEventListener("click", calculateTotal);
programmerToggle.addEventListener("change", calculateTotal);