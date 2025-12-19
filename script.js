const input1 = document.getElementById("job-costs");
const input2 = document.getElementById("overhead");
const input3 = document.getElementById("net-profit");
const resultField = document.getElementById("result");
const calculateBtn = document.getElementById("calculateBtn");

// 🔴 PUT YOUR FORMULA HERE
function computeResult(a, b, c) {
  // Example formula (replace this with your own):
  // return (a + b) * c;

  // 👉 Replace the line below with your formula using a, b, c
  return (a + b) / (1 - (c / 100));
}

function calculate() {
  const a = parseFloat(input1.value);
  const b = parseFloat(input2.value);
  const c = parseFloat(input3.value);

  // Basic validation
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    resultField.value = "Please fill all inputs";
    return;
  }

  const result = computeResult(a, b, c);
  resultField.value = result;
}

calculateBtn.addEventListener("click", calculate);

// Optional: press Enter anywhere to calculate
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    calculate();
  }
});
