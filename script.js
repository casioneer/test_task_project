document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("actionButton");
  if (!button) return;

  button.addEventListener("click", () => {
    console.log("JS работает ✅");
    alert("JS подключён и работает!");
  });
});

