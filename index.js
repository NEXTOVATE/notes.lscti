function login() {
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;
  let msg = document.getElementById("msg");

  if (u === "lscti" && p === "1234") {
    window.location.href = "question-paper.html";
  } else {
    msg.innerHTML = "❌ Invalid username or password";
    msg.style.color = "red";
  }
}