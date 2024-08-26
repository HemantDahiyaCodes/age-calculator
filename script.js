const year = document.querySelector('input[type="date"]');
const checkBtn = document.querySelector("button");
const result = document.getElementById("result");
let today = new Date();
year.setAttribute("min", "1900-01-01");
year.setAttribute("max", "2024-12-31");

const checkMyAge = () => {
  const age = year.value;
  const getAge = new Date(age);
  const birthYear = getAge.getFullYear();
  const currentYear = today.getFullYear();

  const checkAge = currentYear - birthYear;
  const para = document.createElement("p");
  // result.innerHTML = "";
  para.textContent = `Your age is ${checkAge}`;
  result.appendChild(para);

  if (age === "") {
    const para = document.createElement("p");
    result.innerHTML = "";
    para.textContent = `invalid age`;
    result.appendChild(para);
  }
  checkBtn.textContent = "Clear";
  checkBtn.addEventListener("click", clearOutput);
};

checkBtn.addEventListener("click", checkMyAge);

const clearOutput = () => {
  year.value = "";
  result.innerHTML = "";
  checkBtn.textContent = "Calculate Age";
  checkBtn.removeEventListener("click", clearOutput);
  checkBtn.addEventListener("click", checkMyAge);
};