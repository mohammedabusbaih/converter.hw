document.getElementById("convertBtn").addEventListener("click", function() {
  let km = document.getElementById("kmInput").value;
  let result = document.getElementById("result");

  if (km === "" || isNaN(km)) {
    result.textContent = "Please enter a valid number!";
    result.style.color = "red";
  } else {
    let miles = km * 0.621371;
    result.textContent = `${km} kilometers = ${miles.toFixed(2)} miles`;
    result.style.color = "green";
  }
});

document.getElementById("clearBtn").addEventListener("click", function() {
  document.getElementById("kmInput").value = "";
  document.getElementById("result").textContent = "";
});
