// Signup
document.getElementById("signupForm").addEventListener("submit", function(e){
  e.preventDefault();

  let username = document.getElementById("signupUsername").value.trim();
  let password = document.getElementById("signupPassword").value.trim();

  if(username && password){
    // ambil data lama
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // cek apakah username sudah ada
    let exist = users.find(user => user.username === username);
    if(exist){
      alert("Username sudah terdaftar!");
    } else {
      users.push({username, password});
      localStorage.setItem("users", JSON.stringify(users));
      alert("Signup berhasil! Silakan login.");
    }
  }
});

// Login
document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();

  let username = document.getElementById("loginUsername").value.trim();
  let password = document.getElementById("loginPassword").value.trim();

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let validUser = users.find(user => user.username === username && user.password === password);

  if(validUser){
    alert("Login berhasil!");
    localStorage.setItem("loggedInUser", username);
    window.location.href = "home.html"; // redirect ke dashboard
  } else {
    alert("Username atau password salah!");
  }
});