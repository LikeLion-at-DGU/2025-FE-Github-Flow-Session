document.addEventListener("DOMContentLoaded", function () {
    const idInput = document.getElementById("username");
    const pwInput = document.getElementById("password");
    const loginBtn = document.querySelector(".login-button");

    function toggleLoginButton() {
      if (idInput.value.trim() && pwInput.value.trim()) {
        loginBtn.disabled = false;
        loginBtn.style.backgroundColor = "#5E0080";
        loginBtn.style.color = "#fff";
        loginBtn.style.cursor = "pointer";
        loginBtn.classList.add("active");
      } else {
        loginBtn.disabled = true;
        loginBtn.style.backgroundColor = "#e2e2e2";
        loginBtn.style.color = "#999";
        loginBtn.style.cursor = "default";
        loginBtn.classList.remove("active");
      }
    }

    idInput.addEventListener("input", toggleLoginButton);
    pwInput.addEventListener("input", toggleLoginButton);
  });