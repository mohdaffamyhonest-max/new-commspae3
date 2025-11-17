
function validateForm() {
  let name = document.getElementById("name-input").value.trim();
  let phone = document.getElementById("phone-input").value.trim();
  let email = document.getElementById("email-input").value.trim();
  let message = document.getElementById("message-input").value.trim();

  if (name === "" || phone === "" || email === "" || message === "") {
    alert("Please fill all fields.");
    return;
  }

  // KIRIM KE INFO BOX
  document.getElementById("info-name").textContent = "Name : " + name;
  document.getElementById("info-phone").textContent = "Phone : " + phone;
  document.getElementById("info-email").textContent = "Email : " + email;
  document.getElementById("info-message").textContent = "Message : " + message;

  document.getElementById("result-box").style.display = "block";

  alert("Message sent successfully by " + name);
}

